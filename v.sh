#!/bin/bash

# 設置・インストール
INSTALL_PATH="/usr/local/bin/v"
SELF_PATH=$(realpath "$BASH_SOURCE")

if [ "$SELF_PATH" != "$INSTALL_PATH" ]; then
    echo "システム領域 ($INSTALL_PATH) にコマンドを設置します..."
    echo "パスワードを入力してください:"
    
    # 自分自身を /usr/local/bin/v としてコピー
    sudo cp "$SELF_PATH" "$INSTALL_PATH"
    sudo chmod +x "$INSTALL_PATH"
    
    echo "設置完了！今後はどのディレクトリからでも 'source v' で起動できます。"
    echo "この元ファイルは削除しても大丈夫です。"
    return
fi

# メイン処理（ここからは /usr/local/bin/v として動作
BLUE='\033[0;34m'
NC='\033[0m'
BOLD='\033[1m'

# ディレクトリ取得
dirs=( ".." $(ls -d */ 2>/dev/null | sed 's/\/$//') )

echo -e "${BOLD}Current: $(pwd)${NC}"
echo "--------------------------"
for i in "${!dirs[@]}"; do
    printf "${BLUE}%2d)${NC} %s\n" "$i" "${dirs[$i]}"
done
echo "--------------------------"

read -p "Number or 'q': " choice
[[ "$choice" == "q" ]] && return

if [[ "$choice" =~ ^[0-9]+$ ]] && [ "$choice" -lt "${#dirs[@]}" ]; then
    cd "${dirs[$choice]}"
    # 融合版なので中身も出す
    ls --color=auto -F
else
    echo "Invalid input."
fi
