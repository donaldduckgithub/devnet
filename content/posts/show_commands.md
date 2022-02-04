---
title: show commands
description: show commands 
tags: other
---

``` python
show interface status 
________________________________________
show vpc 
________________________________________
show vpc consistency-parameters global 
________________________________________
show interface description # get status and description of interfaces 
________________________________________
show ip route #displays routing table 
________________________________________
show ip ospf neighbor #displays the ospf neighbors and not adjancencies 
________________________________________
show ip ospf database #displays Link states Advertisments 
________________________________________
show bgp all sum #displays how long a neighbor is up and how many prefixes are imported from him 
show bgp ip sum
________________________________________
show bgp all neighbors 80.81.192.123 received-route #displays speficif information about the neighbor 
________________________________________
show ip protocols #displays bgp neighor informations 
________________________________________
show controllers serial 0/0/0 #displays Layer 1 Informations and alarms and errors 
________________________________________
show interfaces eth1/1 switchport #switch command to display Layer 2 Information 
________________________________________
show interface trunk #displays ports and port-channels that are involved in trunking 
________________________________________
show interfaces #displays port information including MAC address 
________________________________________
show int eth1/1 status #displays port information like status, vlan duplex, speed and type 
________________________________________
show interface fex-fabric #shows the uplink port of the fex 
________________________________________
show int gig 0/1 stats #shows how cpu intensive a port is 
________________________________________
show start int eth 1/30 #displays interface like it is in the startup-config 
________________________________________
show run int eth 1/30 #displays interface like it is in the running-config 
________________________________________
show fex 101 detail #displays fex ports and other informations 
________________________________________
show ip nat translation # router command to show inside/outside + local/global IPs 
________________________________________
show run | i snmp #show run and inclue only a specific thing like snmp 
________________________________________
show access-list # displays ACL rules 
________________________________________
show ip dhcp snooping # displays information for dhcp messages that verified against the ARP table 
________________________________________
show ip arp # displays IP to MAC bindings 
________________________________________
show mac address-table # shows MAC to port bindings 
________________________________________
show port-security # access switch command to display port-securityt information 
________________________________________
shows logging  # displays the syslog messages 
________________________________________
show logging | begin ignore-case # may begins at may and ignores case sensitives 
________________________________________
show logging | last 100  #displays newest 100 logging messages 
________________________________________
show cdp entry * # displays all cdp neighbors 
________________________________________
show cdp neighbor # detail same as show cdp entry * 
________________________________________
sh ntp status displays wether the clock is synchronized and the ip address of the reference 
________________________________________
show facility-alarm status # router command display port alarms 
________________________________________
show nat pool # displays the pool of IP or ports that can be used for NAT 
________________________________________
show xlate # shows the NAT translations taht are used right now 
________________________________________
show conn #similar to xlate 
________________________________________
show local-host # shows connectons, tranlsations and AAA all together 
________________________________________
show ip route profile #has to be enabled and then it displays ifnroamtion how often routes are changed in specific amount of time 
________________________________________
show ip ospf events #displays syslog messages about ospf 
________________________________________
show ip ospf #displays actual router-id (highes router-id is DR) 
________________________________________
show class-map #displays QoS information 
________________________________________
show policy-map #displays QoS information 
________________________________________
show vlan brief #displays VLANs and Ports that are member in it 
________________________________________
show vtp status #needs to be enabled, displays vtp information 
________________________________________
show ip dhcp conflict #displays IPs that got deactivated cause of conflict 
________________________________________
show spanning-tree #displays the STP status of the interfaces 
________________________________________
show spanning-tree summary #displays summary of information for STP 
________________________________________
show authentication sessions #displays 802.1x session status 
________________________________________
show authentication sessions interface gi1/0/5 #displays 802.1x session status 
________________________________________
show crypto ikev2 sa #displays VPN networks 
________________________________________
show run | section bgp #displays all configs that are related to bgp 
________________________________________
show processes cpu | i IP # Input displays the process that is responsible for process switching 
________________________________________
show ip cef #maintains next-hop address information based on the information in the IP routing table. 
________________________________________
show ip ospf database #router shows LSA metric, important for max-metric advertisments 
________________________________________
show users #show users that are currently connected to the device 
________________________________________
show line #show console lines, important for terminal server project 
________________________________________
show interface ethernet 3/2 transceiver details #displays valuable information like type and serial number of SFP 
________________________________________
show interfaces tenGigabitEthernet 0/2/3 transceiver detail #zeig Serial number von SFP an 
________________________________________
show hw-module subslot 0/1 transceiver 0 status bias current darf nicht 0 sein, Tx und Rx muss einstellig sein 
________________________________________
show hw-module subslot 0/1 transceiver 0 idprom #wie transceiver detail command, zeigt interface in der ersten zeile an 
________________________________________
show processes cpu sorted 
________________________________________
show process memory sorted 
________________________________________
show memory processor fragment #shows what the RAM Is used for right now 
________________________________________
show proc mem sorted holding 
________________________________________
show platform resources #routerstats in percent 
________________________________________
show process memory platform sorted 
________________________________________
show environment 
________________________________________
show run asdm 
________________________________________
show version #shows information about the router ios 
________________________________________
show inventory #shows information about the hardware of the router 
________________________________________
show module #displays hardware parts in the switch or router 
________________________________________
show diagnostic content module 3 
________________________________________
show run | incl 192.168.254.253 prev 5

```