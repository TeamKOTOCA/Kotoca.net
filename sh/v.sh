#!/bin/bash

MAX_PER_PAGE=10
HISTORY_SIZE=10
dirs_history=()

while :; do
  # ディレクトリ一覧
  dirs=("..")
  while IFS= read -r -d '' d; do
    dirs+=("$(basename "$d")")
  done < <(find . -maxdepth 1 -mindepth 1 -type d -print0 2>/dev/null | LC_ALL=C sort -z)

  total=${#dirs[@]}
  page=0

  while :; do
    start=$((page * MAX_PER_PAGE))
    end=$((start + MAX_PER_PAGE))
    (( end > total )) && end=$total

    # ディレクトリ表示
    echo "Current: $(pwd)"
    echo "--------------------"
    for i in $(seq $start $((end - 1))); do
      item="${dirs[$i]}"
      [[ "$item" == ".." ]] && item="$item (parent)"
      printf "%1d) %s\n" "$i" "$item"
    done
    echo "--------------------"
    echo "n=next, p=prev, q=quit, h=history"

    # 1文字入力
    read -rsn1 choice
    echo

    case "$choice" in
      q) return 0 2>/dev/null || exit 0 ;;
      n) (( page < (total-1)/MAX_PER_PAGE )) && ((page++)) ;;
      p) (( page > 0 )) && ((page--)) ;;
      h)
        # 履歴表示
        if (( ${#dirs_history[@]} == 0 )); then
          echo "履歴なし"
          sleep 1
          continue
        fi

        echo "履歴一覧:"
        for i in "${!dirs_history[@]}"; do
          printf "%1d) %s\n" "$i" "${dirs_history[$i]}"
        done

        read -rsn1 hist_choice
        echo
        if [[ "$hist_choice" =~ [0-9] ]] && (( hist_choice < ${#dirs_history[@]} )); then
          target="${dirs_history[$hist_choice]}"
          cd -- "$target" || echo "移動失敗"
          break
        else
          echo "無効な履歴選択"
          sleep 1
        fi
        ;;
      [0-9])
        idx=$((choice))
        if (( idx >= start && idx < end )); then
          target="${dirs[$idx]}"
          cd -- "$target" || echo "移動失敗"

          # 履歴更新
          dirs_history=("$target" "${dirs_history[@]}")       # 先頭に追加
          # 重複削除
          tmp=()
          for d in "${dirs_history[@]}"; do
            [[ " ${tmp[*]} " =~ " $d " ]] && continue
            tmp+=("$d")
          done
          # サイズ制限
          (( ${#tmp[@]} > HISTORY_SIZE )) && tmp=("${tmp[@]:0:HISTORY_SIZE}")
          dirs_history=("${tmp[@]}")

          break
        else
          echo "Number out of page range."
        fi
        ;;
      *) echo "Invalid input." ;;
    esac
    echo
  done
done