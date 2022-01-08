---
title: VPN side-to-side (client-to-side) Tunnel with ASA the VPN Wizard
description: Configure with a client-to-side VPN Tunnel with the ASDM Launcher
---


```vue
Requirements:
- Peer IP (public IP of the remote network)
- private IP in your network you want to NAT the public ip onto
- IKEv1 or IKEv2 pre-shared key
```
First in the ASDM Launcher we select the VPN wizard 
<markdown-image src="sitetositeVPNtunnel/1.PNG" alt="Alt text"></markdown-image>


We type in the Peer IP (Public IP address of the remote network) and choose the outside interface.

<markdown-image src="sitetositeVPNtunnel/2.PNG" alt="Alt text"></markdown-image>

Then we type the PSK. Can be IKEv1 or IKEv2. It has to match on both sides

<markdown-image src="sitetositeVPNtunnel/3.PNG" alt="Alt text"></markdown-image>

Create the NAT rule to map the remote public IP to a private IP in your network
<markdown-image src="sitetositeVPNtunnel/4.PNG" alt="Alt text"></markdown-image>

Create an ACL from the outside interface and as source the remote IP and as destination the private IPs you want to give access
<markdown-image src="sitetositeVPNtunnel/5.PNG" alt="Alt text"></markdown-image>
