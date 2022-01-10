---
title: SSH config
description: Configure ssh on a network device
---

# Requirements:
```
ip domain-name CISCO.net
crypto key generate rsa label SSH-KEY modulus 2048
ip ssh rsa keypair-name SSH-KEY
ip ssh version 2
username CISCO secret CISCO
enable password CISCO
line vty 0 4
transport input ssh
login local 
```
# Connect to the network device:
```yaml
ssh -l cisco -oKexAlgorithms=+diffie-hellman-group1-sha1 10.10.10.1
sed -i 377d ~/.ssh/known_hosts #if ssh doesnt work on your device
```