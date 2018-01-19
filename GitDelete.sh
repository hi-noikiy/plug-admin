#!/bin/bash


CMD_PATH=`dirname $0`
cd $CMD_PATH

QUARANTINE_LIST=("GitDelete.sh" "GitAdd.sh")

EACH_FUNS(){
    for fs in `ls $PWD` 
    do
        if [ $fs != ${QUARANTINE_LIST[0]} -a $fs != ${QUARANTINE_LIST[1]} ] 
        then
            echo $fs
            if [ -d $fs ] 
            then
                git rm -rf $fs
            else
                git rm $fs
            fi
        fi
    done
}

EACH_FUNS
git commit -m 'Remove now files and directory. -- GitDelete.sh'
git push