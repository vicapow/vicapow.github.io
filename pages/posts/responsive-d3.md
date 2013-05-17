### [Responsive D3](/posts/responsive-d3.html)
May 15, 2013

* __note:__ Resize the page to see the effect

## So what techniques make this possible?

### 1. don't use svg!
  I know this seems to goes against idiomatic d3 but remember that d3 is
  
> ...not a monolithic framework that seeks to provide every conceivable feature. Instead, D3 solves the crux of the problem: efficient manipulation of documents based on data. 

  And that's exactly what we're doing here except with non-svg DOM elements because of the lack of support for percentage based positioning of svg elements. (if you've found a better technique, please let me know!) 
  
  __update__: After writing this blog post, I found an example that does achieve a similar effect with svg elements using the the `preserveAspectRatio="none"` `<svg>` property in combination with `vector-effect: non-scaling-stroke` on `<path>` elements

### 2. use container divs

  A common pattern that I often see is trying to center align relative to a percentage distance from a parent element. for these cases, you can use an extra wrapper or container div

````css
.label-container{
  width: 1px;
  height: 1px;
  position: absolute;
  left: 50%;
}
.label-container .label{
  width: 100px;
  position: absolute;
  left: -50px; /* half of the width */
  text-align: center;
}
````

### 3. Use 'em' not 'px' !
  This will allow text elements to resize automatically when the font-size of their parent element changes. Then, when the window resizes, you can update the font size of the parent element like so:
  
````js
  window.onresize = function(){
    var graph = document.getElementsByClassName('graph')[0]
    graph.style.fontSize = (graph.offsetWidth / 75) + 'px'
  }
````