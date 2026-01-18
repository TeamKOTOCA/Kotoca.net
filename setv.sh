#!/bin/bash
# install.sh

set -euo pipefail

BASE="$HOME/.local/libexec/d"
LOGIC="$BASE/logic.sh"
BASHRC="$HOME/.bashrc"

echo "1. ディレクトリ作成"
mkdir -p "$BASE"

echo "2. ロジック配置"
curl -fsSL "https://kotoca.net/sh/v.sh" -o "$LOGIC"
chmod 700 "$LOGIC"

echo "3. .bashrc に関数登録"
touch "$BASHRC"

FUNC_DEF='
d() {
  source "$HOME/.local/libexec/d/logic.sh"
}
'

if ! grep -Fxq "d() {" "$BASHRC"; then
  echo "$FUNC_DEF" >> "$BASHRC"
fi

echo "------------------------------------"
echo "インストール完了"
echo "反映するには以下を実行:"
echo "  source ~/.bashrc"
echo "------------------------------------"