---
title: Routerupdate
description:  how to update your Cisco Router 
tags: router
---

``` python
#TFTP Server starten
copy tftp://10.10.14.26/asr1000-universalk9.17.03.03.SPA.bin flash:
conf t
boot system flash bootflash:/asr1000-universalk9.17.03.03.SPA.bin
write memory
reload 
```

# Routerupdate for subpackages bzw andere methode
``` 
install add file tftp://10.10.14.26/FILENAME activate commit
conf t
boot system flash:packages.conf 
```