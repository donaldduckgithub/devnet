---
title: install ASA VPN certificate installation
description: install ASA VPN certificate installation 
tags: asa, vpn
---
https://www.sslshopper.com/csr-decoder.html encodes csr (csr signing request) to check its values

openssl req -in mycsr.csr -noout -text equivalent of the website

https://www.cisco.com/c/en/us/support/docs/security-vpn/public-key-infrastructure-pki/200339-Configure-ASA-SSL-Digital-Certificate-I.html step 2 and 3 are the same as step 1

<markdown-image src="asa_vpn_cert/1.PNG" alt="Alt text"></markdown-image>
<markdown-image src="asa_vpn_cert/2.PNG" alt="Alt text"></markdown-image>
<markdown-image src="asa_vpn_cert/3.PNG" alt="Alt text"></markdown-image>
<markdown-image src="asa_vpn_cert/4.PNG" alt="Alt text"></markdown-image>
<markdown-image src="asa_vpn_cert/5.PNG" alt="Alt text"></markdown-image>
<markdown-image src="asa_vpn_cert/6.PNG" alt="Alt text"></markdown-image>

verify Certificate signing request (open with text editor to see if its a request) with public CA (Sectigo) 

<markdown-image src="asa_vpn_cert/7.PNG" alt="Alt text"></markdown-image>
<markdown-image src="asa_vpn_cert/8.PNG" alt="Alt text"></markdown-image>