---
title: 802.1X configure MSCHAPv2 
description: Configure Protected EAP MSCHAPv2 with the ISE, Active Directory and Catalyst Switch
tags: 802.1X
---

Create a group in Active Directory
<markdown-image src="802dot1X_MSCHAPv2/1.PNG" alt="Alt text"></markdown-image>

Import the group in the ISE
<markdown-image src="802dot1X_MSCHAPv2/2.PNG" alt="Alt text"></markdown-image>

Apply the group
<markdown-image src="802dot1X_MSCHAPv2/3.PNG" alt="Alt text"></markdown-image>

Add an authorization policy to WiFi
<markdown-image src="802dot1X_MSCHAPv2/4.PNG" alt="Alt text"></markdown-image>

add a authorization policy to wired access
<markdown-image src="802dot1X_MSCHAPv2/5.PNG" alt="Alt text"></markdown-image>

add an user to the group in the AD
<markdown-image src="802dot1X_MSCHAPv2/6.PNG" alt="Alt text"></markdown-image>

get the CA.cer and paste it in the security tab of your connection profile and login with your AD credentials
<markdown-image src="802dot1X_MSCHAPv2/7.PNG" alt="Alt text"></markdown-image>
