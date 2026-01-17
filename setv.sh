#!/bin/bash
# --- a.sh: インストール用スクリプト ---

# 実行には sudo が必要
if [ "$EUID" -ne 0 ]; then
  echo "エラー: sudo をつけて実行してください (例: sudo bash a.sh)"
  exit 1
fi

LOGIC_URL="https://kotoca.net/sh/v.sh"
INSTALL_PATH="/usr/local/bin/v_logic"
# 実際のユーザーのホームディレクトリを取得
USER_HOME=$(eval echo "~$SUDO_USER")
BASHRC="$USER_HOME/.bashrc"

echo "1. ロジック本体をダウンロード中..."
curl -sL "$LOGIC_URL" -o "$INSTALL_PATH"
chmod +x "$INSTALL_PATH"

echo "2. エイリアスを $BASHRC に登録中..."
# 重複チェックをしてから追記
if ! grep -q "alias v='source $INSTALL_PATH'" "$BASHRC"; then
    echo "alias v='source $INSTALL_PATH'" >> "$BASHRC"
fi

echo "--------------------------------------------------"
echo "インストール完了！"
echo "設定を反映させるために以下のコマンドを打ってください："
echo "source ~/.bashrc"
echo "--------------------------------------------------"

