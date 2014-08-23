vec = require 'vec2d'
class Circle
  constructor: (obj) ->
    @center = vec obj.center.x, obj.center.y
    @acceleration = vec 0, 0
    @velocity = vec obj.velocity.x, obj.velocity.y

    @radius = obj.radius
    @mass = 1 # @radius * @radius * 2 *Math.PI
  
  applyForce: (force) ->
    # force = mass * acceleration
    # acceleration = force / mass
    @acceleration.add(force.scaled(1/@mass))
  
  edgeForce: (max) ->
    # force= vec 0, 0
    x = 0
    y = 0
    x -= 1*@center.x if @center.x < 0
    y -= 1*@center.y if @center.y < 0
    x -= @center.x - max.x if @center.x > max.x 
    y -= @center.y - max.y if @center.y > max.y 
    vec(x, y)

  separateForce: (circles) ->
    force= vec 0, 0
    count = 0

    for circle in circles
      continue if circle == @
      distance = @center.minus(circle.center)
      currentDistance = distance.length()
      minDistance = circle.radius + @radius
      continue if currentDistance > minDistance
      force.add(distance.normalize().scale(minDistance/currentDistance))
      count++
    
    if (count > 0)
      force.scale(1/count)
    force

  separate: (circles) ->
    @applyForce(@separateForce(circles))

  edge: (max) ->
    @applyForce(@edgeForce(max))

  update: () ->
    @velocity.add(@acceleration);
    @velocity.boundMax
      x:2
      y:2
    @center.add(@velocity)
    @acceleration.scale(0);
    return

  draw: (ctx) ->
    ctx.strokeStyle = "red"
 
    ctx.beginPath()
    ctx.arc @center.x, @center.y, @radius, 0, 2 * Math.PI, false
    ctx.lineWidth = 1
    ctx.strokeStyle = 'red'
    ctx.stroke()

    return

Circle.random = (max,padding)->
  s = new Circle
  s.start = 
    x: Math.random()*(max.x + 2*padding) + padding
    y: Math.random()*(max.y + 2*padding) + padding
  s.radius = Math.random()*30 + 30
  s.angle = 360*Math.random()*(Math.PI/180)
  s.direction = !!(Math.random() > 0.5)
  s.circles = ~~(2 + Math.random()*4)
  return s;

module.exports = Circle