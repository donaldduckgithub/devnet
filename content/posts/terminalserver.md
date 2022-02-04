---
title: configure Terminalserver
description: Configure an old 2911 cisco Router to act as a Terminalserver to reach all console lines with one device
tags: console, router
---

Reverse Telnet/ssh gives you the ability to telnet to a device, and then console to another device from there

https://www.cisco.com/c/en/us/support/docs/security-vpn/secure-shell-ssh/4145-ssh.html

https://community.cisco.com/t5/security-documents/guide-to-better-ssh-security/ta-p/3133344

https://www.cisco.com/c/en/us/support/docs/security-vpn/secure-shell-ssh/212142-Configure-SSH-on-Tty-Lines-with-Menu-Opt.html

https://www.cisco.com/c/en/us/support/docs/dial-access/asynchronous-connections/5466-comm-server.html

CAB-OCTAL-ASYNC ebay

NM-32A high-density async network module ebay

2811 Router ebay

Config Terminal Server
```python
conf t 
int lo 0 
ip add 172.21.1.1 255.0.0.0
exit 

ip host DEVICENAME 2067 172.21.1.1 
aaa new-model 
aaa authentication login default local 
username cisco secret cisco 
tacacs-server host 10.10.14.84
tacacs-server key PASSW 
aaa group server tacacs+ VISEBN 
server 10.10.14.84 
server 10.10.14.85
aaa authentication login AAA group tacacs+ 
crypto key generate rsa label SSH-KEY modulus 2048 
ip ssh rsa keypair-name SSH-KEY 
ip ssh version 2  
ip ssh port 2001 rotary 1 127 #map a portnumber that gets defined in line interface to ssh. port 2001 = rotary 1 and so on

line vty 0 4
transport input ssh
transport output ssh
login authentication AAA 

line tty 67 #oder line 1/1 falls das interface schon da ist
rotary 67
no exec
transport input ssh
login authentication default
end 

ssh -l cisco -p 2067 172.21.1.1 
```

disconnect a session over tty
```
press strg+shift+6 
release hotkeys 
press x
type disconnect  
to switch to other open sessions simple type show sessions and look for the number 
```

Terminal server helpful commands
```python
show sessions #shows active sessions. type the number to switch between sessions

show line #shows all interface lines on device

ssh -l cisco -p 2067 172.21.1.1 #connects over ssh to console port

ip ssh logging events #logs every ssh connection who like show users 

where #equivalent to show sessions
```
