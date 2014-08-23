class Spiral
  constructor: () ->
    @start = 
      x:0 
      y:0
    @angle  = 0
    @direction = false
    @radius = 0
    @circles = 0
  
  update: (time) ->
    return

  draw: (ctx) ->
    return

Spiral.random = (max,padding)->
  s = new Spiral
  s.start = 
    x: Math.random()*(max.x + 2*padding) + padding
    y: Math.random()*(max.y + 2*padding) + padding
  s.radius = Math.random()*30 + 30
  s.angle = 360*Math.random()*(Math.PI/180)
  s.direction = !!(Math.random() > 0.5)
  s.circles = ~~(2 + Math.random()*4)
  return s;

# spiralGen = Spiral.random.bind(Spiral,{x:@width.get(), y:@height.get()},50)
module.exports = Spiral