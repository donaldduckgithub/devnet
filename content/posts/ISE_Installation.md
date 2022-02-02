---
title: ISE installation
description: how to install the Cisco Idenity Service Engine in VMware
tags: ise
---
# Requirements:

4 CPUs

32 GB RAM

200 GB Disk Space

Default Gateway

DNS Server

NTP Server


</br>

 Download the ise-2.7.0.356.SPA.x86_64.iso from the Cisco Website: https://software.cisco.com/download/home/283801620/type/283802505/release/2.7.0 
<markdown-image src="ise_installation/1.PNG" alt="Alt text"></markdown-image>

Create a virtual machine in VMware with the requirements above and start it with the iso Image. 
<markdown-image src="ise_installation/2.PNG" alt="Alt text"></markdown-image>

Enter the commands you are asked for in the ISE cli
I recommened to use your own DNS Server and NTP server to minimize problems 
<markdown-image src="ise_installation/3.PNG" alt="Alt text"></markdown-image>

Open up a web browser and type in the IP address that you assigned in Step 2. And that's it!
<markdown-image src="ise_installation/4.PNG" alt="Alt text"></markdown-image>

helpful commands
```
 reset-config 
 show application status ise 
```