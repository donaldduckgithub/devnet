---
title: Ansible
description: Ansible
tags: ansible
---

# Installation:
```vue
sudo apt-get update 
sudo apt-get install software-properties-common 
sudo apt-add-repository ppa:ansible/ansible 
sudo apt-get update 
sudo apt-get install ansible 
ansible --version 
```
</br>

# Backup Config of Cisco Router
Create the yaml file with the command **nano confbackup.yaml**
type in following:
```yaml
---
- name: Backup Cisco Router or Switch
  hosts: Cisco
  connection: network_cli
  gather_facts: false
  tasks:
    - name: Accespt ansible net hostname
      ios_facts:
        gather_subset: all
    - name: Get current date
      local_action: command date +%Y-%b-%d
      register: date
    - name: Get current time
      local_action: command date +%H:%M
      register: time
    - name: Get running-config and save it
      ios_config:
       backup: yes
       backup_options:
         #ansible_host = getting device IP, ansible_net_hostname = getting device hostname
         filename: "{{ ansible_net_hostname }}_{{ ansible_host }}.cfg"
         #Please change /home/hawar/Desktop to your direcotry
         #Every time create a new directory under named date and time
         dir_path: /etc/ansible/backup/{{ date.stdout }}_at_{{ time.stdout }}
    - name: Tasks done
      debug: msg="All tasks has been done on {{ date.stdout }} at {{ time.stdout }}."
```
Create the hosts file with the command **nano hosts**
type in following:
```
[Cisco]
R1 ansible_host=192.168.10.38
[Cisco:vars]
ansible_connection=network_cli
ansible_network_os=ios
ansible_user=cisco
ansible_password=cisco
ansible_become=yes
ansible_become_method=enable
ansible_become_password=cisco
```
Execute the Ansible script with following command:
```
ansible-playbook -i hosts backup.yaml
```
You need SSH configured on the network device for the ansible script to work
</br>

# Write an Interface and automatically execute it with Cron Job
```yaml
---
- name: Get System Infomation
  hosts: site_a
  connection: network_cli
  gather_facts: no
  
  vars:
    backup_dir: /etc/ansible/backup
  
  tasks:
  - name: Backup configs
    ios_config:
      backup: yes
      backup_options:
        filename: "{{ inventory_hostname }}_running_cfg.txt"
        dir_path: "{{ backup_dir }}"
    
  - name: get system interfaces
    ios_config:
      lines:
        - description Raspberry Pi
      parents: "{{ item }}"
    with_items:
      - interface Ethernet0/1
      - interface Ethernet0/2
      
  - name: Save switch configuration
    ios_config:
      save_when: modified
```


open crontab editor with the command **crontab -e**
type in following command: (the 5 stars means that it executes every minute once)
```
* * * * * /usr/bin/ansible-playbook -i /etc/ansible/hosts /etc/ansible/writeint.yaml 
```
list all crontab jobs with **crontab -l**