# Wercker aws CI CD example app

Try forking this app on your account and test it with you aws server.

- Setup a wrecker account and have it point to this app
- create a deployment target called aws (matching the file in the repo)
- create an ssh key
- add the ssk key as a variable in your deployment target call it KEY_PRIVATE
- add you HOST, your USER, the name of your APP as variables as well

- add the public version of your key in your server's authorized_keys file

```
$ ssh into your server
$ vi ~/.ssh/authorized_keys
```

and past the public key under your current key

this app is based off of this tutorial https://botleg.com/stories/build-and-deploy-to-openshift-with-travisci-and-wercker/
and the digital ocean tutorial by wrecker http://blog.wercker.com/2013/09/03/ContinuousDelivery-with-wercker-digitalocean-and-nodejs.html

use it to figure out the missing information :D