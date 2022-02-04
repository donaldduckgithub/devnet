---
title: A10 Network
description: A10 Network
tags: a10network
---

# Links

https://www.eve-ng.net/index.php/documentation/howtos/a10-vthunder/

https://support.a10networks.com/support/axseries donwload hardware image and update packages

https://www.youtube.com/watch?v=kNMEpT9zqmA update A10

https://peteguan.github.io/blog/setting_a10_vrrp-a_with_cli/

https://www.youtube.com/watch?v=Bb6EVmXbabs configure virtual server

</br>

Update commands
```
write memory all-partitions 
________________________________________
show bootimage 
________________________________________
show startup-config all 
________________________________________
backup system tftp://192.168.99.120/backup.txt 
________________________________________
show techsupport export use-mgmt-port tftp:192.168.99.120/a10log.log 
________________________________________
link startup-config default secondary 
________________________________________
show vrrp-a 
________________________________________
vcs disable 
________________________________________
show vcs summary 
________________________________________
conf t device 2 
________________________________________
vrrp-a vrid 0 device 2 also check which vrid number your config has 
________________________________________
blade-parameters device 2 
________________________________________
priority 250 device 2 
________________________________________
end device 2 
________________________________________
show vrrp-a device 2 
________________________________________
conf t device 1 
________________________________________
upgrade hd pri use-mgmt-port tftp://192.168.99.120/ACOS_non_FTA_5_2_1-p3_70.64.upg device 1 
________________________________________
show version device 1 
________________________________________
conf t device 2 
________________________________________
vrrp-a vrid 0 device 2 
________________________________________
blade-parameters device 2 
________________________________________
priority 10 device 2 
________________________________________
end device 2 
________________________________________
show vrrp-a device 2 
________________________________________
reboot device 2 and dont save the config!
```

</br>

Helpful Commmands
```
active partition CUBES changes partition 
________________________________________
show slb virtual-server bind show virtual server to physical server bindings 
________________________________________
system-reset restore to factory settings 
________________________________________
restore use-mgmt-port tftp://192.168.99.120/backup.txt restore startup config 
________________________________________
bootimage hd sec to boot the old image if anything failed during upgrad 
________________________________________
copy running-config tftp://192.168.99.120/t1est1.txt get the running-config from tftp server 
________________________________________
show startup-config all-partitions 
________________________________________
show interfaces brief 
________________________________________
show mac-address-table 
________________________________________
show ip route 
________________________________________
show arp 
________________________________________
show start all 
________________________________________
show vrrp-a higher priority is active device 
________________________________________
show vcs summary 
________________________________________
#a vblade is the slave of the master so the configs will be consistent thats why we hav eto disable vcs virtual cluster 
________________________________________
#vrrp-a is for the redundancy 
________________________________________
no logging monitor 
________________________________________
no logging syslog 
________________________________________
vrrp-a commom enable vrrp-a options 
________________________________________
device-id 1 the standby device needs device-id 2 
________________________________________
set-id 1 
________________________________________
enable 
________________________________________
vcs enable virtual cluster switching
```

</br>

A10 Network Config
```
vrrp-a common 
device-id 1 
set-id 1 
________________________________________
device-context 1 
vcs enable 
________________________________________
device-context 2 
vcs enable 
________________________________________
vcs floating-ip 192.168.99.109 255.255.255.0 
________________________________________
vcs device 1 
priority 200 
interfaces management 
interfaces ethernet 1 
affinity-vrrp-a-vrid 1 
enable 
________________________________________
vcs device 2 
priority 100 
interfaces management 
interfaces ethernet 1 
affinity-vrrp-a-vrid 1 
enable 
________________________________________
vrrp-a vrid-lead 1 
________________________________________
device-context 1 
hostname ADC005 
________________________________________
device-context 2 
hostname ADC006 
________________________________________
device-context 1 
interface management 
ip address 192.168.99.104 255.255.255.0 
ip control-apps-use-mgmt-port 
ip default-gateway 192.168.99.1 
________________________________________
device-context 2 
interface management 
ip address 192.168.99.105 255.255.255.0 
ip control-apps-use-mgmt-port 
ip default-gateway 192.168.99.1 
________________________________________
interface ethernet 1/1 
enable 
ip address 1.1.1.1 255.255.255.0 
________________________________________
interface ethernet 2/1 
enable 
ip address 1.1.1.2 255.255.255.0 
________________________________________
device-context 1 
vrrp-a fail-over-policy-template FailOV 
interface ethernet 1 weight 80 
________________________________________
device-context 2 
vrrp-a fail-over-policy-template FailOV 
interface ethernet 1 weight 80 
________________________________________
vrrp-a vrid 1 
floating-ip 1.1.1.3 
preempt-mode disable 
device-context 1 
blade-parameters 
priority 100 
fail-over-policy-template FailOV 
device-context 2 
blade-parameters 
priority 50 
fail-over-policy-template FailOV 
________________________________________
cloud-services meta-data 
enable 
provider openstack 
________________________________________
end

```

</br>

# setting up virtual server to load balance to many physical servers. THe A10 node has to be on the same switch as the physical servers

GUI
<markdown-image src="A10_Network/1.PNG" alt="Alt text"></markdown-image>
<markdown-image src="A10_Network/2.PNG" alt="Alt text"></markdown-image>
<markdown-image src="A10_Network/3.PNG" alt="Alt text"></markdown-image>
________________________________________

</br>

CLI
<markdown-image src="A10_Network/4.PNG" alt="Alt text"></markdown-image>
<markdown-image src="A10_Network/5.PNG" alt="Alt text"></markdown-image>

How a A10 Network load balancer works in production
<markdown-image src="A10_Network/1.PNG" alt="Alt text"></markdown-image>


