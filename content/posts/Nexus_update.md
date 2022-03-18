---
title: Nexus Switch Update
description: how to update your nexus core-switch
tags: nexus
---

```
copy ftp://cisco:cisco@10.10.14.26/n7000-s2-dk9.8.2.6.bin bootflash: vrf administration #copy system and kickstart file to the switch

show run > scp://root@10.10.14.68/root vrf administration  #save the output to a txt file
show int status > scp://root@10.10.14.68/root vrf administration #save the output to a txt file
show port-channel summary > scp://root@10.10.14.68/root vrf administration #save the output to a txt file
show ip int brief > scp://root@10.10.14.68/root vrf administration #save the output to a txt file

show configuration session summary #check if there are active connections

show file bootflash:n7000-s2-dk9.8.2.6.bin md5sum #verify hash sum with hash sum of cisco website

show install all impact kickstart n7000-s2-kickstart.8.2.6.bin system n7000-s2-dk9.8.2.6.bin 

install all kickstart n7000-s2-kickstart.8.2.6.bin system n7000-s2-dk9.8.2.6.bin parallel #install all 10 fex at the same time

filesys delete /nxos/tmp/tacacs_crypt_service_1  #delete files out of tmp directory, or reboot switch to empty the linecards

```


