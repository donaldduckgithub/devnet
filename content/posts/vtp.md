---
title: VTP
description: VTP and VTPv3
tags: protocols
---
# General

VTP to sync/push vlans to your network devices to have consistency

VTPv3 supports extended vlans 1006 - 4094 and has primary server function

</br>

# VTP Modes
<markdown-image src="vtp/1.PNG" alt="Alt text"></markdown-image>

</br>

# basic config vtpv3
```
vtp mode server
vtp domain ENCOR #Defines the VTP domain, all switches in the domain will receive these VTP updates
vtp password CISCO #Secures VTP advertisements to a matching domain and password
vtp pruning #only sends broadcast/multicast over a trunk if the receiving switch has a member on this vlan
vtp version 3
end
vtp primary #only server in a network who creates/updates/deletes vlans when vtpv3 is enabled

```

</br>

# helpful commands
``` bash
vtp mode transparent # does not update its vlan database. use this command on a new switch

show vtp status

show vtp device
```
