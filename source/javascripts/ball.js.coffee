#= require entity

class @Ball extends Entity
  constructor: (@x, @y, @r = 10, @color = "#f00") ->
    @dx = 20
    @dy = 20
  
  update: (ctx) ->
    @dx *= -1 if @x <= 0 || @x >= window.innerWidth
    @dy *= -1 if @y <= 0 || @y >= window.innerHeight 
      
    @x += @dx
    @y += @dy
    
  draw: (ctx) ->
    ctx.fillStyle = @color
    ctx.beginPath()
    ctx.arc(@x, @y, @r, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()