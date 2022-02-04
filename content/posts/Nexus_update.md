---
title: Nexus Switch Update
description: how to update your nexus core-switch
tags: nexus
---

```
copy ftp://cisco:cisco@10.10.14.26/n7000-s2-dk9.8.2.6.bin bootflash: vrf administration 
________________________________________
show install all impact system bootflash:n7000-s2-dk9.8.2.6.bin kickstart bootflash:n7000-s2-kickstart.8.2.6.bin 
________________________________________
show tech-support > bootflash:TechSupport.txt 
________________________________________
install all kickstart n7000-s2-kickstart.*system n7000-s2-dk* 
________________________________________
show file bootflash:n7000-s2-dk9.8.2.6.bin md5sum 
________________________________________
show system internal flash um tmp folder zu kontrollieren 
________________________________________
copy bootflash:TechSupport.txt scp://root@10.10.14.68/root vrf administration 
________________________________________
```


