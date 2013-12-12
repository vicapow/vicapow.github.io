'use strict'

$(function(){
  var el = $('.jumbotron')
    , w = el.outerWidth(), h = el.outerHeight()
    , svg = d3.select(el[0]).insert('svg', ':first-child').attr({width: w, height: h})
    , n = 70, r = 70
    , rand = function(n){ return Math.random() * n }
    , data = d3.range(n).map(function(d){
        return { 
          x: rand(w), y: rand(h)
          , vx: rand(0.2) - 0.1, vy: rand(0.2) - 0.1
          , r: rand(r) 
        }
      })
    , nodes = svg.selectAll('circle.node').data(data).enter().append('circle')
        .attr({ 'class': 'node', r: function(d){ return d.r } })
    , pt = 0, dt = 0

  d3.timer(function(t){
    dt = t - pt; pt = t // `dt` is the time duration between time steps
    data.forEach(function(d){ d.x = d.x + d.vx; d.y = d.y + d.vy })
    // update
    nodes.attr({
      cx: function(d){ return d.x }
      , cy: function(d){ return d.y }
    }).style('opacity', Math.min(t / 2000, 1))
  })

  $(window).on('resize', function(){ 
    w = el.outerWidth(); h = el.outerHeight()
    svg.attr({width: w, height: h})
  })

})