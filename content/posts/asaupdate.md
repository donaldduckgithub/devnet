---
title: asa Update Cisco ASA Firewalls
description: Update the system and asdm images of asa firewalls
tags: asa
---

For documentary purposes I use the AASABN013 (asa5525) as example. For this example I am connected to the primary (active) ASA in the HA Cluster.


<br />


<p> 1. Execute following commands to verify the version

```
show version
```


<br />


<p> 2. Download the System and ASDM Image file

- System Image file: https://software.cisco.com/download/home/284143131/type/280775065/release/9.14.3%20Interim

- ASDM Image file: https://software.cisco.com/download/home/286305187/type/280775064/release/7.16.1.150


<br />


<p> 3. Import the files to your ASA via ASDM Launcher with the file transfer option or use a FTP Server (e.g. svrabn002.ioint.de)


<br />


<p> 4. Execute following commands to verything is up and working

```
dir
show failover
```

<br />

<p> 5. Verify the MD5 hash with the official hash on the cisco website with the command 

```
verify /md5 disk0:/asa9-12-4-37-smp-k8.bin
```

<br />

<p> 6. Execute  these commands to change to the new system image


```
boot system disk:0/IMAGENAME
no boot system disk:0/IMAGENAME
```

<br />

<p> 7. Execute following command to change to the new ASDM image

```
 asdm image disk:0/ASDMFILE
```

<br />

<p> 8. verify that the new files are in place with 

```
show run | inc boot 
show run | inc asdm
```
<br />

<p> 9. Execute following command to reload the failover ASA

```
 failover reload-standby 
```

<br />

<p> 10. Execute following command and wait until the message Mate version has changed comes

```
terminal monitor
```

<br />

<p> 11. Execute following command to verify that everything is up again

```
show failover
```

<br />

<p> 12. Execute following command to make the failover ASA primary

```
 failover exec standby failover active

```

<br />

<p> 13. Execute reload

<br />

<p> 14. after the ASA is up again, start the ASDM Launcher and login with your user and wait until the update for the ASDM launcher has finished.

<br />

<p> 15. In the ASDM Launcher check if everything is up and running (especially the VPN sessions)
