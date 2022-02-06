---
title: theory
description: theory
tags: other
---

# Ports
0 - 1023 well known port

1024 - 49151 registered ports

49152-65535 dynamic ports

</br>

# Interfaces Zustaende:
There is a protocol mismatch - UP/DOWN

There is a duplex mismatch - UP/UP (Remember Late Collisions?)

The interface is shut down - ADMIN DOWN / DOWN

The interface is error-disabled - DOWN / DOWN 

# RIB vs FIB
RIB = Each routing protocol has its own RIB
FIB = similar to routing table, updated with each routing table update 

<markdown-image src="theory/1.PNG" alt="Alt text"></markdown-image>

# Wireless Standards IEEE 802.11

<markdown-image src="theory/2.PNG" alt="Alt text"></markdown-image>

# Interface Status
There is a protocol mismatch - UP/DOWN

There is a duplex mismatch - UP/UP (Remember Late Collisions?)

The interface is shut down - ADMIN DOWN / DOWN

The interface is error-disabled - DOWN / DOWN 

</br>

# SDN
overlay: the virtual network

underlay: the physical network

northbound: interacts with the server

southbound: interacts with edge devices 

</br>

# routing protocols
Distance Vector = RIP, EIGRP

Path Vector = BGP

Link-State = OSPF, IS-IS 

</br>

# Port channels
on = unconditionally

desireable = PAgP

auto = PAgP

active = LACP

passive = LACP

PAgP = Cisco Proprietary

LACP = open standard 

</br>

# Unsortierte Tipps

Data Link Layer = The data link layer provides host to host data transfer

network layer = data packets from one device to another connected in different networks

transport layer = The process of dividing a long data string into smaller messages at the transport layer is called segmentation

session layer = Keeping track on whose turn is to transmit data

presentation layer = Differentiation is done at this layer between what type of data is encoded for transmission, for example text files, binaries, or video files.

Windows Firewall blockt icmp pakete

In�when you are running traffic coming INTO the interface through an ACL. Out�when you are running traffic leaving the interface through an ACL

switchport port security violation protect = switchport will permit traffic from known MAC addresses to continue sending traffic while dropping traffic from unknown MAC addresses

switchport port security violation restrict = like protect + sends snmp tracp and incremtents security-violation counter

plenum rated cable = low flame, smoke characteristics 

QSFP-40G-SR-BD = 40GBASE-SR-BiDi, duplex MMF = LC

SFP SR = Short Reach

SFP BD = BiDirektional

Beacon = APs send beacons at a regular interval called the target beacon transmit time (TBTT) to advertise the SSIDs they servic

Data frames are used to transfer information or trigger an event.

Control Frames are used to control access to the medium and are used for frame acknowledgement

Management frames are used to manage the BSS. This includes probing, associating, roaming, and disconnecting clients from the BSS

All 802.11 frames fall under one of the three types: management, control, or data

Header = contains information about the where the frame is going, the data rate, cipher suite used to encrypt data frames, and more

Body = contains the layer 3-7 information that is encapsulated and, hopefully, protected (encrypted) as well

Trailer = All values of the frame header and body are ran through a calculation; the result is held in the FCS field (CRC)

distribute list = welche lass ich in routing table von ospf

bgp macht ttl auf 1 by default, au�er ebgp-multihop 4 //4 hops

cloud interface �ber eve-ng an asa asdm

proxy arp mapt die ip auf eine andere

vdc = virtueller switch auf switch limit-resource was er darf

address-family ipv4 sinnvoll wenn man ipv6 nutzt

ibgp benoetigt loopback 
