#!/bin/bash
# ~/.local/libexec/d/logic.sh

_is_sourced() { [[ "${BASH_SOURCE[0]}" != "$0" ]]; }

BLUE=$(tput setaf 4 2>/dev/null || echo "")
BOLD=$(tput bold 2>/dev/null || echo "")
NC=$(tput sgr0 2>/dev/null || echo "")

while true; do
  dirs=("..")

  while IFS= read -r -d '' d; do
    dirs+=("$(basename "$d")")
  done < <(find . -maxdepth 1 -mindepth 1 -type d -print0 2>/dev/null)

  echo -e "${BOLD}Current:${NC} $(pwd)"
  echo "--------------------------"
  for i in "${!dirs[@]}"; do
    printf "${BLUE}%2d)${NC} %s\n" "$i" "${dirs[$i]}"
  done
  echo "--------------------------"

  read -r -p "Select [Number / Enter=exit / q]: " choice

  if [ -z "$choice" ] || [ "$choice" = "q" ]; then
    return 0 2>/dev/null || exit 0
  fi

  if [[ "$choice" =~ ^[0-9]+$ ]] && [ "$choice" -lt "${#dirs[@]}" ]; then
    cd -- "${dirs[$choice]}" || echo "移動失敗"
  else
    echo "Invalid input."
  fi

  echo
done