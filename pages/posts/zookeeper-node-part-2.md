### [Zookeeper with node.JS on OS X - Part 2: Setting up the Node.JS Client](/posts/zookeeper-node-part-2.html)
July 16, 2012

At first I thought node-zookeeper was the best module out there for working with zk and node but the API is gross. I was glad to find out I wasn't alone. [Mark Cavage](https://github.com/mcavage) from Joyent was kind enough to write a wrapper around it that makes it feel more like the native node file system api. You can find it here: https://github.com/mcavage/node-zkplus or just install it via npm.

````
  npm install zkplus
````

then just write your client code. Here's the usage example taken from the github project:

````js
var assert = require('assert')
  , zkplus = require('zkplus')

var client = zkplus.createClient({
  servers: [{
    host: 'localhost'
    , port: 2181
  }]
});

client.on('connect', function () {
  client.mkdirp('/foo/bar', function (err) {
    assert.ifError(err);
    client.rmr('/foo', function (err) {
      assert.ifError(err);
      client.close();
    });
  });
});
````