---
title: Factory reset your network device
description: Factory reset on a router or switch 
tags: router, catalyst
---

# Reset a catalyst switch
https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9300/software/release/16-6/configuration_guide/sys_mgmt/b_166_sys_mgmt_9300_cg/b_166_sys_mgmt_9300_cg_chapter_01100.html

Consolensitzung starten

Switch neu starten //Stecker vom Switch ziehen

//wieder reinstecken

Switch Button gedrueckt halten bis aufhoert zu leuchten 

```
Flash_init
Dir flash:
delete flash:config.old
rename flash:config.text flash:config.old
boot
[y] 
```

# Reset a 2800 Router
Consolensitzung starten

Switch neu starten //Stecker vom Switch ziehen

//wieder reinstecken

Switch Button gedrueckt halten bis aufhoert zu leuchten

```
Strg-Pause
?
confreg //zeigt confreg an zb. config-register 0x2102
confreg 0x2142
boot
--------------oder-----------
enable
erase startup-config
conf t
exit
reload
[y] 
```