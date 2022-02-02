---
title: NAT
description: Network Addresss Translation
tags: nat
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

static nat
```
conf t
int gig0/0/0
ip nat inside
int gig 0/0/1
ip nat outside
ip nat inside source static 10.1.1.100 4.4.4.2
```

dynamic nat
```
int gig0/0/0
ip add 10.0.0.1 255.0.0.0
ip nat inside
int s0/0/0
ip add 100.0.0.1 255.0.0.0
ip nat outside
exit
access-list 1 permit 10.0.0.0 0.255.255.255
ip nat pool CCNA 50.0.0.1 50.0.0.2 netmask 255.0.0.0
ip nat inside source list 1 pool CCNA
```

port address translation
```
int gig 0/0/0
ip nat inside
int gig 0/0/1
ip nat outside exit
access-list 1 permit 10.1.1.0 0.0.0.255
ip nat inside source list 1 int gig 0/0/1 overload
```