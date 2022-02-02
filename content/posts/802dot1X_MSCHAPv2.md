---
title: 802.1X configure NEAT
description: Configure 802.1X Network Edge Authentication Protocol to let your switch authenticate itself
tags: 802.1X
---

# Links:
Configure NEAT: https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/sec_usr_8021x/configuration/15-mt/sec-user-8021x-15-mt-book/sec-ieee-neat.html

authentication configure on ports: https://www.youtube.com/watch?v=a1xjkYpUt5M  

</br>

 in your access point authorization policy add a new authorization profile 
<markdown-image src="802dot1X_NEAT/1.PNG" alt="Alt text"></markdown-image>

 Give it a name and under common tasks press NEAT 
<markdown-image src="802dot1X_NEAT/2.PNG" alt="Alt text"></markdown-image>

 select it as authorization profile 
<markdown-image src="802dot1X_NEAT/3.PNG" alt="Alt text"></markdown-image>
 paste the config on your switchport. Use switchport mode trunk allowed 1,5 if you need an switchport mode access or if you just want to only apply specific vlans 

```python
switchport trunk encapsulation dot1q
switchport mode access #gets to trunk mode if neat auth profile in ise is active
authentication event fail action next-method
authentication event server alive action reinitialize
authentication host-mode multi-host #only first mac is authenticated
authentication order dot1x mab
authentication priority dot1x mab
authentication port-control auto
authentication periodic
authentication timer reauthenticate server
authentication timer inactivity server
authentication violation restrict
mab
dot1x pae authenticator
dot1x timeout tx-period 7
spanning-tree portfast trunk 
```

</br>

 get the mac address of the AP with show authentication sessions interface gigabitEthernet2/0/46 
<markdown-image src="802dot1X_NEAT/4.PNG" alt="Alt text"></markdown-image>

 type in the MAC Adress in your identity group for Access Points 
<markdown-image src="802dot1X_NEAT/5.PNG" alt="Alt text"></markdown-image>

port states
<markdown-image src="802dot1X_NEAT/6.PNG" alt="Alt text"></markdown-image>

# helpful Commands


``` python
peer-keepalive destination 192.168.254.253 
source 192.168.254.254 vrf vpc-kal #separate statische route zwischen switchen 
debug authentication debug dot1x 
debug authentication feature autocfg all 
capwap ap dot1x username spiderap password 123 #type in directly on the AP if needed 
show ap summary 
 show ap tag summary 
```
