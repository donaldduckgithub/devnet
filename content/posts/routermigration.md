---
title: Routermigration
description:  how to do a Routermigration
tags: router
---

```
per console lokal auf geräte draufschalten
loopback IPs neue router ändern auf die der altern router
write memory
neue router rebooten
debug ip ospf rib
show ip bgp summary
max-metric router-lsa auf aroudus004 + aroudus006
po53 swi-cor-4 no shut
po53 aroudus006 no shut
cdp/lldp und interface kontrollieren
wenn Layer 2 geht dann v3934 swi-cor-4 no shut
control Layer 3 / OSPF
po52 swi-cor-3 no shut
po52 aroudus006 no shut
cdp/lldp und interface kontrollieren
wenn Layer 2 geht dann v3954 swi-cor-3 no shut
control Layer 3 / OSPF
AROUDUS006 Gi0/0/3 no shut <-> AROUDUS004 kabel umstecken
no debug ip ospf rib
terminal monitor
WAN INT no shut auf aroudus006
Aroudus004 gshut bgp 300sek
gshut syslog message abwarten
WAN Kabel umstecken
loopback aroudus004 shut
loopback aroudus006 no shut (müssen gleiche ip wie aroudus004 haben auch ipv6. Wegen iBGP)
bgp config auf aroudus004 einfügen
bgp und ospf kontrollieren
show ip bgp summary 
```

# BGP graceful shutdown for Routers
```
neighbor 80.81.192.7 shutdown graceful 30 community 65535:0
no neighbor 80.81.192.7 shutdown 
```