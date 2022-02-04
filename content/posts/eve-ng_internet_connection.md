---
title: How to connect your eve-ng to the internet and configure base settings
description: How to connect your eve-ng to the internet and configure base settings 
tags : eve-ng
---
# Eve-NG cookbook
https://www.eve-ng.net/wp-content/uploads/2021/10/EVE-COOK-BOOK-4.14-2021.pdf Eve-pro Cookbook 

# import IOU/IOL Images

i86bi Images and CiscoIOUKeygen3f.py in donalduckuck1@gmail.com drive

open filezilla

copy i86bi images and CiscoIOUKeygen3f.py script in /opt/unetlab/addons/iol/bin/

In EVE VM 

```
/opt/unetlab/wrappers/unl_wrapper -a fixpermissions 
cd /opt/unetlab/addons/iol/bin/ 
chmod 0755 keygen.py 
python3 keygen.py 
/opt/unetlab/wrappers/unl_wrapper -a fixpermissions 
```
 IMPORTANT: REMOVE the file ending of iourc.txt in Filezilla. so its just iourc and not iourc.txt 

<br />

CiscoIOUKeygen3f.py script
```python
#! /usr/bin/python3
print("*********************************************************************")
print("Cisco IOU License Generator - Kal 2011, python port of 2006 C version")
import os
import socket
import hashlib
import struct
# get the host id and host name to calculate the hostkey
hostid=os.popen("hostid").read().strip()
hostname = socket.gethostname()
ioukey=int(hostid,16)
for x in hostname:
  ioukey = ioukey + ord(x)
print("hostid=" + hostid +", hostname="+ hostname + ", ioukey=" + hex(ioukey)[2:])
# create the license using md5sum
iouPad1 = b'\x4B\x58\x21\x81\x56\x7B\x0D\xF3\x21\x43\x9B\x7E\xAC\x1D\xE6\x8A'
iouPad2 = b'\x80' + 39*b'\0'
md5input=iouPad1 + iouPad2 + struct.pack('!i', ioukey) + iouPad1
iouLicense=hashlib.md5(md5input).hexdigest()[:16]
print("\nAdd the following text to ~/.iourc:")
print("[license]\n" + hostname + " = " + iouLicense + ";\n")
with open("iourc.txt", "wt") as out_file:
  out_file.write("[license]\n" + hostname + " = " + iouLicense + ";\n")
print("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\nAlready copy to the file iourc.txt\n ")
print("You can disable the phone home feature with something like:")
print(" echo '127.0.0.127 xml.cisco.com' >> /etc/hosts\n") 
```

# eve-ng reparieren falls nicht richtig booted

```
fsck.ext4 dev/sda1 //oder das filesystem was vorgeschlagen wird
exit 
```

# Configure Internet Access
https://theworldsgonemad.net/2021/eve-cloud-nat/

```
sudo apt-get update 
sudo apt install vim 
sudo apt-get install isc-dhcp-server 
vim /etc/default/isc-dhcp-server 
________________________________________
i hotkey 
INTERFACES='pnet9' 
Esc hotkey 
:wq hotkey 
________________________________________
vim /etc/dhcp/dhcpd.conf 
________________________________________
authoritative; 
subnet 192.168.99.0 netmask 255.255.255.0 { 
range 192.168.99.100 192.168.99.254; 
interface pnet9; 
option broadcast-address 192.168.99.255; 
option subnet-mask 255.255.255.0; 
option routers 192.168.99.1;} 
________________________________________
ip address add 192.168.99.1/24 dev pnet9 
echo 1 > /proc/sys/net/ipv4/ip_forward 
iptables -t nat -A POSTROUTING -o pnet0 -s 192.168.99.0/24 -j MASQUERADE 
vim /etc/network/interfaces 
________________________________________
iface eth9 inet manual 
auto pnet9 
iface pnet9 inet static 
address 192.168.99.1 
netmask 255.255.255.0 
bridge_ports eth9 
bridge_stp off 
________________________________________
dhcpd -t Check the syntax of dhcpd.conf file for errors 
________________________________________
systemctl start isc-dhcp-server Start the service 
________________________________________
systemctl enable isc-dhcp-server Enable it to start at each boot 
________________________________________
service isc-dhcp-server status Check the service is running with no errors 
________________________________________
vim /etc/sysctl.conf 
________________________________________
net.ipv4.ip_forward = 1 
________________________________________
sudo apt-get install iptables-persistent 
iptables -t nat -A POSTROUTING -o pnet0 -s 192.168.99.0/24 -j MASQUERADE 
netfilter-persistent save 
iptables -t nat -L To check IP table rules 
cat /var/lib/dhcp/dhcpd.leases Holds the IP addresses assigned by DHCP and their lease times 
brctl show Displays the association between physical interfaces, pnets and lab device ports 
________________________________________
in the Web UI and on the virtual device e.g. IOL Router 
rightclick -> network -> Cloud9 
________________________________________
conf t 
ip name-server 8.8.8.8 for DNS requests e.g. ping icq.de 
int eth 0/0 
ip address dhcp 
no shut 
in Ubuntu set the name server for DNS requests 
sudo nano /etc/resolv.conf 
nameserver 8.8.8.8
```

# helpful commands for internet access on eve-ng
```
https://theworldsgonemad.net/2021/eve-cloud-nat/ 
________________________________________
iptables -t nat -L Check NAT rules 
________________________________________
iptables -t nat -v -L PREROUTING -n --line-number get the_line_number 
________________________________________
iptables -t nat -D PREROUTING the_line_number delete nat rule with the_line_number 
________________________________________
service isc-dhcp-server status check status of dhcp server 
________________________________________
cat /var/lib/dhcp/dhcpd.leases check dhcp leases 
________________________________________
also go over SSH with putty on the eve VM to copy paste commands better
```

# Install Docker
``` python
apt update 
________________________________________
apt install eve-ng-dockers 
#apt install --reinstall eve-ng-dockers 
________________________________________
dc images lists images

```
<markdown-image src="eve-ng_internet_connection/1.PNG" alt="Alt text"></markdown-image>