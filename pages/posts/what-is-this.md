### [What is this?](/posts/what-is-this.html)

Context is one of the most complicated things for people just starting out learning Javascript to wrap their brains around. Even if you've been programming in JS for a while, you may often run into bugs related to context. In this post, I'm going to do my best to explain context with as many examples and as few words as possible. Here goes!

First off, what is it? Well, before we talk about context, you need to make sure you understand how scope works.

````js
var a = 10;
var foo = function(a){
  console.log(a);
};
foo(20); // prints `20`
console.log(a); // prints `10`
````

what if I want to print the outer `a` in foo? well, we can either rename `a` outside of `foo` or rename `a` inside of `foo`.

````js
var a = 10;
var foo = function(b){
  console.log(a);
  console.log(b);
};
foo(20); // prints `10` then `20`
console.log(a); // prints `10`
````


Now for context. You can think of the context of a function as an additional, hidden argument called `this` which is by default, the `window` object in the browser.

````js
console.log(this === window); // prints `true`
var foo = function(){
  console.log(this);
};
foo(); // prints the `window` object to the console
````

However, we can change this `this` hidden argument, (aka, the context), if we call a function with a variable to the left of the dot.

````js
var a = {};
a.foo = function(){
  console.log(this);
};

a.foo(); // prints the `a` object to the console
````

notice how in the following example we're _not_ calling `f` with an object to the left of the dot?

````js
var f = a.foo;
console.log(f === a.foo); // prints `true`
f(); // prints the `window` object to the console
````

Another way in which a function can be called with a different context is by using `call` or `apply` With these functions we an explicitly set the context to whatever we want.

````js
var f = function(){
  console.log(this);
}
var a = { foo : 'bar' }
f(); // prints `window` to the console
f.call(a); // prints `{ foo : 'bar'}` to the console
f.apply(a); // prints `{ foo : 'bar'}` to the console
````

The only difference between `call` and `apply` is that `call` can take an unlimited number of additional arguments that will get passed to the function to be called. Similarly, `apply` optional takes an array of arguments as a second argument.

````js
f.call(theContext, arg1, arg2, arg3, ...);
f.apply(theContext, [arg1, arg2, arg3, ...]);
````

The most common issue people run into with context is when passing a function as a call to some other function that doesn't take an additional context argument. `setTimeout` is a great example.

````js
var a = {
  foo : function(){
    console.log(this);
  }
};
setTimeout(a.foo, 1000); // will print `window` to the console after 1 second. WTF?!?
````

the expression `a.foo` _returns_ a function, it doesn't _call_ a function in a particular context. When `setTimeout` actually calls the function it gets, it doesn't call it with any context so it defaults to the `window` object. Well crap. How can we make sure our function gets called in the right context? Magic. More specifically, the magic of closures.

````js
var a = {
  foo : function(){
    console.log(this);
  }
};
setTimeout(function(){
  a.foo();
}, 1000); // will print the object `a` to the console
````