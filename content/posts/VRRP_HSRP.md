---
title: VRRP and HSRP
description:  how to configure VRRP and HSRP 
tags: other
---
# VRRP multi vendor propietary

R1
```
conf t
int fa2/0 
ip add 10.1.1.2 255.255.255.0 
vrrp 10 ip 10.1.1.1 
vrrp 10 priority 110 
end 
```

R2
```
conf t 
int fa2/0 
ip add 10.1.1.3 255.255.255.0 
vrrp 10 ip 10.1.1.1 
end 
```
</br>

# HSRP cisco propietary

R1

```
conf t 
int fa2/0 
ip add 10.1.1.2 255.255.255.0 
standby 10 ip 10.1.1.1 
standby 10 preempt 
standby 10 priority 110 
end 
```

R2

```
conf t 
int fa2/0 
ip add 10.1.1.3 255.255.255.0 
standby 10 ip 10.1.1.1 
standby 10 preempt 
```

<markdown-image src="hsrp_vrrp/1.PNG" alt="Alt text"></markdown-image>


# HSRP Interface INFOnline production environment

swi-cor-3
```
interface Vlan1077
  vrf member administration
  no ip redirects
  ip address 10.10.77.5/24
  no ipv6 redirects
  hsrp version 2
  hsrp 1077
    priority 200
    ip 10.10.77.1
  description int-mgmt
  no shutdown

```

swi-cor-4
```
interface Vlan1077
  description int-mgmt
  no shutdown
  vrf member administration
  no ip redirects
  ip address 10.10.77.6/24
  no ipv6 redirects
  hsrp version 2
  hsrp 1077
    priority 150
    ip 10.10.77.1
```