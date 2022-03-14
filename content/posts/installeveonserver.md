---
title: Eve-pro credentials and how to Install eve-pro on ubuntu linux server
description: Eve-pro credentials and how to Install eve-pro on ubuntu linux server
tags: eve-ng
---

# Credentials 

idrac Dashboard: 192.168.0.120

root

nilswolf1

lifecycle ip: 192.168.0.140

</br>

vmware login (website): donalduckuck2@gmail.com

vmware 6 license: 04432-DU20K-A8W88-0030P-1XR7L

vmware esxi login:
root

standardkennwort (uppercase)

</br>

WAN connection (LAN2) IP: 192.168.178.190

Steckdose Platz Nr.5 und 6

</br>

eve-ng login:

root

nilswolf1

</br>

eve-ng web login:

admin

eve

</br>

Ubuntu Server Login:

root

nilswolf1

</br>

# dell r620 server and eve-ng installation
https://www.dell.com/support/kbdoc/de-de/000130160/

how-to-install-the-operating-system-on-a-dell-poweredge-server-os-deployment

https://www.virten.net/2016/11/free-esxi-6-5-how-to-download-and-get-license-keys/

https://www.eve-ng.net/images/EVE-COOK-BOOK-latest.pdf

https://www.youtube.com/watch?v=0otNmOA2hWc

</br>

install java (java.com)

download vmware vsphere andd access your free license: https://customerconnect.vmware.com/en/group/vmware/evalcenter?p=free-esxi6&source=dwnp

make it bootable with rufus and plug the usb stick into the server

go to 192.168.0.120 and start the virtual console

go to makros and press ctrl+alt+del or start the system

press F10 during reboot and configure lifecycle

click on deploy OS 

create a RAID (virtual disk) and do the other steps

restart server and wait till VMware installs itself automatically

remove usb stick and reboot

press F2 and configure Network Management and Network Adapters = physical ports on your server

go to mangement IP and activate license in Vmware Esxi

got to datastorebrowser and press upload and upload the eve-pro ISO

create eve-pro VM according to the eve cookbook (page 26, dont create too much RAM otherwise VM wont boot)

in fritzbox assign the wan network connection a static IP

</br>

# boot ubuntu server from usb stick

in virtual console choose Naechster Start -> UEFI-Geraetepfad

press F11 during boot

choose Uefi Boot Menu 

choose usb stick

</br>

# configure virtual disk

press ctrl + R during boot up get in the configuration utility

create virtual disk

</br>

# configure static IP ubuntu server

https://linuxize.com/post/how-to-configure-static-ip-address-on-ubuntu-18-04/

</br>

sudo su

ip link #show ethernet interfaces

nano /etc/netplan/01-netcfg.yaml #change network settings (might have a different file name)

*important* in the .yaml file change eno1 to eth0 (and so on)

netplan apply #applies network changes

ip add show dev eth2 #show network config for ethernet interface

</br>

# boot eve-ng on server

in virtual console choose Naechster Start -> PXE

</br>

# vpn

https://avm.de/service/vpn/praxis-tipps/vpn-verbindung-zur-fritzbox-unter-windows-einrichten-fritzfernzugang/