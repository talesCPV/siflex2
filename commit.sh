#!/bin/bash
# Upload files to Github - git@github.com:talesCPV/siflex2.git

read -p "Are you sure to commit Siflex2 to GitHub ? (Y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then

    git init

    git add assets/
    git add backend/
    git add config/
    git add sql/
    git add scripts/
    git add style/
    git add templates/
    git add index.html
    git add commit.sh

    git commit -m "by_script"

#    git branch -M main
#    git remote add origin git@github.com:talesCPV/siflex2.git

    git push -u -f origin main

fi

#…or create a new repository on the command line

#echo "# siflex2" >> README.md
#git init
#git add README.md
#git commit -m "first commit"
#git branch -M main
#git remote add origin git@github.com:talesCPV/siflex2.git
#git push -u origin main

#…or push an existing repository from the command line

#git remote add origin git@github.com:talesCPV/siflex2.git
#git branch -M main
#git push -u origin main

#…or import code from another repository

#You can initialize this repository with code from a Subversion, Mercurial, or TFS project.