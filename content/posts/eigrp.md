---
title: EIGRP
description: EIGRP
tags: protocols
---
# General
https://www.youtube.com/watch?v=e5qYqNX6f0k

AD = 90

</br>

Hello message (default 15sec) wait for my hello message for 15sec before considering me to be down

</br>

Feasible distance is calculated through:

Bandwidth

Delay

Reliability

Load 

MTU

</br>

successor = active route

feasible successor = backup route


</br>

</br>

# basic config
<markdown-image src="eigrp/1.PNG" alt="Alt text"></markdown-image>
``` bash
#R1:
router eigrp 1
network 192.0.2.0 0.0.0.3
network 192.168.1.0 0.0.0.3
network 192.168.2.0 0.0.0.127
auto-summary # advertises only summary routes. Be careful if two interfaces in same prefix range are in different direction
eigrp stub # share only connected and summary routes

#R2:
router eigrp 1
network 192.0.2.0 0.0.0.3
```
</br>
</br>

# helpful commands
```
show ip eigrp neighbors

show ip eigrp interfaces

show ip eigrp topology #which networks has been learned

debug eigrp packets
undebug eigrp packets

show key chain
```

</br>
</br>

# Configure EIGRP authentication
``` bash
# R1 and R2 config is same
key chain KEY1
key 1 #same as eigrp process ID
key-string CISCO

int e0/1
ip authentication mode eigrp 1 md5
ip authentication key-chain eigrp 1 KEY1
```

</br>
</br>

# other configs

```
ipv6 unicast-routing #enable ipv6 routing
int gig 0/1
ipv6 eigrp 1

#ipv6 uses same show commands but instead of ip type ipv6

router eigrp 1
variance 2 # multiply feasible distance by 2. so anything less then best feasible distance * 2 will be used (but best route will be used more) by default eigrp picks best path. With variance (multiplikator) you could load balance

passive-interface gig0/1 # dont sent and receiver hello messages
```

