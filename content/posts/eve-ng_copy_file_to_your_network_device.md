---
title: eve-ng set up ASDM launcher
description: set up up the ASDM Launcher for your asav
tags: eve-ng
---
config for the asa
```
int gigabitethernet 0/0
ip add 192.168.99.110
nameif outside
security-level 0
no shut

route outside 0.0.0.0 0.0.0.0 192.168.99.1  

http server enable
http 0.0.0.0 0.0.0.0 outside

username cisco password cisco
aaa authentication http console LOCAL

https://192.168.99.110/admin/public/asdm.jnlp

 asdm image disk:0/ASDMFILE
 show asdm image
```
<iframe src="https://drive.google.com/file/d/1MRoOh85cYvIqeZesxUXsbGbi5xpJzgFc/preview" width="640" height="480" allow="autoplay"></iframe>

