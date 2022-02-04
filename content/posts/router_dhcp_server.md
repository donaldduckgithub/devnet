---
title: Router as DHCP Server
description: Router as DHCP Server
tags: router
---

<markdown-image src="router_dhcp/1.PNG" alt="Alt text"></markdown-image>

# Router 1 (DHCP Server)

```
int fa0/0
ip add 192.168.0.1 255.2555.255.0
ex
ip dhcp pool LAN-POOL-0
network 192.168.0.0 255.255.255.0
default-router 192.168.0.1
dns-server 192.168.0.100
domain-name networknoob.com
default-router 192.168.0.1
lease 5 
```

# Router 2 (DHCP Client) 
```
int fa0/0
ip address dhcp 
```

# Switch
```
vlan 10
interface FastEthernet0/1
switchport mode access
switchport access vlan 10
spanning-tree portfast
int vlan10
ip helper-address 192.168.0.1
```