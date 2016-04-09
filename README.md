# Wercker aws CI CD example app

- Fork this repository
- Setup a wrecker account and have it point to the repo you just forked
- go to the app settings and create an ssh key
- add the public version of your key in your server's authorized_keys file

```
$ ssh into your server
$ vi ~/.ssh/authorized_keys
```

past the public key you got from wercker into the next line

- go back to your wercker settings and create a deployment target called aws (doesn't have to be but we will do that)
- edit the target
- add the ssk key as a variable in your deployment target calling it SSH_KEY
- add the variable your HOST, your USER, your REPO_URL and the name of your APP as variables as well

To test this out simple clone this repo and change something then push it to master
after that checkout the app on wercker


This repo is based off of this tutorial https://botleg.com/stories/build-and-deploy-to-openshift-with-travisci-and-wercker/
and the digital ocean tutorial by wrecker http://blog.wercker.com/2013/09/03/ContinuousDelivery-with-wercker-digitalocean-and-nodejs.html

use it to figure out the missing information :D