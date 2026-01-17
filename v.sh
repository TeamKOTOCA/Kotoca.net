#!/bin/bash

# --- 設置・インストール処理 ---
INSTALL_PATH="/usr/local/bin/v_logic"
BASHRC="$HOME/.bashrc"

# 1. ロジック本体をシステム領域に配置
if [ "$(realpath "$BASH_SOURCE")" != "$INSTALL_PATH" ]; then
    echo "システム領域 ($INSTALL_PATH) にコマンド本体を設置します..."
    sudo cp "$(realpath "$BASH_SOURCE")" "$INSTALL_PATH"
    sudo chmod +x "$INSTALL_PATH"

    # 2. .bashrc にエイリアスを追記 (source v で動くようにする)
    if ! grep -q "alias v='source $INSTALL_PATH'" "$BASHRC"; then
        echo "alias v='source $INSTALL_PATH'" >> "$BASHRC"
        echo ".bashrc にエイリアス 'v' を登録しました。"
    fi

    echo "--------------------------------------------------"
    echo "セットアップ完了！"
    echo "今すぐ使うには: source ~/.bashrc"
    echo "次回の起動から: v と打つだけで使えます。"
    echo "--------------------------------------------------"
    return
fi

# --- メイン処理（ここからは v として動作） ---
BLUE='\033[0;34m'
NC='\033[0m'
BOLD='\033[1m'

# ディレクトリ取得（.. を含める）
dirs=( ".." $(ls -d */ 2>/dev/null | sed 's/\/$//') )

echo -e "${BOLD}Current: $(pwd)${NC}"
echo "--------------------------"
for i in "${!dirs[@]}"; do
    printf "${BLUE}%2d)${NC} %s\n" "$i" "${dirs[$i]}"
done
echo "--------------------------"

read -p "Select [Number/q]: " choice
[[ "$choice" == "q" ]] && return

if [[ "$choice" =~ ^[0-9]+$ ]] && [ "$choice" -lt "${#dirs[@]}" ]; then
    cd "${dirs[$choice]}"
    # 移動後に中身を表示（融合版）
    echo -e "\n${BOLD}Moved to: $(pwd)${NC}"
    ls --color=auto -F
else
    echo "Invalid input."
fi
