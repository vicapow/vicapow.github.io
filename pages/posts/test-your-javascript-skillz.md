### [Test Your Javascript Skillz](/posts/test-your-javascript-skillz.html)
May 25, 2013


## Hoisting

### will it throw an error?

````js
foo()
function foo(){
  console.log('foo')
}
````

#### answer
no
________________________________________________________________________________

````js
bar()
var bar = function(){
  console.log('bar')
}
````

#### answer
yes `TypeError: undefined is not a function`
________________________________________________________________________________

````js
if(false){
  var konnichiwa = 'bonjour'
}
console.log(konnichiwa)
````

#### answer
no
________________________________________________________________________________

````js
if(false){
  var hallo = 'privet'
}
console.log(nihao)
````

#### answer
yes `ReferenceError: nihao is not defined`
________________________________________________________________________________

## The Event Loop, Asynchronicity, And Closure Scope

#### what is the entire output to the console after 100ms for the following code?

````js
var array = []
for(var i = 0; i < 5; i++){
  setTimeout(function(){
    array.push(i)
  }, 100)
}

console.log('array: ', array)
setTimeout(function(){
  console.log('array: ', array)
},  100)
````

#### answer
> array: []
>
> array: [5,5,5,5,5]

________________________________________________________________________________
#### what if we changed the `100` in the second `setTimeout` to `99` ?

#### answer

> array: []
> 
> array: []

________________________________________________________________________________
#### how could we write the code above to produce the following output:

> array: []
> 
> array: [0,1,2,3,4]

#### answer

````js
var array = []
for(var i = 0; i < 5; i++){
  (function(i){ // closure
    setTimeout(function(){
      array.push(i)
    }, 100)
  })(i)
}

console.log('array: ', array)
setTimeout(function(){
  console.log('array: ', array)
},  100)
````

________________________________________________________________________________
#### what would be the output if we changed `i` to `i * 2` in the argument to the closure?

````js
var array = []
for(var i = 0; i < 5; i++){
  (function(i){
    setTimeout(function(){
      array.push(i)
    }, 100)
  })(i * 2) // used to be just `i`
}

console.log('array: ', array)
setTimeout(function(){
  console.log('array: ', array)
},  100)
````

#### answer

> array: []
> 
> array: [0,2,4,6,8]

________________________________________________________________________________
#### what is the output?

````js
function foo(baz){
  var hola = 'moshi moshi!'
  baz()
}

function bar(){
  console.log(hola)
}

foo(bar)
````

#### answer

> `ReferenceError: hola is not defined`

________________________________________________________________________________
## Automatic Semicolon Insertion

#### what is printed to the console?

````js
function foo(){
  return 
  {
    foo : "bar"
  }
}
console.log( typeof foo() === 'undefined')
````

##### answer

> true

________________________________________________________________________________

````js
var foo = function(){
  console.log('foo')
}
(function(){
  console.log('bar')
})()
````

##### answer

> `TypeError: undefined is not a function`

________________________________________________________________________________

#### How would you fix the code above?

##### answer

````js
var foo = function(){
  console.log('foo')
}
;(function(){ // comma
  console.log('bar')
})()
````
