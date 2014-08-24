(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/app.coffee":[function(require,module,exports){
var Circle, draw, f, n, vec;

f = require('franim');

n = require('numberer');

draw = require('./draw');

Circle = require('./circle');

vec = require('vec2d');

f("canvas", {
  config: {
    fullSize: true
  },
  clear: function(ctx) {
    ctx.fillStyle = "rgb(234, 244, 250)";
    return ctx.fillRect(0, 0, this.width.get(), this.height.get());
  },
  setup: function(ctx) {
    var i, _i;
    this.width = new n(this.anim.getWidth);
    this.height = new n(this.anim.getHeight);
    this.clear(ctx);
    this.circles = [];
    for (i = _i = 0; _i < 30; i = ++_i) {
      this.circles.push({
        center: {
          x: Math.random() * (this.width.get() - 100) + 50,
          y: Math.random() * (this.height.get() - 100) + 50
        },
        velocity: {
          x: Math.random() * 8 - 4,
          y: Math.random() * 8 - 4
        },
        radius: Math.random() * 40 + 10
      });
    }
    this.circles = [
      {
        "center": {
          "x": 329.7511033108458,
          "y": 124.8709150464274
        },
        "velocity": {
          "x": 1.82507043518126,
          "y": -3.801978264003992
        },
        "radius": 28.21277012117207
      }, {
        "center": {
          "x": 392.71635251212865,
          "y": 90.38770812028088
        },
        "velocity": {
          "x": -3.822002800181508,
          "y": 0.6682917233556509
        },
        "radius": 41.518910275772214
      }, {
        "center": {
          "x": 308.0931386137381,
          "y": 60.4499884492252
        },
        "velocity": {
          "x": -0.4663954898715019,
          "y": -2.966704335063696
        },
        "radius": 13.530204277485609
      }, {
        "center": {
          "x": 245.43473534379154,
          "y": 208.5911042566877
        },
        "velocity": {
          "x": -3.395714530721307,
          "y": -0.7424422111362219
        },
        "radius": 27.423030454665422
      }, {
        "center": {
          "x": 107.84581227507442,
          "y": 161.8849455700256
        },
        "velocity": {
          "x": -3.0804037898778915,
          "y": 0.33379891514778137
        },
        "radius": 43.45865613780916
      }, {
        "center": {
          "x": 345.40041262470186,
          "y": 167.4233772594016
        },
        "velocity": {
          "x": -0.2834489308297634,
          "y": 3.694600520655513
        },
        "radius": 30.489854589104652
      }, {
        "center": {
          "x": 208.58164620492607,
          "y": 141.58038804633543
        },
        "velocity": {
          "x": 1.541344989091158,
          "y": -3.5019289925694466
        },
        "radius": 41.77850438281894
      }, {
        "center": {
          "x": 454.2715580519289,
          "y": 101.75638760905713
        },
        "velocity": {
          "x": -1.4080913551151752,
          "y": -3.4974512681365013
        },
        "radius": 39.17241436429322
      }, {
        "center": {
          "x": 331.1351579679176,
          "y": 228.95254917698912
        },
        "velocity": {
          "x": 3.3732288517057896,
          "y": -0.015721770003437996
        },
        "radius": 41.54814248904586
      }, {
        "center": {
          "x": 456.29514652118087,
          "y": 59.23323312983848
        },
        "velocity": {
          "x": -0.8979692123830318,
          "y": -2.349965138360858
        },
        "radius": 48.80524951033294
      }, {
        "center": {
          "x": 99.60407792124897,
          "y": 86.80382725317031
        },
        "velocity": {
          "x": -0.03793899342417717,
          "y": 2.711569832637906
        },
        "radius": 16.09258098527789
      }, {
        "center": {
          "x": 236.89413266722113,
          "y": 227.1670621598605
        },
        "velocity": {
          "x": 3.1249668765813112,
          "y": -1.0579880978912115
        },
        "radius": 46.12681960687041
      }, {
        "center": {
          "x": 332.78446312248707,
          "y": 55.31457384582609
        },
        "velocity": {
          "x": -2.4830691181123257,
          "y": 1.3830266762524843
        },
        "radius": 23.931690650060773
      }, {
        "center": {
          "x": 190.92620459664613,
          "y": 91.03104250272736
        },
        "velocity": {
          "x": 1.3543665874749422,
          "y": 2.648732813075185
        },
        "radius": 34.262162344530225
      }, {
        "center": {
          "x": 362.5793596068397,
          "y": 159.99068022845313
        },
        "velocity": {
          "x": 1.7983210366219282,
          "y": -3.8954099472612143
        },
        "radius": 45.012798737734556
      }, {
        "center": {
          "x": 237.50551318749785,
          "y": 135.7461290517822
        },
        "velocity": {
          "x": -1.1024693604558706,
          "y": -1.7052645366638899
        },
        "radius": 27.270837854593992
      }, {
        "center": {
          "x": 330.04331761505455,
          "y": 113.47808893932961
        },
        "velocity": {
          "x": 3.6706928201019764,
          "y": 2.599521668627858
        },
        "radius": 22.85113465040922
      }, {
        "center": {
          "x": 406.88711014855653,
          "y": 173.6873872114811
        },
        "velocity": {
          "x": 0.5160532798618078,
          "y": -1.8631503377109766
        },
        "radius": 48.75737295486033
      }, {
        "center": {
          "x": 210.31504613999277,
          "y": 103.73105614958331
        },
        "velocity": {
          "x": -2.0024834983050823,
          "y": -0.22137243673205376
        },
        "radius": 41.32585412822664
      }, {
        "center": {
          "x": 250.68508010357618,
          "y": 210.841607891256
        },
        "velocity": {
          "x": -0.9652214776724577,
          "y": 2.3467086143791676
        },
        "radius": 38.62000587396324
      }, {
        "center": {
          "x": 276.7940786294639,
          "y": 198.60725408024155
        },
        "velocity": {
          "x": 3.0712295584380627,
          "y": 1.1519331373274326
        },
        "radius": 39.13282563909888
      }, {
        "center": {
          "x": 346.9988042637706,
          "y": 127.10465011117049
        },
        "velocity": {
          "x": -1.063142117112875,
          "y": -3.5548322442919016
        },
        "radius": 37.76525973342359
      }, {
        "center": {
          "x": 343.57300450932235,
          "y": 186.99264713097364
        },
        "velocity": {
          "x": -2.0174202863126993,
          "y": 0.6088804118335247
        },
        "radius": 12.54584675654769
      }, {
        "center": {
          "x": 105.58642429020256,
          "y": 123.00269025401212
        },
        "velocity": {
          "x": 2.416861604899168,
          "y": 2.0807046964764595
        },
        "radius": 21.0484170448035
      }, {
        "center": {
          "x": 133.42687871027738,
          "y": 63.42060645017773
        },
        "velocity": {
          "x": 1.2541372198611498,
          "y": 3.0145662426948547
        },
        "radius": 19.526246674358845
      }, {
        "center": {
          "x": 399.5216870903969,
          "y": 211.37180193630047
        },
        "velocity": {
          "x": 1.3469152804464102,
          "y": 3.973563928157091
        },
        "radius": 37.263121362775564
      }, {
        "center": {
          "x": 257.2064972287044,
          "y": 232.46047832630575
        },
        "velocity": {
          "x": -2.1627510841935873,
          "y": 0.5006621591746807
        },
        "radius": 10.826023574918509
      }, {
        "center": {
          "x": 217.0801703631878,
          "y": 109.30802809796296
        },
        "velocity": {
          "x": -3.4574277345091105,
          "y": -2.568949645385146
        },
        "radius": 36.837164144963026
      }, {
        "center": {
          "x": 435.0869121700525,
          "y": 100.82374892174266
        },
        "velocity": {
          "x": 3.3907120916992426,
          "y": -2.522062536329031
        },
        "radius": 49.11878431215882
      }, {
        "center": {
          "x": 227.10339870397002,
          "y": 53.75067453458905
        },
        "velocity": {
          "x": -3.498907981440425,
          "y": -1.6119128540158272
        },
        "radius": 35.939528215676546
      }
    ];
    this.circles = this.circles.map(function(circle) {
      return new Circle(circle);
    });
  },
  update: function(time) {
    var circle, _i, _len, _ref, _results;
    _ref = this.circles;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      circle = _ref[_i];
      circle.edge(vec(this.width.get(), this.height.get()));
      circle.separate(this.circles);
      _results.push(circle.update(time));
    }
    return _results;
  },
  draw: function(ctx) {
    var circle, _i, _len, _ref;
    this.clear(ctx);
    _ref = this.circles;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      circle = _ref[_i];
      circle.draw(ctx);
    }
  }
});



},{"./circle":"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\src\\js\\circle.coffee","./draw":"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\src\\js\\draw.coffee","franim":"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\node_modules\\franim\\franim.js","numberer":"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\node_modules\\numberer\\lib\\numberer.js","vec2d":"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\node_modules\\vec2d\\index.js"}],"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\node_modules\\franim\\franim.js":[function(require,module,exports){
'use strict';

function franim(canvaseId, context) {
    var width  =  window.innerWidth,
        height = window.innerHeight,
        domElement = document.getElementById(canvaseId),
        isRunning = true,
        requestId,
        ctx = domElement.getContext('2d');

    domElement.width = width;
    domElement.height = height;

    function recalculate() {
        if (width  !== window.innerWidth || height !== window.innerHeight) {
            domElement.width  = window.innerWidth;
            domElement.height = window.innerHeight;
            width  = domElement.width;
            height = domElement.height;
        }
    }

    function animationCallback(time) {
        if (context.config && context.config.fullSize) {
            recalculate();
        }

        if (typeof context.update === 'function') {
            context.update(time);
            context.draw(ctx);
        } else {
            context.draw(ctx, time);
        }

        if (isRunning === false) {
            window.cancelAnimationFrame(requestId);
            requestId = 0;
        } else {
            window.requestAnimationFrame(animationCallback);
        }
    }

    context.anim = {
        getHeight: function () {
            return (context.config && context.config.fullSize) ? height : domElement.height;
        },
        getWidth: function () {
            return (context.config && context.config.fullSize) ? width : domElement.width;
        },
        resume: function () {
            requestId = window.requestAnimationFrame(animationCallback);
        },
        pause: function () {
            isRunning = false;
        }
    };
    if (typeof context.setup === 'function') {
        context.setup(ctx);
    }
    requestId = window.requestAnimationFrame(animationCallback);

    return context;
}

if (typeof module !== "undefined") {
    module.exports = franim;
}
},{}],"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\node_modules\\numberer\\lib\\numberer.js":[function(require,module,exports){
/*
 * numberer
 * https://github.com/safareli/numberer
 *
 * Copyright (c) 2014 Irakli Safareli
 * Licensed under the MIT license.
 */

'use strict';

var math = function(operation, args){
    return new Numberer(function(){
        return args.reduce(function(p, c){
            var a = (p && p.get) ? p.get() : p;
            var b = (c && c.get) ? c.get() : c;
            switch(operation){
                case 'plus': return a + b;
                case 'minus': return a - b;
                case 'div': return a / b;
                case 'mult': return a * b;
                case 'mod': return a % b;
                default: throw new TypeError('unknown operation '+operation);
            }
        });
    });
};

function Numberer(value){
    this.__value = value;
}

Numberer.prototype.get = function(){
    var v = this.__value;
    if(typeof v === "function") return v();
    else return v;
};

Numberer.prototype.set = function(value){
    this.__value = value;
    return this;
};
Numberer.prototype.clone = function(){
    return new Numberer(this.__value);
};

['plus', 'minus', 'div', 'mult', 'mod'].forEach(function(name){
    Numberer.prototype[name] = function() {
        var args = [].slice.call(arguments);
        args.unshift(this.clone());
        this.__value = (math(name, args)).__value;
        return this;
    };

    Numberer[name] = function() {
        return math(name,[].slice.call(arguments));
    };
});

module.exports = Numberer;
},{}],"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\node_modules\\vec2d\\index.js":[function(require,module,exports){
module.exports = v;
v.Vec2d = Vec2d;
v.unit = unitFromAngle;
Vec2d.unit = unitFromAngle;

var re = /\((-?[.\d]+), (-?[.\d]+)\)/;

function Vec2d(x, y) {
  this.x = x;
  this.y = y;
}

function unitFromAngle(angle) {
  return new Vec2d(Math.cos(angle), Math.sin(angle));
}

function v(xOrPair, y) {
  if (xOrPair == null) {
    return new Vec2d(0, 0, 0);
  } else if (Array.isArray(xOrPair)) {
    return new Vec2d(parseFloat(xOrPair[0], 10), parseFloat(xOrPair[1], 10));
  } else if (typeof xOrPair === 'object') {
    return new Vec2d(parseFloat(xOrPair.x, 10), parseFloat(xOrPair.y, 10));
  } else if (typeof xOrPair === 'string' && y == null) {
    var match = xOrPair.match(re);
    if (match) {
      return new Vec2d(parseFloat(match[1], 10), parseFloat(match[2], 10));
    } else {
      throw new Error("Vec2d: cannot parse: " + xOrPair);
    }
  } else {
    return new Vec2d(parseFloat(xOrPair, 10), parseFloat(y, 10));
  }
}

Vec2d.prototype.offset = function(dx, dy) {
  return new Vec2d(this.x + dx, this.y + dy);
};

Vec2d.prototype.add = function(other) {
  this.x += other.x;
  this.y += other.y;
  return this;
};

Vec2d.prototype.sub = function(other) {
  this.x -= other.x;
  this.y -= other.y;
  return this;
};

Vec2d.prototype.plus = function(other) {
  return this.clone().add(other);
};

Vec2d.prototype.minus = function(other) {
  return this.clone().sub(other);
};

Vec2d.prototype.neg = function() {
  this.x = -this.x;
  this.y = -this.y;
  return this;
};

Vec2d.prototype.mult = function(other) {
  this.x *= other.x;
  this.y *= other.y;
  return this;
};

Vec2d.prototype.times = function(other) {
  return this.clone().mult(other);
};

Vec2d.prototype.div = function(other) {
  this.x /= other.x;
  this.y /= other.y;
  return this;
};

Vec2d.prototype.divBy = function(other) {
  return this.clone().div(other);
};

Vec2d.prototype.scale = function(scalar) {
  this.x *= scalar;
  this.y *= scalar;
  return this;
};

Vec2d.prototype.scaled = function(scalar) {
  return this.clone().scale(scalar);
};

Vec2d.prototype.clone = function() {
  return new Vec2d(this.x, this.y);
};

Vec2d.prototype.apply = function(func) {
  this.x = func(this.x);
  this.y = func(this.y);
  return this;
};

Vec2d.prototype.applied = function(func) {
  return this.clone().apply(func);
};

Vec2d.prototype.distanceSqrd = function(other) {
  var dx = other.x - this.x;
  var dy = other.y - this.y;
  return dx * dx + dy * dy;
};

Vec2d.prototype.distance = function(other) {
  return Math.sqrt(this.distanceSqrd(other));
};

Vec2d.prototype.equals = function(other) {
  return this.x === other.x && this.y === other.y;
};

Vec2d.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
};

Vec2d.prototype.lengthSqrd = function() {
  return this.x * this.x + this.y * this.y;
};

Vec2d.prototype.length = function() {
  return Math.sqrt(this.lengthSqrd());
};

Vec2d.prototype.angle = function() {
  if (this.lengthSqrd() === 0) {
    return 0;
  } else {
    return Math.atan2(this.y, this.x);
  }
};

Vec2d.prototype.normalize = function() {
  var length = this.length();
  if (length === 0) {
    return this;
  } else {
    return this.scale(1 / length);
  }
};

Vec2d.prototype.normalized = function() {
  return this.clone().normalize();
};

Vec2d.prototype.boundMin = function(other) {
  if (this.x < other.x) this.x = other.x;
  if (this.y < other.y) this.y = other.y;
  return this;
};

Vec2d.prototype.boundMax = function(other) {
  if (this.x > other.x) this.x = other.x;
  if (this.y > other.y) this.y = other.y;
  return this;
};

Vec2d.prototype.floor = function() {
  return this.apply(Math.floor);
};

Vec2d.prototype.floored = function() {
  return this.applied(Math.floor);
};

Vec2d.prototype.ceil = function() {
  return this.apply(Math.ceil);
};

Vec2d.prototype.ceiled = function() {
  return this.applied(Math.ceil);
};

Vec2d.prototype.project = function(other) {
  this.scale(this.dot(other) / other.lengthSqrd());
  return this;
};

Vec2d.prototype.dot = function(other) {
  return this.x * other.x + this.y * other.y;
};

Vec2d.prototype.rotate = function(direction) {
  var newX = this.x * direction.x - this.y * direction.y;
  this.y = this.x * direction.y + this.y * direction.x;
  this.x = newX;
  return this;
};

Vec2d.prototype.rotated = function(direction) {
  return this.clone().rotate(direction);
};

// reflect about axis originating from origin
Vec2d.prototype.reflect = function(axis) {
  return this.reflectAboutLine(new Vec2d(0, 0), axis);
};

Vec2d.prototype.reflectAboutLine = function(linePt1, linePt2) {
  var normal = new Vec2d(
      linePt2.x - linePt1.x,
      linePt2.y - linePt1.x);
  var temp = normal.x;
  normal.x = -normal.y;
  normal.y = temp;
  normal.normalize();
  var dot2 = 2 * this.dot(normal);
  this.x -= dot2 * normal.x;
  this.y -= dot2 * normal.y;
  return this;
};

Vec2d.prototype.set = Vec2d;

},{}],"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\src\\js\\circle.coffee":[function(require,module,exports){
var Circle, draw, vec;

vec = require('vec2d');

draw = require('./draw');

Circle = (function() {
  function Circle(obj) {
    this.center = vec(obj.center.x, obj.center.y);
    this.acceleration = vec(0, 0);
    this.velocity = vec(obj.velocity.x, obj.velocity.y);
    this.radius = obj.radius;
    this.minRadius = this.radius * 0.2;
    if (this.minRadius < 10) {
      this.minRadius = 10;
    }
    this.mass = 1;
    this.neighbors = [];
    this.drawQuee = [];
    this.zeroAccelerationTime = 0;
  }

  Circle.prototype.applyForce = function(force) {
    return this.acceleration.add(force.scaled(1 / this.mass));
  };

  Circle.prototype.isStopped = function() {
    return this.neighbors.length > 0;
  };

  Circle.prototype.stop = function() {
    this.acceleration.scale(0);
    return this.velocity.scale(0);
  };

  Circle.prototype.edgeForce = function(max) {
    var f, x, y;
    x = 0;
    y = 0;
    if (this.center.x < this.radius) {
      x += 1;
    }
    if (this.center.y < this.radius) {
      y += 1;
    }
    if (this.center.x > max.x - this.radius) {
      x -= 1;
    }
    if (this.center.y > max.y - this.radius) {
      y -= 1;
    }
    f = vec(x, y);
    if (f.length() > 0) {
      this.velocity.clone().reflect(f);
    }
    return f;
  };

  Circle.prototype.separateForce = function(circles) {
    var acurance, circle, count, currentDistance, distance, f, force, hasPlaceInNeighbors, isAtEdge, isNotAccelerated, isNotNeighbor, minDistance, neighbor, _i, _len;
    force = vec(0, 0);
    count = 0;
    neighbor = null;
    for (_i = 0, _len = circles.length; _i < _len; _i++) {
      circle = circles[_i];
      if (circle === this) {
        continue;
      }
      distance = this.center.minus(circle.center);
      currentDistance = distance.length();
      minDistance = circle.radius + this.radius;
      if (currentDistance > minDistance) {
        continue;
      }
      acurance = 1;
      isAtEdge = currentDistance <= (minDistance + acurance) && currentDistance > (minDistance - acurance);
      isNotAccelerated = this.acceleration.length() === 0 && circle.acceleration.length() === 0;
      hasPlaceInNeighbors = circle.neighbors.length < 2 && this.neighbors.length < 2;
      isNotNeighbor = this.neighbors.indexOf(circle) === -1;
      if (isNotNeighbor && isAtEdge && isNotAccelerated && hasPlaceInNeighbors) {
        neighbor = circle;
        continue;
      }
      f = distance.normalize().scale(minDistance / currentDistance);
      this.drawQuee.push(draw.line.bind(draw, circle.center, circle.center.plus(f.scaled(circle.radius / 2))));
      force.add(f);
      count++;
    }
    if (count === 0 && neighbor !== null) {
      this.stick(neighbor);
    }
    if (count > 0) {
      force.scale(1 / count);
    }
    return force;
  };

  Circle.prototype.stick = function(circle) {
    this.neighbors.push(circle);
    this.stop();
    circle.neighbors.push(this);
    return circle.stop();
  };

  Circle.prototype.separate = function(circles) {
    if (this.isStopped()) {
      return;
    }
    return this.applyForce(this.separateForce(circles));
  };

  Circle.prototype.edge = function(max) {
    if (this.isStopped()) {
      return;
    }
    return this.applyForce(this.edgeForce(max));
  };

  Circle.prototype.update = function(time) {
    if (this.acceleration.length() === 0 && time - this.zeroAccelerationTime > 500) {
      this.zeroAccelerationTime = time;
    } else {
      if (time > this.zeroAccelerationTime + 3000 && this.radius > this.minRadius * 3) {
        this.radius -= (time - this.zeroAccelerationTime) / 2000;
      }
      if (time > this.zeroAccelerationTime + 6000 && this.radius > this.minRadius) {
        this.radius -= (time - this.zeroAccelerationTime) / 2000;
      }
      if (time > this.zeroAccelerationTime + 6000 && this.radius > this.minRadius * 0.5) {
        this.radius -= (time - this.zeroAccelerationTime) / 2000;
      }
    }
    this.velocity.add(this.acceleration);
    this.velocity.boundMax({
      x: 1,
      y: 1
    });
    this.center.add(this.velocity);
    this.acceleration.scale(0);
    this.drawQuee.push(draw.line.bind(draw, this.center, this.center.plus(this.velocity.scaled(this.radius / 2))));
  };

  Circle.prototype.draw = function(ctx) {
    var d, neighbor, _i, _j, _len, _len1, _ref, _ref1;
    this.ctx = ctx;
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1;
    if (this.neighbors.length === 0) {
      ctx.strokeStyle = 'red';
    } else if (this.neighbors.length === 1) {
      ctx.strokeStyle = 'blue';
    } else if (this.neighbors.length === 2) {
      ctx.strokeStyle = 'green';
    } else {
      ctx.strokeStyle = 'orange';
    }
    _ref = this.neighbors;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      neighbor = _ref[_i];
      draw.line(this.center, neighbor.center, ctx);
    }
    _ref1 = this.drawQuee;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      d = _ref1[_j];
      d(ctx);
    }
    this.drawQuee = [];
    ctx.stroke();
  };

  return Circle;

})();

