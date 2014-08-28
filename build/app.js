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
    var gap, i, velocity, _i;
    this.width = new n(this.anim.getWidth);
    this.height = new n(this.anim.getHeight);
    this.clear(ctx);
    this.circles = [];
    gap = 50;
    velocity = 4;
    for (i = _i = 0; _i < 30; i = ++_i) {
      this.circles.push({
        center: {
          x: Math.random() * (this.width.get() - gap * 2) + gap,
          y: Math.random() * (this.height.get() - gap * 2) + gap
        },
        velocity: {
          x: Math.random() * velocity / 2 - velocity,
          y: Math.random() * velocity / 2 - velocity
        },
        radius: Math.random() * 25 + 15
      });
    }
    console.log(JSON.stringify(this.circles));
    this.circles = [
      {
        "center": {
          "x": 176.55879888217896,
          "y": 137.20907585695386
        },
        "velocity": {
          "x": -2.430247380863875,
          "y": -3.8162123919464648
        },
        "radius": 22.402058446314186
      }, {
        "center": {
          "x": 121.20406474918127,
          "y": 72.8205131618306
        },
        "velocity": {
          "x": -3.9680192577652633,
          "y": -2.0227861697785556
        },
        "radius": 33.075595231493935
      }, {
        "center": {
          "x": 64.31701648980379,
          "y": 61.2896742830053
        },
        "velocity": {
          "x": -3.5827261130325496,
          "y": -3.2235171673819423
        },
        "radius": 19.336413712007925
      }, {
        "center": {
          "x": 159.77747140452266,
          "y": 141.91903632553294
        },
        "velocity": {
          "x": -2.6026631738059223,
          "y": -2.5009558610618114
        },
        "radius": 15.560856843367219
      }, {
        "center": {
          "x": 67.6118225324899,
          "y": 125.91610967507586
        },
        "velocity": {
          "x": -2.202694130130112,
          "y": -3.49667477235198
        },
        "radius": 30.33869866398163
      }, {
        "center": {
          "x": 115.65849353559315,
          "y": 122.80111459922045
        },
        "velocity": {
          "x": -2.1103686336427927,
          "y": -2.6287782453000546
        },
        "radius": 24.419314056867734
      }, {
        "center": {
          "x": 250.1426284108311,
          "y": 111.81301160063595
        },
        "velocity": {
          "x": -2.4279934144578874,
          "y": -2.6838688706047833
        },
        "radius": 34.41533479257487
      }, {
        "center": {
          "x": 94.50015999376774,
          "y": 82.38640533015132
        },
        "velocity": {
          "x": -2.1071864240802824,
          "y": -2.8460239046253264
        },
        "radius": 25.75550222885795
      }, {
        "center": {
          "x": 120.52744014654309,
          "y": 148.6086442740634
        },
        "velocity": {
          "x": -2.27126101590693,
          "y": -2.411701804958284
        },
        "radius": 30.710299205966294
      }, {
        "center": {
          "x": 55.31120335217565,
          "y": 79.10345070436597
        },
        "velocity": {
          "x": -2.2313624597154558,
          "y": -3.9318167427554727
        },
        "radius": 18.476455877535045
      }, {
        "center": {
          "x": 254.88215431105345,
          "y": 72.90973802702501
        },
        "velocity": {
          "x": -2.958559150341898,
          "y": -2.151538555510342
        },
        "radius": 27.648119393270463
      }, {
        "center": {
          "x": 257.09639274980873,
          "y": 86.26954264659435
        },
        "velocity": {
          "x": -2.7829043958336115,
          "y": -2.2610577810555696
        },
        "radius": 35.79023403930478
      }, {
        "center": {
          "x": 81.32665801793337,
          "y": 149.3491127025336
        },
        "velocity": {
          "x": -3.525612549856305,
          "y": -3.401405406650156
        },
        "radius": 37.929658816428855
      }, {
        "center": {
          "x": 188.0667814798653,
          "y": 126.65212202211842
        },
        "velocity": {
          "x": -2.1676446376368403,
          "y": -3.3132347064092755
        },
        "radius": 30.715356735745445
      }, {
        "center": {
          "x": 165.0987937580794,
          "y": 148.5670365015976
        },
        "velocity": {
          "x": -2.657134235370904,
          "y": -3.3094981596805155
        },
        "radius": 36.39280459959991
      }, {
        "center": {
          "x": 106.99789714068174,
          "y": 91.21111416304484
        },
        "velocity": {
          "x": -3.549625444225967,
          "y": -2.5760029130615294
        },
        "radius": 21.563956226455048
      }, {
        "center": {
          "x": 252.52361321356148,
          "y": 75.16418557800353
        },
        "velocity": {
          "x": -3.603645803872496,
          "y": -3.696858121547848
        },
        "radius": 30.314550168113783
      }, {
        "center": {
          "x": 205.02092040143907,
          "y": 153.61368754366413
        },
        "velocity": {
          "x": -2.6950914626941085,
          "y": -2.9966739085502923
        },
        "radius": 34.87264931667596
      }, {
        "center": {
          "x": 91.72124527860433,
          "y": 97.11431939946488
        },
        "velocity": {
          "x": -2.174241083674133,
          "y": -3.920537223108113
        },
        "radius": 15.8256712986622
      }, {
        "center": {
          "x": 134.89701844286174,
          "y": 99.23108572280034
        },
        "velocity": {
          "x": -2.6616185237653553,
          "y": -3.543251346796751
        },
        "radius": 16.609128440031782
      }, {
        "center": {
          "x": 81.39241126831621,
          "y": 81.77874224027619
        },
        "velocity": {
          "x": -3.8159722359851003,
          "y": -3.21716212015599
        },
        "radius": 25.37791176349856
      }, {
        "center": {
          "x": 162.64944892842323,
          "y": 114.42252451460809
        },
        "velocity": {
          "x": -2.606370747089386,
          "y": -2.120982963591814
        },
        "radius": 31.442842956166714
      }, {
        "center": {
          "x": 139.42362723406404,
          "y": 102.27551054535434
        },
        "velocity": {
          "x": -2.5995103027671576,
          "y": -2.7141673672012985
        },
        "radius": 18.986126405652612
      }, {
        "center": {
          "x": 184.134821286425,
          "y": 50.96876119449735
        },
        "velocity": {
          "x": -2.186658016871661,
          "y": -3.1259442321024835
        },
        "radius": 16.168969209538773
      }, {
        "center": {
          "x": 146.3910707598552,
          "y": 67.08050921140239
        },
        "velocity": {
          "x": -2.9959049676544964,
          "y": -2.1853601094335318
        },
        "radius": 29.097575383493677
      }, {
        "center": {
          "x": 91.45870572887361,
          "y": 116.97165174270049
        },
        "velocity": {
          "x": -3.934031479526311,
          "y": -2.5709697124548256
        },
        "radius": 20.37264875601977
      }, {
        "center": {
          "x": 83.95883853081614,
          "y": 118.05433418881148
        },
        "velocity": {
          "x": -2.8867437206208706,
          "y": -3.21133733401075
        },
        "radius": 28.029901555273682
      }, {
        "center": {
          "x": 247.18013835605234,
          "y": 124.28142492845654
        },
        "velocity": {
          "x": -3.5293420939706266,
          "y": -3.5663135955110192
        },
        "radius": 25.784896125551313
      }, {
        "center": {
          "x": 201.71324269846082,
          "y": 50.70495475223288
        },
        "velocity": {
          "x": -3.038679027929902,
          "y": -2.0935785570181906
        },
        "radius": 39.53131871880032
      }, {
        "center": {
          "x": 180.07723557762802,
          "y": 64.86430198838934
        },
        "velocity": {
          "x": -2.8878712924197316,
          "y": -2.124117183033377
        },
        "radius": 37.49022467294708
      }
    ];
    this.circles = this.circles.map(function(circle) {
      return new Circle(circle);
    });
  },
  update: function(time) {
    var circle, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
    _ref = this.circles;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      circle = _ref[_i];
      circle.edge(vec(this.width.get(), this.height.get()));
      circle.separate(this.circles);
    }
    _ref1 = this.circles;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      circle = _ref1[_j];
      circle.respondToRequests();
    }
    _ref2 = this.circles;
    _results = [];
    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
      circle = _ref2[_k];
      circle.checkLoop(time);
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
    this.drawQuee = [];
    this.accelerationDuration = 0;
    this.accelerationTimeStart = 0;
    this.friends = [];
    this.requests = [];
  }

  Circle.prototype.applyForce = function(force) {
    return this.acceleration.add(force.scaled(1 / this.mass));
  };

  Circle.prototype.stop = function() {
    this.acceleration.scale(0);
    return this.velocity.scale(0);
  };

  Circle.prototype.edgeForce = function(max) {
    var normal, sameDirection, sameDirectionX, sameDirectionY;
    normal = vec(0, 0);
    if (this.center.x < this.radius) {
      normal.x = 1;
    } else if (this.center.x > max.x - this.radius) {
      normal.x = -1;
    } else if (this.center.y < this.radius) {
      normal.y = 1;
    } else if (this.center.y > max.y - this.radius) {
      normal.y = -1;
    }
    sameDirectionX = (this.velocity.x > 0 && normal.x > 0) || (this.velocity.x < 0 && normal.x < 0);
    sameDirectionY = (this.velocity.y > 0 && normal.y > 0) || (this.velocity.y < 0 && normal.y < 0);
    sameDirection = sameDirectionX || sameDirectionY;
    if (normal.length() > 0 && !sameDirection) {
      normal.scale(this.velocity.scaled(-2).dot(normal));
    }
    return normal;
  };

  Circle.prototype.separateForce = function(circles) {
    var acurance, circle, count, currentDistance, distance, f, force, hasNotSendRequest, isAtEdge, minDistance, _i, _len;
    force = vec(0, 0);
    count = 0;
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
      acurance = 0.25;
      isAtEdge = currentDistance > (minDistance - acurance);
      hasNotSendRequest = this.requests.indexOf(circle) === -1;
      if (isAtEdge && hasNotSendRequest) {
        this.requests.push(circle);
        circle.requests.push(this);
        continue;
      }
      f = distance.normalize().scale(minDistance / currentDistance);
      this.drawQuee.push(draw.line.bind(draw, circle.center, circle.center.plus(f.scaled(circle.radius / 2))));
      force.add(f);
      count++;
    }
    if (count > 0) {
      force.scale(1 / count);
    }
    return force;
  };

  Circle.prototype.respondToRequests = function() {
    var circle, circles, _i, _len, _results;
    if (this.friends.length === 2) {
      return;
    }
    circles = this.requests.filter((function(circle) {
      var hasPlaceForFreind, inNotFriend, isNotAccelerated;
      isNotAccelerated = circle.acceleration.length() === 0;
      hasPlaceForFreind = circle.friends.length < 2;
      inNotFriend = this.friends.indexOf(circle) === -1;
      return isNotAccelerated && isNotAccelerated && inNotFriend && hasPlaceForFreind;
    }).bind(this)).slice(0, 2 - this.friends.length);
    _results = [];
    for (_i = 0, _len = circles.length; _i < _len; _i++) {
      circle = circles[_i];
      this.friends.push(circle);
      this.acceleration.scale(0);
      this.velocity.scale(0);
      circle.friends.push(this);
      circle.acceleration.scale(0);
      _results.push(circle.velocity.scale(0));
    }
    return _results;
  };

  Circle.prototype.separate = function(circles) {
    return this.applyForce(this.separateForce(circles));
  };

  Circle.prototype.edge = function(max) {
    return this.applyForce(this.edgeForce(max));
  };

  Circle.prototype.checkLoop = function(time) {
    if (this.friends.length !== 0 || this.requests.length !== 0) {
      return;
    }
    if (this.acceleration.length() === 0) {
      return this.accelerationTimeStart = false;
    } else {
      if (this.accelerationTimeStart === false) {
        this.accelerationTimeStart = time;
      }
      this.accelerationDuration = time - this.accelerationTimeStart;
      console.log(this.accelerationDuration);
      if (this.accelerationDuration > 3000 && this.radius > this.minRadius * 3) {
        this.radius -= 3000. / 2000;
      }
      if (this.accelerationDuration > 6000 && this.radius > this.minRadius) {
        this.radius -= 6000. / 2000;
      }
      if (this.accelerationDuration > 9000 && this.radius > this.minRadius * 0.5) {
        return this.radius -= 9000. / 2000;
      }
    }
  };

  Circle.prototype.update = function(time) {
    if (this.friends.length > 0) {
      return;
    }
    this.velocity.add(this.acceleration);
    this.velocity.boundMax({
      x: 1,
      y: 1
    });
    this.center.add(this.velocity);
    this.acceleration.scale(0);
    this.drawQuee.push(draw.line.bind(draw, this.center, this.center.plus(this.velocity.scaled(this.radius / 2))));
    this.requests = [];
  };

  Circle.prototype.drawCircle = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1;
    if (this.friends.length === 0) {
      ctx.strokeStyle = 'red';
    } else if (this.friends.length === 1) {
      ctx.strokeStyle = 'green';
    } else if (this.friends.length === 2) {
      ctx.strokeStyle = 'orange';
    } else {
      ctx.strokeStyle = 'blue';
    }
    return ctx.stroke();
  };

  Circle.prototype.draw = function(ctx) {
    var d, friend, _i, _j, _len, _len1, _ref, _ref1;
    this.drawCircle(ctx);
    if (this.friends.length > 0) {
      _ref = this.friends;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        friend = _ref[_i];
        draw.line(this.center, friend.center, ctx, 'silver');
      }
    }
    _ref1 = this.drawQuee;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      d = _ref1[_j];
      d(ctx, 'red');
    }
    this.drawQuee = [];
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
  line: function(start, end, ctx, color) {
    ctx.beginPath();
    ctx.strokeStyle = color || "blue";
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    return ctx.stroke();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcaXJha2xpLnNhZmFyZWxpXFxEZXNrdG9wXFxzcGlyYWxlclxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGFwcC5jb2ZmZWUiLCJjOi9Vc2Vycy9pcmFrbGkuc2FmYXJlbGkvRGVza3RvcC9zcGlyYWxlci9ub2RlX21vZHVsZXMvZnJhbmltL2ZyYW5pbS5qcyIsImM6L1VzZXJzL2lyYWtsaS5zYWZhcmVsaS9EZXNrdG9wL3NwaXJhbGVyL25vZGVfbW9kdWxlcy9udW1iZXJlci9saWIvbnVtYmVyZXIuanMiLCJjOi9Vc2Vycy9pcmFrbGkuc2FmYXJlbGkvRGVza3RvcC9zcGlyYWxlci9ub2RlX21vZHVsZXMvdmVjMmQvaW5kZXguanMiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGNpcmNsZS5jb2ZmZWUiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGRyYXcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSx1QkFBQTs7QUFBQSxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FBSixDQUFBOztBQUFBLENBQ0EsR0FBSSxPQUFBLENBQVEsVUFBUixDQURKLENBQUE7O0FBQUEsSUFFQSxHQUFPLE9BQUEsQ0FBUSxRQUFSLENBRlAsQ0FBQTs7QUFBQSxNQUdBLEdBQVMsT0FBQSxDQUFRLFVBQVIsQ0FIVCxDQUFBOztBQUFBLEdBSUEsR0FBTSxPQUFBLENBQVEsT0FBUixDQUpOLENBQUE7O0FBQUEsQ0FNQSxDQUFFLFFBQUYsRUFDRTtBQUFBLEVBQUEsTUFBQSxFQUNFO0FBQUEsSUFBQSxRQUFBLEVBQVUsSUFBVjtHQURGO0FBQUEsRUFHQSxLQUFBLEVBQU8sU0FBQyxHQUFELEdBQUE7QUFDTCxJQUFBLEdBQUcsQ0FBQyxTQUFKLEdBQWdCLG9CQUFoQixDQUFBO1dBQ0EsR0FBRyxDQUFDLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBUCxDQUFBLENBQW5CLEVBQWlDLElBQUMsQ0FBQSxNQUFNLENBQUMsR0FBUixDQUFBLENBQWpDLEVBRks7RUFBQSxDQUhQO0FBQUEsRUFPQSxLQUFBLEVBQU8sU0FBQyxHQUFELEdBQUE7QUFDTCxRQUFBLG9CQUFBO0FBQUEsSUFBQSxJQUFDLENBQUEsS0FBRCxHQUFhLElBQUEsQ0FBQSxDQUFFLElBQUMsQ0FBQSxJQUFJLENBQUMsUUFBUixDQUFiLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxNQUFELEdBQWMsSUFBQSxDQUFBLENBQUUsSUFBQyxDQUFBLElBQUksQ0FBQyxTQUFSLENBRGQsQ0FBQTtBQUFBLElBRUEsSUFBQyxDQUFBLEtBQUQsQ0FBTyxHQUFQLENBRkEsQ0FBQTtBQUFBLElBR0EsSUFBQyxDQUFBLE9BQUQsR0FBVyxFQUhYLENBQUE7QUFBQSxJQUlBLEdBQUEsR0FBTSxFQUpOLENBQUE7QUFBQSxJQUtBLFFBQUEsR0FBVyxDQUxYLENBQUE7QUFNQSxTQUFTLDZCQUFULEdBQUE7QUFDRSxNQUFBLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUNFO0FBQUEsUUFBQSxNQUFBLEVBQ0U7QUFBQSxVQUFBLENBQUEsRUFBRyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBZ0IsQ0FBQyxJQUFDLENBQUEsS0FBSyxDQUFDLEdBQVAsQ0FBQSxDQUFBLEdBQWUsR0FBQSxHQUFJLENBQXBCLENBQWhCLEdBQXlDLEdBQTVDO0FBQUEsVUFDQSxDQUFBLEVBQUcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLENBQUMsSUFBQyxDQUFBLE1BQU0sQ0FBQyxHQUFSLENBQUEsQ0FBQSxHQUFnQixHQUFBLEdBQUksQ0FBckIsQ0FBaEIsR0FBMEMsR0FEN0M7U0FERjtBQUFBLFFBR0EsUUFBQSxFQUNFO0FBQUEsVUFBQSxDQUFBLEVBQUcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLFFBQWhCLEdBQXlCLENBQXpCLEdBQTZCLFFBQWhDO0FBQUEsVUFDQSxDQUFBLEVBQUcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLFFBQWhCLEdBQXlCLENBQXpCLEdBQTZCLFFBRGhDO1NBSkY7QUFBQSxRQU1BLE1BQUEsRUFBUSxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBZ0IsRUFBaEIsR0FBcUIsRUFON0I7T0FERixDQUFBLENBREY7QUFBQSxLQU5BO0FBQUEsSUFlQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksQ0FBQyxTQUFMLENBQWUsSUFBQyxDQUFBLE9BQWhCLENBQVosQ0FmQSxDQUFBO0FBQUEsSUFnQkEsSUFBQyxDQUFBLE9BQUQsR0FBVztNQUFDO0FBQUEsUUFBQyxRQUFBLEVBQVM7QUFBQSxVQUFDLEdBQUEsRUFBSSxrQkFBTDtBQUFBLFVBQXdCLEdBQUEsRUFBSSxrQkFBNUI7U0FBVjtBQUFBLFFBQTBELFVBQUEsRUFBVztBQUFBLFVBQUMsR0FBQSxFQUFJLENBQUEsaUJBQUw7QUFBQSxVQUF3QixHQUFBLEVBQUksQ0FBQSxrQkFBNUI7U0FBckU7QUFBQSxRQUFzSCxRQUFBLEVBQVMsa0JBQS9IO09BQUQsRUFBb0o7QUFBQSxRQUFDLFFBQUEsRUFBUztBQUFBLFVBQUMsR0FBQSxFQUFJLGtCQUFMO0FBQUEsVUFBd0IsR0FBQSxFQUFJLGdCQUE1QjtTQUFWO0FBQUEsUUFBd0QsVUFBQSxFQUFXO0FBQUEsVUFBQyxHQUFBLEVBQUksQ0FBQSxrQkFBTDtBQUFBLFVBQXlCLEdBQUEsRUFBSSxDQUFBLGtCQUE3QjtTQUFuRTtBQUFBLFFBQXFILFFBQUEsRUFBUyxrQkFBOUg7T0FBcEosRUFBc1M7QUFBQSxRQUFDLFFBQUEsRUFBUztBQUFBLFVBQUMsR0FBQSxFQUFJLGlCQUFMO0FBQUEsVUFBdUIsR0FBQSxFQUFJLGdCQUEzQjtTQUFWO0FBQUEsUUFBdUQsVUFBQSxFQUFXO0FBQUEsVUFBQyxHQUFBLEVBQUksQ0FBQSxrQkFBTDtBQUFBLFVBQXlCLEdBQUEsRUFBSSxDQUFBLGtCQUE3QjtTQUFsRTtBQUFBLFFBQW9ILFFBQUEsRUFBUyxrQkFBN0g7T0FBdFMsRUFBdWI7QUFBQSxRQUFDLFFBQUEsRUFBUztBQUFBLFVBQUMsR0FBQSxFQUFJLGtCQUFMO0FBQUEsVUFBd0IsR0FBQSxFQUFJLGtCQUE1QjtTQUFWO0FBQUEsUUFBMEQsVUFBQSxFQUFXO0FBQUEsVUFBQyxHQUFBLEVBQUksQ0FBQSxrQkFBTDtBQUFBLFVBQXlCLEdBQUEsRUFBSSxDQUFBLGtCQUE3QjtTQUFyRTtBQUFBLFFBQXVILFFBQUEsRUFBUyxrQkFBaEk7T0FBdmIsRUFBMmtCO0FBQUEsUUFBQyxRQUFBLEVBQVM7QUFBQSxVQUFDLEdBQUEsRUFBSSxnQkFBTDtBQUFBLFVBQXNCLEdBQUEsRUFBSSxrQkFBMUI7U0FBVjtBQUFBLFFBQXdELFVBQUEsRUFBVztBQUFBLFVBQUMsR0FBQSxFQUFJLENBQUEsaUJBQUw7QUFBQSxVQUF3QixHQUFBLEVBQUksQ0FBQSxnQkFBNUI7U0FBbkU7QUFBQSxRQUFrSCxRQUFBLEVBQVMsaUJBQTNIO09BQTNrQixFQUF5dEI7QUFBQSxRQUFDLFFBQUEsRUFBUztBQUFBLFVBQUMsR0FBQSxFQUFJLGtCQUFMO0FBQUEsVUFBd0IsR0FBQSxFQUFJLGtCQUE1QjtTQUFWO0FBQUEsUUFBMEQsVUFBQSxFQUFXO0FBQUEsVUFBQyxHQUFBLEVBQUksQ0FBQSxrQkFBTDtBQUFBLFVBQXlCLEdBQUEsRUFBSSxDQUFBLGtCQUE3QjtTQUFyRTtBQUFBLFFBQXVILFFBQUEsRUFBUyxrQkFBaEk7T0FBenRCLEVBQTYyQjtBQUFBLFFBQUMsUUFBQSxFQUFTO0FBQUEsVUFBQyxHQUFBLEVBQUksaUJBQUw7QUFBQSxVQUF1QixHQUFBLEVBQUksa0JBQTNCO1NBQVY7QUFBQSxRQUF5RCxVQUFBLEVBQVc7QUFBQSxVQUFDLEdBQUEsRUFBSSxDQUFBLGtCQUFMO0FBQUEsVUFBeUIsR0FBQSxFQUFJLENBQUEsa0JBQTdCO1NBQXBFO0FBQUEsUUFBc0gsUUFBQSxFQUFTLGlCQUEvSDtPQUE3MkIsRUFBKy9CO0FBQUEsUUFBQyxRQUFBLEVBQVM7QUFBQSxVQUFDLEdBQUEsRUFBSSxpQkFBTDtBQUFBLFVBQXVCLEdBQUEsRUFBSSxpQkFBM0I7U0FBVjtBQUFBLFFBQXdELFVBQUEsRUFBVztBQUFBLFVBQUMsR0FBQSxFQUFJLENBQUEsa0JBQUw7QUFBQSxVQUF5QixHQUFBLEVBQUksQ0FBQSxrQkFBN0I7U0FBbkU7QUFBQSxRQUFxSCxRQUFBLEVBQVMsaUJBQTlIO09BQS8vQixFQUFncEM7QUFBQSxRQUFDLFFBQUEsRUFBUztBQUFBLFVBQUMsR0FBQSxFQUFJLGtCQUFMO0FBQUEsVUFBd0IsR0FBQSxFQUFJLGlCQUE1QjtTQUFWO0FBQUEsUUFBeUQsVUFBQSxFQUFXO0FBQUEsVUFBQyxHQUFBLEVBQUksQ0FBQSxnQkFBTDtBQUFBLFVBQXVCLEdBQUEsRUFBSSxDQUFBLGlCQUEzQjtTQUFwRTtBQUFBLFFBQW1ILFFBQUEsRUFBUyxrQkFBNUg7T0FBaHBDLEVBQWd5QztBQUFBLFFBQUMsUUFBQSxFQUFTO0FBQUEsVUFBQyxHQUFBLEVBQUksaUJBQUw7QUFBQSxVQUF1QixHQUFBLEVBQUksaUJBQTNCO1NBQVY7QUFBQSxRQUF3RCxVQUFBLEVBQVc7QUFBQSxVQUFDLEdBQUEsRUFBSSxDQUFBLGtCQUFMO0FBQUEsVUFBeUIsR0FBQSxFQUFJLENBQUEsa0JBQTdCO1NBQW5FO0FBQUEsUUFBcUgsUUFBQSxFQUFTLGtCQUE5SDtPQUFoeUMsRUFBazdDO0FBQUEsUUFBQyxRQUFBLEVBQVM7QUFBQSxVQUFDLEdBQUEsRUFBSSxrQkFBTDtBQUFBLFVBQXdCLEdBQUEsRUFBSSxpQkFBNUI7U0FBVjtBQUFBLFFBQXlELFVBQUEsRUFBVztBQUFBLFVBQUMsR0FBQSxFQUFJLENBQUEsaUJBQUw7QUFBQSxVQUF3QixHQUFBLEVBQUksQ0FBQSxpQkFBNUI7U0FBcEU7QUFBQSxRQUFvSCxRQUFBLEVBQVMsa0JBQTdIO09BQWw3QyxFQUFta0Q7QUFBQSxRQUFDLFFBQUEsRUFBUztBQUFBLFVBQUMsR0FBQSxFQUFJLGtCQUFMO0FBQUEsVUFBd0IsR0FBQSxFQUFJLGlCQUE1QjtTQUFWO0FBQUEsUUFBeUQsVUFBQSxFQUFXO0FBQUEsVUFBQyxHQUFBLEVBQUksQ0FBQSxrQkFBTDtBQUFBLFVBQXlCLEdBQUEsRUFBSSxDQUFBLGtCQUE3QjtTQUFwRTtBQUFBLFFBQXNILFFBQUEsRUFBUyxpQkFBL0g7T0FBbmtELEVBQXF0RDtBQUFBLFFBQUMsUUFBQSxFQUFTO0FBQUEsVUFBQyxHQUFBLEVBQUksaUJBQUw7QUFBQSxVQUF1QixHQUFBLEVBQUksaUJBQTNCO1NBQVY7QUFBQSxRQUF3RCxVQUFBLEVBQVc7QUFBQSxVQUFDLEdBQUEsRUFBSSxDQUFBLGlCQUFMO0FBQUEsVUFBd0IsR0FBQSxFQUFJLENBQUEsaUJBQTVCO1NBQW5FO0FBQUEsUUFBbUgsUUFBQSxFQUFTLGtCQUE1SDtPQUFydEQsRUFBcTJEO0FBQUEsUUFBQyxRQUFBLEVBQVM7QUFBQSxVQUFDLEdBQUEsRUFBSSxpQkFBTDtBQUFBLFVBQXVCLEdBQUEsRUFBSSxrQkFBM0I7U0FBVjtBQUFBLFFBQXlELFVBQUEsRUFBVztBQUFBLFVBQUMsR0FBQSxFQUFJLENBQUEsa0JBQUw7QUFBQSxVQUF5QixHQUFBLEVBQUksQ0FBQSxrQkFBN0I7U0FBcEU7QUFBQSxRQUFzSCxRQUFBLEVBQVMsa0JBQS9IO09BQXIyRCxFQUF3L0Q7QUFBQSxRQUFDLFFBQUEsRUFBUztBQUFBLFVBQUMsR0FBQSxFQUFJLGlCQUFMO0FBQUEsVUFBdUIsR0FBQSxFQUFJLGlCQUEzQjtTQUFWO0FBQUEsUUFBd0QsVUFBQSxFQUFXO0FBQUEsVUFBQyxHQUFBLEVBQUksQ0FBQSxpQkFBTDtBQUFBLFVBQXdCLEdBQUEsRUFBSSxDQUFBLGtCQUE1QjtTQUFuRTtBQUFBLFFBQW9ILFFBQUEsRUFBUyxpQkFBN0g7T0FBeC9ELEVBQXdvRTtBQUFBLFFBQUMsUUFBQSxFQUFTO0FBQUEsVUFBQyxHQUFBLEVBQUksa0JBQUw7QUFBQSxVQUF3QixHQUFBLEVBQUksaUJBQTVCO1NBQVY7QUFBQSxRQUF5RCxVQUFBLEVBQVc7QUFBQSxVQUFDLEdBQUEsRUFBSSxDQUFBLGlCQUFMO0FBQUEsVUFBd0IsR0FBQSxFQUFJLENBQUEsa0JBQTVCO1NBQXBFO0FBQUEsUUFBcUgsUUFBQSxFQUFTLGtCQUE5SDtPQUF4b0UsRUFBMHhFO0FBQUEsUUFBQyxRQUFBLEVBQVM7QUFBQSxVQUFDLEdBQUEsRUFBSSxrQkFBTDtBQUFBLFVBQXdCLEdBQUEsRUFBSSxpQkFBNUI7U0FBVjtBQUFBLFFBQXlELFVBQUEsRUFBVztBQUFBLFVBQUMsR0FBQSxFQUFJLENBQUEsaUJBQUw7QUFBQSxVQUF3QixHQUFBLEVBQUksQ0FBQSxpQkFBNUI7U0FBcEU7QUFBQSxRQUFvSCxRQUFBLEVBQVMsa0JBQTdIO09BQTF4RSxFQUEyNkU7QUFBQSxRQUFDLFFBQUEsRUFBUztBQUFBLFVBQUMsR0FBQSxFQUFJLGtCQUFMO0FBQUEsVUFBd0IsR0FBQSxFQUFJLGtCQUE1QjtTQUFWO0FBQUEsUUFBMEQsVUFBQSxFQUFXO0FBQUEsVUFBQyxHQUFBLEVBQUksQ0FBQSxrQkFBTDtBQUFBLFVBQXlCLEdBQUEsRUFBSSxDQUFBLGtCQUE3QjtTQUFyRTtBQUFBLFFBQXVILFFBQUEsRUFBUyxpQkFBaEk7T0FBMzZFLEVBQThqRjtBQUFBLFFBQUMsUUFBQSxFQUFTO0FBQUEsVUFBQyxHQUFBLEVBQUksaUJBQUw7QUFBQSxVQUF1QixHQUFBLEVBQUksaUJBQTNCO1NBQVY7QUFBQSxRQUF3RCxVQUFBLEVBQVc7QUFBQSxVQUFDLEdBQUEsRUFBSSxDQUFBLGlCQUFMO0FBQUEsVUFBd0IsR0FBQSxFQUFJLENBQUEsaUJBQTVCO1NBQW5FO0FBQUEsUUFBbUgsUUFBQSxFQUFTLGdCQUE1SDtPQUE5akYsRUFBNHNGO0FBQUEsUUFBQyxRQUFBLEVBQVM7QUFBQSxVQUFDLEdBQUEsRUFBSSxrQkFBTDtBQUFBLFVBQXdCLEdBQUEsRUFBSSxpQkFBNUI7U0FBVjtBQUFBLFFBQXlELFVBQUEsRUFBVztBQUFBLFVBQUMsR0FBQSxFQUFJLENBQUEsa0JBQUw7QUFBQSxVQUF5QixHQUFBLEVBQUksQ0FBQSxpQkFBN0I7U0FBcEU7QUFBQSxRQUFxSCxRQUFBLEVBQVMsa0JBQTlIO09BQTVzRixFQUE4MUY7QUFBQSxRQUFDLFFBQUEsRUFBUztBQUFBLFVBQUMsR0FBQSxFQUFJLGlCQUFMO0FBQUEsVUFBdUIsR0FBQSxFQUFJLGlCQUEzQjtTQUFWO0FBQUEsUUFBd0QsVUFBQSxFQUFXO0FBQUEsVUFBQyxHQUFBLEVBQUksQ0FBQSxrQkFBTDtBQUFBLFVBQXlCLEdBQUEsRUFBSSxDQUFBLGdCQUE3QjtTQUFuRTtBQUFBLFFBQW1ILFFBQUEsRUFBUyxpQkFBNUg7T0FBOTFGLEVBQTYrRjtBQUFBLFFBQUMsUUFBQSxFQUFTO0FBQUEsVUFBQyxHQUFBLEVBQUksa0JBQUw7QUFBQSxVQUF3QixHQUFBLEVBQUksa0JBQTVCO1NBQVY7QUFBQSxRQUEwRCxVQUFBLEVBQVc7QUFBQSxVQUFDLEdBQUEsRUFBSSxDQUFBLGlCQUFMO0FBQUEsVUFBd0IsR0FBQSxFQUFJLENBQUEsaUJBQTVCO1NBQXJFO0FBQUEsUUFBcUgsUUFBQSxFQUFTLGtCQUE5SDtPQUE3K0YsRUFBK25HO0FBQUEsUUFBQyxRQUFBLEVBQVM7QUFBQSxVQUFDLEdBQUEsRUFBSSxrQkFBTDtBQUFBLFVBQXdCLEdBQUEsRUFBSSxrQkFBNUI7U0FBVjtBQUFBLFFBQTBELFVBQUEsRUFBVztBQUFBLFVBQUMsR0FBQSxFQUFJLENBQUEsa0JBQUw7QUFBQSxVQUF5QixHQUFBLEVBQUksQ0FBQSxrQkFBN0I7U0FBckU7QUFBQSxRQUF1SCxRQUFBLEVBQVMsa0JBQWhJO09BQS9uRyxFQUFteEc7QUFBQSxRQUFDLFFBQUEsRUFBUztBQUFBLFVBQUMsR0FBQSxFQUFJLGdCQUFMO0FBQUEsVUFBc0IsR0FBQSxFQUFJLGlCQUExQjtTQUFWO0FBQUEsUUFBdUQsVUFBQSxFQUFXO0FBQUEsVUFBQyxHQUFBLEVBQUksQ0FBQSxpQkFBTDtBQUFBLFVBQXdCLEdBQUEsRUFBSSxDQUFBLGtCQUE1QjtTQUFsRTtBQUFBLFFBQW1ILFFBQUEsRUFBUyxrQkFBNUg7T0FBbnhHLEVBQW02RztBQUFBLFFBQUMsUUFBQSxFQUFTO0FBQUEsVUFBQyxHQUFBLEVBQUksaUJBQUw7QUFBQSxVQUF1QixHQUFBLEVBQUksaUJBQTNCO1NBQVY7QUFBQSxRQUF3RCxVQUFBLEVBQVc7QUFBQSxVQUFDLEdBQUEsRUFBSSxDQUFBLGtCQUFMO0FBQUEsVUFBeUIsR0FBQSxFQUFJLENBQUEsa0JBQTdCO1NBQW5FO0FBQUEsUUFBcUgsUUFBQSxFQUFTLGtCQUE5SDtPQUFuNkcsRUFBcWpIO0FBQUEsUUFBQyxRQUFBLEVBQVM7QUFBQSxVQUFDLEdBQUEsRUFBSSxpQkFBTDtBQUFBLFVBQXVCLEdBQUEsRUFBSSxrQkFBM0I7U0FBVjtBQUFBLFFBQXlELFVBQUEsRUFBVztBQUFBLFVBQUMsR0FBQSxFQUFJLENBQUEsaUJBQUw7QUFBQSxVQUF3QixHQUFBLEVBQUksQ0FBQSxrQkFBNUI7U0FBcEU7QUFBQSxRQUFxSCxRQUFBLEVBQVMsaUJBQTlIO09BQXJqSCxFQUFzc0g7QUFBQSxRQUFDLFFBQUEsRUFBUztBQUFBLFVBQUMsR0FBQSxFQUFJLGlCQUFMO0FBQUEsVUFBdUIsR0FBQSxFQUFJLGtCQUEzQjtTQUFWO0FBQUEsUUFBeUQsVUFBQSxFQUFXO0FBQUEsVUFBQyxHQUFBLEVBQUksQ0FBQSxrQkFBTDtBQUFBLFVBQXlCLEdBQUEsRUFBSSxDQUFBLGdCQUE3QjtTQUFwRTtBQUFBLFFBQW9ILFFBQUEsRUFBUyxrQkFBN0g7T0FBdHNILEVBQXUxSDtBQUFBLFFBQUMsUUFBQSxFQUFTO0FBQUEsVUFBQyxHQUFBLEVBQUksa0JBQUw7QUFBQSxVQUF3QixHQUFBLEVBQUksa0JBQTVCO1NBQVY7QUFBQSxRQUEwRCxVQUFBLEVBQVc7QUFBQSxVQUFDLEdBQUEsRUFBSSxDQUFBLGtCQUFMO0FBQUEsVUFBeUIsR0FBQSxFQUFJLENBQUEsa0JBQTdCO1NBQXJFO0FBQUEsUUFBdUgsUUFBQSxFQUFTLGtCQUFoSTtPQUF2MUgsRUFBMitIO0FBQUEsUUFBQyxRQUFBLEVBQVM7QUFBQSxVQUFDLEdBQUEsRUFBSSxrQkFBTDtBQUFBLFVBQXdCLEdBQUEsRUFBSSxpQkFBNUI7U0FBVjtBQUFBLFFBQXlELFVBQUEsRUFBVztBQUFBLFVBQUMsR0FBQSxFQUFJLENBQUEsaUJBQUw7QUFBQSxVQUF3QixHQUFBLEVBQUksQ0FBQSxrQkFBNUI7U0FBcEU7QUFBQSxRQUFxSCxRQUFBLEVBQVMsaUJBQTlIO09BQTMrSCxFQUE0bkk7QUFBQSxRQUFDLFFBQUEsRUFBUztBQUFBLFVBQUMsR0FBQSxFQUFJLGtCQUFMO0FBQUEsVUFBd0IsR0FBQSxFQUFJLGlCQUE1QjtTQUFWO0FBQUEsUUFBeUQsVUFBQSxFQUFXO0FBQUEsVUFBQyxHQUFBLEVBQUksQ0FBQSxrQkFBTDtBQUFBLFVBQXlCLEdBQUEsRUFBSSxDQUFBLGlCQUE3QjtTQUFwRTtBQUFBLFFBQXFILFFBQUEsRUFBUyxpQkFBOUg7T0FBNW5JO0tBaEJYLENBQUE7QUFBQSxJQWlCQSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxPQUFPLENBQUMsR0FBVCxDQUFhLFNBQUMsTUFBRCxHQUFBO2FBQ2xCLElBQUEsTUFBQSxDQUFPLE1BQVAsRUFEa0I7SUFBQSxDQUFiLENBakJYLENBREs7RUFBQSxDQVBQO0FBQUEsRUE2QkEsTUFBQSxFQUFRLFNBQUMsSUFBRCxHQUFBO0FBQ04sUUFBQSxvRUFBQTtBQUFBO0FBQUEsU0FBQSwyQ0FBQTt3QkFBQTtBQUNFLE1BQUEsTUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFBLENBQUksSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFQLENBQUEsQ0FBSixFQUFpQixJQUFDLENBQUEsTUFBTSxDQUFDLEdBQVIsQ0FBQSxDQUFqQixDQUFaLENBQUEsQ0FBQTtBQUFBLE1BQ0EsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsSUFBQyxDQUFBLE9BQWpCLENBREEsQ0FERjtBQUFBLEtBQUE7QUFHQTtBQUFBLFNBQUEsOENBQUE7eUJBQUE7QUFDRSxNQUFBLE1BQU0sQ0FBQyxpQkFBUCxDQUFBLENBQUEsQ0FERjtBQUFBLEtBSEE7QUFLQTtBQUFBO1NBQUEsOENBQUE7eUJBQUE7QUFDRSxNQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLElBQWpCLENBQUEsQ0FBQTtBQUFBLG9CQUNBLE1BQU0sQ0FBQyxNQUFQLENBQWMsSUFBZCxFQURBLENBREY7QUFBQTtvQkFOTTtFQUFBLENBN0JSO0FBQUEsRUFzQ0EsSUFBQSxFQUFNLFNBQUMsR0FBRCxHQUFBO0FBQ0osUUFBQSxzQkFBQTtBQUFBLElBQUEsSUFBQyxDQUFBLEtBQUQsQ0FBTyxHQUFQLENBQUEsQ0FBQTtBQUNBO0FBQUEsU0FBQSwyQ0FBQTt3QkFBQTtBQUNFLE1BQUEsTUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFaLENBQUEsQ0FERjtBQUFBLEtBRkk7RUFBQSxDQXRDTjtDQURGLENBTkEsQ0FBQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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S0FBQSxHQUFRLElBRlIsQ0FBQTtBQUFBLFFBR0EsV0FBQSxHQUFjLFNBSGQsQ0FBQTtBQUFBLFFBSUEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFWLENBQWUsSUFBZixFQUFpQixNQUFqQixFQUF3QixLQUF4QixDQUpBLENBREY7T0FKQTtBQUFBLE1BV0EsUUFBQSxHQUFXLENBQUMsS0FBQSxHQUFRLE1BQVQsQ0FBQSxHQUFpQixDQUFDLE1BQUEsR0FBUyxNQUFWLENBWDVCLENBQUE7QUFBQSxNQVlBLEtBQUEsSUFBUyxTQVpULENBQUE7QUFBQSxNQWFBLElBQUMsQ0FBQSxNQUFELENBQVEsS0FBSyxDQUFDLENBQWQsRUFBaUIsS0FBSyxDQUFDLENBQXZCLENBYkEsQ0FERjtJQUFBLENBbkJBO0FBQUEsSUFrQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBQSxDQWxDQSxDQUFBO0FBQUEsSUFvQ0EsSUFBSSxDQUFDLEtBQUwsR0FBYSxXQUFBLEdBQVksQ0FBQyxJQUFJLENBQUMsRUFBTCxHQUFRLENBQVQsQ0FwQ3pCLENBQUE7QUFBQSxJQXFDQSxJQUFJLENBQUMsU0FBTCxHQUFpQixDQUFBLENBQUUsQ0FBQyxTQXJDcEIsQ0FBQTtBQUFBLElBdUNBLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBWixDQUFpQixJQUFqQixFQUFvQixFQUFBLEdBQXBCLEVBQTJCLElBQTNCLEVBQWdDLFNBQWhDLENBdkNBLENBRE07RUFBQSxDQVhSO0NBREYsQ0FBQTs7QUFBQSxNQXVETSxDQUFDLE9BQVAsR0FBaUIsSUF2RGpCLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZiA9IHJlcXVpcmUgJ2ZyYW5pbSdcclxubiA9IHJlcXVpcmUgJ251bWJlcmVyJ1xyXG5kcmF3ID0gcmVxdWlyZSAnLi9kcmF3J1xyXG5DaXJjbGUgPSByZXF1aXJlICcuL2NpcmNsZSdcclxudmVjID0gcmVxdWlyZSAndmVjMmQnXHJcblxyXG5mIFwiY2FudmFzXCIsXHJcbiAgY29uZmlnOlxyXG4gICAgZnVsbFNpemU6IHRydWVcclxuXHJcbiAgY2xlYXI6IChjdHgpIC0+XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMjM0LCAyNDQsIDI1MClcIlxyXG4gICAgY3R4LmZpbGxSZWN0IDAsIDAsIEB3aWR0aC5nZXQoKSwgQGhlaWdodC5nZXQoKVxyXG5cclxuICBzZXR1cDogKGN0eCkgLT5cclxuICAgIEB3aWR0aCA9IG5ldyBuIEBhbmltLmdldFdpZHRoXHJcbiAgICBAaGVpZ2h0ID0gbmV3IG4gQGFuaW0uZ2V0SGVpZ2h0XHJcbiAgICBAY2xlYXIoY3R4KVxyXG4gICAgQGNpcmNsZXMgPSBbXVxyXG4gICAgZ2FwID0gNTBcclxuICAgIHZlbG9jaXR5ID0gNFxyXG4gICAgZm9yIGkgaW4gWzAuLi4zMF1cclxuICAgICAgQGNpcmNsZXMucHVzaFxyXG4gICAgICAgIGNlbnRlcjpcclxuICAgICAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiAoQHdpZHRoLmdldCgpIC0gZ2FwKjIpICsgZ2FwXHJcbiAgICAgICAgICB5OiBNYXRoLnJhbmRvbSgpICogKEBoZWlnaHQuZ2V0KCkgLSBnYXAqMikgKyBnYXBcclxuICAgICAgICB2ZWxvY2l0eTpcclxuICAgICAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiB2ZWxvY2l0eS8yIC0gdmVsb2NpdHlcclxuICAgICAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiB2ZWxvY2l0eS8yIC0gdmVsb2NpdHlcclxuICAgICAgICByYWRpdXM6IE1hdGgucmFuZG9tKCkgKiAyNSArIDE1XHJcbiAgICBjb25zb2xlLmxvZyBKU09OLnN0cmluZ2lmeShAY2lyY2xlcylcclxuICAgIEBjaXJjbGVzID0gW3tcImNlbnRlclwiOntcInhcIjoxNzYuNTU4Nzk4ODgyMTc4OTYsXCJ5XCI6MTM3LjIwOTA3NTg1Njk1Mzg2fSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjQzMDI0NzM4MDg2Mzg3NSxcInlcIjotMy44MTYyMTIzOTE5NDY0NjQ4fSxcInJhZGl1c1wiOjIyLjQwMjA1ODQ0NjMxNDE4Nn0se1wiY2VudGVyXCI6e1wieFwiOjEyMS4yMDQwNjQ3NDkxODEyNyxcInlcIjo3Mi44MjA1MTMxNjE4MzA2fSxcInZlbG9jaXR5XCI6e1wieFwiOi0zLjk2ODAxOTI1Nzc2NTI2MzMsXCJ5XCI6LTIuMDIyNzg2MTY5Nzc4NTU1Nn0sXCJyYWRpdXNcIjozMy4wNzU1OTUyMzE0OTM5MzV9LHtcImNlbnRlclwiOntcInhcIjo2NC4zMTcwMTY0ODk4MDM3OSxcInlcIjo2MS4yODk2NzQyODMwMDUzfSxcInZlbG9jaXR5XCI6e1wieFwiOi0zLjU4MjcyNjExMzAzMjU0OTYsXCJ5XCI6LTMuMjIzNTE3MTY3MzgxOTQyM30sXCJyYWRpdXNcIjoxOS4zMzY0MTM3MTIwMDc5MjV9LHtcImNlbnRlclwiOntcInhcIjoxNTkuNzc3NDcxNDA0NTIyNjYsXCJ5XCI6MTQxLjkxOTAzNjMyNTUzMjk0fSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjYwMjY2MzE3MzgwNTkyMjMsXCJ5XCI6LTIuNTAwOTU1ODYxMDYxODExNH0sXCJyYWRpdXNcIjoxNS41NjA4NTY4NDMzNjcyMTl9LHtcImNlbnRlclwiOntcInhcIjo2Ny42MTE4MjI1MzI0ODk5LFwieVwiOjEyNS45MTYxMDk2NzUwNzU4Nn0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi4yMDI2OTQxMzAxMzAxMTIsXCJ5XCI6LTMuNDk2Njc0NzcyMzUxOTh9LFwicmFkaXVzXCI6MzAuMzM4Njk4NjYzOTgxNjN9LHtcImNlbnRlclwiOntcInhcIjoxMTUuNjU4NDkzNTM1NTkzMTUsXCJ5XCI6MTIyLjgwMTExNDU5OTIyMDQ1fSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjExMDM2ODYzMzY0Mjc5MjcsXCJ5XCI6LTIuNjI4Nzc4MjQ1MzAwMDU0Nn0sXCJyYWRpdXNcIjoyNC40MTkzMTQwNTY4Njc3MzR9LHtcImNlbnRlclwiOntcInhcIjoyNTAuMTQyNjI4NDEwODMxMSxcInlcIjoxMTEuODEzMDExNjAwNjM1OTV9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTIuNDI3OTkzNDE0NDU3ODg3NCxcInlcIjotMi42ODM4Njg4NzA2MDQ3ODMzfSxcInJhZGl1c1wiOjM0LjQxNTMzNDc5MjU3NDg3fSx7XCJjZW50ZXJcIjp7XCJ4XCI6OTQuNTAwMTU5OTkzNzY3NzQsXCJ5XCI6ODIuMzg2NDA1MzMwMTUxMzJ9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTIuMTA3MTg2NDI0MDgwMjgyNCxcInlcIjotMi44NDYwMjM5MDQ2MjUzMjY0fSxcInJhZGl1c1wiOjI1Ljc1NTUwMjIyODg1Nzk1fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MTIwLjUyNzQ0MDE0NjU0MzA5LFwieVwiOjE0OC42MDg2NDQyNzQwNjM0fSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjI3MTI2MTAxNTkwNjkzLFwieVwiOi0yLjQxMTcwMTgwNDk1ODI4NH0sXCJyYWRpdXNcIjozMC43MTAyOTkyMDU5NjYyOTR9LHtcImNlbnRlclwiOntcInhcIjo1NS4zMTEyMDMzNTIxNzU2NSxcInlcIjo3OS4xMDM0NTA3MDQzNjU5N30sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi4yMzEzNjI0NTk3MTU0NTU4LFwieVwiOi0zLjkzMTgxNjc0Mjc1NTQ3Mjd9LFwicmFkaXVzXCI6MTguNDc2NDU1ODc3NTM1MDQ1fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MjU0Ljg4MjE1NDMxMTA1MzQ1LFwieVwiOjcyLjkwOTczODAyNzAyNTAxfSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjk1ODU1OTE1MDM0MTg5OCxcInlcIjotMi4xNTE1Mzg1NTU1MTAzNDJ9LFwicmFkaXVzXCI6MjcuNjQ4MTE5MzkzMjcwNDYzfSx7XCJjZW50ZXJcIjp7XCJ4XCI6MjU3LjA5NjM5Mjc0OTgwODczLFwieVwiOjg2LjI2OTU0MjY0NjU5NDM1fSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjc4MjkwNDM5NTgzMzYxMTUsXCJ5XCI6LTIuMjYxMDU3NzgxMDU1NTY5Nn0sXCJyYWRpdXNcIjozNS43OTAyMzQwMzkzMDQ3OH0se1wiY2VudGVyXCI6e1wieFwiOjgxLjMyNjY1ODAxNzkzMzM3LFwieVwiOjE0OS4zNDkxMTI3MDI1MzM2fSxcInZlbG9jaXR5XCI6e1wieFwiOi0zLjUyNTYxMjU0OTg1NjMwNSxcInlcIjotMy40MDE0MDU0MDY2NTAxNTZ9LFwicmFkaXVzXCI6MzcuOTI5NjU4ODE2NDI4ODU1fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MTg4LjA2Njc4MTQ3OTg2NTMsXCJ5XCI6MTI2LjY1MjEyMjAyMjExODQyfSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjE2NzY0NDYzNzYzNjg0MDMsXCJ5XCI6LTMuMzEzMjM0NzA2NDA5Mjc1NX0sXCJyYWRpdXNcIjozMC43MTUzNTY3MzU3NDU0NDV9LHtcImNlbnRlclwiOntcInhcIjoxNjUuMDk4NzkzNzU4MDc5NCxcInlcIjoxNDguNTY3MDM2NTAxNTk3Nn0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi42NTcxMzQyMzUzNzA5MDQsXCJ5XCI6LTMuMzA5NDk4MTU5NjgwNTE1NX0sXCJyYWRpdXNcIjozNi4zOTI4MDQ1OTk1OTk5MX0se1wiY2VudGVyXCI6e1wieFwiOjEwNi45OTc4OTcxNDA2ODE3NCxcInlcIjo5MS4yMTExMTQxNjMwNDQ4NH0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMy41NDk2MjU0NDQyMjU5NjcsXCJ5XCI6LTIuNTc2MDAyOTEzMDYxNTI5NH0sXCJyYWRpdXNcIjoyMS41NjM5NTYyMjY0NTUwNDh9LHtcImNlbnRlclwiOntcInhcIjoyNTIuNTIzNjEzMjEzNTYxNDgsXCJ5XCI6NzUuMTY0MTg1NTc4MDAzNTN9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTMuNjAzNjQ1ODAzODcyNDk2LFwieVwiOi0zLjY5Njg1ODEyMTU0Nzg0OH0sXCJyYWRpdXNcIjozMC4zMTQ1NTAxNjgxMTM3ODN9LHtcImNlbnRlclwiOntcInhcIjoyMDUuMDIwOTIwNDAxNDM5MDcsXCJ5XCI6MTUzLjYxMzY4NzU0MzY2NDEzfSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjY5NTA5MTQ2MjY5NDEwODUsXCJ5XCI6LTIuOTk2NjczOTA4NTUwMjkyM30sXCJyYWRpdXNcIjozNC44NzI2NDkzMTY2NzU5Nn0se1wiY2VudGVyXCI6e1wieFwiOjkxLjcyMTI0NTI3ODYwNDMzLFwieVwiOjk3LjExNDMxOTM5OTQ2NDg4fSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjE3NDI0MTA4MzY3NDEzMyxcInlcIjotMy45MjA1MzcyMjMxMDgxMTN9LFwicmFkaXVzXCI6MTUuODI1NjcxMjk4NjYyMn0se1wiY2VudGVyXCI6e1wieFwiOjEzNC44OTcwMTg0NDI4NjE3NCxcInlcIjo5OS4yMzEwODU3MjI4MDAzNH0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi42NjE2MTg1MjM3NjUzNTUzLFwieVwiOi0zLjU0MzI1MTM0Njc5Njc1MX0sXCJyYWRpdXNcIjoxNi42MDkxMjg0NDAwMzE3ODJ9LHtcImNlbnRlclwiOntcInhcIjo4MS4zOTI0MTEyNjgzMTYyMSxcInlcIjo4MS43Nzg3NDIyNDAyNzYxOX0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMy44MTU5NzIyMzU5ODUxMDAzLFwieVwiOi0zLjIxNzE2MjEyMDE1NTk5fSxcInJhZGl1c1wiOjI1LjM3NzkxMTc2MzQ5ODU2fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MTYyLjY0OTQ0ODkyODQyMzIzLFwieVwiOjExNC40MjI1MjQ1MTQ2MDgwOX0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi42MDYzNzA3NDcwODkzODYsXCJ5XCI6LTIuMTIwOTgyOTYzNTkxODE0fSxcInJhZGl1c1wiOjMxLjQ0Mjg0Mjk1NjE2NjcxNH0se1wiY2VudGVyXCI6e1wieFwiOjEzOS40MjM2MjcyMzQwNjQwNCxcInlcIjoxMDIuMjc1NTEwNTQ1MzU0MzR9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTIuNTk5NTEwMzAyNzY3MTU3NixcInlcIjotMi43MTQxNjczNjcyMDEyOTg1fSxcInJhZGl1c1wiOjE4Ljk4NjEyNjQwNTY1MjYxMn0se1wiY2VudGVyXCI6e1wieFwiOjE4NC4xMzQ4MjEyODY0MjUsXCJ5XCI6NTAuOTY4NzYxMTk0NDk3MzV9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTIuMTg2NjU4MDE2ODcxNjYxLFwieVwiOi0zLjEyNTk0NDIzMjEwMjQ4MzV9LFwicmFkaXVzXCI6MTYuMTY4OTY5MjA5NTM4NzczfSx7XCJjZW50ZXJcIjp7XCJ4XCI6MTQ2LjM5MTA3MDc1OTg1NTIsXCJ5XCI6NjcuMDgwNTA5MjExNDAyMzl9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTIuOTk1OTA0OTY3NjU0NDk2NCxcInlcIjotMi4xODUzNjAxMDk0MzM1MzE4fSxcInJhZGl1c1wiOjI5LjA5NzU3NTM4MzQ5MzY3N30se1wiY2VudGVyXCI6e1wieFwiOjkxLjQ1ODcwNTcyODg3MzYxLFwieVwiOjExNi45NzE2NTE3NDI3MDA0OX0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMy45MzQwMzE0Nzk1MjYzMTEsXCJ5XCI6LTIuNTcwOTY5NzEyNDU0ODI1Nn0sXCJyYWRpdXNcIjoyMC4zNzI2NDg3NTYwMTk3N30se1wiY2VudGVyXCI6e1wieFwiOjgzLjk1ODgzODUzMDgxNjE0LFwieVwiOjExOC4wNTQzMzQxODg4MTE0OH0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi44ODY3NDM3MjA2MjA4NzA2LFwieVwiOi0zLjIxMTMzNzMzNDAxMDc1fSxcInJhZGl1c1wiOjI4LjAyOTkwMTU1NTI3MzY4Mn0se1wiY2VudGVyXCI6e1wieFwiOjI0Ny4xODAxMzgzNTYwNTIzNCxcInlcIjoxMjQuMjgxNDI0OTI4NDU2NTR9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTMuNTI5MzQyMDkzOTcwNjI2NixcInlcIjotMy41NjYzMTM1OTU1MTEwMTkyfSxcInJhZGl1c1wiOjI1Ljc4NDg5NjEyNTU1MTMxM30se1wiY2VudGVyXCI6e1wieFwiOjIwMS43MTMyNDI2OTg0NjA4MixcInlcIjo1MC43MDQ5NTQ3NTIyMzI4OH0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMy4wMzg2NzkwMjc5Mjk5MDIsXCJ5XCI6LTIuMDkzNTc4NTU3MDE4MTkwNn0sXCJyYWRpdXNcIjozOS41MzEzMTg3MTg4MDAzMn0se1wiY2VudGVyXCI6e1wieFwiOjE4MC4wNzcyMzU1Nzc2MjgwMixcInlcIjo2NC44NjQzMDE5ODgzODkzNH0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi44ODc4NzEyOTI0MTk3MzE2LFwieVwiOi0yLjEyNDExNzE4MzAzMzM3N30sXCJyYWRpdXNcIjozNy40OTAyMjQ2NzI5NDcwOH1dIFxyXG4gICAgQGNpcmNsZXMgPSBAY2lyY2xlcy5tYXAgKGNpcmNsZSktPlxyXG4gICAgICBuZXcgQ2lyY2xlIGNpcmNsZVxyXG4gICAgcmV0dXJuXHJcblxyXG4gIHVwZGF0ZTogKHRpbWUpIC0+XHJcbiAgICBmb3IgY2lyY2xlIGluIEBjaXJjbGVzXHJcbiAgICAgIGNpcmNsZS5lZGdlKHZlYyhAd2lkdGguZ2V0KCksQGhlaWdodC5nZXQoKSkpXHJcbiAgICAgIGNpcmNsZS5zZXBhcmF0ZShAY2lyY2xlcylcclxuICAgIGZvciBjaXJjbGUgaW4gQGNpcmNsZXNcclxuICAgICAgY2lyY2xlLnJlc3BvbmRUb1JlcXVlc3RzKClcclxuICAgIGZvciBjaXJjbGUgaW4gQGNpcmNsZXNcclxuICAgICAgY2lyY2xlLmNoZWNrTG9vcCh0aW1lKVxyXG4gICAgICBjaXJjbGUudXBkYXRlKHRpbWUpXHJcbiAgZHJhdzogKGN0eCkgLT5cclxuICAgIEBjbGVhcihjdHgpXHJcbiAgICBmb3IgY2lyY2xlIGluIEBjaXJjbGVzXHJcbiAgICAgIGNpcmNsZS5kcmF3KGN0eClcclxuICAgICMgQGFuaW0ucGF1c2UoKTtcclxuICAgIHJldHVybiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZnJhbmltKGNhbnZhc2VJZCwgY29udGV4dCkge1xuICAgIHZhciB3aWR0aCAgPSAgd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc2VJZCksXG4gICAgICAgIGlzUnVubmluZyA9IHRydWUsXG4gICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgY3R4ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgZG9tRWxlbWVudC53aWR0aCA9IHdpZHRoO1xuICAgIGRvbUVsZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgZnVuY3Rpb24gcmVjYWxjdWxhdGUoKSB7XG4gICAgICAgIGlmICh3aWR0aCAgIT09IHdpbmRvdy5pbm5lcldpZHRoIHx8IGhlaWdodCAhPT0gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICBkb21FbGVtZW50LndpZHRoICA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgZG9tRWxlbWVudC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCAgPSBkb21FbGVtZW50LndpZHRoO1xuICAgICAgICAgICAgaGVpZ2h0ID0gZG9tRWxlbWVudC5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRpb25DYWxsYmFjayh0aW1lKSB7XG4gICAgICAgIGlmIChjb250ZXh0LmNvbmZpZyAmJiBjb250ZXh0LmNvbmZpZy5mdWxsU2l6ZSkge1xuICAgICAgICAgICAgcmVjYWxjdWxhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dC51cGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnRleHQudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgY29udGV4dC5kcmF3KGN0eCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXcoY3R4LCB0aW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1J1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElkKTtcbiAgICAgICAgICAgIHJlcXVlc3RJZCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuYW5pbSA9IHtcbiAgICAgICAgZ2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGNvbnRleHQuY29uZmlnICYmIGNvbnRleHQuY29uZmlnLmZ1bGxTaXplKSA/IGhlaWdodCA6IGRvbUVsZW1lbnQuaGVpZ2h0O1xuICAgICAgICB9LFxuICAgICAgICBnZXRXaWR0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIChjb250ZXh0LmNvbmZpZyAmJiBjb250ZXh0LmNvbmZpZy5mdWxsU2l6ZSkgPyB3aWR0aCA6IGRvbUVsZW1lbnQud2lkdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3VtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25DYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHBhdXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0LnNldHVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRleHQuc2V0dXAoY3R4KTtcbiAgICB9XG4gICAgcmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25DYWxsYmFjayk7XG5cbiAgICByZXR1cm4gY29udGV4dDtcbn1cblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZyYW5pbTtcbn0iLCIvKlxuICogbnVtYmVyZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zYWZhcmVsaS9udW1iZXJlclxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBJcmFrbGkgU2FmYXJlbGlcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBtYXRoID0gZnVuY3Rpb24ob3BlcmF0aW9uLCBhcmdzKXtcbiAgICByZXR1cm4gbmV3IE51bWJlcmVyKGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbihwLCBjKXtcbiAgICAgICAgICAgIHZhciBhID0gKHAgJiYgcC5nZXQpID8gcC5nZXQoKSA6IHA7XG4gICAgICAgICAgICB2YXIgYiA9IChjICYmIGMuZ2V0KSA/IGMuZ2V0KCkgOiBjO1xuICAgICAgICAgICAgc3dpdGNoKG9wZXJhdGlvbil7XG4gICAgICAgICAgICAgICAgY2FzZSAncGx1cyc6IHJldHVybiBhICsgYjtcbiAgICAgICAgICAgICAgICBjYXNlICdtaW51cyc6IHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgICAgICBjYXNlICdkaXYnOiByZXR1cm4gYSAvIGI7XG4gICAgICAgICAgICAgICAgY2FzZSAnbXVsdCc6IHJldHVybiBhICogYjtcbiAgICAgICAgICAgICAgICBjYXNlICdtb2QnOiByZXR1cm4gYSAlIGI7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IFR5cGVFcnJvcigndW5rbm93biBvcGVyYXRpb24gJytvcGVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIE51bWJlcmVyKHZhbHVlKXtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbn1cblxuTnVtYmVyZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHYgPSB0aGlzLl9fdmFsdWU7XG4gICAgaWYodHlwZW9mIHYgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHYoKTtcbiAgICBlbHNlIHJldHVybiB2O1xufTtcblxuTnVtYmVyZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5OdW1iZXJlci5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBuZXcgTnVtYmVyZXIodGhpcy5fX3ZhbHVlKTtcbn07XG5cblsncGx1cycsICdtaW51cycsICdkaXYnLCAnbXVsdCcsICdtb2QnXS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xuICAgIE51bWJlcmVyLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgYXJncy51bnNoaWZ0KHRoaXMuY2xvbmUoKSk7XG4gICAgICAgIHRoaXMuX192YWx1ZSA9IChtYXRoKG5hbWUsIGFyZ3MpKS5fX3ZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgTnVtYmVyZXJbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG1hdGgobmFtZSxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXJlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHY7XG52LlZlYzJkID0gVmVjMmQ7XG52LnVuaXQgPSB1bml0RnJvbUFuZ2xlO1xuVmVjMmQudW5pdCA9IHVuaXRGcm9tQW5nbGU7XG5cbnZhciByZSA9IC9cXCgoLT9bLlxcZF0rKSwgKC0/Wy5cXGRdKylcXCkvO1xuXG5mdW5jdGlvbiBWZWMyZCh4LCB5KSB7XG4gIHRoaXMueCA9IHg7XG4gIHRoaXMueSA9IHk7XG59XG5cbmZ1bmN0aW9uIHVuaXRGcm9tQW5nbGUoYW5nbGUpIHtcbiAgcmV0dXJuIG5ldyBWZWMyZChNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKSk7XG59XG5cbmZ1bmN0aW9uIHYoeE9yUGFpciwgeSkge1xuICBpZiAoeE9yUGFpciA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBWZWMyZCgwLCAwLCAwKTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHhPclBhaXIpKSB7XG4gICAgcmV0dXJuIG5ldyBWZWMyZChwYXJzZUZsb2F0KHhPclBhaXJbMF0sIDEwKSwgcGFyc2VGbG9hdCh4T3JQYWlyWzFdLCAxMCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB4T3JQYWlyID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBuZXcgVmVjMmQocGFyc2VGbG9hdCh4T3JQYWlyLngsIDEwKSwgcGFyc2VGbG9hdCh4T3JQYWlyLnksIDEwKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHhPclBhaXIgPT09ICdzdHJpbmcnICYmIHkgPT0gbnVsbCkge1xuICAgIHZhciBtYXRjaCA9IHhPclBhaXIubWF0Y2gocmUpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG5ldyBWZWMyZChwYXJzZUZsb2F0KG1hdGNoWzFdLCAxMCksIHBhcnNlRmxvYXQobWF0Y2hbMl0sIDEwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlZlYzJkOiBjYW5ub3QgcGFyc2U6IFwiICsgeE9yUGFpcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgVmVjMmQocGFyc2VGbG9hdCh4T3JQYWlyLCAxMCksIHBhcnNlRmxvYXQoeSwgMTApKTtcbiAgfVxufVxuXG5WZWMyZC5wcm90b3R5cGUub2Zmc2V0ID0gZnVuY3Rpb24oZHgsIGR5KSB7XG4gIHJldHVybiBuZXcgVmVjMmQodGhpcy54ICsgZHgsIHRoaXMueSArIGR5KTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihvdGhlcikge1xuICB0aGlzLnggKz0gb3RoZXIueDtcbiAgdGhpcy55ICs9IG90aGVyLnk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHRoaXMueCAtPSBvdGhlci54O1xuICB0aGlzLnkgLT0gb3RoZXIueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkuYWRkKG90aGVyKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5taW51cyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkuc3ViKG90aGVyKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5uZWcgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy54ID0gLXRoaXMueDtcbiAgdGhpcy55ID0gLXRoaXMueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUubXVsdCA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHRoaXMueCAqPSBvdGhlci54O1xuICB0aGlzLnkgKj0gb3RoZXIueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUudGltZXMgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gdGhpcy5jbG9uZSgpLm11bHQob3RoZXIpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmRpdiA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHRoaXMueCAvPSBvdGhlci54O1xuICB0aGlzLnkgLz0gb3RoZXIueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuZGl2QnkgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gdGhpcy5jbG9uZSgpLmRpdihvdGhlcik7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuc2NhbGUgPSBmdW5jdGlvbihzY2FsYXIpIHtcbiAgdGhpcy54ICo9IHNjYWxhcjtcbiAgdGhpcy55ICo9IHNjYWxhcjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuc2NhbGVkID0gZnVuY3Rpb24oc2NhbGFyKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkuc2NhbGUoc2NhbGFyKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFZlYzJkKHRoaXMueCwgdGhpcy55KTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgdGhpcy54ID0gZnVuYyh0aGlzLngpO1xuICB0aGlzLnkgPSBmdW5jKHRoaXMueSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmFwcGxpZWQgPSBmdW5jdGlvbihmdW5jKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkuYXBwbHkoZnVuYyk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuZGlzdGFuY2VTcXJkID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgdmFyIGR4ID0gb3RoZXIueCAtIHRoaXMueDtcbiAgdmFyIGR5ID0gb3RoZXIueSAtIHRoaXMueTtcbiAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufTtcblxuVmVjMmQucHJvdG90eXBlLmRpc3RhbmNlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3FyZChvdGhlcikpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiB0aGlzLnggPT09IG90aGVyLnggJiYgdGhpcy55ID09PSBvdGhlci55O1xufTtcblxuVmVjMmQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBcIihcIiArIHRoaXMueCArIFwiLCBcIiArIHRoaXMueSArIFwiKVwiO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmxlbmd0aFNxcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxcmQoKSk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuYW5nbGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMubGVuZ3RoU3FyZCgpID09PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICB9XG59O1xuXG5WZWMyZC5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24oKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMuc2NhbGUoMSAvIGxlbmd0aCk7XG4gIH1cbn07XG5cblZlYzJkLnByb3RvdHlwZS5ub3JtYWxpemVkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkubm9ybWFsaXplKCk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuYm91bmRNaW4gPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAodGhpcy54IDwgb3RoZXIueCkgdGhpcy54ID0gb3RoZXIueDtcbiAgaWYgKHRoaXMueSA8IG90aGVyLnkpIHRoaXMueSA9IG90aGVyLnk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmJvdW5kTWF4ID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKHRoaXMueCA+IG90aGVyLngpIHRoaXMueCA9IG90aGVyLng7XG4gIGlmICh0aGlzLnkgPiBvdGhlci55KSB0aGlzLnkgPSBvdGhlci55O1xuICByZXR1cm4gdGhpcztcbn07XG5cblZlYzJkLnByb3RvdHlwZS5mbG9vciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hcHBseShNYXRoLmZsb29yKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5mbG9vcmVkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmFwcGxpZWQoTWF0aC5mbG9vcik7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuY2VpbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hcHBseShNYXRoLmNlaWwpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmNlaWxlZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hcHBsaWVkKE1hdGguY2VpbCk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUucHJvamVjdCA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHRoaXMuc2NhbGUodGhpcy5kb3Qob3RoZXIpIC8gb3RoZXIubGVuZ3RoU3FyZCgpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgcmV0dXJuIHRoaXMueCAqIG90aGVyLnggKyB0aGlzLnkgKiBvdGhlci55O1xufTtcblxuVmVjMmQucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xuICB2YXIgbmV3WCA9IHRoaXMueCAqIGRpcmVjdGlvbi54IC0gdGhpcy55ICogZGlyZWN0aW9uLnk7XG4gIHRoaXMueSA9IHRoaXMueCAqIGRpcmVjdGlvbi55ICsgdGhpcy55ICogZGlyZWN0aW9uLng7XG4gIHRoaXMueCA9IG5ld1g7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLnJvdGF0ZWQgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgcmV0dXJuIHRoaXMuY2xvbmUoKS5yb3RhdGUoZGlyZWN0aW9uKTtcbn07XG5cbi8vIHJlZmxlY3QgYWJvdXQgYXhpcyBvcmlnaW5hdGluZyBmcm9tIG9yaWdpblxuVmVjMmQucHJvdG90eXBlLnJlZmxlY3QgPSBmdW5jdGlvbihheGlzKSB7XG4gIHJldHVybiB0aGlzLnJlZmxlY3RBYm91dExpbmUobmV3IFZlYzJkKDAsIDApLCBheGlzKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5yZWZsZWN0QWJvdXRMaW5lID0gZnVuY3Rpb24obGluZVB0MSwgbGluZVB0Mikge1xuICB2YXIgbm9ybWFsID0gbmV3IFZlYzJkKFxuICAgICAgbGluZVB0Mi54IC0gbGluZVB0MS54LFxuICAgICAgbGluZVB0Mi55IC0gbGluZVB0MS54KTtcbiAgdmFyIHRlbXAgPSBub3JtYWwueDtcbiAgbm9ybWFsLnggPSAtbm9ybWFsLnk7XG4gIG5vcm1hbC55ID0gdGVtcDtcbiAgbm9ybWFsLm5vcm1hbGl6ZSgpO1xuICB2YXIgZG90MiA9IDIgKiB0aGlzLmRvdChub3JtYWwpO1xuICB0aGlzLnggLT0gZG90MiAqIG5vcm1hbC54O1xuICB0aGlzLnkgLT0gZG90MiAqIG5vcm1hbC55O1xuICByZXR1cm4gdGhpcztcbn07XG5cblZlYzJkLnByb3RvdHlwZS5zZXQgPSBWZWMyZDtcbiIsInZlYyA9IHJlcXVpcmUgJ3ZlYzJkJ1xyXG5kcmF3ID0gcmVxdWlyZSAnLi9kcmF3J1xyXG5cclxuY2xhc3MgQ2lyY2xlXHJcbiAgY29uc3RydWN0b3I6IChvYmopIC0+XHJcbiAgICBAY2VudGVyID0gdmVjIG9iai5jZW50ZXIueCwgb2JqLmNlbnRlci55XHJcbiAgICBAYWNjZWxlcmF0aW9uID0gdmVjIDAsIDBcclxuICAgIEB2ZWxvY2l0eSA9IHZlYyBvYmoudmVsb2NpdHkueCwgb2JqLnZlbG9jaXR5LnlcclxuXHJcbiAgICBAcmFkaXVzID0gb2JqLnJhZGl1c1xyXG4gICAgQG1pblJhZGl1cyA9IEByYWRpdXMqMC4yXHJcbiAgICBAbWluUmFkaXVzID0gMTAgaWYgQG1pblJhZGl1cyA8IDEwXHJcbiAgICBcclxuICAgIEBtYXNzID0gMSAjIEByYWRpdXMgKiBAcmFkaXVzICogMiAqTWF0aC5QSVxyXG4gICAgQGRyYXdRdWVlID0gW11cclxuICAgIEBhY2NlbGVyYXRpb25EdXJhdGlvbiA9IDBcclxuICAgIEBhY2NlbGVyYXRpb25UaW1lU3RhcnQgPSAwXHJcbiAgICBAZnJpZW5kcyA9IFtdXHJcbiAgICBAcmVxdWVzdHMgPSBbXVxyXG5cclxuICBhcHBseUZvcmNlOiAoZm9yY2UpIC0+XHJcbiAgICBAYWNjZWxlcmF0aW9uLmFkZChmb3JjZS5zY2FsZWQoMS9AbWFzcykpXHJcbiAgXHJcbiAgc3RvcDogLT5cclxuICAgIEBhY2NlbGVyYXRpb24uc2NhbGUoMClcclxuICAgIEB2ZWxvY2l0eS5zY2FsZSgwKVxyXG5cclxuICBlZGdlRm9yY2U6IChtYXgpIC0+XHJcbiAgICBub3JtYWwgPSB2ZWMgMCwgMFxyXG4gICAgaWYgQGNlbnRlci54IDwgQHJhZGl1cyBcclxuICAgICAgbm9ybWFsLnggPSAxXHJcbiAgICBlbHNlIGlmIEBjZW50ZXIueCA+IG1heC54IC0gQHJhZGl1c1xyXG4gICAgICBub3JtYWwueCA9IC0xXHJcbiAgICBlbHNlIGlmIEBjZW50ZXIueSA8IEByYWRpdXMgXHJcbiAgICAgIG5vcm1hbC55ID0gMVxyXG4gICAgZWxzZSBpZiBAY2VudGVyLnkgPiBtYXgueSAtIEByYWRpdXNcclxuICAgICAgbm9ybWFsLnkgPSAtMVxyXG4gICAgc2FtZURpcmVjdGlvblggPSAoQHZlbG9jaXR5LnggPiAwIGFuZCBub3JtYWwueCA+IDApIG9yIChAdmVsb2NpdHkueCA8IDAgYW5kIG5vcm1hbC54IDwgMClcclxuICAgIHNhbWVEaXJlY3Rpb25ZID0gKEB2ZWxvY2l0eS55ID4gMCBhbmQgbm9ybWFsLnkgPiAwKSBvciAoQHZlbG9jaXR5LnkgPCAwIGFuZCBub3JtYWwueSA8IDApIFxyXG4gICAgc2FtZURpcmVjdGlvbiA9IHNhbWVEaXJlY3Rpb25YIG9yIHNhbWVEaXJlY3Rpb25ZXHJcbiAgICBpZiBub3JtYWwubGVuZ3RoKCkgPiAwIGFuZCAhIHNhbWVEaXJlY3Rpb25cclxuICAgICAgbm9ybWFsLnNjYWxlKEB2ZWxvY2l0eS5zY2FsZWQoLTIpLmRvdChub3JtYWwpKVxyXG4gICAgcmV0dXJuIG5vcm1hbFxyXG5cclxuICBzZXBhcmF0ZUZvcmNlOiAoY2lyY2xlcykgLT5cclxuICAgIGZvcmNlPSB2ZWMgMCwgMFxyXG4gICAgY291bnQgPSAwXHJcbiAgICBmb3IgY2lyY2xlIGluIGNpcmNsZXNcclxuICAgICAgY29udGludWUgaWYgY2lyY2xlID09IEBcclxuICAgICAgZGlzdGFuY2UgPSBAY2VudGVyLm1pbnVzKGNpcmNsZS5jZW50ZXIpXHJcbiAgICAgIGN1cnJlbnREaXN0YW5jZSA9IGRpc3RhbmNlLmxlbmd0aCgpXHJcbiAgICAgIG1pbkRpc3RhbmNlID0gY2lyY2xlLnJhZGl1cyArIEByYWRpdXNcclxuICAgICAgaWYgY3VycmVudERpc3RhbmNlID4gbWluRGlzdGFuY2VcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICBhY3VyYW5jZSA9IDAuMjVcclxuICAgICAgaXNBdEVkZ2UgPSBjdXJyZW50RGlzdGFuY2UgPiAobWluRGlzdGFuY2UgLSBhY3VyYW5jZSk7XHJcbiAgICAgIGhhc05vdFNlbmRSZXF1ZXN0ID0gQHJlcXVlc3RzLmluZGV4T2YoY2lyY2xlKSA9PSAtMVxyXG4gICAgICBpZiBpc0F0RWRnZSBhbmQgaGFzTm90U2VuZFJlcXVlc3RcclxuICAgICAgICBAcmVxdWVzdHMucHVzaChjaXJjbGUpICAgICAgXHJcbiAgICAgICAgY2lyY2xlLnJlcXVlc3RzLnB1c2goQClcclxuICAgICAgICBjb250aW51ZSAgICAgIFxyXG4gICAgICBmID0gZGlzdGFuY2Uubm9ybWFsaXplKCkuc2NhbGUobWluRGlzdGFuY2UvY3VycmVudERpc3RhbmNlKVxyXG4gICAgICBAZHJhd1F1ZWUucHVzaChkcmF3LmxpbmUuYmluZChkcmF3LGNpcmNsZS5jZW50ZXIsY2lyY2xlLmNlbnRlci5wbHVzKGYuc2NhbGVkKGNpcmNsZS5yYWRpdXMvMikpKSlcclxuICAgICAgZm9yY2UuYWRkKGYpO1xyXG4gICAgICBjb3VudCsrXHJcblxyXG4gICAgaWYgKGNvdW50ID4gMClcclxuICAgICAgZm9yY2Uuc2NhbGUoMS9jb3VudClcclxuICAgIGZvcmNlXHJcbiAgcmVzcG9uZFRvUmVxdWVzdHM6ICgpLT5cclxuICAgIHJldHVybiBpZiBAZnJpZW5kcy5sZW5ndGggPT0gMlxyXG4gICAgY2lyY2xlcyA9IEByZXF1ZXN0cy5maWx0ZXIoKChjaXJjbGUpLT5cclxuICAgICAgaXNOb3RBY2NlbGVyYXRlZCA9IGNpcmNsZS5hY2NlbGVyYXRpb24ubGVuZ3RoKCkgPT0gMFxyXG4gICAgICBoYXNQbGFjZUZvckZyZWluZCA9IGNpcmNsZS5mcmllbmRzLmxlbmd0aCA8IDJcclxuICAgICAgaW5Ob3RGcmllbmQgPSBAZnJpZW5kcy5pbmRleE9mKGNpcmNsZSkgPT0gLTFcclxuICAgICAgaXNOb3RBY2NlbGVyYXRlZCBhbmQgaXNOb3RBY2NlbGVyYXRlZCBhbmQgaW5Ob3RGcmllbmQgYW5kIGhhc1BsYWNlRm9yRnJlaW5kXHJcbiAgICApLmJpbmQgQCkuc2xpY2UoMCwgMiAtIEBmcmllbmRzLmxlbmd0aClcclxuICAgICMgcmVqZWN0aXMgZHJvcyBnYW56aWR2YSB1bmRhIG1veGRlcyBtYWluYyBhbWl0byBzaGVpbGViYSByZXF2ZXN0ZWJzaGkgXHJcbiAgICAjIG9iaWVxdGViaSBkYSByZWplcXRpcyBhY3Rpb24gZWJpYyBpeW9zIGRhIG1lcmUgbW94ZGVzIGdhbW9kYXhlYmFcclxuICAgIGZvciBjaXJjbGUgaW4gY2lyY2xlcyAgICAgIFxyXG4gICAgICBAZnJpZW5kcy5wdXNoKGNpcmNsZSlcclxuICAgICAgQGFjY2VsZXJhdGlvbi5zY2FsZSgwKVxyXG4gICAgICBAdmVsb2NpdHkuc2NhbGUoMClcclxuXHJcbiAgICAgIGNpcmNsZS5mcmllbmRzLnB1c2goQClcclxuICAgICAgY2lyY2xlLmFjY2VsZXJhdGlvbi5zY2FsZSgwKVxyXG4gICAgICBjaXJjbGUudmVsb2NpdHkuc2NhbGUoMClcclxuXHJcbiAgc2VwYXJhdGU6IChjaXJjbGVzKSAtPlxyXG4gICAgQGFwcGx5Rm9yY2UoQHNlcGFyYXRlRm9yY2UoY2lyY2xlcykpXHJcblxyXG4gIGVkZ2U6IChtYXgpIC0+XHJcbiAgICBAYXBwbHlGb3JjZShAZWRnZUZvcmNlKG1heCkpXHJcblxyXG4gIGNoZWNrTG9vcDogKHRpbWUpIC0+XHJcbiAgICBpZiBAZnJpZW5kcy5sZW5ndGggIT0gMCBvciBAcmVxdWVzdHMubGVuZ3RoICE9IDAgXHJcbiAgICAgIHJldHVyblxyXG4gICAgXHJcbiAgICBpZiBAYWNjZWxlcmF0aW9uLmxlbmd0aCgpID09IDBcclxuICAgICAgQGFjY2VsZXJhdGlvblRpbWVTdGFydCA9IGZhbHNlXHJcbiAgICBlbHNlXHJcbiAgICAgIGlmIEBhY2NlbGVyYXRpb25UaW1lU3RhcnQgID09IGZhbHNlXHJcbiAgICAgICAgQGFjY2VsZXJhdGlvblRpbWVTdGFydCA9IHRpbWUgXHJcbiAgICAgIEBhY2NlbGVyYXRpb25EdXJhdGlvbiA9IHRpbWUgLSBAYWNjZWxlcmF0aW9uVGltZVN0YXJ0XHJcbiAgICAgIGNvbnNvbGUubG9nIEBhY2NlbGVyYXRpb25EdXJhdGlvblxyXG4gICAgICBpZihAYWNjZWxlcmF0aW9uRHVyYXRpb24gPiAzMDAwICYmIEByYWRpdXMgPiBAbWluUmFkaXVzKjMpXHJcbiAgICAgICAgQHJhZGl1cyAtPSAoMzAwMCkgLyAyMDAwO1xyXG4gICAgICBpZihAYWNjZWxlcmF0aW9uRHVyYXRpb24gPiA2MDAwICYmIEByYWRpdXMgPiBAbWluUmFkaXVzKVxyXG4gICAgICAgIEByYWRpdXMgLT0gKDYwMDApIC8gMjAwMDsgXHJcbiAgICAgIGlmKEBhY2NlbGVyYXRpb25EdXJhdGlvbiA+IDkwMDAgJiYgQHJhZGl1cyA+IEBtaW5SYWRpdXMqMC41KVxyXG4gICAgICAgIEByYWRpdXMgLT0gKDkwMDApIC8gMjAwMDsgICAgXHJcbiAgXHJcblxyXG4gIHVwZGF0ZTogKHRpbWUpIC0+XHJcbiAgICByZXR1cm4gaWYgQGZyaWVuZHMubGVuZ3RoID4gMCBcclxuICAgIEB2ZWxvY2l0eS5hZGQoQGFjY2VsZXJhdGlvbik7XHJcbiAgICBAdmVsb2NpdHkuYm91bmRNYXhcclxuICAgICAgeDoxXHJcbiAgICAgIHk6MVxyXG4gICAgQGNlbnRlci5hZGQoQHZlbG9jaXR5KVxyXG4gICAgQGFjY2VsZXJhdGlvbi5zY2FsZSgwKTtcclxuICAgIEBkcmF3UXVlZS5wdXNoKGRyYXcubGluZS5iaW5kKGRyYXcsQGNlbnRlcixAY2VudGVyLnBsdXMoQHZlbG9jaXR5LnNjYWxlZChAcmFkaXVzLzIpKSkpXHJcbiAgICBAcmVxdWVzdHMgPSBbXVxyXG4gICAgcmV0dXJuXHJcblxyXG4gIGRyYXdDaXJjbGU6IChjdHgpIC0+XHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5hcmMgQGNlbnRlci54LCBAY2VudGVyLnksIEByYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZVxyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDFcclxuICAgIGlmIEBmcmllbmRzLmxlbmd0aCA9PSAwXHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnXHJcbiAgICBlbHNlIGlmIEBmcmllbmRzLmxlbmd0aCA9PSAxXHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmVlbidcclxuICAgIGVsc2UgaWYgQGZyaWVuZHMubGVuZ3RoID09IDJcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ29yYW5nZSdcclxuICAgIGVsc2VcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnXHJcbiAgICBjdHguc3Ryb2tlKClcclxuXHJcbiAgZHJhdzogKGN0eCkgLT5cclxuICAgIEBkcmF3Q2lyY2xlKGN0eClcclxuXHJcbiAgICBpZiBAZnJpZW5kcy5sZW5ndGggPiAwXHJcbiAgICAgIGZvciBmcmllbmQgaW4gQGZyaWVuZHMgIFxyXG4gICAgICAgIGRyYXcubGluZShAY2VudGVyLGZyaWVuZC5jZW50ZXIsY3R4LCdzaWx2ZXInKVxyXG5cclxuICAgIGZvciBkIGluIEBkcmF3UXVlZVxyXG4gICAgICBkKGN0eCwncmVkJylcclxuICAgIEBkcmF3UXVlZSA9IFtdXHJcblxyXG4gICAgcmV0dXJuXHJcblxyXG5DaXJjbGUucmFuZG9tID0gKG1heCxwYWRkaW5nKS0+XHJcbiAgcyA9IG5ldyBDaXJjbGVcclxuICBzLnN0YXJ0ID0gXHJcbiAgICB4OiBNYXRoLnJhbmRvbSgpKihtYXgueCArIDIqcGFkZGluZykgKyBwYWRkaW5nXHJcbiAgICB5OiBNYXRoLnJhbmRvbSgpKihtYXgueSArIDIqcGFkZGluZykgKyBwYWRkaW5nXHJcbiAgcy5yYWRpdXMgPSBNYXRoLnJhbmRvbSgpKjMwICsgMzBcclxuICBzLmFuZ2xlID0gMzYwKk1hdGgucmFuZG9tKCkqKE1hdGguUEkvMTgwKVxyXG4gIHMuZGlyZWN0aW9uID0gISEoTWF0aC5yYW5kb20oKSA+IDAuNSlcclxuICBzLmNpcmNsZXMgPSB+figyICsgTWF0aC5yYW5kb20oKSo0KVxyXG4gIHJldHVybiBzO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDaXJjbGUiLCJkcmF3ID0gXHJcbiAgbGluZTogKHN0YXJ0LGVuZCxjdHgsY29sb3IpIC0+XHJcbiAgICAjIHN0cm9rZVN0eWxlID0gY3R4LnN0cm9rZVN0eWxlXHJcbiAgICAjIGN0eC5zdHJva2UoKVxyXG4gICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAoY29sb3Igb3IgXCJibHVlXCIpXHJcbiAgICBjdHgubW92ZVRvIHN0YXJ0Lngsc3RhcnQueVxyXG4gICAgY3R4LmxpbmVUbyBlbmQueCxlbmQueVxyXG4gICAgY3R4LnN0cm9rZSgpXHJcbiAgICAjIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgIyBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZVxyXG5cclxuICBzcGlyYWw6IChudW0sbyxnZW5lcmF0b3IpIC0+XHJcbiAgICByZXR1cm4gaWYgbnVtID09IDA7IFxyXG4gICAgbmV4dCA9IGdlbmVyYXRvcigpO1xyXG5cclxuICAgIHNBbmdsZSA9IE1hdGguUEkgKyBvLmFuZ2xlO1xyXG4gICAgZUFuZ2xlID0gc0FuZ2xlICsgTWF0aC5QSSAqIDIgKiBvLmNpcmNsZXM7XHJcbiAgICBcclxuICAgIGNlbnRlciA9IFxyXG4gICAgICB4OiBvLnN0YXJ0LnggKyBNYXRoLmNvcyhvLmFuZ2xlKSpvLnJhZGl1c1xyXG4gICAgICB5OiBvLnN0YXJ0LnkgKyBNYXRoLnNpbihvLmFuZ2xlKSpvLnJhZGl1c1xyXG4gICAgXHJcblxyXG4gICAgZHJhdy5saW5lLmNhbGwoQCxvLnN0YXJ0LGNlbnRlcik7XHJcblxyXG4gICAgaW5jcmVtZW50ID0gMiAqIE1hdGguUEkgLyA2MCAjU1RFUFNfUEVSX1JPVEFUSU9OXHJcbiAgICB0aGV0YSA9IHNBbmdsZVxyXG4gICAgc2F2ZUF0QW5nbGUgPSAoTWF0aC5yYW5kb20oKSArIDAuNSkqTWF0aC5QSVxyXG4gICAgc2F2ZWQgPSBmYWxzZVxyXG4gICAgQGJlZ2luUGF0aCgpXHJcbiAgICBAbW92ZVRvIGNlbnRlci54LGNlbnRlci55XHJcbiAgICB3aGlsZSB0aGV0YSA8PSBlQW5nbGUgKyBpbmNyZW1lbnRcclxuICAgICAgdGVtcFRoZXRhID0gaWYgby5kaXJlY3Rpb24gdGhlbiB0aGV0YSBlbHNlIC0xKih0aGV0YSAtIDIqby5hbmdsZSlcclxuICAgICAgcG9pbnQgPVxyXG4gICAgICAgIHg6IGNlbnRlci54ICsgby5yYWRpdXMgKiBNYXRoLmNvcyh0ZW1wVGhldGEpICogKHByb2dyZXNzKVxyXG4gICAgICAgIHk6IGNlbnRlci55ICsgby5yYWRpdXMgKiBNYXRoLnNpbih0ZW1wVGhldGEpICogKHByb2dyZXNzKVxyXG4gICAgICBpZiBub3Qgc2F2ZWQgYW5kIGVBbmdsZSAtIHNhdmVBdEFuZ2xlIDwgdGhldGFcclxuICAgICAgICBuZXh0LnN0YXJ0LnggPSBwb2ludC54XHJcbiAgICAgICAgbmV4dC5zdGFydC55ID0gcG9pbnQueVxyXG4gICAgICAgIHNhdmVkID0gdHJ1ZVxyXG4gICAgICAgIHNhdmVBdEFuZ2xlID0gdGVtcFRoZXRhXHJcbiAgICAgICAgZHJhdy5saW5lLmNhbGwoQCxjZW50ZXIscG9pbnQpO1xyXG5cclxuICAgICAgcHJvZ3Jlc3MgPSAodGhldGEgLSBzQW5nbGUpLyhlQW5nbGUgLSBzQW5nbGUpXHJcbiAgICAgIHRoZXRhICs9IGluY3JlbWVudDtcclxuICAgICAgQGxpbmVUbyBwb2ludC54LCBwb2ludC55XHJcbiAgICBAc3Ryb2tlKClcclxuXHJcbiAgICBuZXh0LmFuZ2xlID0gc2F2ZUF0QW5nbGUlKE1hdGguUEkqMilcclxuICAgIG5leHQuZGlyZWN0aW9uID0gIW8uZGlyZWN0aW9uO1xyXG5cclxuICAgIGRyYXcuc3BpcmFsLmNhbGwgQCwgLS1udW0sIG5leHQsZ2VuZXJhdG9yO1xyXG4gICAgcmV0dXJuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRyYXc7Il19
