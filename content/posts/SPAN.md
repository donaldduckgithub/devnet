---
title: SPAN, RSPAN, ERSPAN
description: configure Switched Port Analyzer
tags: catalyst, other
---
# SPAN

SW1
```
conf t 
monitor session 1 source interface fa0/1 - 2 
monitor session 1 destination interface fa0/3 
```

SW1
# Remote-SPAN
```
conf t 
________________________________________
vlan 200 
________________________________________
name RSPAN 
________________________________________
remote-span 
________________________________________
exit 
________________________________________
int fa0/3 
________________________________________
switchport mode trunk 
________________________________________
switchport trunk allowed vlan all 
________________________________________
exit 
________________________________________
monitor session 2 source remote vlan 200 
________________________________________
monitor session 2 destination int fa0/3 
```
SW2
```
vlan 200 
________________________________________
name RSPAN 
________________________________________
remote-span 
________________________________________
int fa0/4 
________________________________________
switchport mode trunk 
________________________________________
switchport trunk allowed vlan all 
________________________________________
exit 
________________________________________
monitor session 2 source interface fa0/1 - 2 
________________________________________
monitor session 2 source interface fa0/1 - 2

```
<markdown-image src="span/2.PNG" alt="Alt text"></markdown-image>
# Encapsulated Remote SPAN (Layer 3)
R1
```
monitor session 1 type erspan-destination
no shutdown
destination interface gig 2
source
erspan-id 1
ip address 10.1.1.2
```
R2
```
monitor session 1 type erspan-source
no shutdown
source interface gig 2
destination
erspan-id 1
ip address 10.1.1.2
origin ip address 30.1.1.2
end 
```
<markdown-image src="span/2.PNG" alt="Alt text"></markdown-image>

# useful commands
```
show monitor session 2 
```