Circle.random = function(max, padding) {
  var s;
  s = new Circle;
  s.start = {
    x: Math.random() * (max.x + 2 * padding) + padding,
    y: Math.random() * (max.y + 2 * padding) + padding
  };
  s.radius = Math.random() * 30 + 30;
  s.angle = 360 * Math.random() * (Math.PI / 180);
  s.direction = !!(Math.random() > 0.5);
  s.circles = ~~(2 + Math.random() * 4);
  return s;
};

module.exports = Circle;



},{"./draw":"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\src\\js\\draw.coffee","vec2d":"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\node_modules\\vec2d\\index.js"}],"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\src\\js\\draw.coffee":[function(require,module,exports){
var draw;

draw = {
  line: function(start, end, ctx) {
    var strokeStyle;
    strokeStyle = ctx.strokeStyle;
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.beginPath();
    return ctx.strokeStyle = strokeStyle;
  },
  spiral: function(num, o, generator) {
    var center, eAngle, increment, next, point, progress, sAngle, saveAtAngle, saved, tempTheta, theta;
    if (num === 0) {
      return;
    }
    next = generator();
    sAngle = Math.PI + o.angle;
    eAngle = sAngle + Math.PI * 2 * o.circles;
    center = {
      x: o.start.x + Math.cos(o.angle) * o.radius,
      y: o.start.y + Math.sin(o.angle) * o.radius
    };
    draw.line.call(this, o.start, center);
    increment = 2 * Math.PI / 60;
    theta = sAngle;
    saveAtAngle = (Math.random() + 0.5) * Math.PI;
    saved = false;
    this.beginPath();
    this.moveTo(center.x, center.y);
    while (theta <= eAngle + increment) {
      tempTheta = o.direction ? theta : -1 * (theta - 2 * o.angle);
      point = {
        x: center.x + o.radius * Math.cos(tempTheta) * progress,
        y: center.y + o.radius * Math.sin(tempTheta) * progress
      };
      if (!saved && eAngle - saveAtAngle < theta) {
        next.start.x = point.x;
        next.start.y = point.y;
        saved = true;
        saveAtAngle = tempTheta;
        draw.line.call(this, center, point);
      }
      progress = (theta - sAngle) / (eAngle - sAngle);
      theta += increment;
      this.lineTo(point.x, point.y);
    }
    this.stroke();
    next.angle = saveAtAngle % (Math.PI * 2);
    next.direction = !o.direction;
    draw.spiral.call(this, --num, next, generator);
  }
};

module.exports = draw;



},{}]},{},["./src/js/app.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcaXJha2xpLnNhZmFyZWxpXFxEZXNrdG9wXFxzcGlyYWxlclxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGFwcC5jb2ZmZWUiLCJjOi9Vc2Vycy9pcmFrbGkuc2FmYXJlbGkvRGVza3RvcC9zcGlyYWxlci9ub2RlX21vZHVsZXMvZnJhbmltL2ZyYW5pbS5qcyIsImM6L1VzZXJzL2lyYWtsaS5zYWZhcmVsaS9EZXNrdG9wL3NwaXJhbGVyL25vZGVfbW9kdWxlcy9udW1iZXJlci9saWIvbnVtYmVyZXIuanMiLCJjOi9Vc2Vycy9pcmFrbGkuc2FmYXJlbGkvRGVza3RvcC9zcGlyYWxlci9ub2RlX21vZHVsZXMvdmVjMmQvaW5kZXguanMiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGNpcmNsZS5jb2ZmZWUiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGRyYXcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSx1QkFBQTs7QUFBQSxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FBSixDQUFBOztBQUFBLENBQ0EsR0FBSSxPQUFBLENBQVEsVUFBUixDQURKLENBQUE7O0FBQUEsSUFFQSxHQUFPLE9BQUEsQ0FBUSxRQUFSLENBRlAsQ0FBQTs7QUFBQSxNQUdBLEdBQVMsT0FBQSxDQUFRLFVBQVIsQ0FIVCxDQUFBOztBQUFBLEdBSUEsR0FBTSxPQUFBLENBQVEsT0FBUixDQUpOLENBQUE7O0FBQUEsQ0FNQSxDQUFFLFFBQUYsRUFDRTtBQUFBLEVBQUEsTUFBQSxFQUNFO0FBQUEsSUFBQSxRQUFBLEVBQVUsSUFBVjtH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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE9BLElBQUEsaUJBQUE7O0FBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxPQUFSLENBQU4sQ0FBQTs7QUFBQSxJQUNBLEdBQU8sT0FBQSxDQUFRLFFBQVIsQ0FEUCxDQUFBOztBQUFBO0FBSWUsRUFBQSxnQkFBQyxHQUFELEdBQUE7QUFDWCxJQUFBLElBQUMsQ0FBQSxNQUFELEdBQVUsR0FBQSxDQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBZixFQUFrQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQTdCLENBQVYsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLFlBQUQsR0FBZ0IsR0FBQSxDQUFJLENBQUosRUFBTyxDQUFQLENBRGhCLENBQUE7QUFBQSxJQUVBLElBQUMsQ0FBQSxRQUFELEdBQVksR0FBQSxDQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBakIsRUFBb0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFqQyxDQUZaLENBQUE7QUFBQSxJQUlBLElBQUMsQ0FBQSxNQUFELEdBQVUsR0FBRyxDQUFDLE1BSmQsQ0FBQTtBQUFBLElBS0EsSUFBQyxDQUFBLFNBQUQsR0FBYSxJQUFDLENBQUEsTUFBRCxHQUFRLEdBTHJCLENBQUE7QUFNQSxJQUFBLElBQW1CLElBQUMsQ0FBQSxTQUFELEdBQWEsRUFBaEM7QUFBQSxNQUFBLElBQUMsQ0FBQSxTQUFELEdBQWEsRUFBYixDQUFBO0tBTkE7QUFBQSxJQVFBLElBQUMsQ0FBQSxJQUFELEdBQVEsQ0FSUixDQUFBO0FBQUEsSUFTQSxJQUFDLENBQUEsU0FBRCxHQUFhLEVBVGIsQ0FBQTtBQUFBLElBVUEsSUFBQyxDQUFBLFFBQUQsR0FBWSxFQVZaLENBQUE7QUFBQSxJQVdBLElBQUMsQ0FBQSxvQkFBRCxHQUF3QixDQVh4QixDQURXO0VBQUEsQ0FBYjs7QUFBQSxtQkFjQSxVQUFBLEdBQVksU0FBQyxLQUFELEdBQUE7V0FDVixJQUFDLENBQUEsWUFBWSxDQUFDLEdBQWQsQ0FBa0IsS0FBSyxDQUFDLE1BQU4sQ0FBYSxDQUFBLEdBQUUsSUFBQyxDQUFBLElBQWhCLENBQWxCLEVBRFU7RUFBQSxDQWRaLENBQUE7O0FBQUEsbUJBaUJBLFNBQUEsR0FBVyxTQUFBLEdBQUE7V0FDVCxJQUFDLENBQUEsU0FBUyxDQUFDLE1BQVgsR0FBb0IsRUFEWDtFQUFBLENBakJYLENBQUE7O0FBQUEsbUJBb0JBLElBQUEsR0FBTSxTQUFBLEdBQUE7QUFDSixJQUFBLElBQUMsQ0FBQSxZQUFZLENBQUMsS0FBZCxDQUFvQixDQUFwQixDQUFBLENBQUE7V0FDQSxJQUFDLENBQUEsUUFBUSxDQUFDLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFGSTtFQUFBLENBcEJOLENBQUE7O0FBQUEsbUJBd0JBLFNBQUEsR0FBVyxTQUFDLEdBQUQsR0FBQTtBQUVULFFBQUEsT0FBQTtBQUFBLElBQUEsQ0FBQSxHQUFJLENBQUosQ0FBQTtBQUFBLElBQ0EsQ0FBQSxHQUFJLENBREosQ0FBQTtBQUVBLElBQUEsSUFBVSxJQUFDLENBQUEsTUFBTSxDQUFDLENBQVIsR0FBWSxJQUFDLENBQUEsTUFBdkI7QUFBQSxNQUFBLENBQUEsSUFBSyxDQUFMLENBQUE7S0FGQTtBQUdBLElBQUEsSUFBVSxJQUFDLENBQUEsTUFBTSxDQUFDLENBQVIsR0FBWSxJQUFDLENBQUEsTUFBdkI7QUFBQSxNQUFBLENBQUEsSUFBSyxDQUFMLENBQUE7S0FIQTtBQUlBLElBQUEsSUFBVSxJQUFDLENBQUEsTUFBTSxDQUFDLENBQVIsR0FBWSxHQUFHLENBQUMsQ0FBSixHQUFRLElBQUMsQ0FBQSxNQUEvQjtBQUFBLE1BQUEsQ0FBQSxJQUFLLENBQUwsQ0FBQTtLQUpBO0FBS0EsSUFBQSxJQUFVLElBQUMsQ0FBQSxNQUFNLENBQUMsQ0FBUixHQUFZLEdBQUcsQ0FBQyxDQUFKLEdBQVEsSUFBQyxDQUFBLE1BQS9CO0FBQUEsTUFBQSxDQUFBLElBQUssQ0FBTCxDQUFBO0tBTEE7QUFBQSxJQU1BLENBQUEsR0FBSSxHQUFBLENBQUksQ0FBSixFQUFPLENBQVAsQ0FOSixDQUFBO0FBT0EsSUFBQSxJQUFHLENBQUMsQ0FBQyxNQUFGLENBQUEsQ0FBQSxHQUFhLENBQWhCO0FBRUUsTUFBQSxJQUFDLENBQUEsUUFBUSxDQUFDLEtBQVYsQ0FBQSxDQUFpQixDQUFDLE9BQWxCLENBQTBCLENBQTFCLENBQUEsQ0FGRjtLQVBBO0FBV0EsV0FBTyxDQUFQLENBYlM7RUFBQSxDQXhCWCxDQUFBOztBQUFBLG1CQXVDQSxhQUFBLEdBQWUsU0FBQyxPQUFELEdBQUE7QUFDYixRQUFBLDZKQUFBO0FBQUEsSUFBQSxLQUFBLEdBQU8sR0FBQSxDQUFJLENBQUosRUFBTyxDQUFQLENBQVAsQ0FBQTtBQUFBLElBQ0EsS0FBQSxHQUFRLENBRFIsQ0FBQTtBQUFBLElBRUEsUUFBQSxHQUFXLElBRlgsQ0FBQTtBQUdBLFNBQUEsOENBQUE7MkJBQUE7QUFDRSxNQUFBLElBQVksTUFBQSxLQUFVLElBQXRCO0FBQUEsaUJBQUE7T0FBQTtBQUFBLE1BQ0EsUUFBQSxHQUFXLElBQUMsQ0FBQSxNQUFNLENBQUMsS0FBUixDQUFjLE1BQU0sQ0FBQyxNQUFyQixDQURYLENBQUE7QUFBQSxNQUVBLGVBQUEsR0FBa0IsUUFBUSxDQUFDLE1BQVQsQ0FBQSxDQUZsQixDQUFBO0FBQUEsTUFHQSxXQUFBLEdBQWMsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsSUFBQyxDQUFBLE1BSC9CLENBQUE7QUFJQSxNQUFBLElBQVksZUFBQSxHQUFrQixXQUE5QjtBQUFBLGlCQUFBO09BSkE7QUFBQSxNQUtBLFFBQUEsR0FBVyxDQUxYLENBQUE7QUFBQSxNQU1BLFFBQUEsR0FBVyxlQUFBLElBQW1CLENBQUMsV0FBQSxHQUFjLFFBQWYsQ0FBbkIsSUFBZ0QsZUFBQSxHQUFrQixDQUFDLFdBQUEsR0FBYyxRQUFmLENBTjdFLENBQUE7QUFBQSxNQU9BLGdCQUFBLEdBQW1CLElBQUMsQ0FBQSxZQUFZLENBQUMsTUFBZCxDQUFBLENBQUEsS0FBMEIsQ0FBMUIsSUFBaUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFwQixDQUFBLENBQUEsS0FBZ0MsQ0FQcEYsQ0FBQTtBQUFBLE1BUUEsbUJBQUEsR0FBc0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFqQixHQUEwQixDQUExQixJQUFnQyxJQUFDLENBQUEsU0FBUyxDQUFDLE1BQVgsR0FBb0IsQ0FSMUUsQ0FBQTtBQUFBLE1BU0EsYUFBQSxHQUFnQixJQUFDLENBQUEsU0FBUyxDQUFDLE9BQVgsQ0FBbUIsTUFBbkIsQ0FBQSxLQUE4QixDQUFBLENBVDlDLENBQUE7QUFVQSxNQUFBLElBQUcsYUFBQSxJQUFrQixRQUFsQixJQUErQixnQkFBL0IsSUFBb0QsbUJBQXZEO0FBQ0UsUUFBQSxRQUFBLEdBQVcsTUFBWCxDQUFBO0FBQ0EsaUJBRkY7T0FWQTtBQUFBLE1BYUEsQ0FBQSxHQUFJLFFBQVEsQ0FBQyxTQUFULENBQUEsQ0FBb0IsQ0FBQyxLQUFyQixDQUEyQixXQUFBLEdBQVksZUFBdkMsQ0FiSixDQUFBO0FBQUEsTUFjQSxJQUFDLENBQUEsUUFBUSxDQUFDLElBQVYsQ0FBZSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQVYsQ0FBZSxJQUFmLEVBQW9CLE1BQU0sQ0FBQyxNQUEzQixFQUFrQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQWQsQ0FBbUIsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxNQUFNLENBQUMsTUFBUCxHQUFjLENBQXZCLENBQW5CLENBQWxDLENBQWYsQ0FkQSxDQUFBO0FBQUEsTUFlQSxLQUFLLENBQUMsR0FBTixDQUFVLENBQVYsQ0FmQSxDQUFBO0FBQUEsTUFnQkEsS0FBQSxFQWhCQSxDQURGO0FBQUEsS0FIQTtBQXFCQSxJQUFBLElBQUksS0FBQSxLQUFTLENBQVQsSUFBZSxRQUFBLEtBQVUsSUFBN0I7QUFDRSxNQUFBLElBQUMsQ0FBQSxLQUFELENBQU8sUUFBUCxDQUFBLENBREY7S0FyQkE7QUEwQkEsSUFBQSxJQUFJLEtBQUEsR0FBUSxDQUFaO0FBQ0UsTUFBQSxLQUFLLENBQUMsS0FBTixDQUFZLENBQUEsR0FBRSxLQUFkLENBQUEsQ0FERjtLQTFCQTtXQTRCQSxNQTdCYTtFQUFBLENBdkNmLENBQUE7O0FBQUEsbUJBc0VBLEtBQUEsR0FBTyxTQUFDLE1BQUQsR0FBQTtBQUNMLElBQUEsSUFBQyxDQUFBLFNBQVMsQ0FBQyxJQUFYLENBQWdCLE1BQWhCLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLElBQUQsQ0FBQSxDQURBLENBQUE7QUFBQSxJQUVBLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FGQSxDQUFBO1dBR0EsTUFBTSxDQUFDLElBQVAsQ0FBQSxFQUpLO0VBQUEsQ0F0RVAsQ0FBQTs7QUFBQSxtQkE0RUEsUUFBQSxHQUFVLFNBQUMsT0FBRCxHQUFBO0FBQ1IsSUFBQSxJQUFVLElBQUMsQ0FBQSxTQUFELENBQUEsQ0FBVjtBQUFBLFlBQUEsQ0FBQTtLQUFBO1dBQ0EsSUFBQyxDQUFBLFVBQUQsQ0FBWSxJQUFDLENBQUEsYUFBRCxDQUFlLE9BQWYsQ0FBWixFQUZRO0VBQUEsQ0E1RVYsQ0FBQTs7QUFBQSxtQkFnRkEsSUFBQSxHQUFNLFNBQUMsR0FBRCxHQUFBO0FBQ0osSUFBQSxJQUFVLElBQUMsQ0FBQSxTQUFELENBQUEsQ0FBVjtBQUFBLFlBQUEsQ0FBQTtLQUFBO1dBQ0EsSUFBQyxDQUFBLFVBQUQsQ0FBWSxJQUFDLENBQUEsU0FBRCxDQUFXLEdBQVgsQ0FBWixFQUZJO0VBQUEsQ0FoRk4sQ0FBQTs7QUFBQSxtQkFvRkEsTUFBQSxHQUFRLFNBQUMsSUFBRCxHQUFBO0FBR04sSUFBQSxJQUFHLElBQUMsQ0FBQSxZQUFZLENBQUMsTUFBZCxDQUFBLENBQUEsS0FBMEIsQ0FBMUIsSUFBZ0MsSUFBQSxHQUFPLElBQUMsQ0FBQSxvQkFBUixHQUErQixHQUFsRTtBQUNFLE1BQUEsSUFBQyxDQUFBLG9CQUFELEdBQXdCLElBQXhCLENBREY7S0FBQSxNQUFBO0FBR0UsTUFBQSxJQUFHLElBQUEsR0FBTyxJQUFDLENBQUEsb0JBQUQsR0FBd0IsSUFBL0IsSUFBdUMsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFDLENBQUEsU0FBRCxHQUFXLENBQS9EO0FBQ0UsUUFBQSxJQUFDLENBQUEsTUFBRCxJQUFXLENBQUMsSUFBQSxHQUFPLElBQUMsQ0FBQSxvQkFBVCxDQUFBLEdBQWlDLElBQTVDLENBREY7T0FBQTtBQUVBLE1BQUEsSUFBRyxJQUFBLEdBQU8sSUFBQyxDQUFBLG9CQUFELEdBQXdCLElBQS9CLElBQXVDLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLFNBQXJEO0FBQ0UsUUFBQSxJQUFDLENBQUEsTUFBRCxJQUFXLENBQUMsSUFBQSxHQUFPLElBQUMsQ0FBQSxvQkFBVCxDQUFBLEdBQWlDLElBQTVDLENBREY7T0FGQTtBQUlBLE1BQUEsSUFBRyxJQUFBLEdBQU8sSUFBQyxDQUFBLG9CQUFELEdBQXdCLElBQS9CLElBQXVDLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLFNBQUQsR0FBVyxHQUEvRDtBQUNFLFFBQUEsSUFBQyxDQUFBLE1BQUQsSUFBVyxDQUFDLElBQUEsR0FBTyxJQUFDLENBQUEsb0JBQVQsQ0FBQSxHQUFpQyxJQUE1QyxDQURGO09BUEY7S0FBQTtBQUFBLElBVUEsSUFBQyxDQUFBLFFBQVEsQ0FBQyxHQUFWLENBQWMsSUFBQyxDQUFBLFlBQWYsQ0FWQSxDQUFBO0FBQUEsSUFXQSxJQUFDLENBQUEsUUFBUSxDQUFDLFFBQVYsQ0FDRTtBQUFBLE1BQUEsQ0FBQSxFQUFFLENBQUY7QUFBQSxNQUNBLENBQUEsRUFBRSxDQURGO0tBREYsQ0FYQSxDQUFBO0FBQUEsSUFjQSxJQUFDLENBQUEsTUFBTSxDQUFDLEdBQVIsQ0FBWSxJQUFDLENBQUEsUUFBYixDQWRBLENBQUE7QUFBQSxJQWVBLElBQUMsQ0FBQSxZQUFZLENBQUMsS0FBZCxDQUFvQixDQUFwQixDQWZBLENBQUE7QUFBQSxJQWdCQSxJQUFDLENBQUEsUUFBUSxDQUFDLElBQVYsQ0FBZSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQVYsQ0FBZSxJQUFmLEVBQW9CLElBQUMsQ0FBQSxNQUFyQixFQUE0QixJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFDLENBQUEsUUFBUSxDQUFDLE1BQVYsQ0FBaUIsSUFBQyxDQUFBLE1BQUQsR0FBUSxDQUF6QixDQUFiLENBQTVCLENBQWYsQ0FoQkEsQ0FITTtFQUFBLENBcEZSLENBQUE7O0FBQUEsbUJBMkdBLElBQUEsR0FBTSxTQUFDLEdBQUQsR0FBQTtBQUNKLFFBQUEsNkNBQUE7QUFBQSxJQUFBLElBQUMsQ0FBQSxHQUFELEdBQU8sR0FBUCxDQUFBO0FBQUEsSUFDQSxHQUFHLENBQUMsU0FBSixDQUFBLENBREEsQ0FBQTtBQUFBLElBRUEsR0FBRyxDQUFDLEdBQUosQ0FBUSxJQUFDLENBQUEsTUFBTSxDQUFDLENBQWhCLEVBQW1CLElBQUMsQ0FBQSxNQUFNLENBQUMsQ0FBM0IsRUFBOEIsSUFBQyxDQUFBLE1BQS9CLEVBQXVDLENBQXZDLEVBQTBDLENBQUEsR0FBSSxJQUFJLENBQUMsRUFBbkQsRUFBdUQsS0FBdkQsQ0FGQSxDQUFBO0FBQUEsSUFHQSxHQUFHLENBQUMsU0FBSixHQUFnQixDQUhoQixDQUFBO0FBSUEsSUFBQSxJQUFHLElBQUMsQ0FBQSxTQUFTLENBQUMsTUFBWCxLQUFxQixDQUF4QjtBQUNFLE1BQUEsR0FBRyxDQUFDLFdBQUosR0FBa0IsS0FBbEIsQ0FERjtLQUFBLE1BRUssSUFBRyxJQUFDLENBQUEsU0FBUyxDQUFDLE1BQVgsS0FBcUIsQ0FBeEI7QUFDSCxNQUFBLEdBQUcsQ0FBQyxXQUFKLEdBQWtCLE1BQWxCLENBREc7S0FBQSxNQUVBLElBQUcsSUFBQyxDQUFBLFNBQVMsQ0FBQyxNQUFYLEtBQXFCLENBQXhCO0FBQ0gsTUFBQSxHQUFHLENBQUMsV0FBSixHQUFrQixPQUFsQixDQURHO0tBQUEsTUFBQTtBQUdILE1BQUEsR0FBRyxDQUFDLFdBQUosR0FBa0IsUUFBbEIsQ0FIRztLQVJMO0FBYUE7QUFBQSxTQUFBLDJDQUFBOzBCQUFBO0FBQ0UsTUFBQSxJQUFJLENBQUMsSUFBTCxDQUFVLElBQUMsQ0FBQSxNQUFYLEVBQWtCLFFBQVEsQ0FBQyxNQUEzQixFQUFrQyxHQUFsQyxDQUFBLENBREY7QUFBQSxLQWJBO0FBZUE7QUFBQSxTQUFBLDhDQUFBO29CQUFBO0FBQ0UsTUFBQSxDQUFBLENBQUUsR0FBRixDQUFBLENBREY7QUFBQSxLQWZBO0FBQUEsSUFpQkEsSUFBQyxDQUFBLFFBQUQsR0FBWSxFQWpCWixDQUFBO0FBQUEsSUFrQkEsR0FBRyxDQUFDLE1BQUosQ0FBQSxDQWxCQSxDQURJO0VBQUEsQ0EzR04sQ0FBQTs7Z0JBQUE7O0lBSkYsQ0FBQTs7QUFBQSxNQXNJTSxDQUFDLE1BQVAsR0FBZ0IsU0FBQyxHQUFELEVBQUssT0FBTCxHQUFBO0FBQ2QsTUFBQSxDQUFBO0FBQUEsRUFBQSxDQUFBLEdBQUksR0FBQSxDQUFBLE1BQUosQ0FBQTtBQUFBLEVBQ0EsQ0FBQyxDQUFDLEtBQUYsR0FDRTtBQUFBLElBQUEsQ0FBQSxFQUFHLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxHQUFjLENBQUMsR0FBRyxDQUFDLENBQUosR0FBUSxDQUFBLEdBQUUsT0FBWCxDQUFkLEdBQW9DLE9BQXZDO0FBQUEsSUFDQSxDQUFBLEVBQUcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBSixHQUFRLENBQUEsR0FBRSxPQUFYLENBQWQsR0FBb0MsT0FEdkM7R0FGRixDQUFBO0FBQUEsRUFJQSxDQUFDLENBQUMsTUFBRixHQUFXLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxHQUFjLEVBQWQsR0FBbUIsRUFKOUIsQ0FBQTtBQUFBLEVBS0EsQ0FBQyxDQUFDLEtBQUYsR0FBVSxHQUFBLEdBQUksSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFKLEdBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUwsR0FBUSxHQUFULENBTDVCLENBQUE7QUFBQSxFQU1BLENBQUMsQ0FBQyxTQUFGLEdBQWMsQ0FBQSxDQUFDLENBQUUsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLEdBQWpCLENBTmhCLENBQUE7QUFBQSxFQU9BLENBQUMsQ0FBQyxPQUFGLEdBQVksQ0FBQSxDQUFDLENBQUUsQ0FBQSxHQUFJLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxHQUFjLENBQW5CLENBUGQsQ0FBQTtBQVFBLFNBQU8sQ0FBUCxDQVRjO0FBQUEsQ0F0SWhCLENBQUE7O0FBQUEsTUFpSk0sQ0FBQyxPQUFQLEdBQWlCLE1BakpqQixDQUFBOzs7OztBQ0FBLElBQUEsSUFBQTs7QUFBQSxJQUFBLEdBQ0U7QUFBQSxFQUFBLElBQUEsRUFBTSxTQUFDLEtBQUQsRUFBTyxHQUFQLEVBQVcsR0FBWCxHQUFBO0FBQ0osUUFBQSxXQUFBO0FBQUEsSUFBQSxXQUFBLEdBQWMsR0FBRyxDQUFDLFdBQWxCLENBQUE7QUFBQSxJQUNBLEdBQUcsQ0FBQyxNQUFKLENBQUEsQ0FEQSxDQUFBO0FBQUEsSUFFQSxHQUFHLENBQUMsU0FBSixDQUFBLENBRkEsQ0FBQTtBQUFBLElBR0EsR0FBRyxDQUFDLFdBQUosR0FBa0IsTUFIbEIsQ0FBQTtBQUFBLElBSUEsR0FBRyxDQUFDLE1BQUosQ0FBVyxLQUFLLENBQUMsQ0FBakIsRUFBbUIsS0FBSyxDQUFDLENBQXpCLENBSkEsQ0FBQTtBQUFBLElBS0EsR0FBRyxDQUFDLE1BQUosQ0FBVyxHQUFHLENBQUMsQ0FBZixFQUFpQixHQUFHLENBQUMsQ0FBckIsQ0FMQSxDQUFBO0FBQUEsSUFNQSxHQUFHLENBQUMsTUFBSixDQUFBLENBTkEsQ0FBQTtBQUFBLElBT0EsR0FBRyxDQUFDLFNBQUosQ0FBQSxDQVBBLENBQUE7V0FRQSxHQUFHLENBQUMsV0FBSixHQUFrQixZQVRkO0VBQUEsQ0FBTjtBQUFBLEVBV0EsTUFBQSxFQUFRLFNBQUMsR0FBRCxFQUFLLENBQUwsRUFBTyxTQUFQLEdBQUE7QUFDTixRQUFBLDhGQUFBO0FBQUEsSUFBQSxJQUFVLEdBQUEsS0FBTyxDQUFqQjtBQUFBLFlBQUEsQ0FBQTtLQUFBO0FBQUEsSUFDQSxJQUFBLEdBQU8sU0FBQSxDQUFBLENBRFAsQ0FBQTtBQUFBLElBR0EsTUFBQSxHQUFTLElBQUksQ0FBQyxFQUFMLEdBQVUsQ0FBQyxDQUFDLEtBSHJCLENBQUE7QUFBQSxJQUlBLE1BQUEsR0FBUyxNQUFBLEdBQVMsSUFBSSxDQUFDLEVBQUwsR0FBVSxDQUFWLEdBQWMsQ0FBQyxDQUFDLE9BSmxDLENBQUE7QUFBQSxJQU1BLE1BQUEsR0FDRTtBQUFBLE1BQUEsQ0FBQSxFQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBUixHQUFZLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBQyxDQUFDLEtBQVgsQ0FBQSxHQUFrQixDQUFDLENBQUMsTUFBbkM7QUFBQSxNQUNBLENBQUEsRUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQVIsR0FBWSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQUMsQ0FBQyxLQUFYLENBQUEsR0FBa0IsQ0FBQyxDQUFDLE1BRG5DO0tBUEYsQ0FBQTtBQUFBLElBV0EsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFWLENBQWUsSUFBZixFQUFpQixDQUFDLENBQUMsS0FBbkIsRUFBeUIsTUFBekIsQ0FYQSxDQUFBO0FBQUEsSUFhQSxTQUFBLEdBQVksQ0FBQSxHQUFJLElBQUksQ0FBQyxFQUFULEdBQWMsRUFiMUIsQ0FBQTtBQUFBLElBY0EsS0FBQSxHQUFRLE1BZFIsQ0FBQTtBQUFBLElBZUEsV0FBQSxHQUFjLENBQUMsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLEdBQWpCLENBQUEsR0FBc0IsSUFBSSxDQUFDLEVBZnpDLENBQUE7QUFBQSxJQWdCQSxLQUFBLEdBQVEsS0FoQlIsQ0FBQTtBQUFBLElBaUJBLElBQUMsQ0FBQSxTQUFELENBQUEsQ0FqQkEsQ0FBQTtBQUFBLElBa0JBLElBQUMsQ0FBQSxNQUFELENBQVEsTUFBTSxDQUFDLENBQWYsRUFBaUIsTUFBTSxDQUFDLENBQXhCLENBbEJBLENBQUE7QUFtQkEsV0FBTSxLQUFBLElBQVMsTUFBQSxHQUFTLFNBQXhCLEdBQUE7QUFDRSxNQUFBLFNBQUEsR0FBZSxDQUFDLENBQUMsU0FBTCxHQUFvQixLQUFwQixHQUErQixDQUFBLENBQUEsR0FBRyxDQUFDLEtBQUEsR0FBUSxDQUFBLEdBQUUsQ0FBQyxDQUFDLEtBQWIsQ0FBOUMsQ0FBQTtBQUFBLE1BQ0EsS0FBQSxHQUNFO0FBQUEsUUFBQSxDQUFBLEVBQUcsTUFBTSxDQUFDLENBQVAsR0FBVyxDQUFDLENBQUMsTUFBRixHQUFXLElBQUksQ0FBQyxHQUFMLENBQVMsU0FBVCxDQUFYLEdBQWtDLFFBQWhEO0FBQUEsUUFDQSxDQUFBLEVBQUcsTUFBTSxDQUFDLENBQVAsR0FBVyxDQUFDLENBQUMsTUFBRixHQUFXLElBQUksQ0FBQyxHQUFMLENBQVMsU0FBVCxDQUFYLEdBQWtDLFFBRGhEO09BRkYsQ0FBQTtBQUlBLE1BQUEsSUFBRyxDQUFBLEtBQUEsSUFBYyxNQUFBLEdBQVMsV0FBVCxHQUF1QixLQUF4QztBQUNFLFFBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFYLEdBQWUsS0FBSyxDQUFDLENBQXJCLENBQUE7QUFBQSxRQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBWCxHQUFlLEtBQUssQ0FBQyxDQURyQixDQUFBO0FBQUEsUUFFQSxLQUFBLEdBQVEsSUFGUixDQUFBO0FBQUEsUUFHQSxXQUFBLEdBQWMsU0FIZCxDQUFBO0FBQUEsUUFJQSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQVYsQ0FBZSxJQUFmLEVBQWlCLE1BQWpCLEVBQXdCLEtBQXhCLENBSkEsQ0FERjtPQUpBO0FBQUEsTUFXQSxRQUFBLEdBQVcsQ0FBQyxLQUFBLEdBQVEsTUFBVCxDQUFBLEdBQWlCLENBQUMsTUFBQSxHQUFTLE1BQVYsQ0FYNUIsQ0FBQTtBQUFBLE1BWUEsS0FBQSxJQUFTLFNBWlQsQ0FBQTtBQUFBLE1BYUEsSUFBQyxDQUFBLE1BQUQsQ0FBUSxLQUFLLENBQUMsQ0FBZCxFQUFpQixLQUFLLENBQUMsQ0FBdkIsQ0FiQSxDQURGO0lBQUEsQ0FuQkE7QUFBQSxJQWtDQSxJQUFDLENBQUEsTUFBRCxDQUFBLENBbENBLENBQUE7QUFBQSxJQW9DQSxJQUFJLENBQUMsS0FBTCxHQUFhLFdBQUEsR0FBWSxDQUFDLElBQUksQ0FBQyxFQUFMLEdBQVEsQ0FBVCxDQXBDekIsQ0FBQTtBQUFBLElBcUNBLElBQUksQ0FBQyxTQUFMLEdBQWlCLENBQUEsQ0FBRSxDQUFDLFNBckNwQixDQUFBO0FBQUEsSUF1Q0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFaLENBQWlCLElBQWpCLEVBQW9CLEVBQUEsR0FBcEIsRUFBMkIsSUFBM0IsRUFBZ0MsU0FBaEMsQ0F2Q0EsQ0FETTtFQUFBLENBWFI7Q0FERixDQUFBOztBQUFBLE1BdURNLENBQUMsT0FBUCxHQUFpQixJQXZEakIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmID0gcmVxdWlyZSAnZnJhbmltJ1xyXG5uID0gcmVxdWlyZSAnbnVtYmVyZXInXHJcbmRyYXcgPSByZXF1aXJlICcuL2RyYXcnXHJcbkNpcmNsZSA9IHJlcXVpcmUgJy4vY2lyY2xlJ1xyXG52ZWMgPSByZXF1aXJlICd2ZWMyZCdcclxuXHJcbmYgXCJjYW52YXNcIixcclxuICBjb25maWc6XHJcbiAgICBmdWxsU2l6ZTogdHJ1ZVxyXG5cclxuICBjbGVhcjogKGN0eCkgLT5cclxuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigyMzQsIDI0NCwgMjUwKVwiXHJcbiAgICBjdHguZmlsbFJlY3QgMCwgMCwgQHdpZHRoLmdldCgpLCBAaGVpZ2h0LmdldCgpXHJcblxyXG4gIHNldHVwOiAoY3R4KSAtPlxyXG4gICAgQHdpZHRoID0gbmV3IG4gQGFuaW0uZ2V0V2lkdGhcclxuICAgIEBoZWlnaHQgPSBuZXcgbiBAYW5pbS5nZXRIZWlnaHRcclxuICAgIEBjbGVhcihjdHgpXHJcbiAgICBAY2lyY2xlcyA9IFtdXHJcbiAgICBmb3IgaSBpbiBbMC4uLjMwXVxyXG4gICAgICBAY2lyY2xlcy5wdXNoXHJcbiAgICAgICAgY2VudGVyOlxyXG4gICAgICAgICAgeDogTWF0aC5yYW5kb20oKSAqIChAd2lkdGguZ2V0KCkgLSAxMDApICsgNTBcclxuICAgICAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiAoQGhlaWdodC5nZXQoKSAtIDEwMCkgKyA1MFxyXG4gICAgICAgIHZlbG9jaXR5OlxyXG4gICAgICAgICAgeDogTWF0aC5yYW5kb20oKSAqIDggLSA0XHJcbiAgICAgICAgICB5OiBNYXRoLnJhbmRvbSgpICogOCAtIDRcclxuICAgICAgICByYWRpdXM6IE1hdGgucmFuZG9tKCkgKiA0MCArIDEwXHJcbiAgICAjIGNvbnNvbGUubG9nIEpTT04uc3RyaW5naWZ5KEBjaXJjbGVzKVxyXG4gICAgQGNpcmNsZXMgPSBbe1wiY2VudGVyXCI6e1wieFwiOjMyOS43NTExMDMzMTA4NDU4LFwieVwiOjEyNC44NzA5MTUwNDY0Mjc0fSxcInZlbG9jaXR5XCI6e1wieFwiOjEuODI1MDcwNDM1MTgxMjYsXCJ5XCI6LTMuODAxOTc4MjY0MDAzOTkyfSxcInJhZGl1c1wiOjI4LjIxMjc3MDEyMTE3MjA3fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MzkyLjcxNjM1MjUxMjEyODY1LFwieVwiOjkwLjM4NzcwODEyMDI4MDg4fSxcInZlbG9jaXR5XCI6e1wieFwiOi0zLjgyMjAwMjgwMDE4MTUwOCxcInlcIjowLjY2ODI5MTcyMzM1NTY1MDl9LFwicmFkaXVzXCI6NDEuNTE4OTEwMjc1NzcyMjE0fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MzA4LjA5MzEzODYxMzczODEsXCJ5XCI6NjAuNDQ5OTg4NDQ5MjI1Mn0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMC40NjYzOTU0ODk4NzE1MDE5LFwieVwiOi0yLjk2NjcwNDMzNTA2MzY5Nn0sXCJyYWRpdXNcIjoxMy41MzAyMDQyNzc0ODU2MDl9LHtcImNlbnRlclwiOntcInhcIjoyNDUuNDM0NzM1MzQzNzkxNTQsXCJ5XCI6MjA4LjU5MTEwNDI1NjY4Nzd9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTMuMzk1NzE0NTMwNzIxMzA3LFwieVwiOi0wLjc0MjQ0MjIxMTEzNjIyMTl9LFwicmFkaXVzXCI6MjcuNDIzMDMwNDU0NjY1NDIyfSx7XCJjZW50ZXJcIjp7XCJ4XCI6MTA3Ljg0NTgxMjI3NTA3NDQyLFwieVwiOjE2MS44ODQ5NDU1NzAwMjU2fSxcInZlbG9jaXR5XCI6e1wieFwiOi0zLjA4MDQwMzc4OTg3Nzg5MTUsXCJ5XCI6MC4zMzM3OTg5MTUxNDc3ODEzN30sXCJyYWRpdXNcIjo0My40NTg2NTYxMzc4MDkxNn0se1wiY2VudGVyXCI6e1wieFwiOjM0NS40MDA0MTI2MjQ3MDE4NixcInlcIjoxNjcuNDIzMzc3MjU5NDAxNn0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMC4yODM0NDg5MzA4Mjk3NjM0LFwieVwiOjMuNjk0NjAwNTIwNjU1NTEzfSxcInJhZGl1c1wiOjMwLjQ4OTg1NDU4OTEwNDY1Mn0se1wiY2VudGVyXCI6e1wieFwiOjIwOC41ODE2NDYyMDQ5MjYwNyxcInlcIjoxNDEuNTgwMzg4MDQ2MzM1NDN9LFwidmVsb2NpdHlcIjp7XCJ4XCI6MS41NDEzNDQ5ODkwOTExNTgsXCJ5XCI6LTMuNTAxOTI4OTkyNTY5NDQ2Nn0sXCJyYWRpdXNcIjo0MS43Nzg1MDQzODI4MTg5NH0se1wiY2VudGVyXCI6e1wieFwiOjQ1NC4yNzE1NTgwNTE5Mjg5LFwieVwiOjEwMS43NTYzODc2MDkwNTcxM30sXCJ2ZWxvY2l0eVwiOntcInhcIjotMS40MDgwOTEzNTUxMTUxNzUyLFwieVwiOi0zLjQ5NzQ1MTI2ODEzNjUwMTN9LFwicmFkaXVzXCI6MzkuMTcyNDE0MzY0MjkzMjJ9LHtcImNlbnRlclwiOntcInhcIjozMzEuMTM1MTU3OTY3OTE3NixcInlcIjoyMjguOTUyNTQ5MTc2OTg5MTJ9LFwidmVsb2NpdHlcIjp7XCJ4XCI6My4zNzMyMjg4NTE3MDU3ODk2LFwieVwiOi0wLjAxNTcyMTc3MDAwMzQzNzk5Nn0sXCJyYWRpdXNcIjo0MS41NDgxNDI0ODkwNDU4Nn0se1wiY2VudGVyXCI6e1wieFwiOjQ1Ni4yOTUxNDY1MjExODA4NyxcInlcIjo1OS4yMzMyMzMxMjk4Mzg0OH0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMC44OTc5NjkyMTIzODMwMzE4LFwieVwiOi0yLjM0OTk2NTEzODM2MDg1OH0sXCJyYWRpdXNcIjo0OC44MDUyNDk1MTAzMzI5NH0se1wiY2VudGVyXCI6e1wieFwiOjk5LjYwNDA3NzkyMTI0ODk3LFwieVwiOjg2LjgwMzgyNzI1MzE3MDMxfSxcInZlbG9jaXR5XCI6e1wieFwiOi0wLjAzNzkzODk5MzQyNDE3NzE3LFwieVwiOjIuNzExNTY5ODMyNjM3OTA2fSxcInJhZGl1c1wiOjE2LjA5MjU4MDk4NTI3Nzg5fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MjM2Ljg5NDEzMjY2NzIyMTEzLFwieVwiOjIyNy4xNjcwNjIxNTk4NjA1fSxcInZlbG9jaXR5XCI6e1wieFwiOjMuMTI0OTY2ODc2NTgxMzExMixcInlcIjotMS4wNTc5ODgwOTc4OTEyMTE1fSxcInJhZGl1c1wiOjQ2LjEyNjgxOTYwNjg3MDQxfSx7XCJjZW50ZXJcIjp7XCJ4XCI6MzMyLjc4NDQ2MzEyMjQ4NzA3LFwieVwiOjU1LjMxNDU3Mzg0NTgyNjA5fSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjQ4MzA2OTExODExMjMyNTcsXCJ5XCI6MS4zODMwMjY2NzYyNTI0ODQzfSxcInJhZGl1c1wiOjIzLjkzMTY5MDY1MDA2MDc3M30se1wiY2VudGVyXCI6e1wieFwiOjE5MC45MjYyMDQ1OTY2NDYxMyxcInlcIjo5MS4wMzEwNDI1MDI3MjczNn0sXCJ2ZWxvY2l0eVwiOntcInhcIjoxLjM1NDM2NjU4NzQ3NDk0MjIsXCJ5XCI6Mi42NDg3MzI4MTMwNzUxODV9LFwicmFkaXVzXCI6MzQuMjYyMTYyMzQ0NTMwMjI1fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MzYyLjU3OTM1OTYwNjgzOTcsXCJ5XCI6MTU5Ljk5MDY4MDIyODQ1MzEzfSxcInZlbG9jaXR5XCI6e1wieFwiOjEuNzk4MzIxMDM2NjIxOTI4MixcInlcIjotMy44OTU0MDk5NDcyNjEyMTQzfSxcInJhZGl1c1wiOjQ1LjAxMjc5ODczNzczNDU1Nn0se1wiY2VudGVyXCI6e1wieFwiOjIzNy41MDU1MTMxODc0OTc4NSxcInlcIjoxMzUuNzQ2MTI5MDUxNzgyMn0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMS4xMDI0NjkzNjA0NTU4NzA2LFwieVwiOi0xLjcwNTI2NDUzNjY2Mzg4OTl9LFwicmFkaXVzXCI6MjcuMjcwODM3ODU0NTkzOTkyfSx7XCJjZW50ZXJcIjp7XCJ4XCI6MzMwLjA0MzMxNzYxNTA1NDU1LFwieVwiOjExMy40NzgwODg5MzkzMjk2MX0sXCJ2ZWxvY2l0eVwiOntcInhcIjozLjY3MDY5MjgyMDEwMTk3NjQsXCJ5XCI6Mi41OTk1MjE2Njg2Mjc4NTh9LFwicmFkaXVzXCI6MjIuODUxMTM0NjUwNDA5MjJ9LHtcImNlbnRlclwiOntcInhcIjo0MDYuODg3MTEwMTQ4NTU2NTMsXCJ5XCI6MTczLjY4NzM4NzIxMTQ4MTF9LFwidmVsb2NpdHlcIjp7XCJ4XCI6MC41MTYwNTMyNzk4NjE4MDc4LFwieVwiOi0xLjg2MzE1MDMzNzcxMDk3NjZ9LFwicmFkaXVzXCI6NDguNzU3MzcyOTU0ODYwMzN9LHtcImNlbnRlclwiOntcInhcIjoyMTAuMzE1MDQ2MTM5OTkyNzcsXCJ5XCI6MTAzLjczMTA1NjE0OTU4MzMxfSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjAwMjQ4MzQ5ODMwNTA4MjMsXCJ5XCI6LTAuMjIxMzcyNDM2NzMyMDUzNzZ9LFwicmFkaXVzXCI6NDEuMzI1ODU0MTI4MjI2NjR9LHtcImNlbnRlclwiOntcInhcIjoyNTAuNjg1MDgwMTAzNTc2MTgsXCJ5XCI6MjEwLjg0MTYwNzg5MTI1Nn0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMC45NjUyMjE0Nzc2NzI0NTc3LFwieVwiOjIuMzQ2NzA4NjE0Mzc5MTY3Nn0sXCJyYWRpdXNcIjozOC42MjAwMDU4NzM5NjMyNH0se1wiY2VudGVyXCI6e1wieFwiOjI3Ni43OTQwNzg2Mjk0NjM5LFwieVwiOjE5OC42MDcyNTQwODAyNDE1NX0sXCJ2ZWxvY2l0eVwiOntcInhcIjozLjA3MTIyOTU1ODQzODA2MjcsXCJ5XCI6MS4xNTE5MzMxMzczMjc0MzI2fSxcInJhZGl1c1wiOjM5LjEzMjgyNTYzOTA5ODg4fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MzQ2Ljk5ODgwNDI2Mzc3MDYsXCJ5XCI6MTI3LjEwNDY1MDExMTE3MDQ5fSxcInZlbG9jaXR5XCI6e1wieFwiOi0xLjA2MzE0MjExNzExMjg3NSxcInlcIjotMy41NTQ4MzIyNDQyOTE5MDE2fSxcInJhZGl1c1wiOjM3Ljc2NTI1OTczMzQyMzU5fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MzQzLjU3MzAwNDUwOTMyMjM1LFwieVwiOjE4Ni45OTI2NDcxMzA5NzM2NH0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi4wMTc0MjAyODYzMTI2OTkzLFwieVwiOjAuNjA4ODgwNDExODMzNTI0N30sXCJyYWRpdXNcIjoxMi41NDU4NDY3NTY1NDc2OX0se1wiY2VudGVyXCI6e1wieFwiOjEwNS41ODY0MjQyOTAyMDI1NixcInlcIjoxMjMuMDAyNjkwMjU0MDEyMTJ9LFwidmVsb2NpdHlcIjp7XCJ4XCI6Mi40MTY4NjE2MDQ4OTkxNjgsXCJ5XCI6Mi4wODA3MDQ2OTY0NzY0NTk1fSxcInJhZGl1c1wiOjIxLjA0ODQxNzA0NDgwMzV9LHtcImNlbnRlclwiOntcInhcIjoxMzMuNDI2ODc4NzEwMjc3MzgsXCJ5XCI6NjMuNDIwNjA2NDUwMTc3NzN9LFwidmVsb2NpdHlcIjp7XCJ4XCI6MS4yNTQxMzcyMTk4NjExNDk4LFwieVwiOjMuMDE0NTY2MjQyNjk0ODU0N30sXCJyYWRpdXNcIjoxOS41MjYyNDY2NzQzNTg4NDV9LHtcImNlbnRlclwiOntcInhcIjozOTkuNTIxNjg3MDkwMzk2OSxcInlcIjoyMTEuMzcxODAxOTM2MzAwNDd9LFwidmVsb2NpdHlcIjp7XCJ4XCI6MS4zNDY5MTUyODA0NDY0MTAyLFwieVwiOjMuOTczNTYzOTI4MTU3MDkxfSxcInJhZGl1c1wiOjM3LjI2MzEyMTM2Mjc3NTU2NH0se1wiY2VudGVyXCI6e1wieFwiOjI1Ny4yMDY0OTcyMjg3MDQ0LFwieVwiOjIzMi40NjA0NzgzMjYzMDU3NX0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi4xNjI3NTEwODQxOTM1ODczLFwieVwiOjAuNTAwNjYyMTU5MTc0NjgwN30sXCJyYWRpdXNcIjoxMC44MjYwMjM1NzQ5MTg1MDl9LHtcImNlbnRlclwiOntcInhcIjoyMTcuMDgwMTcwMzYzMTg3OCxcInlcIjoxMDkuMzA4MDI4MDk3OTYyOTZ9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTMuNDU3NDI3NzM0NTA5MTEwNSxcInlcIjotMi41Njg5NDk2NDUzODUxNDZ9LFwicmFkaXVzXCI6MzYuODM3MTY0MTQ0OTYzMDI2fSx7XCJjZW50ZXJcIjp7XCJ4XCI6NDM1LjA4NjkxMjE3MDA1MjUsXCJ5XCI6MTAwLjgyMzc0ODkyMTc0MjY2fSxcInZlbG9jaXR5XCI6e1wieFwiOjMuMzkwNzEyMDkxNjk5MjQyNixcInlcIjotMi41MjIwNjI1MzYzMjkwMzF9LFwicmFkaXVzXCI6NDkuMTE4Nzg0MzEyMTU4ODJ9LHtcImNlbnRlclwiOntcInhcIjoyMjcuMTAzMzk4NzAzOTcwMDIsXCJ5XCI6NTMuNzUwNjc0NTM0NTg5MDV9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTMuNDk4OTA3OTgxNDQwNDI1LFwieVwiOi0xLjYxMTkxMjg1NDAxNTgyNzJ9LFwicmFkaXVzXCI6MzUuOTM5NTI4MjE1Njc2NTQ2fV0gXHJcbiAgICBAY2lyY2xlcyA9IEBjaXJjbGVzLm1hcCAoY2lyY2xlKS0+XHJcbiAgICAgIG5ldyBDaXJjbGUgY2lyY2xlXHJcbiAgICByZXR1cm5cclxuXHJcbiAgdXBkYXRlOiAodGltZSkgLT5cclxuICAgIGZvciBjaXJjbGUgaW4gQGNpcmNsZXNcclxuICAgICAgY2lyY2xlLmVkZ2UodmVjKEB3aWR0aC5nZXQoKSxAaGVpZ2h0LmdldCgpKSlcclxuICAgICAgY2lyY2xlLnNlcGFyYXRlKEBjaXJjbGVzKVxyXG4gICAgICBjaXJjbGUudXBkYXRlKHRpbWUpXHJcbiAgZHJhdzogKGN0eCkgLT5cclxuICAgIEBjbGVhcihjdHgpXHJcbiAgICBmb3IgY2lyY2xlIGluIEBjaXJjbGVzXHJcbiAgICAgIGNpcmNsZS5kcmF3KGN0eClcclxuICAgICMgQGFuaW0ucGF1c2UoKTtcclxuICAgIHJldHVybiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZnJhbmltKGNhbnZhc2VJZCwgY29udGV4dCkge1xuICAgIHZhciB3aWR0aCAgPSAgd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc2VJZCksXG4gICAgICAgIGlzUnVubmluZyA9IHRydWUsXG4gICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgY3R4ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgZG9tRWxlbWVudC53aWR0aCA9IHdpZHRoO1xuICAgIGRvbUVsZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgZnVuY3Rpb24gcmVjYWxjdWxhdGUoKSB7XG4gICAgICAgIGlmICh3aWR0aCAgIT09IHdpbmRvdy5pbm5lcldpZHRoIHx8IGhlaWdodCAhPT0gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICBkb21FbGVtZW50LndpZHRoICA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgZG9tRWxlbWVudC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCAgPSBkb21FbGVtZW50LndpZHRoO1xuICAgICAgICAgICAgaGVpZ2h0ID0gZG9tRWxlbWVudC5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRpb25DYWxsYmFjayh0aW1lKSB7XG4gICAgICAgIGlmIChjb250ZXh0LmNvbmZpZyAmJiBjb250ZXh0LmNvbmZpZy5mdWxsU2l6ZSkge1xuICAgICAgICAgICAgcmVjYWxjdWxhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dC51cGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnRleHQudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgY29udGV4dC5kcmF3KGN0eCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXcoY3R4LCB0aW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1J1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElkKTtcbiAgICAgICAgICAgIHJlcXVlc3RJZCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuYW5pbSA9IHtcbiAgICAgICAgZ2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGNvbnRleHQuY29uZmlnICYmIGNvbnRleHQuY29uZmlnLmZ1bGxTaXplKSA/IGhlaWdodCA6IGRvbUVsZW1lbnQuaGVpZ2h0O1xuICAgICAgICB9LFxuICAgICAgICBnZXRXaWR0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIChjb250ZXh0LmNvbmZpZyAmJiBjb250ZXh0LmNvbmZpZy5mdWxsU2l6ZSkgPyB3aWR0aCA6IGRvbUVsZW1lbnQud2lkdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3VtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25DYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHBhdXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0LnNldHVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRleHQuc2V0dXAoY3R4KTtcbiAgICB9XG4gICAgcmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25DYWxsYmFjayk7XG5cbiAgICByZXR1cm4gY29udGV4dDtcbn1cblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZyYW5pbTtcbn0iLCIvKlxuICogbnVtYmVyZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zYWZhcmVsaS9udW1iZXJlclxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBJcmFrbGkgU2FmYXJlbGlcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBtYXRoID0gZnVuY3Rpb24ob3BlcmF0aW9uLCBhcmdzKXtcbiAgICByZXR1cm4gbmV3IE51bWJlcmVyKGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbihwLCBjKXtcbiAgICAgICAgICAgIHZhciBhID0gKHAgJiYgcC5nZXQpID8gcC5nZXQoKSA6IHA7XG4gICAgICAgICAgICB2YXIgYiA9IChjICYmIGMuZ2V0KSA/IGMuZ2V0KCkgOiBjO1xuICAgICAgICAgICAgc3dpdGNoKG9wZXJhdGlvbil7XG4gICAgICAgICAgICAgICAgY2FzZSAncGx1cyc6IHJldHVybiBhICsgYjtcbiAgICAgICAgICAgICAgICBjYXNlICdtaW51cyc6IHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgICAgICBjYXNlICdkaXYnOiByZXR1cm4gYSAvIGI7XG4gICAgICAgICAgICAgICAgY2FzZSAnbXVsdCc6IHJldHVybiBhICogYjtcbiAgICAgICAgICAgICAgICBjYXNlICdtb2QnOiByZXR1cm4gYSAlIGI7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IFR5cGVFcnJvcigndW5rbm93biBvcGVyYXRpb24gJytvcGVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIE51bWJlcmVyKHZhbHVlKXtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbn1cblxuTnVtYmVyZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHYgPSB0aGlzLl9fdmFsdWU7XG4gICAgaWYodHlwZW9mIHYgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHYoKTtcbiAgICBlbHNlIHJldHVybiB2O1xufTtcblxuTnVtYmVyZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5OdW1iZXJlci5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBuZXcgTnVtYmVyZXIodGhpcy5fX3ZhbHVlKTtcbn07XG5cblsncGx1cycsICdtaW51cycsICdkaXYnLCAnbXVsdCcsICdtb2QnXS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xuICAgIE51bWJlcmVyLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgYXJncy51bnNoaWZ0KHRoaXMuY2xvbmUoKSk7XG4gICAgICAgIHRoaXMuX192YWx1ZSA9IChtYXRoKG5hbWUsIGFyZ3MpKS5fX3ZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgTnVtYmVyZXJbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG1hdGgobmFtZSxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXJlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHY7XG52LlZlYzJkID0gVmVjMmQ7XG52LnVuaXQgPSB1bml0RnJvbUFuZ2xlO1xuVmVjMmQudW5pdCA9IHVuaXRGcm9tQW5nbGU7XG5cbnZhciByZSA9IC9cXCgoLT9bLlxcZF0rKSwgKC0/Wy5cXGRdKylcXCkvO1xuXG5mdW5jdGlvbiBWZWMyZCh4LCB5KSB7XG4gIHRoaXMueCA9IHg7XG4gIHRoaXMueSA9IHk7XG59XG5cbmZ1bmN0aW9uIHVuaXRGcm9tQW5nbGUoYW5nbGUpIHtcbiAgcmV0dXJuIG5ldyBWZWMyZChNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKSk7XG59XG5cbmZ1bmN0aW9uIHYoeE9yUGFpciwgeSkge1xuICBpZiAoeE9yUGFpciA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBWZWMyZCgwLCAwLCAwKTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHhPclBhaXIpKSB7XG4gICAgcmV0dXJuIG5ldyBWZWMyZChwYXJzZUZsb2F0KHhPclBhaXJbMF0sIDEwKSwgcGFyc2VGbG9hdCh4T3JQYWlyWzFdLCAxMCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB4T3JQYWlyID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBuZXcgVmVjMmQocGFyc2VGbG9hdCh4T3JQYWlyLngsIDEwKSwgcGFyc2VGbG9hdCh4T3JQYWlyLnksIDEwKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHhPclBhaXIgPT09ICdzdHJpbmcnICYmIHkgPT0gbnVsbCkge1xuICAgIHZhciBtYXRjaCA9IHhPclBhaXIubWF0Y2gocmUpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG5ldyBWZWMyZChwYXJzZUZsb2F0KG1hdGNoWzFdLCAxMCksIHBhcnNlRmxvYXQobWF0Y2hbMl0sIDEwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlZlYzJkOiBjYW5ub3QgcGFyc2U6IFwiICsgeE9yUGFpcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgVmVjMmQocGFyc2VGbG9hdCh4T3JQYWlyLCAxMCksIHBhcnNlRmxvYXQoeSwgMTApKTtcbiAgfVxufVxuXG5WZWMyZC5wcm90b3R5cGUub2Zmc2V0ID0gZnVuY3Rpb24oZHgsIGR5KSB7XG4gIHJldHVybiBuZXcgVmVjMmQodGhpcy54ICsgZHgsIHRoaXMueSArIGR5KTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihvdGhlcikge1xuICB0aGlzLnggKz0gb3RoZXIueDtcbiAgdGhpcy55ICs9IG90aGVyLnk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHRoaXMueCAtPSBvdGhlci54O1xuICB0aGlzLnkgLT0gb3RoZXIueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkuYWRkKG90aGVyKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5taW51cyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkuc3ViKG90aGVyKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5uZWcgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy54ID0gLXRoaXMueDtcbiAgdGhpcy55ID0gLXRoaXMueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUubXVsdCA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHRoaXMueCAqPSBvdGhlci54O1xuICB0aGlzLnkgKj0gb3RoZXIueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUudGltZXMgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gdGhpcy5jbG9uZSgpLm11bHQob3RoZXIpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmRpdiA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHRoaXMueCAvPSBvdGhlci54O1xuICB0aGlzLnkgLz0gb3RoZXIueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuZGl2QnkgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gdGhpcy5jbG9uZSgpLmRpdihvdGhlcik7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuc2NhbGUgPSBmdW5jdGlvbihzY2FsYXIpIHtcbiAgdGhpcy54ICo9IHNjYWxhcjtcbiAgdGhpcy55ICo9IHNjYWxhcjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuc2NhbGVkID0gZnVuY3Rpb24oc2NhbGFyKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkuc2NhbGUoc2NhbGFyKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFZlYzJkKHRoaXMueCwgdGhpcy55KTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgdGhpcy54ID0gZnVuYyh0aGlzLngpO1xuICB0aGlzLnkgPSBmdW5jKHRoaXMueSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmFwcGxpZWQgPSBmdW5jdGlvbihmdW5jKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkuYXBwbHkoZnVuYyk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuZGlzdGFuY2VTcXJkID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgdmFyIGR4ID0gb3RoZXIueCAtIHRoaXMueDtcbiAgdmFyIGR5ID0gb3RoZXIueSAtIHRoaXMueTtcbiAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufTtcblxuVmVjMmQucHJvdG90eXBlLmRpc3RhbmNlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3FyZChvdGhlcikpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiB0aGlzLnggPT09IG90aGVyLnggJiYgdGhpcy55ID09PSBvdGhlci55O1xufTtcblxuVmVjMmQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBcIihcIiArIHRoaXMueCArIFwiLCBcIiArIHRoaXMueSArIFwiKVwiO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmxlbmd0aFNxcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxcmQoKSk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuYW5nbGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMubGVuZ3RoU3FyZCgpID09PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICB9XG59O1xuXG5WZWMyZC5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24oKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMuc2NhbGUoMSAvIGxlbmd0aCk7XG4gIH1cbn07XG5cblZlYzJkLnByb3RvdHlwZS5ub3JtYWxpemVkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkubm9ybWFsaXplKCk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuYm91bmRNaW4gPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAodGhpcy54IDwgb3RoZXIueCkgdGhpcy54ID0gb3RoZXIueDtcbiAgaWYgKHRoaXMueSA8IG90aGVyLnkpIHRoaXMueSA9IG90aGVyLnk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmJvdW5kTWF4ID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKHRoaXMueCA+IG90aGVyLngpIHRoaXMueCA9IG90aGVyLng7XG4gIGlmICh0aGlzLnkgPiBvdGhlci55KSB0aGlzLnkgPSBvdGhlci55O1xuICByZXR1cm4gdGhpcztcbn07XG5cblZlYzJkLnByb3RvdHlwZS5mbG9vciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hcHBseShNYXRoLmZsb29yKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5mbG9vcmVkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmFwcGxpZWQoTWF0aC5mbG9vcik7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuY2VpbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hcHBseShNYXRoLmNlaWwpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmNlaWxlZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hcHBsaWVkKE1hdGguY2VpbCk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUucHJvamVjdCA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHRoaXMuc2NhbGUodGhpcy5kb3Qob3RoZXIpIC8gb3RoZXIubGVuZ3RoU3FyZCgpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgcmV0dXJuIHRoaXMueCAqIG90aGVyLnggKyB0aGlzLnkgKiBvdGhlci55O1xufTtcblxuVmVjMmQucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xuICB2YXIgbmV3WCA9IHRoaXMueCAqIGRpcmVjdGlvbi54IC0gdGhpcy55ICogZGlyZWN0aW9uLnk7XG4gIHRoaXMueSA9IHRoaXMueCAqIGRpcmVjdGlvbi55ICsgdGhpcy55ICogZGlyZWN0aW9uLng7XG4gIHRoaXMueCA9IG5ld1g7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLnJvdGF0ZWQgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgcmV0dXJuIHRoaXMuY2xvbmUoKS5yb3RhdGUoZGlyZWN0aW9uKTtcbn07XG5cbi8vIHJlZmxlY3QgYWJvdXQgYXhpcyBvcmlnaW5hdGluZyBmcm9tIG9yaWdpblxuVmVjMmQucHJvdG90eXBlLnJlZmxlY3QgPSBmdW5jdGlvbihheGlzKSB7XG4gIHJldHVybiB0aGlzLnJlZmxlY3RBYm91dExpbmUobmV3IFZlYzJkKDAsIDApLCBheGlzKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5yZWZsZWN0QWJvdXRMaW5lID0gZnVuY3Rpb24obGluZVB0MSwgbGluZVB0Mikge1xuICB2YXIgbm9ybWFsID0gbmV3IFZlYzJkKFxuICAgICAgbGluZVB0Mi54IC0gbGluZVB0MS54LFxuICAgICAgbGluZVB0Mi55IC0gbGluZVB0MS54KTtcbiAgdmFyIHRlbXAgPSBub3JtYWwueDtcbiAgbm9ybWFsLnggPSAtbm9ybWFsLnk7XG4gIG5vcm1hbC55ID0gdGVtcDtcbiAgbm9ybWFsLm5vcm1hbGl6ZSgpO1xuICB2YXIgZG90MiA9IDIgKiB0aGlzLmRvdChub3JtYWwpO1xuICB0aGlzLnggLT0gZG90MiAqIG5vcm1hbC54O1xuICB0aGlzLnkgLT0gZG90MiAqIG5vcm1hbC55O1xuICByZXR1cm4gdGhpcztcbn07XG5cblZlYzJkLnByb3RvdHlwZS5zZXQgPSBWZWMyZDtcbiIsInZlYyA9IHJlcXVpcmUgJ3ZlYzJkJ1xyXG5kcmF3ID0gcmVxdWlyZSAnLi9kcmF3J1xyXG5cclxuY2xhc3MgQ2lyY2xlXHJcbiAgY29uc3RydWN0b3I6IChvYmopIC0+XHJcbiAgICBAY2VudGVyID0gdmVjIG9iai5jZW50ZXIueCwgb2JqLmNlbnRlci55XHJcbiAgICBAYWNjZWxlcmF0aW9uID0gdmVjIDAsIDBcclxuICAgIEB2ZWxvY2l0eSA9IHZlYyBvYmoudmVsb2NpdHkueCwgb2JqLnZlbG9jaXR5LnlcclxuXHJcbiAgICBAcmFkaXVzID0gb2JqLnJhZGl1c1xyXG4gICAgQG1pblJhZGl1cyA9IEByYWRpdXMqMC4yXHJcbiAgICBAbWluUmFkaXVzID0gMTAgaWYgQG1pblJhZGl1cyA8IDEwXHJcbiAgICBcclxuICAgIEBtYXNzID0gMSAjIEByYWRpdXMgKiBAcmFkaXVzICogMiAqTWF0aC5QSVxyXG4gICAgQG5laWdoYm9ycyA9IFtdXHJcbiAgICBAZHJhd1F1ZWUgPSBbXVxyXG4gICAgQHplcm9BY2NlbGVyYXRpb25UaW1lID0gMFxyXG5cclxuICBhcHBseUZvcmNlOiAoZm9yY2UpIC0+XHJcbiAgICBAYWNjZWxlcmF0aW9uLmFkZChmb3JjZS5zY2FsZWQoMS9AbWFzcykpXHJcbiAgXHJcbiAgaXNTdG9wcGVkOiAtPlxyXG4gICAgQG5laWdoYm9ycy5sZW5ndGggPiAwXHJcbiAgXHJcbiAgc3RvcDogLT5cclxuICAgIEBhY2NlbGVyYXRpb24uc2NhbGUoMClcclxuICAgIEB2ZWxvY2l0eS5zY2FsZSgwKVxyXG5cclxuICBlZGdlRm9yY2U6IChtYXgpIC0+XHJcbiAgICAjIGZvcmNlPSB2ZWMgMCwgMFxyXG4gICAgeCA9IDBcclxuICAgIHkgPSAwXHJcbiAgICB4ICs9IDEgaWYgQGNlbnRlci54IDwgQHJhZGl1c1xyXG4gICAgeSArPSAxIGlmIEBjZW50ZXIueSA8IEByYWRpdXNcclxuICAgIHggLT0gMSBpZiBAY2VudGVyLnggPiBtYXgueCAtIEByYWRpdXNcclxuICAgIHkgLT0gMSBpZiBAY2VudGVyLnkgPiBtYXgueSAtIEByYWRpdXNcclxuICAgIGYgPSB2ZWMoeCwgeSlcclxuICAgIGlmIGYubGVuZ3RoKCkgPiAwXHJcbiAgICAgICMgcmV0dXJuIEB2ZWxvY2l0eS5jbG9uZSgpLnNjYWxlKC0yKVxyXG4gICAgICBAdmVsb2NpdHkuY2xvbmUoKS5yZWZsZWN0KGYpO1xyXG4gICAgICAjIGYubm9ybWFsaXplKCkuc2NhbGUoQHZlbG9jaXR5Lmxlbmd0aCgpKVxyXG4gICAgcmV0dXJuIGZcclxuXHJcbiAgc2VwYXJhdGVGb3JjZTogKGNpcmNsZXMpIC0+XHJcbiAgICBmb3JjZT0gdmVjIDAsIDBcclxuICAgIGNvdW50ID0gMFxyXG4gICAgbmVpZ2hib3IgPSBudWxsXHJcbiAgICBmb3IgY2lyY2xlIGluIGNpcmNsZXNcclxuICAgICAgY29udGludWUgaWYgY2lyY2xlID09IEBcclxuICAgICAgZGlzdGFuY2UgPSBAY2VudGVyLm1pbnVzKGNpcmNsZS5jZW50ZXIpXHJcbiAgICAgIGN1cnJlbnREaXN0YW5jZSA9IGRpc3RhbmNlLmxlbmd0aCgpXHJcbiAgICAgIG1pbkRpc3RhbmNlID0gY2lyY2xlLnJhZGl1cyArIEByYWRpdXNcclxuICAgICAgY29udGludWUgaWYgY3VycmVudERpc3RhbmNlID4gbWluRGlzdGFuY2VcclxuICAgICAgYWN1cmFuY2UgPSAxXHJcbiAgICAgIGlzQXRFZGdlID0gY3VycmVudERpc3RhbmNlIDw9IChtaW5EaXN0YW5jZSArIGFjdXJhbmNlKSBhbmQgY3VycmVudERpc3RhbmNlID4gKG1pbkRpc3RhbmNlIC0gYWN1cmFuY2UpO1xyXG4gICAgICBpc05vdEFjY2VsZXJhdGVkID0gQGFjY2VsZXJhdGlvbi5sZW5ndGgoKSA9PSAwIGFuZCAgY2lyY2xlLmFjY2VsZXJhdGlvbi5sZW5ndGgoKSA9PSAwXHJcbiAgICAgIGhhc1BsYWNlSW5OZWlnaGJvcnMgPSBjaXJjbGUubmVpZ2hib3JzLmxlbmd0aCA8IDIgYW5kIEBuZWlnaGJvcnMubGVuZ3RoIDwgMlxyXG4gICAgICBpc05vdE5laWdoYm9yID0gQG5laWdoYm9ycy5pbmRleE9mKGNpcmNsZSkgPT0gLTFcclxuICAgICAgaWYgaXNOb3ROZWlnaGJvciBhbmQgaXNBdEVkZ2UgYW5kIGlzTm90QWNjZWxlcmF0ZWQgYW5kIGhhc1BsYWNlSW5OZWlnaGJvcnNcclxuICAgICAgICBuZWlnaGJvciA9IGNpcmNsZVxyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIGYgPSBkaXN0YW5jZS5ub3JtYWxpemUoKS5zY2FsZShtaW5EaXN0YW5jZS9jdXJyZW50RGlzdGFuY2UpXHJcbiAgICAgIEBkcmF3UXVlZS5wdXNoKGRyYXcubGluZS5iaW5kKGRyYXcsY2lyY2xlLmNlbnRlcixjaXJjbGUuY2VudGVyLnBsdXMoZi5zY2FsZWQoY2lyY2xlLnJhZGl1cy8yKSkpKVxyXG4gICAgICBmb3JjZS5hZGQoZik7XHJcbiAgICAgIGNvdW50KytcclxuICAgIGlmIChjb3VudCA9PSAwIGFuZCBuZWlnaGJvciE9bnVsbClcclxuICAgICAgQHN0aWNrKG5laWdoYm9yKVxyXG4gICAgICAjIEBuZWlnaGJvcnMucHVzaChuZWlnaGJvcilcclxuICAgICAgIyBuZWlnaGJvci5uZWlnaGJvcnMucHVzaChAKVxyXG5cclxuICAgIGlmIChjb3VudCA+IDApXHJcbiAgICAgIGZvcmNlLnNjYWxlKDEvY291bnQpXHJcbiAgICBmb3JjZVxyXG5cclxuICBzdGljazogKGNpcmNsZSkgLT5cclxuICAgIEBuZWlnaGJvcnMucHVzaChjaXJjbGUpXHJcbiAgICBAc3RvcCgpXHJcbiAgICBjaXJjbGUubmVpZ2hib3JzLnB1c2goQClcclxuICAgIGNpcmNsZS5zdG9wKClcclxuXHJcbiAgc2VwYXJhdGU6IChjaXJjbGVzKSAtPlxyXG4gICAgcmV0dXJuIGlmIEBpc1N0b3BwZWQoKVxyXG4gICAgQGFwcGx5Rm9yY2UoQHNlcGFyYXRlRm9yY2UoY2lyY2xlcykpXHJcblxyXG4gIGVkZ2U6IChtYXgpIC0+XHJcbiAgICByZXR1cm4gaWYgQGlzU3RvcHBlZCgpXHJcbiAgICBAYXBwbHlGb3JjZShAZWRnZUZvcmNlKG1heCkpXHJcblxyXG4gIHVwZGF0ZTogKHRpbWUpIC0+XHJcbiAgICAjIHRvZG8gZXMgcm8gbW9pc2hhbG9zIG1haW5jIGFncmRlbGViZW4gbW9kcmFvYmFzIGFycmFkIGEgd2VzaXQgZ2Fub2xlYnVsaSB1bmRhIGl5b3MgZW5lcmdpYSBcclxuICAgICMgcmV0dXJuIGlmIEBpc1N0b3BwZWQoKVxyXG4gICAgaWYgQGFjY2VsZXJhdGlvbi5sZW5ndGgoKSA9PSAwIGFuZCB0aW1lIC0gQHplcm9BY2NlbGVyYXRpb25UaW1lID4gNTAwXHJcbiAgICAgIEB6ZXJvQWNjZWxlcmF0aW9uVGltZSA9IHRpbWVcclxuICAgIGVsc2VcclxuICAgICAgaWYodGltZSA+IEB6ZXJvQWNjZWxlcmF0aW9uVGltZSArIDMwMDAgJiYgQHJhZGl1cyA+IEBtaW5SYWRpdXMqMylcclxuICAgICAgICBAcmFkaXVzIC09ICh0aW1lIC0gQHplcm9BY2NlbGVyYXRpb25UaW1lKSAvIDIwMDA7XHJcbiAgICAgIGlmKHRpbWUgPiBAemVyb0FjY2VsZXJhdGlvblRpbWUgKyA2MDAwICYmIEByYWRpdXMgPiBAbWluUmFkaXVzKVxyXG4gICAgICAgIEByYWRpdXMgLT0gKHRpbWUgLSBAemVyb0FjY2VsZXJhdGlvblRpbWUpIC8gMjAwMDsgXHJcbiAgICAgIGlmKHRpbWUgPiBAemVyb0FjY2VsZXJhdGlvblRpbWUgKyA2MDAwICYmIEByYWRpdXMgPiBAbWluUmFkaXVzKjAuNSlcclxuICAgICAgICBAcmFkaXVzIC09ICh0aW1lIC0gQHplcm9BY2NlbGVyYXRpb25UaW1lKSAvIDIwMDA7ICAgIFxyXG5cclxuICAgIEB2ZWxvY2l0eS5hZGQoQGFjY2VsZXJhdGlvbik7XHJcbiAgICBAdmVsb2NpdHkuYm91bmRNYXhcclxuICAgICAgeDoxXHJcbiAgICAgIHk6MVxyXG4gICAgQGNlbnRlci5hZGQoQHZlbG9jaXR5KVxyXG4gICAgQGFjY2VsZXJhdGlvbi5zY2FsZSgwKTtcclxuICAgIEBkcmF3UXVlZS5wdXNoKGRyYXcubGluZS5iaW5kKGRyYXcsQGNlbnRlcixAY2VudGVyLnBsdXMoQHZlbG9jaXR5LnNjYWxlZChAcmFkaXVzLzIpKSkpXHJcblxyXG4gICAgcmV0dXJuXHJcblxyXG4gIGRyYXc6IChjdHgpIC0+XHJcbiAgICBAY3R4ID0gY3R4O1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICBjdHguYXJjIEBjZW50ZXIueCwgQGNlbnRlci55LCBAcmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2VcclxuICAgIGN0eC5saW5lV2lkdGggPSAxXHJcbiAgICBpZiBAbmVpZ2hib3JzLmxlbmd0aCA9PSAwIFxyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJ1xyXG4gICAgZWxzZSBpZiBAbmVpZ2hib3JzLmxlbmd0aCA9PSAxIFxyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSdcclxuICAgIGVsc2UgaWYgQG5laWdoYm9ycy5sZW5ndGggPT0gMlxyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnZ3JlZW4nXHJcbiAgICBlbHNlIFxyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnb3JhbmdlJ1xyXG4gICAgXHJcbiAgICBmb3IgbmVpZ2hib3IgaW4gQG5laWdoYm9yc1xyXG4gICAgICBkcmF3LmxpbmUoQGNlbnRlcixuZWlnaGJvci5jZW50ZXIsY3R4KVxyXG4gICAgZm9yIGQgaW4gQGRyYXdRdWVlXHJcbiAgICAgIGQoY3R4KVxyXG4gICAgQGRyYXdRdWVlID0gW11cclxuICAgIGN0eC5zdHJva2UoKVxyXG5cclxuICAgIHJldHVyblxyXG5cclxuQ2lyY2xlLnJhbmRvbSA9IChtYXgscGFkZGluZyktPlxyXG4gIHMgPSBuZXcgQ2lyY2xlXHJcbiAgcy5zdGFydCA9IFxyXG4gICAgeDogTWF0aC5yYW5kb20oKSoobWF4LnggKyAyKnBhZGRpbmcpICsgcGFkZGluZ1xyXG4gICAgeTogTWF0aC5yYW5kb20oKSoobWF4LnkgKyAyKnBhZGRpbmcpICsgcGFkZGluZ1xyXG4gIHMucmFkaXVzID0gTWF0aC5yYW5kb20oKSozMCArIDMwXHJcbiAgcy5hbmdsZSA9IDM2MCpNYXRoLnJhbmRvbSgpKihNYXRoLlBJLzE4MClcclxuICBzLmRpcmVjdGlvbiA9ICEhKE1hdGgucmFuZG9tKCkgPiAwLjUpXHJcbiAgcy5jaXJjbGVzID0gfn4oMiArIE1hdGgucmFuZG9tKCkqNClcclxuICByZXR1cm4gcztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ2lyY2xlIiwiZHJhdyA9IFxyXG4gIGxpbmU6IChzdGFydCxlbmQsY3R4KSAtPlxyXG4gICAgc3Ryb2tlU3R5bGUgPSBjdHguc3Ryb2tlU3R5bGVcclxuICAgIGN0eC5zdHJva2UoKVxyXG4gICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsdWVcIlxyXG4gICAgY3R4Lm1vdmVUbyBzdGFydC54LHN0YXJ0LnlcclxuICAgIGN0eC5saW5lVG8gZW5kLngsZW5kLnlcclxuICAgIGN0eC5zdHJva2UoKVxyXG4gICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZVxyXG5cclxuICBzcGlyYWw6IChudW0sbyxnZW5lcmF0b3IpIC0+XHJcbiAgICByZXR1cm4gaWYgbnVtID09IDA7IFxyXG4gICAgbmV4dCA9IGdlbmVyYXRvcigpO1xyXG5cclxuICAgIHNBbmdsZSA9IE1hdGguUEkgKyBvLmFuZ2xlO1xyXG4gICAgZUFuZ2xlID0gc0FuZ2xlICsgTWF0aC5QSSAqIDIgKiBvLmNpcmNsZXM7XHJcbiAgICBcclxuICAgIGNlbnRlciA9IFxyXG4gICAgICB4OiBvLnN0YXJ0LnggKyBNYXRoLmNvcyhvLmFuZ2xlKSpvLnJhZGl1c1xyXG4gICAgICB5OiBvLnN0YXJ0LnkgKyBNYXRoLnNpbihvLmFuZ2xlKSpvLnJhZGl1c1xyXG4gICAgXHJcblxyXG4gICAgZHJhdy5saW5lLmNhbGwoQCxvLnN0YXJ0LGNlbnRlcik7XHJcblxyXG4gICAgaW5jcmVtZW50ID0gMiAqIE1hdGguUEkgLyA2MCAjU1RFUFNfUEVSX1JPVEFUSU9OXHJcbiAgICB0aGV0YSA9IHNBbmdsZVxyXG4gICAgc2F2ZUF0QW5nbGUgPSAoTWF0aC5yYW5kb20oKSArIDAuNSkqTWF0aC5QSVxyXG4gICAgc2F2ZWQgPSBmYWxzZVxyXG4gICAgQGJlZ2luUGF0aCgpXHJcbiAgICBAbW92ZVRvIGNlbnRlci54LGNlbnRlci55XHJcbiAgICB3aGlsZSB0aGV0YSA8PSBlQW5nbGUgKyBpbmNyZW1lbnRcclxuICAgICAgdGVtcFRoZXRhID0gaWYgby5kaXJlY3Rpb24gdGhlbiB0aGV0YSBlbHNlIC0xKih0aGV0YSAtIDIqby5hbmdsZSlcclxuICAgICAgcG9pbnQgPVxyXG4gICAgICAgIHg6IGNlbnRlci54ICsgby5yYWRpdXMgKiBNYXRoLmNvcyh0ZW1wVGhldGEpICogKHByb2dyZXNzKVxyXG4gICAgICAgIHk6IGNlbnRlci55ICsgby5yYWRpdXMgKiBNYXRoLnNpbih0ZW1wVGhldGEpICogKHByb2dyZXNzKVxyXG4gICAgICBpZiBub3Qgc2F2ZWQgYW5kIGVBbmdsZSAtIHNhdmVBdEFuZ2xlIDwgdGhldGFcclxuICAgICAgICBuZXh0LnN0YXJ0LnggPSBwb2ludC54XHJcbiAgICAgICAgbmV4dC5zdGFydC55ID0gcG9pbnQueVxyXG4gICAgICAgIHNhdmVkID0gdHJ1ZVxyXG4gICAgICAgIHNhdmVBdEFuZ2xlID0gdGVtcFRoZXRhXHJcbiAgICAgICAgZHJhdy5saW5lLmNhbGwoQCxjZW50ZXIscG9pbnQpO1xyXG5cclxuICAgICAgcHJvZ3Jlc3MgPSAodGhldGEgLSBzQW5nbGUpLyhlQW5nbGUgLSBzQW5nbGUpXHJcbiAgICAgIHRoZXRhICs9IGluY3JlbWVudDtcclxuICAgICAgQGxpbmVUbyBwb2ludC54LCBwb2ludC55XHJcbiAgICBAc3Ryb2tlKClcclxuXHJcbiAgICBuZXh0LmFuZ2xlID0gc2F2ZUF0QW5nbGUlKE1hdGguUEkqMilcclxuICAgIG5leHQuZGlyZWN0aW9uID0gIW8uZGlyZWN0aW9uO1xyXG5cclxuICAgIGRyYXcuc3BpcmFsLmNhbGwgQCwgLS1udW0sIG5leHQsZ2VuZXJhdG9yO1xyXG4gICAgcmV0dXJuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRyYXc7Il19
