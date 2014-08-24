vec = require 'vec2d'
draw = require './draw'

class Circle
  constructor: (obj) ->
    @center = vec obj.center.x, obj.center.y
    @acceleration = vec 0, 0
    @velocity = vec obj.velocity.x, obj.velocity.y

    @radius = obj.radius
    @minRadius = @radius*0.2
    @minRadius = 10 if @minRadius < 10
    
    @mass = 1 # @radius * @radius * 2 *Math.PI
    @neighbors = []
    @drawQuee = []
    @zeroAccelerationTime = 0

  applyForce: (force) ->
    @acceleration.add(force.scaled(1/@mass))
  
  isStopped: ->
    @neighbors.length > 0
  
  stop: ->
    @acceleration.scale(0)
    @velocity.scale(0)

  edgeForce: (max) ->
    # force= vec 0, 0
    x = 0
    y = 0
    x += 1 if @center.x < @radius
    y += 1 if @center.y < @radius
    x -= 1 if @center.x > max.x - @radius
    y -= 1 if @center.y > max.y - @radius
    f = vec(x, y)
    if f.length() > 0
      # return @velocity.clone().scale(-2)
      @velocity.clone().reflect(f);
      # f.normalize().scale(@velocity.length())
    return f

  separateForce: (circles) ->
    force= vec 0, 0
    count = 0
    neighbor = null
    for circle in circles
      continue if circle == @
      distance = @center.minus(circle.center)
      currentDistance = distance.length()
      minDistance = circle.radius + @radius
      continue if currentDistance > minDistance
      acurance = 1
      isAtEdge = currentDistance <= (minDistance + acurance) and currentDistance > (minDistance - acurance);
      isNotAccelerated = @acceleration.length() == 0 and  circle.acceleration.length() == 0
      hasPlaceInNeighbors = circle.neighbors.length < 2 and @neighbors.length < 2
      isNotNeighbor = @neighbors.indexOf(circle) == -1
      if isNotNeighbor and isAtEdge and isNotAccelerated and hasPlaceInNeighbors
        #todo implement @sendNeighborRequest(circle)
        neighbor = circle
        continue
      f = distance.normalize().scale(minDistance/currentDistance)
      @drawQuee.push(draw.line.bind(draw,circle.center,circle.center.plus(f.scaled(circle.radius/2))))
      force.add(f);
      count++
    if (count == 0 and neighbor!=null)
      @stick(neighbor)
      # @neighbors.push(neighbor)
      # neighbor.neighbors.push(@)

    if (count > 0)
      force.scale(1/count)
    force

  stick: (circle) ->
    @neighbors.push(circle)
    @stop()
    circle.neighbors.push(@)
    circle.stop()

  separate: (circles) ->
    return if @isStopped()
    @applyForce(@separateForce(circles))

  edge: (max) ->
    return if @isStopped()
    @applyForce(@edgeForce(max))

  update: (time) ->
    # todo es ro moishalos mainc agrdeleben modraobas arrad a wesit ganolebuli unda iyos energia 
    # return if @isStopped()
    if @acceleration.length() == 0 and time - @zeroAccelerationTime > 500
      @zeroAccelerationTime = time
    else
      if(time > @zeroAccelerationTime + 3000 && @radius > @minRadius*3)
        @radius -= (time - @zeroAccelerationTime) / 2000;
      if(time > @zeroAccelerationTime + 6000 && @radius > @minRadius)
        @radius -= (time - @zeroAccelerationTime) / 2000; 
      if(time > @zeroAccelerationTime + 6000 && @radius > @minRadius*0.5)
        @radius -= (time - @zeroAccelerationTime) / 2000;    

    @velocity.add(@acceleration);
    @velocity.boundMax
      x:1
      y:1
    @center.add(@velocity)
    @acceleration.scale(0);
    @drawQuee.push(draw.line.bind(draw,@center,@center.plus(@velocity.scaled(@radius/2))))

    return

  draw: (ctx) ->
    @ctx = ctx;
    ctx.beginPath()
    ctx.arc @center.x, @center.y, @radius, 0, 2 * Math.PI, false
    ctx.lineWidth = 1
    if @neighbors.length == 0 
      ctx.strokeStyle = 'red'
    else if @neighbors.length == 1 
      ctx.strokeStyle = 'blue'
    else if @neighbors.length == 2
      ctx.strokeStyle = 'green'
    else 
      ctx.strokeStyle = 'orange'
    
    for neighbor in @neighbors
      draw.line(@center,neighbor.center,ctx)
    for d in @drawQuee
      d(ctx)
    @drawQuee = []
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