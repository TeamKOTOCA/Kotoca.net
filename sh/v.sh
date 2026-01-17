#!/bin/bash

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

read -p "Select [Number/q]: " choice
[[ "$choice" == "q" ]] && return

if [[ "$choice" =~ ^[0-9]+$ ]] && [ "$choice" -lt "${#dirs[@]}" ]; then
    cd "${dirs[$choice]}"
    echo -e "\n${BOLD}Moved to: $(pwd)${NC}"
    ls --color=auto -F
else
    echo "Invalid input."
fi

