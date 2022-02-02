---
title: VLan
description: VLan
tags: vlan
---
# VLan and Trunk
VLans = segmenting Broadcast Domain

normally a switch considers every port in the same Broadcast Domain Layer 2 Broadcast

switchport mode trunk = periodically sends DTP messages that its port is in an unconditional state

switchport mode trunk dynamic auto = advertises that it is able to trunk but does not request to go to the trunking state

switchport mode dynamic desirable = requests remote switchport to go in the trunking state. if remote is "on, desirable, auto" it becomes trunk

if it is "nonegotiate" it becomes no trunk

switchport nonegotiate = for trunks with other vendors than cisco 

</br>


<markdown-image src="vlan/1.PNG" alt="Alt text"></markdown-image>



# Config:

``` python
show interfaces trunk
switchport trunk encapsulation dot1q  # only for old devices that still suport ISL
switchport mode dynamic desirable 
switchport trunk allowed vlan 50 
switchport trunk allowed vlan 10,20,30,1000 
```

Trunk Config
``` Python
conf t
vlan 100
name NATIVE
exit
int fa1/0/13
switchport mode trunk
switchport trunk native vlan 100
exit

# Switch 2:

int fa0/3
switchport mode trunk
switchport trunk native vlan 100
exit 
```

Switchport mode Access Config
``` Python
conf t
vlan 50
name Engineering
exit
int fa1/0/1
switchport access vlan 50 
```