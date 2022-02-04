---
title: how to use Postman and Netconf/Restconf
description: how to use Postman and Netconf/Restconf
tags: devnet
---
# enable Restconf on Nexus Switch

```
https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus9000/sw/7-x/programmability/guide/b_Cisco_Nexus_9000_Series_NX-OS_Programmability_Guide_7x/b_Cisco_Nexus_9000_Series_NX-OS_Programmability_Guide_7x_chapter_010110.html 
________________________________________
feature nxapi 
________________________________________
nxapi https port 443 
________________________________________
feature restconf 
________________________________________
show feature |grep restconf 
________________________________________
feature ssh needed to connect with restconf to ios xe on switch 
________________________________________
username cisco role priv-15 password cisco

```