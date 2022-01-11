---
title: BGP
description: Border Gateway Protocol - Path Vector Protocol
---
# Path-Vector Protocol
Ein Router sendet an alle benachbarten Router die Pfade, die über ihn erreichbar sind. Hierbei wird am Anfang der Pfadvektor mit der Kennung des initiierenden (startenden) Routers initialisiert. Jeder Router, der diesen Pfad empfängt, untersucht den Vektor nach seiner eigenen Kennung. Ist diese nicht enthalten, wird der Pfad mit zugehörigem Vektor der lokalen Datenbank hinzugefügt. Hierdurch hat jeder Router in seiner Datenbank die Pfade des Netzes und jeweils auch die zugehörigen Vektoren. 

</br>

# Theory:
EBGP = AD of 20

iBGP = AD of 200

</br>

# BGP Path selection:
**We** = weight -> primary selction parameter HIGHEST WINS

**love** = local preference -> configured only within an AS HIGHEST WINS

**Oranges** = Originate -> Did it come from me (the network) if 0.0.0.0 then yes and it is preferred

**as** = AS path length -> number of AS pathes (like RIP) lower as hops are preffered

**Oranges** = Origin Type -> how does route got injected, i = injected by network, e = egp protocol, ? = redistrubited in to bgp //das i rechts

**mean** = Multi-Exit Descriminator -> parameter to influence path selection

**pure** = Path -> igb or egb //das i links

**refreshment** = Routed ID -> lowest Router ID wins (hard code router id in BGP configuration) 

Dont advertise Links to ISPS to not become a transit AS for the Internet 
<markdown-image src="bgp/1.PNG" alt="Alt text"></markdown-image>

<markdown-image src="bgp/2.PNG" alt="Alt text"></markdown-image>

# BGP graceful shutdown for Routers
```
neighbor 80.81.192.7 shutdown graceful 30 community 65535:0
no neighbor 80.81.192.7 shutdown 
```
