---
title: Useful Commands
description: Useful Commands
tags: other
---
``` python
default interface fa0/1 # reset interfaces 
________________________________________
nameif mgmt # give interface a value. oterh than description 
________________________________________
ping vrf Mgmt-intf 10.10.14.84 #use virtual routing table and also specific interface to send a ping 
________________________________________
ping -t 192.168.1.1 #infinite pings 
________________________________________
clear cli history #delete cache 
________________________________________
dir #shows directory. really useful for boot loader to found image 
________________________________________
dir bootflash: #display image what gets booted 
________________________________________
telnet 203.12.42.123 2066 #test specific ports if you can telnet to it. in this case its a console server port 
________________________________________
ssh -l NAME 10.10.74.23 #use a jumphost for SSH 
________________________________________
debug ip bgp IPADDRESS #debug specific bgp neighbor 
________________________________________
ip route profile #log routing changes 
________________________________________
passive interface gi0/1 #deactivates hello packets in ospf
________________________________________
clear ip ospf process #doesnt clear everything!! might reboot the router to be sure!! 
________________________________________
logging trap debug #alle severity levels werden gelogt weil debug das niedrigste ist 
________________________________________
int range fa 1/0/5-8 #go into interface mode for and between all int fa1/0/5 and fa1/0/8 
________________________________________
yum install telnet # linux / red hat command to install telnet 
________________________________________
sudo -s # admin modus raspbian 
________________________________________
certutil.exe -setcatemplates +Machincert # force copy to certificate templates 
________________________________________
rsop.msc #type in windows run tos can which GPOs are active on your PC 
________________________________________
gpresult /r /scope COMPUTER #type in windows terminal. shows just the name of the active GPOs on your PC 
________________________________________
cd Desktop #change to desktop directory 
________________________________________
certreq -submit -attrib "CertificateTemplate:Webserver" ise.req ise.cer #create webserver cert for ISE 
________________________________________
nei 10.0.24.2 shutdown graceful 300 community 65535:0 # gshut command for bgp 
________________________________________
max-metric router-lsa #sends max-metric so routers doenst send packets over me unless there is no other way 
________________________________________
default-information originate always # always send a default router 
________________________________________
terminal monitor #enable logging in terminal on vty lines 
________________________________________
ip cef enable # cisco express forwarding 
________________________________________
ip route-cache #enables fast switching = route ones switch many 
________________________________________
touch trafgen.cfg #creates a file 
________________________________________
who # verify who is right now on the network device 
________________________________________
where # also shows who you are and on which device you are 
________________________________________
line tty 66 # enters config mode for terminal line. important for Terminal server 
________________________________________
copy run start # like wr 
________________________________________
no logging console #  stops only debugging for the console line 
________________________________________
who # like show users 
________________________________________
where # like show sessions 
________________________________________
no asdm image disk0:/asdm-7101.bin # use to change to an other asdm image version 
________________________________________
diagnostic start module 3 test all # start online diag, verify with show module 
________________________________________
diagnostic clear result module 3 test all # clear online diag tool 
________________________________________
diagnostic stop module 3 test all 
________________________________________
diagnostic start module 3 test non-disruptive # falls online diag status fail kommt das machen dann geths


```