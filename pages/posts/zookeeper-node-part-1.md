## [Zookeeper with node.JS on OS X - Part 1: Installing Zookeeper](/posts/zookeeper-node-part-1.html)
July 16, 2012

To get started, you'll need to install zookeeper. I'll assume you're using OS X. In which case, you can install zookeeper via home brew.

    brew install zookeeper

if that breaks because of a permissions issue mentioning this directory:

    /usr/local/var/run/zookeeper

just go ahead and create that folder using sudo:

    sudo mkdir /usr/local/var/run/zookeeper

after that, make sure to change the owner to the current user

    sudo chown victor:victor /usr/local/var/run/zookeeper

Now just try running `brew install zookeeper` again. zookeeper should now be installed in:

    /usr/local/Cellar/zookeeper/

You'll also want to setup the zookeeper configuration file in

    /usr/local/etc/zookeeper/zoo.cfg

I was able to just copy the example cfg to zoo.cfg from within that directory. tl:dr, your cfg file should look like this: https://gist.github.com/3126340

To clean up all this mess, I also added a small shell script that I put in `/usr/local/bin` that looks like this https://gist.github.com/3126356. make sure to also set the file mode to executable using `chmod +x zookeeper` so that zookeeper will find our cfg file and use the proper directory to store its data. this will also let us do:

    zookeeper start

to start the server or

    zookeeper stop

to stop it. yay!!