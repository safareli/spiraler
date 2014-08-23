f = require 'franim'
n = require 'numberer'
draw = require './draw'
Circle = require './circle'
vec = require 'vec2d'

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
    @circles = []
    for i in [0...100]
      @circles.push new Circle {
        center:
          x: Math.random() * (@width.get() - 100) + 50
          y: Math.random() * (@height.get() - 100) + 50
        velocity:
          x: Math.random() * 2 - 1
          y: Math.random() * 2 - 1
        radius: Math.random() * 10 + 5
      }
    return

  update: (time) ->
    for circle in @circles
      circle.separate(@circles)
      circle.edge(vec(@width.get(),@height.get()))
      circle.update(time)
  draw: (ctx) ->
    @clear(ctx)
    for circle in @circles
      circle.draw(ctx)
    # @anim.pause();
    return