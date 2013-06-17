## [When Semicolons Are Not Optional](/posts/when-semicolons-are-not-optional.html)
May 15, 2013

Use semicolons. But if you don't use semicolons, know when they're not optional.

````js
// here we want to create a function and call it immediately
(function(msg){
  console.log(msg)
})('wow')
````

````js
// but what if we have two of these in a row?
(function(msg){
  console.log(msg)
})('wow')
(function(msg){
  console.log(msg)
})('wow')
// produces a TypeError: undefined is not a function
````

wha!?

````js
;(function(msg){
  console.log(msg)
})('wow')
;(function(msg){
  console.log(msg)
})('wow')
````

ahh.. much better! so basically, if you're not going to do anything with a result wrapped in parentheses, put a semicolon in front of it. that's it!
