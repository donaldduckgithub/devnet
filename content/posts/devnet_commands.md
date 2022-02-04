---
title: Devnet Commands
description: Devnet Commands
tags: devnet
---
``` python
diff -u5 test1.py test2.py #compare two files 
________________________________________
cd / #change to home directory 
________________________________________
whereis FILE #searchs everywhere where a file is 
________________________________________
ls -t #list files sorted by date 
________________________________________
cp -r #copies directory 
________________________________________
rm -rf FOLDERNAME #delete a folder with files in it 
________________________________________
USER=test1 #creates an environment variable 
________________________________________
echo $PATH #list of places Bash will look for a script that doesn’t include a path to the executable 
________________________________________
PATH=$PATH:/home/developer/src #add a Path to the environment variable 
________________________________________
cat /etc/shells #find out which shells you can use 
________________________________________
chsh -s/bin/zsh #switch to z shell 
________________________________________
sudo #execute as admin 
________________________________________
nano #create something (a txtfile) 
________________________________________
clear #clears the screen 
________________________________________
sudo apt-get install # install something 
________________________________________
pwd #tells you in which directory you are right now 
________________________________________
ls -F # shows which are files and which are directories 
________________________________________
ls -l # gives all details 
________________________________________
ls -a #show hidden files 
________________________________________
ls -all # lists all information of the files 
________________________________________
mv path1/file.py path2/file.py #copy a file 
________________________________________
cp -r cleanup ~/backup #copy the entire contents of a directory 
________________________________________
sudo docker push donaldduckdocker/1test:v1 #cat FILE reads the content of a file 
________________________________________
mkdir NAME #creates a folder 
________________________________________
.. #go to the directory before 
________________________________________
./ #current directory 
________________________________________
rmdir NAME #deletes directory 
________________________________________
rm -r NAME #delete everything in this folder 
________________________________________
touch #create any file 
________________________________________
#!/usr/bin/python3 #tells the OS how to compile this file 
________________________________________
cat #looks what is in my file 
________________________________________
chmod 755 FILE.py #makes it exectuable 
________________________________________
./FILE.py #execute this file 
________________________________________
mv FILE.py /other/FILE.py #moves file 
________________________________________
cd ~ #change to home directory 
________________________________________
cat FILE.py | more #go line by line through file 
________________________________________
echo $USERNAME #shows the ouput of a variable in the terminal 
________________________________________
git clone htttps:// #copy a remote repository 
________________________________________
git init NEWPROJ #creates a repository 
________________________________________
git status #shows what git is tracking 
________________________________________
git add FILE #add file to tracking 
________________________________________
git rm -f FILE # delete file 
________________________________________
git mv FILE FILE1 # moves file 
________________________________________
git commit -a -m "bug fix 21342" #add files to local repo and also to tracking 
________________________________________
git branch #display branch information 
________________________________________
git log #shows history 
________________________________________
git fetch # synct infos of new brnaches and so on 
________________________________________
git remote -v #list remote repo 
________________________________________
git pull origin master #pull down what ever has changed from remote repo to local repo 
________________________________________
git push #push your local repo to remote repo 
________________________________________
git log #displays all branches 
________________________________________
git branch NEWFEATURE # creates a new branch 
________________________________________
git checkout NEWFEATURE # switch to that branch 
________________________________________
git merge NEWFEATURE  #merges two branches 
________________________________________
git diff # shows difference 
________________________________________
git diff --cached # history of what got changed 
________________________________________
ipython # mode to execute your code instantly 
________________________________________
python3 -m venv MYVENV # creates a virtual python environment 
________________________________________
source MYVENV/bin/activate #activates the python environment 
________________________________________
python3 -m pip install -r requirements.txt #installs the requirements for the virtual environment 
________________________________________
deactivate #deactivate the current VM 
________________________________________
# comment something in python 
________________________________________
''' multiple lines '''# comment more in python 
________________________________________
sudo -i #be the root user

```