---
title: other
description:  other
tags: other
---

Filezilla login example for eve-ng
```
192.168.178.41	root	admin	22
```

</br>

jumphost mit cygwin
```
cd C:/Users/akettern/privatekey
ssh -i id_rsa root@vnocbn001
```

</br>

Cygwin Dateien von remote Server per scp kopieren über SSH
```
cd C:/Users/akettern/privatekey
scp -i id_rsa root@vnocbn001:/var/rancid/firewall/configs/aasabn011.infon aasabn011
scp -i id_rsa root@vnocbn001:/var/rancid/networking/configs/aroubn003.infon aroubn003
scp -i id_rsa -r root@vnocbn001:/var/rancid/firewall/configs/ configs #copy a folder
```

</br>

Mit der Software Puttygen kann man ein SSH Key generieren
SSH private key zu id_rsa konvertieren mit puttygen
```
private key über load button reinladen
conversions > export openssh key (force new file format)
```

</br>

um key auf remote server zu kopieren per scp mit cygwin
``` python
Chmod 0400 id_rsa #im cmd und im directory wit key um rechte zu erhöhen damit man key auch in öffentl ordnern nutzen kann
scp -i id_rsa id_rsa root@vtbnbn001:id_rsa
```

</br>

files per SCP kopieren
```
copy scp://root@10.10.14.190/asr1000-universalk9.17.03.03.SPA.bin flash:
oder
scp -i id_rsa asr1000-universalk9.17.03.03.SPA.bin root@10.10.14.68:asr1000-universalk9.17.03.03.SPA.bin
```

</br>

Public SSH Key in Pfad kopieren
``` python
cat root/.ssh/authorized_keys
oder less root/.ssh/authorized_keys        #mit :q modus verlassen

less messages | grep "dkurz"
```

</br>

copy output of commands in txt file and export it
```
show tech-support details > bootflash:tech-support19012022
copy bootflash:tech-support2 scp://root@10.10.14.68/root
scp root@vnocbn001:/root/tech-support2 tech-support2.txt
```

</br>

Raspberry Pi (raspbian debian) Keyboard layout aendern
```
Preferences > Raspberry Pi Configuration
oder uber CLI:
sudo dpkg-reconfigure locales
sudo dpkg-reconfigure keyboard-configuration 
```

</br>

Rancid Config
```
cd /var/rancid/networking
sudo vi router.db
HOTKEY i
hostname einf�gen: router.domain.de;cisco;up
HOTKEY ESC
:wq
cd /var/rancid
vi .cloginrc
HOTKEY i
HOTKEY ESC
:wq
sudo -u rancid rancid-run
ls -las //versteckte folder
ll //wie ls blo� besser
:wq //write and quit nach modifizieren einer datei mit dem command vi 
```