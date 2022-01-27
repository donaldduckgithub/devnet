---
title: basic config
description: the basic config of a cisco router
tags: config
---

# Basics and OSPF and BGP:
```
en 
conf t 
hostname R1 
service password-encryption 
no ip domain-lookup 

line con 0
logging synchronous
exit 

int lo 0
ip add 10.10.10.10 255.255.255.255 

router ospf 1
network 0.0.0.0 255.255.255.255 area 0 

router bgp 1
neighbor 11.0.0.2 remote-as 2
network 11.0.0.0 mask 255.255.255.0
exit 

interface Port-channel1
ip address 10.10.14.1 255.255.255.252 

int fa0/0
channel-group 1 mode active
no shut 
end 

wr 
```

# VLAN

<markdown-image src="basicconfig/1.PNG" alt="Alt text"></markdown-image>

```
Switch:
vlan 24
name USERS

int eth0/1
switchport access vlan 24

int eth0/0
switchport trunk encapsulation dot1q
switchport mode trunk 
spanning-tree portfast trunk
switchport trunk allowed vlan all


Router:
int eth0/0
no shut
int eth0/0.24
encapsulation dot1q 24
ip add 10.10.10.1 255.255.255.0
no shut



```

