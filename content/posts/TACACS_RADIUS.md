---
title: Tacacs and Radius Config
description: how to configure TACACS and RADIUS AAA for your network devices
tags: aaa
---
# old Router (2800)
```
conf t 
tacacs-server host 10.10.14.84 
tacacs-server key PASSW 
 aaa group server tacacs+ VISEBN 
 server 10.10.14.84 
 server 10.10.14.85 
 aaa authentication login AAA group tacacs+ 
line vty 0 4
login authentication AAA 
 exit 
 username LOCALUSER secret PASSW 	
 aaa authentication login default local 
line con 0
login authentication default 
```

# Router
```
tacacs server VISEBN002
address ipv4 10.10.10.10
key PASSW

tacacs server VISEBN003
address ipv4 20.20.20.20
key PASSW
aaa group server tacacs+ VISEBN
server name VISEBN002
server name VISEBN003
aaa authentication login default local group VISEBN
aaa authorization exec default group VISEBN
aaa authentication login default local group VISEBN 
```

# ASA RADIUS ISE Config
```
conf t
int gig0/1
nameif mgmt
aaa-server NAME protocol tacacs+
aaa-server NAME (mgmt) host 10.11.11.11 passw12
aaa-server NAME (mgmt) host 10.2.2.2 passw12
aaa authentication ssh console VISEBN002-TACACS LOCAL
aaa authentication ssh console VISEBN002-TACACS LOCAL
aaa authentication serial console VISEBN002-TACACS LOCAL
key PASSW
aaa group server tacacs+ VISEBN
server name VISEBN002
server name VISEBN003
aaa authentication login default local group VISEBN
aaa authorization exec default group VISEBN
aaa authentication login default local group VISEBN 
```

# Nexus Switch TACACS Config

```
username Cisco password PASSW1 role 15
aaa new-model
feature tacacs+
tacacs-server host 10.10.10.10 key PASSW
tacacs-server host 20.20.20.20 key PASSW
aaa group server tacacs+ VISEBN
server 10.10.10.10
server 20.20.20.20
source-interface Vlan1017
aaa authentication login default group VISEBN
test aaa group VISEBN user pw 
```

# Catalyst Switch TACACS Config

```
aaa new-model
tacacs server VISEBN
address ipv4 10.10.10.10
key pw
aaa authentication login default group tacacs+ local
aaa session-id common
test aaa group VISEBN user pw 
```


It could be that you need to create an ACL for tacacs port
<markdown-image src="tacacs/1.PNG" alt="Alt text"></markdown-image>

# ISE Config for TACACS
create a shell profile
<markdown-image src="tacacs/2.PNG" alt="Alt text"></markdown-image>

edit the shell profile
<markdown-image src="tacacs/3.PNG" alt="Alt text"></markdown-image>

create a tacacs policy (like the vpn policy) under Work Centers -> Device Admin Policy Sets
<markdown-image src="tacacs/4.PNG" alt="Alt text"></markdown-image>
