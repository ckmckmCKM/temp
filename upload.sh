#!/bin/sh

path=$1
name=${path##*/}
name=${name%.*}

scp $path root@192.168.0.46:/home/www
ssh root@192.168.0.46 "cd /home/www && rm -rf $name && unzip $name.zip && rm $name.zip"
