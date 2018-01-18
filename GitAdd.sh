#!/bin/bash

# Get current file path.
CMD_PATH=`dirname $0`
cd $CMD_PATH
# echo "current finder: $PWD"

QUARANTINE_LIST=("git_delete.sh" "git_shell.sh")

addDirectorysAndFiles(){
	for filen in `ls $PWD`
	do
		if [ $filen != ${QUARANTINE_LIST[0]} -a $filen != ${QUARANTINE_LIST[1]} ] 
		then
			git add $filen
			echo "git add $filen"
		fi
	done
}

addDirectorysAndFiles

# commit and push to master
git commit -m "Add or update. -- git_shell.sh"
# git pull
git push