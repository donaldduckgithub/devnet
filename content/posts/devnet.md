---
title: Devnet
description: Devnet
tags: devnet
---
# Devnet services

```
Github: https://github.com/donaldduckgithub/devnet
Heroku: https://dashboard.heroku.com/apps
Github and heroku Email: donalduckuck1@gmail.com
Github Username: donaldduckgithub 
```
# devnet starter kit
``` python
sudo snap install tree #hierarchically list file structure
https://www.python.org/downloads/windows/
install both version python 3 and python 2
python 2 installation window -> add python.exe to path -> entire feature will be installed
python 3 installation window -> add python 3 to path 
```

```
https://code.visualstudio.com/download
extensions: python, bracket pair colorizer
use visual studio code also as text editor
file -> preferences -> settings -> font size: 24
file -> prefences -> color theme -> High Contrast 
```
``` python
https://git-scm.com/download/win
py -3 -m venv py3-venv #creates virtual environment
source py3-venv/Scripts/activate #avtivates python3 as default
python -V #shows current python version
deactivate# goes out of the environment
py -2 -m pip install virtualenv #installs virutal environment for python 2
py -2 -m virtualenv py2-venv
source py2-venv/Scripts/activate 
```

# Git Hub

``` python
# open git bash in the directory you want your repo to be
git clone https://github.com/donaldduckgithub/devnet.git #pulls the remote repo to your local drive as a directory
cd devnet
git add . #adds everything to be tracked and ready to commit
git commit -a -m "new scripts added" # commits every change to your local repo
git push #pushes your local repo to the remote repo 
```

branches with local repo
```
git init
git nano file1
git add .
git commit -m "master1"
git checkout -b "feature1"
nano file2
git add .
git commit -m "branch1"
git checkout master
git merge feat1 
```

branches with remote repo
```
git clone https://github.com/donaldduckgithub/devnet.git
cd devnet
git checkout -b "feat1"
nano file1
git add .
git commit -m "branch feat1"
git push --set-upstream origin feat1
im remote repo https://github.com/donaldduckgithub/devnet.git dann mergen 
```

python for ubuntu
```
sudo -i 
apt install python3-pip 
pip3 install -U netmiko 
nano file.py 
python3 file.py 
```

install python modules for windows
```
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py 
________________________________________
python get-pip.py 
________________________________________
dir 
________________________________________
pip help 
________________________________________
python -m pip install requests 
________________________________________
python -m pip install --upgrade requests 
________________________________________
ctrl+shift+P python: interpreter, debug: python 
________________________________________
C:\Python27\Lib\site-packages save new files there to import modules
```
# Python examples
<markdown-image src="devnet/1.PNG" alt="Alt text"></markdown-image>
<markdown-image src="devnet/2.PNG" alt="Alt text"></markdown-image>
<markdown-image src="devnet/3.PNG" alt="Alt text"></markdown-image>
<markdown-image src="devnet/4.PNG" alt="Alt text"></markdown-image>
<markdown-image src="devnet/5.PNG" alt="Alt text"></markdown-image>
<markdown-image src="devnet/6.PNG" alt="Alt text"></markdown-image>

# Devnet Scripts:

show ip int brief
```
#!/usr/bin/env python
from netmiko import ConnectHandler
nx_os = {
'device_type': 'cisco_ios',
'ip': 'sbx-nxos-mgmt.cisco.com',
'username': 'admin',
'password': 'Admin_1234!',
'port': 22
}
net_connect = ConnectHandler(**nx_os)
output = net_connect.send_command('show ip int brief')
print(output) 
```

find data
```
#!/usr/bin/env python
from netmiko import ConnectHandler
import json
nx_os = {
'device_type': 'cisco_ios',
'ip': 'sbx-nxos-mgmt.cisco.com',
'username': 'admin',
'password': 'Admin_1234!',
'port': 22
}
net_connect = ConnectHandler(**nx_os)
output = net_connect.send_command('show ip int brief | json-pretty')
json_data = json.loads(output)
print(json_data['TABLE_intf']['ROW_intf'][0]['intf-name'])
print(json_data['TABLE_intf']['ROW_intf'][0]['prefix']) 
```

use a loop to find IP
```
#!/usr/bin/env python
from netmiko import ConnectHandler
import json
nx_os = {
'device_type': 'cisco_ios',
'ip': 'sbx-nxos-mgmt.cisco.com',
'username': 'admin',
'password': 'Admin_1234!',
'port': 22
}
net_connect = ConnectHandler(**nx_os)
output = net_connect.send_command('show ip int brief | json-pretty')
json_data = json.loads(output)
int_number = len(json_data['TABLE_intf']['ROW_intf'])
for x in range(int_number):
 print(json_data['TABLE_intf']['ROW_intf'][x]['intf-name'])
 print(json_data['TABLE_intf']['ROW_intf'][x]['prefix']) 
```