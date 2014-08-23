f = require 'franim'
n = require 'numberer'
draw = 
  spiral: (o) ->
    sAngle = Math.PI + o.angle;
    eAngle = sAngle + Math.PI * 2 * o.number;
    
    center = 
      x: o.start.x + Math.cos(o.angle)*o.radius
      y: o.start.y + Math.sin(o.angle)*o.radius
    
    increment = 2 * Math.PI / 60 #STEPS_PER_ROTATION
    theta = sAngle
    @beginPath()
    @moveTo center.x,center.y
    while theta <= eAngle + increment
      progress = (theta - sAngle)/(eAngle - sAngle)
      tempTheta = if o.direction then theta else -1*(theta - 2*o.angle)
      newX = o.radius * Math.cos(tempTheta) * (progress)
      newY = o.radius * Math.sin(tempTheta) * (progress)
      theta += increment;
      @.lineTo center.x + newX, center.y + newY
    @.stroke()

    return

f "canvas",
  config:
    fullSize: true

  clear: (ctx) ->
    ctx.fillStyle = "black"
    ctx.fillRect 0, 0, @width.get(), @height.get()

  setup: (ctx) ->
    @width = new n @anim.getWidth
    @height = new n @anim.getHeight
    @clear(ctx)
    @spirals = []
    for i in [0...20]
      @spirals[i] =
        start:
          x:Math.random()*(@width.get()-200) + 100
          y:Math.random()*(@height.get()-200) + 100
        angle:Math.random()*360*(Math.PI/180)
        direction:!!(Math.random() > 0.5)
        radius:Math.random()*120 + 30
        number:~~(Math.random()*7+ 3)
    return

  update: (time) ->

    return

  draw: (ctx) ->
    ctx.clearRect  0, 0, @width.get(), @height.get()
    ctx.fillStyle = "black"
    ctx.fillRect 0, 0, @width.get(), @height.get()
    ctx.strokeStyle = "red"
    for spiral in @spirals
      console.log(spiral)
      draw.spiral.call ctx, spiral
    @.anim.pause();
    return
