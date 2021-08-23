#!/bin/bash
# Bash Menu Script Example

PS3='Please enter your choice: '
options=("Option 1" "Option 2" "Option 3" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Run web API (Nest.js)")
            open -a Terminal.app webapirun
            ;;
        "Run web (React.js)")
            open -a Terminal.app webrun
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done
