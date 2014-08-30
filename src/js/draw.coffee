draw = 
  line: (start,end,ctx,color) ->
    # strokeStyle = ctx.strokeStyle
    # ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = (color or "blue")
    ctx.moveTo start.x,start.y
    ctx.lineTo end.x,end.y
    ctx.stroke()
    # ctx.beginPath()
    # ctx.strokeStyle = strokeStyle

  spiral: (ctx,o) ->
    sAngle = Math.PI + o.angle;
    eAngle = sAngle + Math.PI * 2 * o.circles;
    
    center = 
      x: o.start.x + Math.cos(o.angle)*o.radius
      y: o.start.y + Math.sin(o.angle)*o.radius
    

    draw.line(o.start,center,ctx,'black')

    increment = 2 * Math.PI / 60 #STEPS_PER_ROTATION
    theta = sAngle
    ctx.beginPath()
    ctx.moveTo center.x,center.y
    while theta <= eAngle + increment
      tempTheta = if o.direction then theta else -1*(theta - 2*o.angle)
      point =
        x: center.x + o.radius * Math.cos(tempTheta) * (progress)
        y: center.y + o.radius * Math.sin(tempTheta) * (progress)
      progress = (theta - sAngle)/(eAngle - sAngle)
      theta += increment;
      ctx.lineTo point.x, point.y
    ctx.stroke()
    return

module.exports = draw;