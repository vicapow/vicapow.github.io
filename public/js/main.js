function loadScript(filename){
  var tag = document.createElement('script')
  tag.setAttribute("type","application/javascript")
  tag.setAttribute("src", filename)
  document.getElementsByTagName("head")[0].appendChild(tag)
}

var el = document.getElementsByTagName('code')
for(var i = 0; i < el.length; i++) el[i].className += ' prettyprint '

loadScript("https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js")

var victor = "powell";
var powell = "victor";
