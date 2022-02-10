---
title: how to import a SSH Key on a device
description: how to import a SSH Key on a device
tags: ssh
---

copy the content of your public key
<markdown-image src="import_ssh_key/1.PNG" alt="Alt text"></markdown-image>

log into the server and execute the command:
```
cat .ssh/authorized_keys
```
save the public key in this format ssh-rsa PUBLIC_KEY
<markdown-image src="import_ssh_key/2.PNG" alt="Alt text"></markdown-image>

<br /> 

alternatively you could use login with the your admin user to the device and use following command to automatically copy your ssh key to the device:
```
ssh-copy-id root@vmondus001
```

login with the root user and use the passphrase of the private key as password to get access to the server