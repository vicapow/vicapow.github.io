var w = $('body').width()
var card = { height: 200 }
var rand = function(n){ return Math.random() * n }
var translate = function(x, y){ return 'translate(' + x + ',' + y + ')' }
var goat_sticker = d3.sticker(d3.select('.stickers .goat').node())
var car_sticker = d3.sticker(d3.select('.stickers .car').node())
var shuffle = function(array){
  var ret = []
  array = array.slice(0) // copy
  while(array.length)
    ret.push(array.splice(Math.floor(rand(array.length)), 1)[0])
  return ret
}

function end_all(cb){
  return function(selector){
    var count = selector.size()
    // this function will get called for each finished transition
    selector.each('end', function(){ if(--count === 0) cb() })
  }
}