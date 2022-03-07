---
title: site-to-site VPN with strongswan
description: How to create a site-to-site vpn with strongswan and cisco asa
tags: vpn
---
# /etc/ipsec.secrets
```
#
# ipsec.secrets
#
# This file holds the RSA private keys or the PSK preshared secrets for
# the IKE/IPsec authentication. See the ipsec.secrets(5) manual page.
#
#192.168.2.152 193.46.63.7: PSK "SECRET"
193.46.63.7 192.168.2.152: PSK "SECRET"


```
# /etc/ipsec.conf
```
# ipsec.conf - strongSwan IPsec configuration file

# basic configuration

config setup
	plutodebug=none
	klipsdebug=none
	# crlcheckinterval=600
	# strictcrlpolicy=yes
	# cachecrls=yes
	# nat_traversal=yes
	nat_traversal=no
	# nhelpers=1
	charonstart=no
	interfaces=%defaultroute
	#interfaces="ipsec0=eth0"
	plutostart=yes
	# overridemtu=1414
        keep_alive=10
	

# Add connections here.

conn %default
    keyingtries=3
    keylife=8h

conn ivw-infonline
    type=tunnel
    authby=secret
    keyexchange=ike
    ike=aes-sha1-modp1536,aes256-sha1-modp1536,aes256-sha1-modp1024
    esp=aes-sha1-modp1536,aes256-sha1-modp1536,aes256-sha1-modp1024,aes256-sha1
    ikelifetime=86400s
    keyingtries=%forever
    keylife=28800s
    leftid=193.46.63.7
    left=193.46.63.7
    leftsubnet=10.10.11.37/32
    right=192.168.2.152
    rightnexthop=192.168.2.1
    rightfirewall=yes
    rightid=192.168.2.152
    rightsubnet=192.168.2.0/24
    # rightsourceip=192.168.2.152
    compress=no
    # auto=add
    auto=start
    pfs=yes
    pfsgroup=modp1024

```
</br>

Links:

https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-firewalls/215884-configure-a-site-to-site-vpn-tunnel-with.html
https://www.atlantic.net/vps-hosting/how-to-install-and-configure-strongswan-vpn-on-ubuntu-18-04/
https://wiki.strongswan.org/projects/strongswan/wiki/ipseccommand

</br>

Helpful Commands
```
nano /etc/sysctl.conf
apt-get update
apt-get install strongswan
nano /etc/ipsec.conf
nano /etc/ipsec.secrets
ipsec start
ipsec stop
ipsec statusall
tcpdumb esp
show crypto ipsec sa peer 10.10.10.10
show vpn-sessiondb detail l2l filter ipaddress 10.10.10.10
debug crypto ipsec 255
debug crypto ikev1
debug crypto condition peer 10.10.10.10
```

#Cisco ASA site

<markdown-image src="vpn_strongswan/1.PNG" alt="Alt text"></markdown-image>

<markdown-image src="vpn_strongswan/2.PNG" alt="Alt text"></markdown-image>
