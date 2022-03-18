---
title: Port-Channel, Ether-Channel
description: Port-Channel, Ether-Channel
tags: protocols
---

#  General
port-channel = mehrere interfaces agieren als ein interface

vpc = port-channels auf verschiedenen switche (Netzwerk devices)

</br>

on = unconditionally

desireable = PAgP

auto = PAgP

active = LACP

passive = LACP

PAgP = Cisco Proprietary

LACP = open standard

</br>
</br>

## Port-Channel Config
```
interface Port-channel1
ip address 10.10.14.1 255.255.255.252 

int fa0/0
channel-group 1 mode active
no shut 
end 
```

</br>
</br>

## helpful commands
```
show port-channel summary
```