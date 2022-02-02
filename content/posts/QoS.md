---
title: QoS
description: QoS
tags: qos
---
# Theory
inside = inside the NAT enabled router

local = private IP

outside = outside the NAT enabled router

global = routable IP

PAT = Ziel mehrere private IPs auf eine �ffentliche IP abzubilden durch mappen auf den jeweils spezifischen Port



</br>


<markdown-image src="nat/1.PNG" alt="Alt text"></markdown-image>



# Config:

```
 conf t
class-map match-any EMAIL
match protocol pop3
match protocol smtp
match protocol imap
match protocol exchange
exit
class-map VOICE
match protocol rtp audio
exit
class-map SCAVENGER
match protocol bittorrent
exit
policy-map DEMO
class EMAIL
bandwidth 512
random-detect dscp-based
random-detect ecn
exit
class VOICE
priority 256
exit
class SCAVENGER
police 128000
end
int gig0/2
service-policy output DEMO
show class-map
show policy-map
show policy-map interface g0/2 
```

Auto QoS
``` python
int gig1/0/5
auto qos voip cisco-phone  # erstellt config automatisch. Bei bottleneck auf den port soll immer das EF von dem Cisco Phone bevorzugt werden
show policy-map interface gig1/0/5 
```
