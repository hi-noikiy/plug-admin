#!/bin/bash

# Get current file path.
CMD_PATH=`dirname $0`
cd $CMD_PATH
# echo "current finder: $PWD"

QUARANTINE_LIST=("GitDelete.sh" "GitAdd.sh")

addDirectorysAndFiles(){
	for filen in `ls $PWD`
	do
		if [ $filen != ${QUARANTINE_LIST[0]} -a $filen != ${QUARANTINE_LIST[1]} ] 
		then
			if [ -d $filen ]
			then
				git add -f $filen
			else
				git add $filen
			fi
		fi
	done
}

addDirectorysAndFiles

# commit and push to master
git commit -m "Add or update. -- GitAdd.sh"
# git pull
git push