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