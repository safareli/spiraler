f = require 'franim'
n = require 'numberer'
draw = 
  line: (start,end) ->
    strokeStyle = @strokeStyle
    @stroke()
    @beginPath()
    @strokeStyle = "blue"
    @moveTo start.x,start.y
    @lineTo end.x,end.y
    @stroke()
    @beginPath()
    @strokeStyle = strokeStyle

  spiral: (num,o,generator) ->
    return if num == 0; 
    next = generator();

    sAngle = Math.PI + o.angle;
    eAngle = sAngle + Math.PI * 2 * o.number;
    
    center = 
      x: o.start.x + Math.cos(o.angle)*o.radius
      y: o.start.y + Math.sin(o.angle)*o.radius
    

    draw.line.call(@,o.start,center);

    increment = 2 * Math.PI / 60 #STEPS_PER_ROTATION
    theta = sAngle
    saveAtAngle = (Math.random() + 0.5)*Math.PI
    saved = false
    @beginPath()
    @moveTo center.x,center.y
    while theta <= eAngle + increment
      tempTheta = if o.direction then theta else -1*(theta - 2*o.angle)
      point =
        x: center.x + o.radius * Math.cos(tempTheta) * (progress)
        y: center.y + o.radius * Math.sin(tempTheta) * (progress)
      if not saved and eAngle - saveAtAngle < theta
        next.start.x = point.x
        next.start.y = point.y
        saved = true
        saveAtAngle = tempTheta
        draw.line.call(@,center,point);

      progress = (theta - sAngle)/(eAngle - sAngle)
      theta += increment;
      @lineTo point.x, point.y
    @stroke()

    next.angle = saveAtAngle%(Math.PI*2)
    next.direction = !o.direction;

    draw.spiral.call @, --num, next,generator;
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
    return

  update: (time) ->

    return

  randSpiral: () ->
    radius = Math.random()*70 + 30
    
    start:
      x:Math.random()*(@width.get() - 400)+200 
      y:Math.random()*(@height.get() - 400)+200
    angle:360*Math.random()*(Math.PI/180)
    direction:!!(Math.random() > 0.5)
    radius:radius
    number:~~(radius/10 + Math.random()*3)

  draw: (ctx) ->
    @clear(ctx)
    ctx.strokeStyle = "red"
    console.log(@randSpiral());
    draw.spiral.call ctx, 17 , @randSpiral(), (()->@randSpiral()).bind(@)
    @anim.pause();
    return