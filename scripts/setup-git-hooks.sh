#!/bin/sh
# Run once per clone from repo root: sh scripts/setup-git-hooks.sh
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit
echo "core.hooksPath=.githooks — pre-commit will run on every git commit (when blog paths are staged)."
