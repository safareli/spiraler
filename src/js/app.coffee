f = require 'franim'
n = require 'numberer'
draw = require './draw'
Circle = require './circle'
vec = require 'vec2d'

f "canvas",
  config:
    fullSize: true

  clear: (ctx) ->
    ctx.fillStyle = "rgb(234, 244, 250)"
    ctx.fillRect 0, 0, @width.get(), @height.get()

  setup: (ctx) ->
    @width = new n @anim.getWidth
    @height = new n @anim.getHeight
    @clear(ctx)
    @circles = []
    gap = 10
    velocity = 2
    for i in [0...300]
      @circles.push
        center:
          x: Math.random() * (@width.get() - gap*2) + gap
          y: Math.random() * (@height.get() - gap*2) + gap
        velocity:
          x: Math.random() * velocity/2 - velocity
          y: Math.random() * velocity/2 - velocity
        radius: Math.random() * 25 + 15
    console.log JSON.stringify(@circles)
    # @circles = [{"center":{"x":176.55879888217896,"y":137.20907585695386},"velocity":{"x":-2.430247380863875,"y":-3.8162123919464648},"radius":22.402058446314186},{"center":{"x":121.20406474918127,"y":72.8205131618306},"velocity":{"x":-3.9680192577652633,"y":-2.0227861697785556},"radius":33.075595231493935},{"center":{"x":64.31701648980379,"y":61.2896742830053},"velocity":{"x":-3.5827261130325496,"y":-3.2235171673819423},"radius":19.336413712007925},{"center":{"x":159.77747140452266,"y":141.91903632553294},"velocity":{"x":-2.6026631738059223,"y":-2.5009558610618114},"radius":15.560856843367219},{"center":{"x":67.6118225324899,"y":125.91610967507586},"velocity":{"x":-2.202694130130112,"y":-3.49667477235198},"radius":30.33869866398163},{"center":{"x":115.65849353559315,"y":122.80111459922045},"velocity":{"x":-2.1103686336427927,"y":-2.6287782453000546},"radius":24.419314056867734},{"center":{"x":250.1426284108311,"y":111.81301160063595},"velocity":{"x":-2.4279934144578874,"y":-2.6838688706047833},"radius":34.41533479257487},{"center":{"x":94.50015999376774,"y":82.38640533015132},"velocity":{"x":-2.1071864240802824,"y":-2.8460239046253264},"radius":25.75550222885795},{"center":{"x":120.52744014654309,"y":148.6086442740634},"velocity":{"x":-2.27126101590693,"y":-2.411701804958284},"radius":30.710299205966294},{"center":{"x":55.31120335217565,"y":79.10345070436597},"velocity":{"x":-2.2313624597154558,"y":-3.9318167427554727},"radius":18.476455877535045},{"center":{"x":254.88215431105345,"y":72.90973802702501},"velocity":{"x":-2.958559150341898,"y":-2.151538555510342},"radius":27.648119393270463},{"center":{"x":257.09639274980873,"y":86.26954264659435},"velocity":{"x":-2.7829043958336115,"y":-2.2610577810555696},"radius":35.79023403930478},{"center":{"x":81.32665801793337,"y":149.3491127025336},"velocity":{"x":-3.525612549856305,"y":-3.401405406650156},"radius":37.929658816428855},{"center":{"x":188.0667814798653,"y":126.65212202211842},"velocity":{"x":-2.1676446376368403,"y":-3.3132347064092755},"radius":30.715356735745445},{"center":{"x":165.0987937580794,"y":148.5670365015976},"velocity":{"x":-2.657134235370904,"y":-3.3094981596805155},"radius":36.39280459959991},{"center":{"x":106.99789714068174,"y":91.21111416304484},"velocity":{"x":-3.549625444225967,"y":-2.5760029130615294},"radius":21.563956226455048},{"center":{"x":252.52361321356148,"y":75.16418557800353},"velocity":{"x":-3.603645803872496,"y":-3.696858121547848},"radius":30.314550168113783},{"center":{"x":205.02092040143907,"y":153.61368754366413},"velocity":{"x":-2.6950914626941085,"y":-2.9966739085502923},"radius":34.87264931667596},{"center":{"x":91.72124527860433,"y":97.11431939946488},"velocity":{"x":-2.174241083674133,"y":-3.920537223108113},"radius":15.8256712986622},{"center":{"x":134.89701844286174,"y":99.23108572280034},"velocity":{"x":-2.6616185237653553,"y":-3.543251346796751},"radius":16.609128440031782},{"center":{"x":81.39241126831621,"y":81.77874224027619},"velocity":{"x":-3.8159722359851003,"y":-3.21716212015599},"radius":25.37791176349856},{"center":{"x":162.64944892842323,"y":114.42252451460809},"velocity":{"x":-2.606370747089386,"y":-2.120982963591814},"radius":31.442842956166714},{"center":{"x":139.42362723406404,"y":102.27551054535434},"velocity":{"x":-2.5995103027671576,"y":-2.7141673672012985},"radius":18.986126405652612},{"center":{"x":184.134821286425,"y":50.96876119449735},"velocity":{"x":-2.186658016871661,"y":-3.1259442321024835},"radius":16.168969209538773},{"center":{"x":146.3910707598552,"y":67.08050921140239},"velocity":{"x":-2.9959049676544964,"y":-2.1853601094335318},"radius":29.097575383493677},{"center":{"x":91.45870572887361,"y":116.97165174270049},"velocity":{"x":-3.934031479526311,"y":-2.5709697124548256},"radius":20.37264875601977},{"center":{"x":83.95883853081614,"y":118.05433418881148},"velocity":{"x":-2.8867437206208706,"y":-3.21133733401075},"radius":28.029901555273682},{"center":{"x":247.18013835605234,"y":124.28142492845654},"velocity":{"x":-3.5293420939706266,"y":-3.5663135955110192},"radius":25.784896125551313},{"center":{"x":201.71324269846082,"y":50.70495475223288},"velocity":{"x":-3.038679027929902,"y":-2.0935785570181906},"radius":39.53131871880032},{"center":{"x":180.07723557762802,"y":64.86430198838934},"velocity":{"x":-2.8878712924197316,"y":-2.124117183033377},"radius":37.49022467294708}] 
    @circles = @circles.map (circle)->
      new Circle circle
    return

  update: (time) ->
    for circle in @circles
      circle.edge(vec(@width.get(),@height.get()))
      circle.separate(@circles)
    for circle in @circles
      circle.connect(@circles)
    
    for circle in @circles
      circle.checkLoop(time)
      circle.update(time)
  draw: (ctx) ->
    @clear(ctx)
    for circle in @circles
      circle.draw(ctx)
    # @anim.pause();
    return