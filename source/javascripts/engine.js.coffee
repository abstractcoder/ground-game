class @Engine
  constructor: ->
    window.addEventListener 'load', =>
      @init()
    , false

    window.addEventListener 'resize', =>
      @resize()
    , false

    setInterval =>
      @gameloop()
    , 1000/60
  
  init: ->
    @canvas = document.getElementsByTagName('canvas')[0]
    @canvas.width = window.innerWidth
    @canvas.height = window.innerHeight
    @ctx = @canvas.getContext('2d')
    
    @entities = []
    
    for i in [0..5]
      h = Math.random() * @canvas.height
      w = Math.random() * @canvas.width
      
      h -= h % 20
      w -= w % 20
      
      h += 1
      w += 1
      
      r = 10
      color = "##{(parseInt(Math.random() * 16 * 16 * 16)).toString(16)}"
      
      @entities.push new Ball(w, h, r, color)
    
  gameloop: ->
    @update()
    @draw()
    
  clear: ->
    @ctx.clearRect(0, 0, @canvas.width, @canvas.height);
    
  update: ->
    entity.update(@ctx) for entity in @entities
    
  draw: ->
    entity.draw(@ctx) for entity in @entities
    
  resize: ->
    if navigator.userAgent.match /iphone|ipad|ipod|android/i
      document.body.style.height = (window.innerHeight + 50) + 'px'
      
    @canvas.width = window.innerWidth
    @canvas.height = window.innerHeight  
    @canvas.style.width = @canvas.width + 'px';
    @canvas.style.height = @canvas.height + 'px';

    # we use a timeout here because some mobile
    # browsers don't fire if there is not
    # a short delay
    window.setTimeout ->
      window.scrollTo(0,1)
    , 1