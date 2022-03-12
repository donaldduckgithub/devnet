---
title: WLC  Catalyst add a new WLan with switch config
description: How to configure a new WLAN on your embedded Catalyst WLC
tags: catalyst
---

# Add a new SSID


<br />

In your Wireless controller add a new WLAN 
<markdown-image src="wlc_catalyst_wlan_config/1.PNG" alt="Alt text"></markdown-image>

select WPA2+WPA3 and Fast transition on disabled 
<markdown-image src="wlc_catalyst_wlan_config/2.PNG" alt="Alt text"></markdown-image>

only select PSK and SAE as Auth Key mgmt 
<markdown-image src="wlc_catalyst_wlan_config/3.PNG" alt="Alt text"></markdown-image>

choose your psk and press apply 
<markdown-image src="wlc_catalyst_wlan_config/4.PNG" alt="Alt text"></markdown-image>

under Tags & Profiles choose Policy 
<markdown-image src="wlc_catalyst_wlan_config/5.PNG" alt="Alt text"></markdown-image>

Choose a name for the policy and status enabled
<markdown-image src="wlc_catalyst_wlan_config/6.PNG" alt="Alt text"></markdown-image>

Select the Vlan and press apply 
<markdown-image src="wlc_catalyst_wlan_config/7.PNG" alt="Alt text"></markdown-image>

under Tags & profiles select Tags 
<markdown-image src="wlc_catalyst_wlan_config/8.PNG" alt="Alt text"></markdown-image>

go in the policy that already exists and click add and choose your Profile you just created 
<markdown-image src="wlc_catalyst_wlan_config/9.PNG" alt="Alt text"></markdown-image>

enable the Wlan (under Dashboards) 
<markdown-image src="wlc_catalyst_wlan_config/10.PNG" alt="Alt text"></markdown-image>

Press Save 
<markdown-image src="wlc_catalyst_wlan_config/11.PNG" alt="Alt text"></markdown-image>

# Access Switch Config
## VLan 1 - Enterprise WLan
```
interface Vlan1
 description Data
 ip address 10.10.4.1 255.255.255.0
 ip helper-address 10.10.2.46
 ip helper-address 10.10.2.33
```
</br>

## VLan 5 - Guest WLan
```
interface Vlan5
 description WLAN-Guest
 ip address 10.10.1.1 255.255.255.0
 ip helper-address 10.10.2.46
 ip helper-address 10.10.2.33
 ip access-group 100 in

ip access-list extended 100
 10 permit ip host 10.10.1.1 any
 20 permit ip host 10.10.1.2 any
 30 deny   ip 10.10.1.0 0.0.0.255 10.10.3.0 0.0.0.255 log
 40 deny   ip 10.10.1.0 0.0.0.255 10.10.4.0 0.0.0.255 log
 50 permit ip any any
```
</br>

## interface config with 802.1X
```
interface GigabitEthernet2/0/45
 description neuer AP
 switchport mode trunk
 authentication event fail action next-method
 authentication event server alive action reinitialize
 authentication host-mode multi-host
 authentication order dot1x mab
 authentication priority dot1x mab
 authentication port-control auto
 authentication periodic
 authentication timer reauthenticate server
 authentication timer inactivity server
 authentication violation restrict
 mab
 dot1x pae authenticator
 spanning-tree portfast trunk
!
```