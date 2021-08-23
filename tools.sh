#!/bin/bash
# Bash Menu Script Example

PS3='Please enter your choice: '
options=("1. Run web API (Nest.js)" "2. Run web (React.js)" "3. Quit")
select opt in "${options[@]}"
do
    case $opt in
        "1. Run web API (Nest.js)")
            open -a Terminal.app webapirun.sh
            ;;
        "2. Run web (React.js)")
            open -a Terminal.app webrun.sh
            ;;
        "3. Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
