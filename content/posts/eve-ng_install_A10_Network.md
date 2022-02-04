---
title: eve-ng install A10 Network Load Balancer
description: install A10 Network Load Balancer in eve-ng
tags: eve-ng
---

```
download the bare version 
________________________________________
Thunder ADC for Bare Metal 
4.1.1-P13-SP2 Thunder Appliance for Bare Metal 
COS_vThunder_4_1_1-P13-SP2_4.qcow2.gz 
iptables -t nat -A PREROUTING -p tcp --dport 9101 -j DNAT --to-destination 192.168.99.105:443 https://10.10.14.93:9101/ 
________________________________________
default login: admin/a10 
________________________________________
enable pw: blank password

```