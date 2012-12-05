class @Entity
  update: (ctx) ->
    throw "Override Entity.update()"
    
  draw: (ctx) ->
    throw "Override Entity.draw()"