---
title: STP
description: Spanning Tree Protocol
---

# Theory:

Switches exchange STP configuration messages every 2 seconds, by default, using a multicast frame called the bridge protocol data unit (BPDU) includes the BID

Root bridge = switch mit niedrigster priority ID bzw. niedrigster MAC, sendet BPDUs

Root port = jeder switch hat einen root port (port mit der niedrigsten cost zur root bridge)

Designated Port = der port bei jedem segment (link) mit den niedrigsten kosten at the far end

Blocked Ports = Alle andere

Portfast = port moves directly into forwarding state 

<markdown-image src="stp/1.PNG" alt="Alt text"></markdown-image>

# Port States:
Learning (15s) = The switch will receive a superior BPDU, will stop sending its own BPDUs, and will relay the superior BPDUs

Listening (15s) = switch listens/sends bpdus (over this port)

Blocking (20s) = first state when device is connected 

</br>

# Arten:
STP = Eine STP Instance f�r alles, IEE 802.1D, sehr wenig CPU Verbrauch

MSTP = mehrere STP Istanzen, 802.1s

RSTP = Wie STP aber sagt das Listening, Blocking und Disabled Port States die gleichen sind, 802.1w

PVST+ = Jedes Vlan hat eigene STP Instance, deutlich schnneller aber auch hoher CPU Verbrauch (CIsco Catalyst hat nur 128 STP Instancen aber supported 256 vlans)

Rapid PVST+ = Mischung aus PVST und RSTP 

<markdown-image src="stp/2.PNG" alt="Alt text"></markdown-image>

# Blocked Ports berechnen STP:
Root Port = Ports directly connected with Root Switch or lowest cost to root bridge every switch has only 1 RP

Designated Port = Each link has 1 DP and thats the port with the lowest cost to the Root Switch

Blocked Ports = all other ports 

<markdown-image src="stp/3.PNG" alt="Alt text"></markdown-image>

Costs

<markdown-image src="stp/4.PNG" alt="Alt text"></markdown-image>


# Config STP
```yaml
show spanning-tree
show spanning-tree summary
spanning-tree etherchannel guard misconfig
spanning-tree vlan 1 root primary
spanning-tree vlan 1 priority
spanning-tree mode ? #zb fuer rapid-pvst

Config Portfast
interface fa 1/0/1
spanning-tree portfast
exit
spanning-tree portfast default 
```