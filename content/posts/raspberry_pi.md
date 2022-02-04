---
title: Raspberry PI
description: Raspberry PI
tags: other
---

# Pi IP Adresse konfigurieren:

```
sudo service dhcpcd status
sudo service dhcpcd start
sudo systemctl enable dhcpcd
sudo nano /etc/dhcpcd.conf
//in der datei interface eth0 auskommentieren
sudo reboot
```