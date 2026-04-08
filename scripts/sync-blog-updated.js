#!/usr/bin/env node
/**
 * Sets each post's "updated" field in blog/posts.json from the last Git commit
 * that touched blog/posts/<fileName>.
 *
 * Usage (from repo root): node scripts/sync-blog-updated.js
 *
 * Hooks: sh scripts/setup-git-hooks.sh  (once per clone)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.join(__dirname, '..');
const postsPath = path.join(root, 'blog', 'posts.json');

let posts;
try {
    posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
} catch (e) {
    console.error('Could not read blog/posts.json:', e.message);
    process.exit(1);
}

for (const post of posts) {
    if (!post.fileName) continue;
    const rel = path.join('blog', 'posts', post.fileName).replace(/\\/g, '/');
    try {
        const out = execSync(`git log -1 --format=%cs -- "${rel}"`, {
            cwd: root,
            encoding: 'utf8',
            stdio: ['ignore', 'pipe', 'pipe'],
        }).trim();
        if (out) {
            post.updated = out;
        }
    } catch (_) {
        /* not in git yet or path unknown — leave updated unchanged or omit */
    }
}

fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2) + '\n');
console.log('Updated blog/posts.json "updated" fields from git history.');
