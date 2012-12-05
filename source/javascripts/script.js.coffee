#= require_tree .

window.requestAnimFrame = ->
  window.requestAnimationFrame       || 
  window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame    || 
  window.oRequestAnimationFrame      || 
  window.msRequestAnimationFrame     || 
  (callback) ->
    window.setTimeout(callback, 1000 / 60)

engine = new Engine()