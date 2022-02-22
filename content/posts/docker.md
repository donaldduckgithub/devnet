---
title: Docker
description: Docker
tags : other
---

# Docker
 https://hub.docker.com/ 

https://docs.docker.com/engine/install/ubuntu/ 

```
 sudo -i gets the root user in terminal
docker ps lists active containers and its ids
docker ps -alists all containers and its ids
docker image ls -a lists the images
docker container run --name TEST-NGINX -p 80:80 -d nginx creates a webserver with nginx first is local, second port is container
docker logs -f 1f8548ceae31 shows logs of container with id
docker stop 1f8548ceae31 stops the container with id
sudo docker rm pythontest deletes the container
docker start 1f8548ceae31
ctrl + d quits the container 
```
<markdown-image src="docker/1.PNG" alt="Alt text"></markdown-image>
# pull a container
```
docker pull bkimminich/juice-shop
docker run --rm -p 3000:3000 bkimminich/juice-shop 
```

# create a custom image
```
mkdir dockertest1 sudo nano Dockerfile
FROM python
WORKDIR /home/ubuntu
COPY ./sample-app.py /home/ubuntu/.
RUN pip install flask
CMD python /home/ubuntu/sample-app.py
EXPOSE 8080 
sudo docker build . -t myubuntu 
sudo docker run -it myubuntu /bin/sh 
```
# push it to your docker hub account
```
sudo docker tag 1test donaldduckdocker/1test:v1
sudo docker commit test1 1test test1 is an image
sudo docker push donaldduckdocker/1test:v1 
```