vec = require 'vec2d'
draw = require './draw'
generateGroup = (circle,nextCircle,group)->
  circle.friends

  return group
drawGroup = (group)->
  start = circle.friends[0].center.minus(circle.center).scale(-1)
  start.scale(circle.radius / (circle.friends[0].radius + circle.radius))
  draw.spiral ctx, 
    start: circle.center.plus start
    angle: start.angle() + Math.PI
    direction: false
    radius: circle.radius
    circles: Math.random()*5 + 3

class Circle
  constructor: (obj) ->
    @center = vec obj.center.x, obj.center.y
    @acceleration = vec 0, 0
    @velocity = vec obj.velocity.x, obj.velocity.y

    @radius = obj.radius
    @minRadius = @radius*0.2
    @minRadius = 10 if @minRadius < 10
    
    @mass = 1 # @radius * @radius * 2 *Math.PI
    @drawQuee = []
    @accelerationDuration = 0
    @accelerationTimeStart = 0
    @friends = []
    @requests = []


  applyForce: (force) ->
    @acceleration.add(force.scaled(1/@mass))
  
  stop: ->
    @acceleration.scale(0)
    @velocity.scale(0)

  edgeForce: (max) ->
    normal = vec 0, 0
    if @center.x < @radius 
      normal.x = 1
    else if @center.x > max.x - @radius
      normal.x = -1
    else if @center.y < @radius 
      normal.y = 1
    else if @center.y > max.y - @radius
      normal.y = -1
    sameDirectionX = (@velocity.x > 0 and normal.x > 0) or (@velocity.x < 0 and normal.x < 0)
    sameDirectionY = (@velocity.y > 0 and normal.y > 0) or (@velocity.y < 0 and normal.y < 0) 
    sameDirection = sameDirectionX or sameDirectionY
    if normal.length() > 0 and !sameDirection
      normal.scale(@velocity.scaled(-2).dot(normal))
    return normal

  separateForce: (circles) ->
    force= vec 0, 0
    count = 0
    for circle in circles
      continue if circle == @
      distance = @center.minus(circle.center)
      currentDistance = distance.length()
      minDistance = circle.radius + @radius
      acurance = 0.75
      continue if currentDistance >= minDistance - acurance
      f = distance.normalize().scale(minDistance/currentDistance)
      # f = distance.normalize().scale(@velocity.scaled(-2).dot(distance))#minDistance/currentDistance
      @drawQuee.push(draw.line.bind(draw,circle.center,circle.center.plus(f.scaled(circle.radius/2))))
      force.add(f);
      count++

    if (count > 0)
      force.scale(1/count)
    force

  connect: (circles)->
    return if @acceleration.length() > 0
    for circle in circles
      continue if circle == @
      return if @friends.length == 2 
      distance = @center.minus(circle.center).length()
      minDistance = circle.radius + @radius
      acurance = 0.75
      
      # isAtEdge = distance < minDistance + acurance and distance >= minDistance - acurance
      isAtEdge = Math.abs(distance - minDistance) <= acurance
      hasPlaceForFreind = circle.friends.length < 2
      isAccelerated = circle.acceleration.length() > 0
      isInFriends = @friends.indexOf(circle) > -1
      isStoped = circle.friends.length > 0 or  !isAccelerated
      if isAtEdge and hasPlaceForFreind and isStoped and !isInFriends
        @friends.push(circle)
        @acceleration.scale(0)
        @velocity.scale(0)

        circle.friends.push(@)
        circle.acceleration.scale(0)
        circle.velocity.scale(0)


  separate: (circles) ->
    @applyForce(@separateForce(circles))

  edge: (max) ->
    @applyForce(@edgeForce(max))

  checkLoop: (time) ->
    if @friends.length > 0 or @requests.length > 0 
      return
    
    if @acceleration.length() == 0
      @accelerationTimeStart = false
    else
      if @accelerationTimeStart  == false
        @accelerationTimeStart = time 
      @accelerationDuration = time - @accelerationTimeStart
      if(@accelerationDuration > 3000 && @radius > @minRadius*3)
        @radius -= 5;
      if(@accelerationDuration > 6000 && @radius > @minRadius)
        @radius -= 5;
      if(@accelerationDuration > 9000 && @radius > @minRadius*0.5)
        @radius -= 5;
  

  update: (time) ->
    return if @friends.length > 0 
    @velocity.add(@acceleration);
    @velocity.boundMax
      x:1
      y:1
    @center.add(@velocity)
    @acceleration.scale(0);
    @drawQuee.push(draw.line.bind(draw,@center,@center.plus(@velocity.scaled(@radius/2))))
    @requests = []
    return

  drawCircle: (ctx) ->
    ctx.beginPath()
    ctx.arc @center.x, @center.y, @radius, 0, 2 * Math.PI, false
    ctx.lineWidth = 1
    if @friends.length == 0
      ctx.strokeStyle = 'red'
    else if @friends.length == 1
      ctx.strokeStyle = 'green'
    else if @friends.length == 2
      ctx.strokeStyle = 'orange'
    else
      ctx.strokeStyle = 'blue'
    ctx.stroke()

  draw: (ctx) ->
    # if @friends.length == 1
    #   drawGroup(generateGroup(@,@friends[0]))
    # else
    #   @drawCircle(ctx)

    @drawCircle(ctx)

    if @friends.length > 0
      for friend in @friends  
        draw.line(@center,friend.center,ctx,'silver')

    for d in @drawQuee
      d(ctx,'red')
    @drawQuee = []

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