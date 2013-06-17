function loadScript(filename){
  var tag = document.createElement('script')
  tag.setAttribute("type","application/javascript")
  tag.setAttribute("src", filename)
  document.getElementsByTagName("head")[0].appendChild(tag)
}

var el = document.getElementsByTagName('code')
for(var i = 0; i < el.length; i++) el[i].className += ' prettyprint '

// make the code look pretty
loadScript("https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js")


// resize the iframes
$(function(){
  console.log($('iframe.matchmysize'))
  $('iframe.matchmysize').on('load resize', function(){
    $(this).css('height', $(this)[0].contentWindow.document.height)
  })
})