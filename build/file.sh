#!/bin/sh
env=`cat version.json | jq -r '.env'`
version=`cat version.json | jq -r '.version'`
subversion=`cat version.json | jq -r '.subversion'`
myPath="archives/V$version.$subversion"
projectPath="archives/"
if [ ! -x "$projectPath" ]; then 
mkdir "$projectPath"  
fi
cp -R dist $myPath