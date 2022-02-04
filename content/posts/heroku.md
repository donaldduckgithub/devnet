---
title: Heroku
description: Heroku
tags: other
---
# Theory
Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps

https://devcenter.heroku.com/articles/container-registry-and-runtime

this config is built on ubuntu desktop 20.04 

```
sudo apt update 
________________________________________
sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common 
________________________________________
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - 
________________________________________
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" 
________________________________________
sudo apt install snapd 
________________________________________
sudo snap install --classic heroku 
________________________________________
heroku login -i 
________________________________________
heroku container:login 
________________________________________
git clone https://github.com/heroku/alpinehelloworld.git 
________________________________________
cd alpinehelloworld/ 
________________________________________
heroku container:push web 
________________________________________
heroku container:release web 
________________________________________
heroku open
```
 You can deploy apps directly online like https://hub.docker.com/r/bkimminich/juice-shop

built version is https://devnettesting.herokuapp.com

