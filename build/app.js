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
    ctx.fillStyle = "black";
    return ctx.fillRect(0, 0, this.width.get(), this.height.get());
  },
  setup: function(ctx) {
    var i, _i;
    this.width = new n(this.anim.getWidth);
    this.height = new n(this.anim.getHeight);
    this.clear(ctx);
    this.circles = [];
    for (i = _i = 0; _i < 100; i = ++_i) {
      this.circles.push(new Circle({
        center: {
          x: Math.random() * (this.width.get() - 100) + 50,
          y: Math.random() * (this.height.get() - 100) + 50
        },
        velocity: {
          x: Math.random() * 2 - 1,
          y: Math.random() * 2 - 1
        },
        radius: Math.random() * 10 + 5
      }));
    }
  },
  update: function(time) {
    var circle, _i, _len, _ref, _results;
    _ref = this.circles;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      circle = _ref[_i];
      circle.separate(this.circles);
      circle.edge(vec(this.width.get(), this.height.get()));
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
var Circle, vec;

vec = require('vec2d');

Circle = (function() {
  function Circle(obj) {
    this.center = vec(obj.center.x, obj.center.y);
    this.acceleration = vec(0, 0);
    this.velocity = vec(obj.velocity.x, obj.velocity.y);
    this.radius = obj.radius;
    this.mass = 1;
  }

  Circle.prototype.applyForce = function(force) {
    return this.acceleration.add(force.scaled(1 / this.mass));
  };

  Circle.prototype.edgeForce = function(max) {
    var x, y;
    x = 0;
    y = 0;
    if (this.center.x < 0) {
      x -= 1 * this.center.x;
    }
    if (this.center.y < 0) {
      y -= 1 * this.center.y;
    }
    if (this.center.x > max.x) {
      x -= this.center.x - max.x;
    }
    if (this.center.y > max.y) {
      y -= this.center.y - max.y;
    }
    return vec(x, y);
  };

  Circle.prototype.separateForce = function(circles) {
    var circle, count, currentDistance, distance, force, minDistance, _i, _len;
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
      force.add(distance.normalize().scale(minDistance / currentDistance));
      count++;
    }
    if (count > 0) {
      force.scale(1 / count);
    }
    return force;
  };

  Circle.prototype.separate = function(circles) {
    return this.applyForce(this.separateForce(circles));
  };

  Circle.prototype.edge = function(max) {
    return this.applyForce(this.edgeForce(max));
  };

  Circle.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.boundMax({
      x: 2,
      y: 2
    });
    this.center.add(this.velocity);
    this.acceleration.scale(0);
  };

  Circle.prototype.draw = function(ctx) {
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'red';
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



},{"vec2d":"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\node_modules\\vec2d\\index.js"}],"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\src\\js\\draw.coffee":[function(require,module,exports){
var draw;

draw = {
  line: function(start, end) {
    var strokeStyle;
    strokeStyle = this.strokeStyle;
    this.stroke();
    this.beginPath();
    this.strokeStyle = "blue";
    this.moveTo(start.x, start.y);
    this.lineTo(end.x, end.y);
    this.stroke();
    this.beginPath();
    return this.strokeStyle = strokeStyle;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcaXJha2xpLnNhZmFyZWxpXFxEZXNrdG9wXFxzcGlyYWxlclxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGFwcC5jb2ZmZWUiLCJjOi9Vc2Vycy9pcmFrbGkuc2FmYXJlbGkvRGVza3RvcC9zcGlyYWxlci9ub2RlX21vZHVsZXMvZnJhbmltL2ZyYW5pbS5qcyIsImM6L1VzZXJzL2lyYWtsaS5zYWZhcmVsaS9EZXNrdG9wL3NwaXJhbGVyL25vZGVfbW9kdWxlcy9udW1iZXJlci9saWIvbnVtYmVyZXIuanMiLCJjOi9Vc2Vycy9pcmFrbGkuc2FmYXJlbGkvRGVza3RvcC9zcGlyYWxlci9ub2RlX21vZHVsZXMvdmVjMmQvaW5kZXguanMiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGNpcmNsZS5jb2ZmZWUiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGRyYXcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSx1QkFBQTs7QUFBQSxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FBSixDQUFBOztBQUFBLENBQ0EsR0FBSSxPQUFBLENBQVEsVUFBUixDQURKLENBQUE7O0FBQUEsSUFFQSxHQUFPLE9BQUEsQ0FBUSxRQUFSLENBRlAsQ0FBQTs7QUFBQSxNQUdBLEdBQVMsT0FBQSxDQUFRLFVBQVIsQ0FIVCxDQUFBOztBQUFBLEdBSUEsR0FBTSxPQUFBLENBQVEsT0FBUixDQUpOLENBQUE7O0FBQUEsQ0FNQSxDQUFFLFFBQUYsRUFDRTtBQUFBLEVBQUEsTUFBQSxFQUNFO0FBQUEsSUFBQSxRQUFBLEVBQVUsSUFBVjtH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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE9BLElBQUEsV0FBQTs7QUFBQSxHQUFBLEdBQU0sT0FBQSxDQUFRLE9BQVIsQ0FBTixDQUFBOztBQUFBO0FBRWUsRUFBQSxnQkFBQyxHQUFELEdBQUE7QUFDWCxJQUFBLElBQUMsQ0FBQSxNQUFELEdBQVUsR0FBQSxDQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBZixFQUFr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LElBdUNBLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBWixDQUFpQixJQUFqQixFQUFvQixFQUFBLEdBQXBCLEVBQTJCLElBQTNCLEVBQWdDLFNBQWhDLENBdkNBLENBRE07RUFBQSxDQVhSO0NBREYsQ0FBQTs7QUFBQSxNQXVETSxDQUFDLE9BQVAsR0FBaUIsSUF2RGpCLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZiA9IHJlcXVpcmUgJ2ZyYW5pbSdcclxubiA9IHJlcXVpcmUgJ251bWJlcmVyJ1xyXG5kcmF3ID0gcmVxdWlyZSAnLi9kcmF3J1xyXG5DaXJjbGUgPSByZXF1aXJlICcuL2NpcmNsZSdcclxudmVjID0gcmVxdWlyZSAndmVjMmQnXHJcblxyXG5mIFwiY2FudmFzXCIsXHJcbiAgY29uZmlnOlxyXG4gICAgZnVsbFNpemU6IHRydWVcclxuXHJcbiAgY2xlYXI6IChjdHgpIC0+XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiXHJcbiAgICBjdHguZmlsbFJlY3QgMCwgMCwgQHdpZHRoLmdldCgpLCBAaGVpZ2h0LmdldCgpXHJcblxyXG4gIHNldHVwOiAoY3R4KSAtPlxyXG4gICAgQHdpZHRoID0gbmV3IG4gQGFuaW0uZ2V0V2lkdGhcclxuICAgIEBoZWlnaHQgPSBuZXcgbiBAYW5pbS5nZXRIZWlnaHRcclxuICAgIEBjbGVhcihjdHgpXHJcbiAgICBAY2lyY2xlcyA9IFtdXHJcbiAgICBmb3IgaSBpbiBbMC4uLjEwMF1cclxuICAgICAgQGNpcmNsZXMucHVzaCBuZXcgQ2lyY2xlIHtcclxuICAgICAgICBjZW50ZXI6XHJcbiAgICAgICAgICB4OiBNYXRoLnJhbmRvbSgpICogKEB3aWR0aC5nZXQoKSAtIDEwMCkgKyA1MFxyXG4gICAgICAgICAgeTogTWF0aC5yYW5kb20oKSAqIChAaGVpZ2h0LmdldCgpIC0gMTAwKSArIDUwXHJcbiAgICAgICAgdmVsb2NpdHk6XHJcbiAgICAgICAgICB4OiBNYXRoLnJhbmRvbSgpICogMiAtIDFcclxuICAgICAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiAyIC0gMVxyXG4gICAgICAgIHJhZGl1czogTWF0aC5yYW5kb20oKSAqIDEwICsgNVxyXG4gICAgICB9XHJcbiAgICByZXR1cm5cclxuXHJcbiAgdXBkYXRlOiAodGltZSkgLT5cclxuICAgIGZvciBjaXJjbGUgaW4gQGNpcmNsZXNcclxuICAgICAgY2lyY2xlLnNlcGFyYXRlKEBjaXJjbGVzKVxyXG4gICAgICBjaXJjbGUuZWRnZSh2ZWMoQHdpZHRoLmdldCgpLEBoZWlnaHQuZ2V0KCkpKVxyXG4gICAgICBjaXJjbGUudXBkYXRlKHRpbWUpXHJcbiAgZHJhdzogKGN0eCkgLT5cclxuICAgIEBjbGVhcihjdHgpXHJcbiAgICBmb3IgY2lyY2xlIGluIEBjaXJjbGVzXHJcbiAgICAgIGNpcmNsZS5kcmF3KGN0eClcclxuICAgICMgQGFuaW0ucGF1c2UoKTtcclxuICAgIHJldHVybiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZnJhbmltKGNhbnZhc2VJZCwgY29udGV4dCkge1xuICAgIHZhciB3aWR0aCAgPSAgd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc2VJZCksXG4gICAgICAgIGlzUnVubmluZyA9IHRydWUsXG4gICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgY3R4ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgZG9tRWxlbWVudC53aWR0aCA9IHdpZHRoO1xuICAgIGRvbUVsZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgZnVuY3Rpb24gcmVjYWxjdWxhdGUoKSB7XG4gICAgICAgIGlmICh3aWR0aCAgIT09IHdpbmRvdy5pbm5lcldpZHRoIHx8IGhlaWdodCAhPT0gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICBkb21FbGVtZW50LndpZHRoICA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgZG9tRWxlbWVudC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCAgPSBkb21FbGVtZW50LndpZHRoO1xuICAgICAgICAgICAgaGVpZ2h0ID0gZG9tRWxlbWVudC5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRpb25DYWxsYmFjayh0aW1lKSB7XG4gICAgICAgIGlmIChjb250ZXh0LmNvbmZpZyAmJiBjb250ZXh0LmNvbmZpZy5mdWxsU2l6ZSkge1xuICAgICAgICAgICAgcmVjYWxjdWxhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dC51cGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnRleHQudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgY29udGV4dC5kcmF3KGN0eCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXcoY3R4LCB0aW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1J1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElkKTtcbiAgICAgICAgICAgIHJlcXVlc3RJZCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuYW5pbSA9IHtcbiAgICAgICAgZ2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGNvbnRleHQuY29uZmlnICYmIGNvbnRleHQuY29uZmlnLmZ1bGxTaXplKSA/IGhlaWdodCA6IGRvbUVsZW1lbnQuaGVpZ2h0O1xuICAgICAgICB9LFxuICAgICAgICBnZXRXaWR0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIChjb250ZXh0LmNvbmZpZyAmJiBjb250ZXh0LmNvbmZpZy5mdWxsU2l6ZSkgPyB3aWR0aCA6IGRvbUVsZW1lbnQud2lkdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3VtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25DYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHBhdXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0LnNldHVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRleHQuc2V0dXAoY3R4KTtcbiAgICB9XG4gICAgcmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25DYWxsYmFjayk7XG5cbiAgICByZXR1cm4gY29udGV4dDtcbn1cblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZyYW5pbTtcbn0iLCIvKlxuICogbnVtYmVyZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zYWZhcmVsaS9udW1iZXJlclxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBJcmFrbGkgU2FmYXJlbGlcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBtYXRoID0gZnVuY3Rpb24ob3BlcmF0aW9uLCBhcmdzKXtcbiAgICByZXR1cm4gbmV3IE51bWJlcmVyKGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbihwLCBjKXtcbiAgICAgICAgICAgIHZhciBhID0gKHAgJiYgcC5nZXQpID8gcC5nZXQoKSA6IHA7XG4gICAgICAgICAgICB2YXIgYiA9IChjICYmIGMuZ2V0KSA/IGMuZ2V0KCkgOiBjO1xuICAgICAgICAgICAgc3dpdGNoKG9wZXJhdGlvbil7XG4gICAgICAgICAgICAgICAgY2FzZSAncGx1cyc6IHJldHVybiBhICsgYjtcbiAgICAgICAgICAgICAgICBjYXNlICdtaW51cyc6IHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgICAgICBjYXNlICdkaXYnOiByZXR1cm4gYSAvIGI7XG4gICAgICAgICAgICAgICAgY2FzZSAnbXVsdCc6IHJldHVybiBhICogYjtcbiAgICAgICAgICAgICAgICBjYXNlICdtb2QnOiByZXR1cm4gYSAlIGI7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IFR5cGVFcnJvcigndW5rbm93biBvcGVyYXRpb24gJytvcGVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIE51bWJlcmVyKHZhbHVlKXtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbn1cblxuTnVtYmVyZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHYgPSB0aGlzLl9fdmFsdWU7XG4gICAgaWYodHlwZW9mIHYgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHYoKTtcbiAgICBlbHNlIHJldHVybiB2O1xufTtcblxuTnVtYmVyZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5OdW1iZXJlci5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBuZXcgTnVtYmVyZXIodGhpcy5fX3ZhbHVlKTtcbn07XG5cblsncGx1cycsICdtaW51cycsICdkaXYnLCAnbXVsdCcsICdtb2QnXS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xuICAgIE51bWJlcmVyLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgYXJncy51bnNoaWZ0KHRoaXMuY2xvbmUoKSk7XG4gICAgICAgIHRoaXMuX192YWx1ZSA9IChtYXRoKG5hbWUsIGFyZ3MpKS5fX3ZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgTnVtYmVyZXJbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG1hdGgobmFtZSxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXJlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHY7XG52LlZlYzJkID0gVmVjMmQ7XG52LnVuaXQgPSB1bml0RnJvbUFuZ2xlO1xuVmVjMmQudW5pdCA9IHVuaXRGcm9tQW5nbGU7XG5cbnZhciByZSA9IC9cXCgoLT9bLlxcZF0rKSwgKC0/Wy5cXGRdKylcXCkvO1xuXG5mdW5jdGlvbiBWZWMyZCh4LCB5KSB7XG4gIHRoaXMueCA9IHg7XG4gIHRoaXMueSA9IHk7XG59XG5cbmZ1bmN0aW9uIHVuaXRGcm9tQW5nbGUoYW5nbGUpIHtcbiAgcmV0dXJuIG5ldyBWZWMyZChNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKSk7XG59XG5cbmZ1bmN0aW9uIHYoeE9yUGFpciwgeSkge1xuICBpZiAoeE9yUGFpciA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBWZWMyZCgwLCAwLCAwKTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHhPclBhaXIpKSB7XG4gICAgcmV0dXJuIG5ldyBWZWMyZChwYXJzZUZsb2F0KHhPclBhaXJbMF0sIDEwKSwgcGFyc2VGbG9hdCh4T3JQYWlyWzFdLCAxMCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB4T3JQYWlyID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBuZXcgVmVjMmQocGFyc2VGbG9hdCh4T3JQYWlyLngsIDEwKSwgcGFyc2VGbG9hdCh4T3JQYWlyLnksIDEwKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHhPclBhaXIgPT09ICdzdHJpbmcnICYmIHkgPT0gbnVsbCkge1xuICAgIHZhciBtYXRjaCA9IHhPclBhaXIubWF0Y2gocmUpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG5ldyBWZWMyZChwYXJzZUZsb2F0KG1hdGNoWzFdLCAxMCksIHBhcnNlRmxvYXQobWF0Y2hbMl0sIDEwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlZlYzJkOiBjYW5ub3QgcGFyc2U6IFwiICsgeE9yUGFpcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgVmVjMmQocGFyc2VGbG9hdCh4T3JQYWlyLCAxMCksIHBhcnNlRmxvYXQoeSwgMTApKTtcbiAgfVxufVxuXG5WZWMyZC5wcm90b3R5cGUub2Zmc2V0ID0gZnVuY3Rpb24oZHgsIGR5KSB7XG4gIHJldHVybiBuZXcgVmVjMmQodGhpcy54ICsgZHgsIHRoaXMueSArIGR5KTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihvdGhlcikge1xuICB0aGlzLnggKz0gb3RoZXIueDtcbiAgdGhpcy55ICs9IG90aGVyLnk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHRoaXMueCAtPSBvdGhlci54O1xuICB0aGlzLnkgLT0gb3RoZXIueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkuYWRkKG90aGVyKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5taW51cyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkuc3ViKG90aGVyKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5uZWcgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy54ID0gLXRoaXMueDtcbiAgdGhpcy55ID0gLXRoaXMueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUubXVsdCA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHRoaXMueCAqPSBvdGhlci54O1xuICB0aGlzLnkgKj0gb3RoZXIueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUudGltZXMgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gdGhpcy5jbG9uZSgpLm11bHQob3RoZXIpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmRpdiA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHRoaXMueCAvPSBvdGhlci54O1xuICB0aGlzLnkgLz0gb3RoZXIueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuZGl2QnkgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gdGhpcy5jbG9uZSgpLmRpdihvdGhlcik7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuc2NhbGUgPSBmdW5jdGlvbihzY2FsYXIpIHtcbiAgdGhpcy54ICo9IHNjYWxhcjtcbiAgdGhpcy55ICo9IHNjYWxhcjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuc2NhbGVkID0gZnVuY3Rpb24oc2NhbGFyKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkuc2NhbGUoc2NhbGFyKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFZlYzJkKHRoaXMueCwgdGhpcy55KTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgdGhpcy54ID0gZnVuYyh0aGlzLngpO1xuICB0aGlzLnkgPSBmdW5jKHRoaXMueSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmFwcGxpZWQgPSBmdW5jdGlvbihmdW5jKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkuYXBwbHkoZnVuYyk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuZGlzdGFuY2VTcXJkID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgdmFyIGR4ID0gb3RoZXIueCAtIHRoaXMueDtcbiAgdmFyIGR5ID0gb3RoZXIueSAtIHRoaXMueTtcbiAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufTtcblxuVmVjMmQucHJvdG90eXBlLmRpc3RhbmNlID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3FyZChvdGhlcikpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiB0aGlzLnggPT09IG90aGVyLnggJiYgdGhpcy55ID09PSBvdGhlci55O1xufTtcblxuVmVjMmQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBcIihcIiArIHRoaXMueCArIFwiLCBcIiArIHRoaXMueSArIFwiKVwiO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmxlbmd0aFNxcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxcmQoKSk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuYW5nbGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMubGVuZ3RoU3FyZCgpID09PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICB9XG59O1xuXG5WZWMyZC5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24oKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMuc2NhbGUoMSAvIGxlbmd0aCk7XG4gIH1cbn07XG5cblZlYzJkLnByb3RvdHlwZS5ub3JtYWxpemVkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkubm9ybWFsaXplKCk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuYm91bmRNaW4gPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAodGhpcy54IDwgb3RoZXIueCkgdGhpcy54ID0gb3RoZXIueDtcbiAgaWYgKHRoaXMueSA8IG90aGVyLnkpIHRoaXMueSA9IG90aGVyLnk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmJvdW5kTWF4ID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKHRoaXMueCA+IG90aGVyLngpIHRoaXMueCA9IG90aGVyLng7XG4gIGlmICh0aGlzLnkgPiBvdGhlci55KSB0aGlzLnkgPSBvdGhlci55O1xuICByZXR1cm4gdGhpcztcbn07XG5cblZlYzJkLnByb3RvdHlwZS5mbG9vciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hcHBseShNYXRoLmZsb29yKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5mbG9vcmVkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmFwcGxpZWQoTWF0aC5mbG9vcik7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuY2VpbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hcHBseShNYXRoLmNlaWwpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmNlaWxlZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hcHBsaWVkKE1hdGguY2VpbCk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUucHJvamVjdCA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHRoaXMuc2NhbGUodGhpcy5kb3Qob3RoZXIpIC8gb3RoZXIubGVuZ3RoU3FyZCgpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgcmV0dXJuIHRoaXMueCAqIG90aGVyLnggKyB0aGlzLnkgKiBvdGhlci55O1xufTtcblxuVmVjMmQucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xuICB2YXIgbmV3WCA9IHRoaXMueCAqIGRpcmVjdGlvbi54IC0gdGhpcy55ICogZGlyZWN0aW9uLnk7XG4gIHRoaXMueSA9IHRoaXMueCAqIGRpcmVjdGlvbi55ICsgdGhpcy55ICogZGlyZWN0aW9uLng7XG4gIHRoaXMueCA9IG5ld1g7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLnJvdGF0ZWQgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgcmV0dXJuIHRoaXMuY2xvbmUoKS5yb3RhdGUoZGlyZWN0aW9uKTtcbn07XG5cbi8vIHJlZmxlY3QgYWJvdXQgYXhpcyBvcmlnaW5hdGluZyBmcm9tIG9yaWdpblxuVmVjMmQucHJvdG90eXBlLnJlZmxlY3QgPSBmdW5jdGlvbihheGlzKSB7XG4gIHJldHVybiB0aGlzLnJlZmxlY3RBYm91dExpbmUobmV3IFZlYzJkKDAsIDApLCBheGlzKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5yZWZsZWN0QWJvdXRMaW5lID0gZnVuY3Rpb24obGluZVB0MSwgbGluZVB0Mikge1xuICB2YXIgbm9ybWFsID0gbmV3IFZlYzJkKFxuICAgICAgbGluZVB0Mi54IC0gbGluZVB0MS54LFxuICAgICAgbGluZVB0Mi55IC0gbGluZVB0MS54KTtcbiAgdmFyIHRlbXAgPSBub3JtYWwueDtcbiAgbm9ybWFsLnggPSAtbm9ybWFsLnk7XG4gIG5vcm1hbC55ID0gdGVtcDtcbiAgbm9ybWFsLm5vcm1hbGl6ZSgpO1xuICB2YXIgZG90MiA9IDIgKiB0aGlzLmRvdChub3JtYWwpO1xuICB0aGlzLnggLT0gZG90MiAqIG5vcm1hbC54O1xuICB0aGlzLnkgLT0gZG90MiAqIG5vcm1hbC55O1xuICByZXR1cm4gdGhpcztcbn07XG5cblZlYzJkLnByb3RvdHlwZS5zZXQgPSBWZWMyZDtcbiIsInZlYyA9IHJlcXVpcmUgJ3ZlYzJkJ1xyXG5jbGFzcyBDaXJjbGVcclxuICBjb25zdHJ1Y3RvcjogKG9iaikgLT5cclxuICAgIEBjZW50ZXIgPSB2ZWMgb2JqLmNlbnRlci54LCBvYmouY2VudGVyLnlcclxuICAgIEBhY2NlbGVyYXRpb24gPSB2ZWMgMCwgMFxyXG4gICAgQHZlbG9jaXR5ID0gdmVjIG9iai52ZWxvY2l0eS54LCBvYmoudmVsb2NpdHkueVxyXG5cclxuICAgIEByYWRpdXMgPSBvYmoucmFkaXVzXHJcbiAgICBAbWFzcyA9IDEgIyBAcmFkaXVzICogQHJhZGl1cyAqIDIgKk1hdGguUElcclxuICBcclxuICBhcHBseUZvcmNlOiAoZm9yY2UpIC0+XHJcbiAgICAjIGZvcmNlID0gbWFzcyAqIGFjY2VsZXJhdGlvblxyXG4gICAgIyBhY2NlbGVyYXRpb24gPSBmb3JjZSAvIG1hc3NcclxuICAgIEBhY2NlbGVyYXRpb24uYWRkKGZvcmNlLnNjYWxlZCgxL0BtYXNzKSlcclxuICBcclxuICBlZGdlRm9yY2U6IChtYXgpIC0+XHJcbiAgICAjIGZvcmNlPSB2ZWMgMCwgMFxyXG4gICAgeCA9IDBcclxuICAgIHkgPSAwXHJcbiAgICB4IC09IDEqQGNlbnRlci54IGlmIEBjZW50ZXIueCA8IDBcclxuICAgIHkgLT0gMSpAY2VudGVyLnkgaWYgQGNlbnRlci55IDwgMFxyXG4gICAgeCAtPSBAY2VudGVyLnggLSBtYXgueCBpZiBAY2VudGVyLnggPiBtYXgueCBcclxuICAgIHkgLT0gQGNlbnRlci55IC0gbWF4LnkgaWYgQGNlbnRlci55ID4gbWF4LnkgXHJcbiAgICB2ZWMoeCwgeSlcclxuXHJcbiAgc2VwYXJhdGVGb3JjZTogKGNpcmNsZXMpIC0+XHJcbiAgICBmb3JjZT0gdmVjIDAsIDBcclxuICAgIGNvdW50ID0gMFxyXG5cclxuICAgIGZvciBjaXJjbGUgaW4gY2lyY2xlc1xyXG4gICAgICBjb250aW51ZSBpZiBjaXJjbGUgPT0gQFxyXG4gICAgICBkaXN0YW5jZSA9IEBjZW50ZXIubWludXMoY2lyY2xlLmNlbnRlcilcclxuICAgICAgY3VycmVudERpc3RhbmNlID0gZGlzdGFuY2UubGVuZ3RoKClcclxuICAgICAgbWluRGlzdGFuY2UgPSBjaXJjbGUucmFkaXVzICsgQHJhZGl1c1xyXG4gICAgICBjb250aW51ZSBpZiBjdXJyZW50RGlzdGFuY2UgPiBtaW5EaXN0YW5jZVxyXG4gICAgICBmb3JjZS5hZGQoZGlzdGFuY2Uubm9ybWFsaXplKCkuc2NhbGUobWluRGlzdGFuY2UvY3VycmVudERpc3RhbmNlKSlcclxuICAgICAgY291bnQrK1xyXG4gICAgXHJcbiAgICBpZiAoY291bnQgPiAwKVxyXG4gICAgICBmb3JjZS5zY2FsZSgxL2NvdW50KVxyXG4gICAgZm9yY2VcclxuXHJcbiAgc2VwYXJhdGU6IChjaXJjbGVzKSAtPlxyXG4gICAgQGFwcGx5Rm9yY2UoQHNlcGFyYXRlRm9yY2UoY2lyY2xlcykpXHJcblxyXG4gIGVkZ2U6IChtYXgpIC0+XHJcbiAgICBAYXBwbHlGb3JjZShAZWRnZUZvcmNlKG1heCkpXHJcblxyXG4gIHVwZGF0ZTogKCkgLT5cclxuICAgIEB2ZWxvY2l0eS5hZGQoQGFjY2VsZXJhdGlvbik7XHJcbiAgICBAdmVsb2NpdHkuYm91bmRNYXhcclxuICAgICAgeDoyXHJcbiAgICAgIHk6MlxyXG4gICAgQGNlbnRlci5hZGQoQHZlbG9jaXR5KVxyXG4gICAgQGFjY2VsZXJhdGlvbi5zY2FsZSgwKTtcclxuICAgIHJldHVyblxyXG5cclxuICBkcmF3OiAoY3R4KSAtPlxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIlxyXG4gXHJcbiAgICBjdHguYmVnaW5QYXRoKClcclxuICAgIGN0eC5hcmMgQGNlbnRlci54LCBAY2VudGVyLnksIEByYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZVxyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDFcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnXHJcbiAgICBjdHguc3Ryb2tlKClcclxuXHJcbiAgICByZXR1cm5cclxuXHJcbkNpcmNsZS5yYW5kb20gPSAobWF4LHBhZGRpbmcpLT5cclxuICBzID0gbmV3IENpcmNsZVxyXG4gIHMuc3RhcnQgPSBcclxuICAgIHg6IE1hdGgucmFuZG9tKCkqKG1heC54ICsgMipwYWRkaW5nKSArIHBhZGRpbmdcclxuICAgIHk6IE1hdGgucmFuZG9tKCkqKG1heC55ICsgMipwYWRkaW5nKSArIHBhZGRpbmdcclxuICBzLnJhZGl1cyA9IE1hdGgucmFuZG9tKCkqMzAgKyAzMFxyXG4gIHMuYW5nbGUgPSAzNjAqTWF0aC5yYW5kb20oKSooTWF0aC5QSS8xODApXHJcbiAgcy5kaXJlY3Rpb24gPSAhIShNYXRoLnJhbmRvbSgpID4gMC41KVxyXG4gIHMuY2lyY2xlcyA9IH5+KDIgKyBNYXRoLnJhbmRvbSgpKjQpXHJcbiAgcmV0dXJuIHM7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENpcmNsZSIsImRyYXcgPSBcclxuICBsaW5lOiAoc3RhcnQsZW5kKSAtPlxyXG4gICAgc3Ryb2tlU3R5bGUgPSBAc3Ryb2tlU3R5bGVcclxuICAgIEBzdHJva2UoKVxyXG4gICAgQGJlZ2luUGF0aCgpXHJcbiAgICBAc3Ryb2tlU3R5bGUgPSBcImJsdWVcIlxyXG4gICAgQG1vdmVUbyBzdGFydC54LHN0YXJ0LnlcclxuICAgIEBsaW5lVG8gZW5kLngsZW5kLnlcclxuICAgIEBzdHJva2UoKVxyXG4gICAgQGJlZ2luUGF0aCgpXHJcbiAgICBAc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZVxyXG5cclxuICBzcGlyYWw6IChudW0sbyxnZW5lcmF0b3IpIC0+XHJcbiAgICByZXR1cm4gaWYgbnVtID09IDA7IFxyXG4gICAgbmV4dCA9IGdlbmVyYXRvcigpO1xyXG5cclxuICAgIHNBbmdsZSA9IE1hdGguUEkgKyBvLmFuZ2xlO1xyXG4gICAgZUFuZ2xlID0gc0FuZ2xlICsgTWF0aC5QSSAqIDIgKiBvLmNpcmNsZXM7XHJcbiAgICBcclxuICAgIGNlbnRlciA9IFxyXG4gICAgICB4OiBvLnN0YXJ0LnggKyBNYXRoLmNvcyhvLmFuZ2xlKSpvLnJhZGl1c1xyXG4gICAgICB5OiBvLnN0YXJ0LnkgKyBNYXRoLnNpbihvLmFuZ2xlKSpvLnJhZGl1c1xyXG4gICAgXHJcblxyXG4gICAgZHJhdy5saW5lLmNhbGwoQCxvLnN0YXJ0LGNlbnRlcik7XHJcblxyXG4gICAgaW5jcmVtZW50ID0gMiAqIE1hdGguUEkgLyA2MCAjU1RFUFNfUEVSX1JPVEFUSU9OXHJcbiAgICB0aGV0YSA9IHNBbmdsZVxyXG4gICAgc2F2ZUF0QW5nbGUgPSAoTWF0aC5yYW5kb20oKSArIDAuNSkqTWF0aC5QSVxyXG4gICAgc2F2ZWQgPSBmYWxzZVxyXG4gICAgQGJlZ2luUGF0aCgpXHJcbiAgICBAbW92ZVRvIGNlbnRlci54LGNlbnRlci55XHJcbiAgICB3aGlsZSB0aGV0YSA8PSBlQW5nbGUgKyBpbmNyZW1lbnRcclxuICAgICAgdGVtcFRoZXRhID0gaWYgby5kaXJlY3Rpb24gdGhlbiB0aGV0YSBlbHNlIC0xKih0aGV0YSAtIDIqby5hbmdsZSlcclxuICAgICAgcG9pbnQgPVxyXG4gICAgICAgIHg6IGNlbnRlci54ICsgby5yYWRpdXMgKiBNYXRoLmNvcyh0ZW1wVGhldGEpICogKHByb2dyZXNzKVxyXG4gICAgICAgIHk6IGNlbnRlci55ICsgby5yYWRpdXMgKiBNYXRoLnNpbih0ZW1wVGhldGEpICogKHByb2dyZXNzKVxyXG4gICAgICBpZiBub3Qgc2F2ZWQgYW5kIGVBbmdsZSAtIHNhdmVBdEFuZ2xlIDwgdGhldGFcclxuICAgICAgICBuZXh0LnN0YXJ0LnggPSBwb2ludC54XHJcbiAgICAgICAgbmV4dC5zdGFydC55ID0gcG9pbnQueVxyXG4gICAgICAgIHNhdmVkID0gdHJ1ZVxyXG4gICAgICAgIHNhdmVBdEFuZ2xlID0gdGVtcFRoZXRhXHJcbiAgICAgICAgZHJhdy5saW5lLmNhbGwoQCxjZW50ZXIscG9pbnQpO1xyXG5cclxuICAgICAgcHJvZ3Jlc3MgPSAodGhldGEgLSBzQW5nbGUpLyhlQW5nbGUgLSBzQW5nbGUpXHJcbiAgICAgIHRoZXRhICs9IGluY3JlbWVudDtcclxuICAgICAgQGxpbmVUbyBwb2ludC54LCBwb2ludC55XHJcbiAgICBAc3Ryb2tlKClcclxuXHJcbiAgICBuZXh0LmFuZ2xlID0gc2F2ZUF0QW5nbGUlKE1hdGguUEkqMilcclxuICAgIG5leHQuZGlyZWN0aW9uID0gIW8uZGlyZWN0aW9uO1xyXG5cclxuICAgIGRyYXcuc3BpcmFsLmNhbGwgQCwgLS1udW0sIG5leHQsZ2VuZXJhdG9yO1xyXG4gICAgcmV0dXJuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRyYXc7Il19
