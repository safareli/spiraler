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
    gap = 10;
    velocity = 2;
    for (i = _i = 0; _i < 300; i = ++_i) {
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
      circle.connect(this.circles);
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
var Circle, draw, drawGroup, generateGroup, vec;

vec = require('vec2d');

draw = require('./draw');

generateGroup = function(circle, nextCircle, group) {
  circle.friends;
  return group;
};

drawGroup = function(group) {
  var start;
  start = circle.friends[0].center.minus(circle.center).scale(-1);
  start.scale(circle.radius / (circle.friends[0].radius + circle.radius));
  return draw.spiral(ctx, {
    start: circle.center.plus(start),
    angle: start.angle() + Math.PI,
    direction: false,
    radius: circle.radius,
    circles: Math.random() * 5 + 3
  });
};

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
    var acurance, circle, count, currentDistance, distance, f, force, minDistance, _i, _len;
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
      acurance = 0.75;
      if (currentDistance >= minDistance - acurance) {
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

  Circle.prototype.connect = function(circles) {
    var acurance, circle, distance, hasPlaceForFreind, isAccelerated, isAtEdge, isInFriends, isStoped, minDistance, _i, _len;
    if (this.acceleration.length() > 0) {
      return;
    }
    for (_i = 0, _len = circles.length; _i < _len; _i++) {
      circle = circles[_i];
      if (circle === this) {
        continue;
      }
      if (this.friends.length === 2) {
        return;
      }
      distance = this.center.minus(circle.center).length();
      minDistance = circle.radius + this.radius;
      acurance = 0.75;
      isAtEdge = Math.abs(distance - minDistance) <= acurance;
      hasPlaceForFreind = circle.friends.length < 2;
      isAccelerated = circle.acceleration.length() > 0;
      isInFriends = this.friends.indexOf(circle) > -1;
      isStoped = circle.friends.length > 0 || !isAccelerated;
      if (isAtEdge && hasPlaceForFreind && isStoped && !isInFriends) {
        this.friends.push(circle);
        this.acceleration.scale(0);
        this.velocity.scale(0);
        circle.friends.push(this);
        circle.acceleration.scale(0);
        circle.velocity.scale(0);
      }
    }
  };

  Circle.prototype.separate = function(circles) {
    return this.applyForce(this.separateForce(circles));
  };

  Circle.prototype.edge = function(max) {
    return this.applyForce(this.edgeForce(max));
  };

  Circle.prototype.checkLoop = function(time) {
    if (this.friends.length > 0 || this.requests.length > 0) {
      return;
    }
    if (this.acceleration.length() === 0) {
      return this.accelerationTimeStart = false;
    } else {
      if (this.accelerationTimeStart === false) {
        this.accelerationTimeStart = time;
      }
      this.accelerationDuration = time - this.accelerationTimeStart;
      if (this.accelerationDuration > 3000 && this.radius > this.minRadius * 3) {
        this.radius -= 5;
      }
      if (this.accelerationDuration > 6000 && this.radius > this.minRadius) {
        this.radius -= 5;
      }
      if (this.accelerationDuration > 9000 && this.radius > this.minRadius * 0.5) {
        return this.radius -= 5;
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
  spiral: function(ctx, o) {
    var center, eAngle, increment, point, progress, sAngle, tempTheta, theta;
    sAngle = Math.PI + o.angle;
    eAngle = sAngle + Math.PI * 2 * o.circles;
    center = {
      x: o.start.x + Math.cos(o.angle) * o.radius,
      y: o.start.y + Math.sin(o.angle) * o.radius
    };
    draw.line(o.start, center, ctx, 'black');
    increment = 2 * Math.PI / 60;
    theta = sAngle;
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    while (theta <= eAngle + increment) {
      tempTheta = o.direction ? theta : -1 * (theta - 2 * o.angle);
      point = {
        x: center.x + o.radius * Math.cos(tempTheta) * progress,
        y: center.y + o.radius * Math.sin(tempTheta) * progress
      };
      progress = (theta - sAngle) / (eAngle - sAngle);
      theta += increment;
      ctx.lineTo(point.x, point.y);
    }
    ctx.stroke();
  }
};

module.exports = draw;



},{}]},{},["./src/js/app.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcaXJha2xpLnNhZmFyZWxpXFxEZXNrdG9wXFxzcGlyYWxlclxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGFwcC5jb2ZmZWUiLCJjOi9Vc2Vycy9pcmFrbGkuc2FmYXJlbGkvRGVza3RvcC9zcGlyYWxlci9ub2RlX21vZHVsZXMvZnJhbmltL2ZyYW5pbS5qcyIsImM6L1VzZXJzL2lyYWtsaS5zYWZhcmVsaS9EZXNrdG9wL3NwaXJhbGVyL25vZGVfbW9kdWxlcy9udW1iZXJlci9saWIvbnVtYmVyZXIuanMiLCJjOi9Vc2Vycy9pcmFrbGkuc2FmYXJlbGkvRGVza3RvcC9zcGlyYWxlci9ub2RlX21vZHVsZXMvdmVjMmQvaW5kZXguanMiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGNpcmNsZS5jb2ZmZWUiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGRyYXcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSx1QkFBQTs7QUFBQSxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FBSixDQUFBOztBQUFBLENBQ0EsR0FBSSxPQUFBLENBQVEsVUFBUixDQURKLENBQUE7O0FBQUEsSUFFQSxHQUFPLE9BQUEsQ0FBUSxRQUFSLENBRlAsQ0FBQTs7QUFBQSxNQUdBLEdBQVMsT0FBQSxDQUFRLFVBQVIsQ0FIVCxDQUFBOztBQUFBLEdBSUEsR0FBTSxPQUFBLENBQVEsT0FBUixDQUpOLENBQUE7O0FBQUEsQ0FNQSxDQUFFLFFBQUYsRUFDRTtBQUFBLEVBQUEsTUFBQSxFQUNFO0FBQUEsSUFBQSxRQUFBLEVBQVUsSUFBVjtH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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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U0FBVCxDQUFYLEdBQWtDLFFBQWhEO0FBQUEsUUFDQSxDQUFBLEVBQUcsTUFBTSxDQUFDLENBQVAsR0FBVyxDQUFDLENBQUMsTUFBRixHQUFXLElBQUksQ0FBQyxHQUFMLENBQVMsU0FBVCxDQUFYLEdBQWtDLFFBRGhEO09BRkYsQ0FBQTtBQUFBLE1BSUEsUUFBQSxHQUFXLENBQUMsS0FBQSxHQUFRLE1BQVQsQ0FBQSxHQUFpQixDQUFDLE1BQUEsR0FBUyxNQUFWLENBSjVCLENBQUE7QUFBQSxNQUtBLEtBQUEsSUFBUyxTQUxULENBQUE7QUFBQSxNQU1BLEdBQUcsQ0FBQyxNQUFKLENBQVcsS0FBSyxDQUFDLENBQWpCLEVBQW9CLEtBQUssQ0FBQyxDQUExQixDQU5BLENBREY7SUFBQSxDQWRBO0FBQUEsSUFzQkEsR0FBRyxDQUFDLE1BQUosQ0FBQSxDQXRCQSxDQURNO0VBQUEsQ0FYUjtDQURGLENBQUE7O0FBQUEsTUFzQ00sQ0FBQyxPQUFQLEdBQWlCLElBdENqQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImYgPSByZXF1aXJlICdmcmFuaW0nXHJcbm4gPSByZXF1aXJlICdudW1iZXJlcidcclxuZHJhdyA9IHJlcXVpcmUgJy4vZHJhdydcclxuQ2lyY2xlID0gcmVxdWlyZSAnLi9jaXJjbGUnXHJcbnZlYyA9IHJlcXVpcmUgJ3ZlYzJkJ1xyXG5cclxuZiBcImNhbnZhc1wiLFxyXG4gIGNvbmZpZzpcclxuICAgIGZ1bGxTaXplOiB0cnVlXHJcblxyXG4gIGNsZWFyOiAoY3R4KSAtPlxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDIzNCwgMjQ0LCAyNTApXCJcclxuICAgIGN0eC5maWxsUmVjdCAwLCAwLCBAd2lkdGguZ2V0KCksIEBoZWlnaHQuZ2V0KClcclxuXHJcbiAgc2V0dXA6IChjdHgpIC0+XHJcbiAgICBAd2lkdGggPSBuZXcgbiBAYW5pbS5nZXRXaWR0aFxyXG4gICAgQGhlaWdodCA9IG5ldyBuIEBhbmltLmdldEhlaWdodFxyXG4gICAgQGNsZWFyKGN0eClcclxuICAgIEBjaXJjbGVzID0gW11cclxuICAgIGdhcCA9IDEwXHJcbiAgICB2ZWxvY2l0eSA9IDJcclxuICAgIGZvciBpIGluIFswLi4uMzAwXVxyXG4gICAgICBAY2lyY2xlcy5wdXNoXHJcbiAgICAgICAgY2VudGVyOlxyXG4gICAgICAgICAgeDogTWF0aC5yYW5kb20oKSAqIChAd2lkdGguZ2V0KCkgLSBnYXAqMikgKyBnYXBcclxuICAgICAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiAoQGhlaWdodC5nZXQoKSAtIGdhcCoyKSArIGdhcFxyXG4gICAgICAgIHZlbG9jaXR5OlxyXG4gICAgICAgICAgeDogTWF0aC5yYW5kb20oKSAqIHZlbG9jaXR5LzIgLSB2ZWxvY2l0eVxyXG4gICAgICAgICAgeTogTWF0aC5yYW5kb20oKSAqIHZlbG9jaXR5LzIgLSB2ZWxvY2l0eVxyXG4gICAgICAgIHJhZGl1czogTWF0aC5yYW5kb20oKSAqIDI1ICsgMTVcclxuICAgIGNvbnNvbGUubG9nIEpTT04uc3RyaW5naWZ5KEBjaXJjbGVzKVxyXG4gICAgIyBAY2lyY2xlcyA9IFt7XCJjZW50ZXJcIjp7XCJ4XCI6MTc2LjU1ODc5ODg4MjE3ODk2LFwieVwiOjEzNy4yMDkwNzU4NTY5NTM4Nn0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi40MzAyNDczODA4NjM4NzUsXCJ5XCI6LTMuODE2MjEyMzkxOTQ2NDY0OH0sXCJyYWRpdXNcIjoyMi40MDIwNTg0NDYzMTQxODZ9LHtcImNlbnRlclwiOntcInhcIjoxMjEuMjA0MDY0NzQ5MTgxMjcsXCJ5XCI6NzIuODIwNTEzMTYxODMwNn0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMy45NjgwMTkyNTc3NjUyNjMzLFwieVwiOi0yLjAyMjc4NjE2OTc3ODU1NTZ9LFwicmFkaXVzXCI6MzMuMDc1NTk1MjMxNDkzOTM1fSx7XCJjZW50ZXJcIjp7XCJ4XCI6NjQuMzE3MDE2NDg5ODAzNzksXCJ5XCI6NjEuMjg5Njc0MjgzMDA1M30sXCJ2ZWxvY2l0eVwiOntcInhcIjotMy41ODI3MjYxMTMwMzI1NDk2LFwieVwiOi0zLjIyMzUxNzE2NzM4MTk0MjN9LFwicmFkaXVzXCI6MTkuMzM2NDEzNzEyMDA3OTI1fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MTU5Ljc3NzQ3MTQwNDUyMjY2LFwieVwiOjE0MS45MTkwMzYzMjU1MzI5NH0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi42MDI2NjMxNzM4MDU5MjIzLFwieVwiOi0yLjUwMDk1NTg2MTA2MTgxMTR9LFwicmFkaXVzXCI6MTUuNTYwODU2ODQzMzY3MjE5fSx7XCJjZW50ZXJcIjp7XCJ4XCI6NjcuNjExODIyNTMyNDg5OSxcInlcIjoxMjUuOTE2MTA5Njc1MDc1ODZ9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTIuMjAyNjk0MTMwMTMwMTEyLFwieVwiOi0zLjQ5NjY3NDc3MjM1MTk4fSxcInJhZGl1c1wiOjMwLjMzODY5ODY2Mzk4MTYzfSx7XCJjZW50ZXJcIjp7XCJ4XCI6MTE1LjY1ODQ5MzUzNTU5MzE1LFwieVwiOjEyMi44MDExMTQ1OTkyMjA0NX0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi4xMTAzNjg2MzM2NDI3OTI3LFwieVwiOi0yLjYyODc3ODI0NTMwMDA1NDZ9LFwicmFkaXVzXCI6MjQuNDE5MzE0MDU2ODY3NzM0fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MjUwLjE0MjYyODQxMDgzMTEsXCJ5XCI6MTExLjgxMzAxMTYwMDYzNTk1fSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjQyNzk5MzQxNDQ1Nzg4NzQsXCJ5XCI6LTIuNjgzODY4ODcwNjA0NzgzM30sXCJyYWRpdXNcIjozNC40MTUzMzQ3OTI1NzQ4N30se1wiY2VudGVyXCI6e1wieFwiOjk0LjUwMDE1OTk5Mzc2Nzc0LFwieVwiOjgyLjM4NjQwNTMzMDE1MTMyfSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjEwNzE4NjQyNDA4MDI4MjQsXCJ5XCI6LTIuODQ2MDIzOTA0NjI1MzI2NH0sXCJyYWRpdXNcIjoyNS43NTU1MDIyMjg4NTc5NX0se1wiY2VudGVyXCI6e1wieFwiOjEyMC41Mjc0NDAxNDY1NDMwOSxcInlcIjoxNDguNjA4NjQ0Mjc0MDYzNH0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi4yNzEyNjEwMTU5MDY5MyxcInlcIjotMi40MTE3MDE4MDQ5NTgyODR9LFwicmFkaXVzXCI6MzAuNzEwMjk5MjA1OTY2Mjk0fSx7XCJjZW50ZXJcIjp7XCJ4XCI6NTUuMzExMjAzMzUyMTc1NjUsXCJ5XCI6NzkuMTAzNDUwNzA0MzY1OTd9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTIuMjMxMzYyNDU5NzE1NDU1OCxcInlcIjotMy45MzE4MTY3NDI3NTU0NzI3fSxcInJhZGl1c1wiOjE4LjQ3NjQ1NTg3NzUzNTA0NX0se1wiY2VudGVyXCI6e1wieFwiOjI1NC44ODIxNTQzMTEwNTM0NSxcInlcIjo3Mi45MDk3MzgwMjcwMjUwMX0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi45NTg1NTkxNTAzNDE4OTgsXCJ5XCI6LTIuMTUxNTM4NTU1NTEwMzQyfSxcInJhZGl1c1wiOjI3LjY0ODExOTM5MzI3MDQ2M30se1wiY2VudGVyXCI6e1wieFwiOjI1Ny4wOTYzOTI3NDk4MDg3MyxcInlcIjo4Ni4yNjk1NDI2NDY1OTQzNX0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi43ODI5MDQzOTU4MzM2MTE1LFwieVwiOi0yLjI2MTA1Nzc4MTA1NTU2OTZ9LFwicmFkaXVzXCI6MzUuNzkwMjM0MDM5MzA0Nzh9LHtcImNlbnRlclwiOntcInhcIjo4MS4zMjY2NTgwMTc5MzMzNyxcInlcIjoxNDkuMzQ5MTEyNzAyNTMzNn0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMy41MjU2MTI1NDk4NTYzMDUsXCJ5XCI6LTMuNDAxNDA1NDA2NjUwMTU2fSxcInJhZGl1c1wiOjM3LjkyOTY1ODgxNjQyODg1NX0se1wiY2VudGVyXCI6e1wieFwiOjE4OC4wNjY3ODE0Nzk4NjUzLFwieVwiOjEyNi42NTIxMjIwMjIxMTg0Mn0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi4xNjc2NDQ2Mzc2MzY4NDAzLFwieVwiOi0zLjMxMzIzNDcwNjQwOTI3NTV9LFwicmFkaXVzXCI6MzAuNzE1MzU2NzM1NzQ1NDQ1fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MTY1LjA5ODc5Mzc1ODA3OTQsXCJ5XCI6MTQ4LjU2NzAzNjUwMTU5NzZ9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTIuNjU3MTM0MjM1MzcwOTA0LFwieVwiOi0zLjMwOTQ5ODE1OTY4MDUxNTV9LFwicmFkaXVzXCI6MzYuMzkyODA0NTk5NTk5OTF9LHtcImNlbnRlclwiOntcInhcIjoxMDYuOTk3ODk3MTQwNjgxNzQsXCJ5XCI6OTEuMjExMTE0MTYzMDQ0ODR9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTMuNTQ5NjI1NDQ0MjI1OTY3LFwieVwiOi0yLjU3NjAwMjkxMzA2MTUyOTR9LFwicmFkaXVzXCI6MjEuNTYzOTU2MjI2NDU1MDQ4fSx7XCJjZW50ZXJcIjp7XCJ4XCI6MjUyLjUyMzYxMzIxMzU2MTQ4LFwieVwiOjc1LjE2NDE4NTU3ODAwMzUzfSxcInZlbG9jaXR5XCI6e1wieFwiOi0zLjYwMzY0NTgwMzg3MjQ5NixcInlcIjotMy42OTY4NTgxMjE1NDc4NDh9LFwicmFkaXVzXCI6MzAuMzE0NTUwMTY4MTEzNzgzfSx7XCJjZW50ZXJcIjp7XCJ4XCI6MjA1LjAyMDkyMDQwMTQzOTA3LFwieVwiOjE1My42MTM2ODc1NDM2NjQxM30sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi42OTUwOTE0NjI2OTQxMDg1LFwieVwiOi0yLjk5NjY3MzkwODU1MDI5MjN9LFwicmFkaXVzXCI6MzQuODcyNjQ5MzE2Njc1OTZ9LHtcImNlbnRlclwiOntcInhcIjo5MS43MjEyNDUyNzg2MDQzMyxcInlcIjo5Ny4xMTQzMTkzOTk0NjQ4OH0sXCJ2ZWxvY2l0eVwiOntcInhcIjotMi4xNzQyNDEwODM2NzQxMzMsXCJ5XCI6LTMuOTIwNTM3MjIzMTA4MTEzfSxcInJhZGl1c1wiOjE1LjgyNTY3MTI5ODY2MjJ9LHtcImNlbnRlclwiOntcInhcIjoxMzQuODk3MDE4NDQyODYxNzQsXCJ5XCI6OTkuMjMxMDg1NzIyODAwMzR9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTIuNjYxNjE4NTIzNzY1MzU1MyxcInlcIjotMy41NDMyNTEzNDY3OTY3NTF9LFwicmFkaXVzXCI6MTYuNjA5MTI4NDQwMDMxNzgyfSx7XCJjZW50ZXJcIjp7XCJ4XCI6ODEuMzkyNDExMjY4MzE2MjEsXCJ5XCI6ODEuNzc4NzQyMjQwMjc2MTl9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTMuODE1OTcyMjM1OTg1MTAwMyxcInlcIjotMy4yMTcxNjIxMjAxNTU5OX0sXCJyYWRpdXNcIjoyNS4zNzc5MTE3NjM0OTg1Nn0se1wiY2VudGVyXCI6e1wieFwiOjE2Mi42NDk0NDg5Mjg0MjMyMyxcInlcIjoxMTQuNDIyNTI0NTE0NjA4MDl9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTIuNjA2MzcwNzQ3MDg5Mzg2LFwieVwiOi0yLjEyMDk4Mjk2MzU5MTgxNH0sXCJyYWRpdXNcIjozMS40NDI4NDI5NTYxNjY3MTR9LHtcImNlbnRlclwiOntcInhcIjoxMzkuNDIzNjI3MjM0MDY0MDQsXCJ5XCI6MTAyLjI3NTUxMDU0NTM1NDM0fSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjU5OTUxMDMwMjc2NzE1NzYsXCJ5XCI6LTIuNzE0MTY3MzY3MjAxMjk4NX0sXCJyYWRpdXNcIjoxOC45ODYxMjY0MDU2NTI2MTJ9LHtcImNlbnRlclwiOntcInhcIjoxODQuMTM0ODIxMjg2NDI1LFwieVwiOjUwLjk2ODc2MTE5NDQ5NzM1fSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjE4NjY1ODAxNjg3MTY2MSxcInlcIjotMy4xMjU5NDQyMzIxMDI0ODM1fSxcInJhZGl1c1wiOjE2LjE2ODk2OTIwOTUzODc3M30se1wiY2VudGVyXCI6e1wieFwiOjE0Ni4zOTEwNzA3NTk4NTUyLFwieVwiOjY3LjA4MDUwOTIxMTQwMjM5fSxcInZlbG9jaXR5XCI6e1wieFwiOi0yLjk5NTkwNDk2NzY1NDQ5NjQsXCJ5XCI6LTIuMTg1MzYwMTA5NDMzNTMxOH0sXCJyYWRpdXNcIjoyOS4wOTc1NzUzODM0OTM2Nzd9LHtcImNlbnRlclwiOntcInhcIjo5MS40NTg3MDU3Mjg4NzM2MSxcInlcIjoxMTYuOTcxNjUxNzQyNzAwNDl9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTMuOTM0MDMxNDc5NTI2MzExLFwieVwiOi0yLjU3MDk2OTcxMjQ1NDgyNTZ9LFwicmFkaXVzXCI6MjAuMzcyNjQ4NzU2MDE5Nzd9LHtcImNlbnRlclwiOntcInhcIjo4My45NTg4Mzg1MzA4MTYxNCxcInlcIjoxMTguMDU0MzM0MTg4ODExNDh9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTIuODg2NzQzNzIwNjIwODcwNixcInlcIjotMy4yMTEzMzczMzQwMTA3NX0sXCJyYWRpdXNcIjoyOC4wMjk5MDE1NTUyNzM2ODJ9LHtcImNlbnRlclwiOntcInhcIjoyNDcuMTgwMTM4MzU2MDUyMzQsXCJ5XCI6MTI0LjI4MTQyNDkyODQ1NjU0fSxcInZlbG9jaXR5XCI6e1wieFwiOi0zLjUyOTM0MjA5Mzk3MDYyNjYsXCJ5XCI6LTMuNTY2MzEzNTk1NTExMDE5Mn0sXCJyYWRpdXNcIjoyNS43ODQ4OTYxMjU1NTEzMTN9LHtcImNlbnRlclwiOntcInhcIjoyMDEuNzEzMjQyNjk4NDYwODIsXCJ5XCI6NTAuNzA0OTU0NzUyMjMyODh9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTMuMDM4Njc5MDI3OTI5OTAyLFwieVwiOi0yLjA5MzU3ODU1NzAxODE5MDZ9LFwicmFkaXVzXCI6MzkuNTMxMzE4NzE4ODAwMzJ9LHtcImNlbnRlclwiOntcInhcIjoxODAuMDc3MjM1NTc3NjI4MDIsXCJ5XCI6NjQuODY0MzAxOTg4Mzg5MzR9LFwidmVsb2NpdHlcIjp7XCJ4XCI6LTIuODg3ODcxMjkyNDE5NzMxNixcInlcIjotMi4xMjQxMTcxODMwMzMzNzd9LFwicmFkaXVzXCI6MzcuNDkwMjI0NjcyOTQ3MDh9XSBcclxuICAgIEBjaXJjbGVzID0gQGNpcmNsZXMubWFwIChjaXJjbGUpLT5cclxuICAgICAgbmV3IENpcmNsZSBjaXJjbGVcclxuICAgIHJldHVyblxyXG5cclxuICB1cGRhdGU6ICh0aW1lKSAtPlxyXG4gICAgZm9yIGNpcmNsZSBpbiBAY2lyY2xlc1xyXG4gICAgICBjaXJjbGUuZWRnZSh2ZWMoQHdpZHRoLmdldCgpLEBoZWlnaHQuZ2V0KCkpKVxyXG4gICAgICBjaXJjbGUuc2VwYXJhdGUoQGNpcmNsZXMpXHJcbiAgICBmb3IgY2lyY2xlIGluIEBjaXJjbGVzXHJcbiAgICAgIGNpcmNsZS5jb25uZWN0KEBjaXJjbGVzKVxyXG4gICAgXHJcbiAgICBmb3IgY2lyY2xlIGluIEBjaXJjbGVzXHJcbiAgICAgIGNpcmNsZS5jaGVja0xvb3AodGltZSlcclxuICAgICAgY2lyY2xlLnVwZGF0ZSh0aW1lKVxyXG4gIGRyYXc6IChjdHgpIC0+XHJcbiAgICBAY2xlYXIoY3R4KVxyXG4gICAgZm9yIGNpcmNsZSBpbiBAY2lyY2xlc1xyXG4gICAgICBjaXJjbGUuZHJhdyhjdHgpXHJcbiAgICAjIEBhbmltLnBhdXNlKCk7XHJcbiAgICByZXR1cm4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZyYW5pbShjYW52YXNlSWQsIGNvbnRleHQpIHtcbiAgICB2YXIgd2lkdGggID0gIHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNlSWQpLFxuICAgICAgICBpc1J1bm5pbmcgPSB0cnVlLFxuICAgICAgICByZXF1ZXN0SWQsXG4gICAgICAgIGN0eCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGRvbUVsZW1lbnQud2lkdGggPSB3aWR0aDtcbiAgICBkb21FbGVtZW50LmhlaWdodCA9IGhlaWdodDtcblxuICAgIGZ1bmN0aW9uIHJlY2FsY3VsYXRlKCkge1xuICAgICAgICBpZiAod2lkdGggICE9PSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBoZWlnaHQgIT09IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgZG9tRWxlbWVudC53aWR0aCAgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGRvbUVsZW1lbnQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggID0gZG9tRWxlbWVudC53aWR0aDtcbiAgICAgICAgICAgIGhlaWdodCA9IGRvbUVsZW1lbnQuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0aW9uQ2FsbGJhY2sodGltZSkge1xuICAgICAgICBpZiAoY29udGV4dC5jb25maWcgJiYgY29udGV4dC5jb25maWcuZnVsbFNpemUpIHtcbiAgICAgICAgICAgIHJlY2FsY3VsYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQudXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb250ZXh0LnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhdyhjdHgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3KGN0eCwgdGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNSdW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJZCk7XG4gICAgICAgICAgICByZXF1ZXN0SWQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25DYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmFuaW0gPSB7XG4gICAgICAgIGdldEhlaWdodDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIChjb250ZXh0LmNvbmZpZyAmJiBjb250ZXh0LmNvbmZpZy5mdWxsU2l6ZSkgPyBoZWlnaHQgOiBkb21FbGVtZW50LmhlaWdodDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0V2lkdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoY29udGV4dC5jb25maWcgJiYgY29udGV4dC5jb25maWcuZnVsbFNpemUpID8gd2lkdGggOiBkb21FbGVtZW50LndpZHRoO1xuICAgICAgICB9LFxuICAgICAgICByZXN1bWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlcXVlc3RJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uQ2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmICh0eXBlb2YgY29udGV4dC5zZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb250ZXh0LnNldHVwKGN0eCk7XG4gICAgfVxuICAgIHJlcXVlc3RJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uQ2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmcmFuaW07XG59IiwiLypcbiAqIG51bWJlcmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc2FmYXJlbGkvbnVtYmVyZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgSXJha2xpIFNhZmFyZWxpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWF0aCA9IGZ1bmN0aW9uKG9wZXJhdGlvbiwgYXJncyl7XG4gICAgcmV0dXJuIG5ldyBOdW1iZXJlcihmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24ocCwgYyl7XG4gICAgICAgICAgICB2YXIgYSA9IChwICYmIHAuZ2V0KSA/IHAuZ2V0KCkgOiBwO1xuICAgICAgICAgICAgdmFyIGIgPSAoYyAmJiBjLmdldCkgPyBjLmdldCgpIDogYztcbiAgICAgICAgICAgIHN3aXRjaChvcGVyYXRpb24pe1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BsdXMnOiByZXR1cm4gYSArIGI7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWludXMnOiByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGl2JzogcmV0dXJuIGEgLyBiO1xuICAgICAgICAgICAgICAgIGNhc2UgJ211bHQnOiByZXR1cm4gYSAqIGI7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW9kJzogcmV0dXJuIGEgJSBiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBUeXBlRXJyb3IoJ3Vua25vd24gb3BlcmF0aW9uICcrb3BlcmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBOdW1iZXJlcih2YWx1ZSl7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsdWU7XG59XG5cbk51bWJlcmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbigpe1xuICAgIHZhciB2ID0gdGhpcy5fX3ZhbHVlO1xuICAgIGlmKHR5cGVvZiB2ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB2KCk7XG4gICAgZWxzZSByZXR1cm4gdjtcbn07XG5cbk51bWJlcmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuTnVtYmVyZXIucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gbmV3IE51bWJlcmVyKHRoaXMuX192YWx1ZSk7XG59O1xuXG5bJ3BsdXMnLCAnbWludXMnLCAnZGl2JywgJ211bHQnLCAnbW9kJ10uZm9yRWFjaChmdW5jdGlvbihuYW1lKXtcbiAgICBOdW1iZXJlci5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIGFyZ3MudW5zaGlmdCh0aGlzLmNsb25lKCkpO1xuICAgICAgICB0aGlzLl9fdmFsdWUgPSAobWF0aChuYW1lLCBhcmdzKSkuX192YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIE51bWJlcmVyW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBtYXRoKG5hbWUsW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyZXI7IiwibW9kdWxlLmV4cG9ydHMgPSB2O1xudi5WZWMyZCA9IFZlYzJkO1xudi51bml0ID0gdW5pdEZyb21BbmdsZTtcblZlYzJkLnVuaXQgPSB1bml0RnJvbUFuZ2xlO1xuXG52YXIgcmUgPSAvXFwoKC0/Wy5cXGRdKyksICgtP1suXFxkXSspXFwpLztcblxuZnVuY3Rpb24gVmVjMmQoeCwgeSkge1xuICB0aGlzLnggPSB4O1xuICB0aGlzLnkgPSB5O1xufVxuXG5mdW5jdGlvbiB1bml0RnJvbUFuZ2xlKGFuZ2xlKSB7XG4gIHJldHVybiBuZXcgVmVjMmQoTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSkpO1xufVxuXG5mdW5jdGlvbiB2KHhPclBhaXIsIHkpIHtcbiAgaWYgKHhPclBhaXIgPT0gbnVsbCkge1xuICAgIHJldHVybiBuZXcgVmVjMmQoMCwgMCwgMCk7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh4T3JQYWlyKSkge1xuICAgIHJldHVybiBuZXcgVmVjMmQocGFyc2VGbG9hdCh4T3JQYWlyWzBdLCAxMCksIHBhcnNlRmxvYXQoeE9yUGFpclsxXSwgMTApKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgeE9yUGFpciA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbmV3IFZlYzJkKHBhcnNlRmxvYXQoeE9yUGFpci54LCAxMCksIHBhcnNlRmxvYXQoeE9yUGFpci55LCAxMCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB4T3JQYWlyID09PSAnc3RyaW5nJyAmJiB5ID09IG51bGwpIHtcbiAgICB2YXIgbWF0Y2ggPSB4T3JQYWlyLm1hdGNoKHJlKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBuZXcgVmVjMmQocGFyc2VGbG9hdChtYXRjaFsxXSwgMTApLCBwYXJzZUZsb2F0KG1hdGNoWzJdLCAxMCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWZWMyZDogY2Fubm90IHBhcnNlOiBcIiArIHhPclBhaXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IFZlYzJkKHBhcnNlRmxvYXQoeE9yUGFpciwgMTApLCBwYXJzZUZsb2F0KHksIDEwKSk7XG4gIH1cbn1cblxuVmVjMmQucHJvdG90eXBlLm9mZnNldCA9IGZ1bmN0aW9uKGR4LCBkeSkge1xuICByZXR1cm4gbmV3IFZlYzJkKHRoaXMueCArIGR4LCB0aGlzLnkgKyBkeSk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgdGhpcy54ICs9IG90aGVyLng7XG4gIHRoaXMueSArPSBvdGhlci55O1xuICByZXR1cm4gdGhpcztcbn07XG5cblZlYzJkLnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbihvdGhlcikge1xuICB0aGlzLnggLT0gb3RoZXIueDtcbiAgdGhpcy55IC09IG90aGVyLnk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLnBsdXMgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gdGhpcy5jbG9uZSgpLmFkZChvdGhlcik7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUubWludXMgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gdGhpcy5jbG9uZSgpLnN1YihvdGhlcik7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUubmVnID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMueCA9IC10aGlzLng7XG4gIHRoaXMueSA9IC10aGlzLnk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLm11bHQgPSBmdW5jdGlvbihvdGhlcikge1xuICB0aGlzLnggKj0gb3RoZXIueDtcbiAgdGhpcy55ICo9IG90aGVyLnk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLnRpbWVzID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgcmV0dXJuIHRoaXMuY2xvbmUoKS5tdWx0KG90aGVyKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5kaXYgPSBmdW5jdGlvbihvdGhlcikge1xuICB0aGlzLnggLz0gb3RoZXIueDtcbiAgdGhpcy55IC89IG90aGVyLnk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmRpdkJ5ID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgcmV0dXJuIHRoaXMuY2xvbmUoKS5kaXYob3RoZXIpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLnNjYWxlID0gZnVuY3Rpb24oc2NhbGFyKSB7XG4gIHRoaXMueCAqPSBzY2FsYXI7XG4gIHRoaXMueSAqPSBzY2FsYXI7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLnNjYWxlZCA9IGZ1bmN0aW9uKHNjYWxhcikge1xuICByZXR1cm4gdGhpcy5jbG9uZSgpLnNjYWxlKHNjYWxhcik7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBWZWMyZCh0aGlzLngsIHRoaXMueSk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbihmdW5jKSB7XG4gIHRoaXMueCA9IGZ1bmModGhpcy54KTtcbiAgdGhpcy55ID0gZnVuYyh0aGlzLnkpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblZlYzJkLnByb3RvdHlwZS5hcHBsaWVkID0gZnVuY3Rpb24oZnVuYykge1xuICByZXR1cm4gdGhpcy5jbG9uZSgpLmFwcGx5KGZ1bmMpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmRpc3RhbmNlU3FyZCA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHZhciBkeCA9IG90aGVyLnggLSB0aGlzLng7XG4gIHZhciBkeSA9IG90aGVyLnkgLSB0aGlzLnk7XG4gIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5kaXN0YW5jZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVNxcmQob3RoZXIpKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gdGhpcy54ID09PSBvdGhlci54ICYmIHRoaXMueSA9PT0gb3RoZXIueTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gXCIoXCIgKyB0aGlzLnggKyBcIiwgXCIgKyB0aGlzLnkgKyBcIilcIjtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5sZW5ndGhTcXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLnNxcnQodGhpcy5sZW5ndGhTcXJkKCkpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmFuZ2xlID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmxlbmd0aFNxcmQoKSA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgfVxufTtcblxuVmVjMmQucHJvdG90eXBlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLnNjYWxlKDEgLyBsZW5ndGgpO1xuICB9XG59O1xuXG5WZWMyZC5wcm90b3R5cGUubm9ybWFsaXplZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmJvdW5kTWluID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKHRoaXMueCA8IG90aGVyLngpIHRoaXMueCA9IG90aGVyLng7XG4gIGlmICh0aGlzLnkgPCBvdGhlci55KSB0aGlzLnkgPSBvdGhlci55O1xuICByZXR1cm4gdGhpcztcbn07XG5cblZlYzJkLnByb3RvdHlwZS5ib3VuZE1heCA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICh0aGlzLnggPiBvdGhlci54KSB0aGlzLnggPSBvdGhlci54O1xuICBpZiAodGhpcy55ID4gb3RoZXIueSkgdGhpcy55ID0gb3RoZXIueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuZmxvb3IgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYXBwbHkoTWF0aC5mbG9vcik7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuZmxvb3JlZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hcHBsaWVkKE1hdGguZmxvb3IpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmNlaWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYXBwbHkoTWF0aC5jZWlsKTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5jZWlsZWQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYXBwbGllZChNYXRoLmNlaWwpO1xufTtcblxuVmVjMmQucHJvdG90eXBlLnByb2plY3QgPSBmdW5jdGlvbihvdGhlcikge1xuICB0aGlzLnNjYWxlKHRoaXMuZG90KG90aGVyKSAvIG90aGVyLmxlbmd0aFNxcmQoKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVmVjMmQucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiB0aGlzLnggKiBvdGhlci54ICsgdGhpcy55ICogb3RoZXIueTtcbn07XG5cblZlYzJkLnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgdmFyIG5ld1ggPSB0aGlzLnggKiBkaXJlY3Rpb24ueCAtIHRoaXMueSAqIGRpcmVjdGlvbi55O1xuICB0aGlzLnkgPSB0aGlzLnggKiBkaXJlY3Rpb24ueSArIHRoaXMueSAqIGRpcmVjdGlvbi54O1xuICB0aGlzLnggPSBuZXdYO1xuICByZXR1cm4gdGhpcztcbn07XG5cblZlYzJkLnByb3RvdHlwZS5yb3RhdGVkID0gZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gIHJldHVybiB0aGlzLmNsb25lKCkucm90YXRlKGRpcmVjdGlvbik7XG59O1xuXG4vLyByZWZsZWN0IGFib3V0IGF4aXMgb3JpZ2luYXRpbmcgZnJvbSBvcmlnaW5cblZlYzJkLnByb3RvdHlwZS5yZWZsZWN0ID0gZnVuY3Rpb24oYXhpcykge1xuICByZXR1cm4gdGhpcy5yZWZsZWN0QWJvdXRMaW5lKG5ldyBWZWMyZCgwLCAwKSwgYXhpcyk7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUucmVmbGVjdEFib3V0TGluZSA9IGZ1bmN0aW9uKGxpbmVQdDEsIGxpbmVQdDIpIHtcbiAgdmFyIG5vcm1hbCA9IG5ldyBWZWMyZChcbiAgICAgIGxpbmVQdDIueCAtIGxpbmVQdDEueCxcbiAgICAgIGxpbmVQdDIueSAtIGxpbmVQdDEueCk7XG4gIHZhciB0ZW1wID0gbm9ybWFsLng7XG4gIG5vcm1hbC54ID0gLW5vcm1hbC55O1xuICBub3JtYWwueSA9IHRlbXA7XG4gIG5vcm1hbC5ub3JtYWxpemUoKTtcbiAgdmFyIGRvdDIgPSAyICogdGhpcy5kb3Qobm9ybWFsKTtcbiAgdGhpcy54IC09IGRvdDIgKiBub3JtYWwueDtcbiAgdGhpcy55IC09IGRvdDIgKiBub3JtYWwueTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5WZWMyZC5wcm90b3R5cGUuc2V0ID0gVmVjMmQ7XG4iLCJ2ZWMgPSByZXF1aXJlICd2ZWMyZCdcclxuZHJhdyA9IHJlcXVpcmUgJy4vZHJhdydcclxuZ2VuZXJhdGVHcm91cCA9IChjaXJjbGUsbmV4dENpcmNsZSxncm91cCktPlxyXG4gIGNpcmNsZS5mcmllbmRzXHJcblxyXG4gIHJldHVybiBncm91cFxyXG5kcmF3R3JvdXAgPSAoZ3JvdXApLT5cclxuICBzdGFydCA9IGNpcmNsZS5mcmllbmRzWzBdLmNlbnRlci5taW51cyhjaXJjbGUuY2VudGVyKS5zY2FsZSgtMSlcclxuICBzdGFydC5zY2FsZShjaXJjbGUucmFkaXVzIC8gKGNpcmNsZS5mcmllbmRzWzBdLnJhZGl1cyArIGNpcmNsZS5yYWRpdXMpKVxyXG4gIGRyYXcuc3BpcmFsIGN0eCwgXHJcbiAgICBzdGFydDogY2lyY2xlLmNlbnRlci5wbHVzIHN0YXJ0XHJcbiAgICBhbmdsZTogc3RhcnQuYW5nbGUoKSArIE1hdGguUElcclxuICAgIGRpcmVjdGlvbjogZmFsc2VcclxuICAgIHJhZGl1czogY2lyY2xlLnJhZGl1c1xyXG4gICAgY2lyY2xlczogTWF0aC5yYW5kb20oKSo1ICsgM1xyXG5cclxuY2xhc3MgQ2lyY2xlXHJcbiAgY29uc3RydWN0b3I6IChvYmopIC0+XHJcbiAgICBAY2VudGVyID0gdmVjIG9iai5jZW50ZXIueCwgb2JqLmNlbnRlci55XHJcbiAgICBAYWNjZWxlcmF0aW9uID0gdmVjIDAsIDBcclxuICAgIEB2ZWxvY2l0eSA9IHZlYyBvYmoudmVsb2NpdHkueCwgb2JqLnZlbG9jaXR5LnlcclxuXHJcbiAgICBAcmFkaXVzID0gb2JqLnJhZGl1c1xyXG4gICAgQG1pblJhZGl1cyA9IEByYWRpdXMqMC4yXHJcbiAgICBAbWluUmFkaXVzID0gMTAgaWYgQG1pblJhZGl1cyA8IDEwXHJcbiAgICBcclxuICAgIEBtYXNzID0gMSAjIEByYWRpdXMgKiBAcmFkaXVzICogMiAqTWF0aC5QSVxyXG4gICAgQGRyYXdRdWVlID0gW11cclxuICAgIEBhY2NlbGVyYXRpb25EdXJhdGlvbiA9IDBcclxuICAgIEBhY2NlbGVyYXRpb25UaW1lU3RhcnQgPSAwXHJcbiAgICBAZnJpZW5kcyA9IFtdXHJcbiAgICBAcmVxdWVzdHMgPSBbXVxyXG5cclxuXHJcbiAgYXBwbHlGb3JjZTogKGZvcmNlKSAtPlxyXG4gICAgQGFjY2VsZXJhdGlvbi5hZGQoZm9yY2Uuc2NhbGVkKDEvQG1hc3MpKVxyXG4gIFxyXG4gIHN0b3A6IC0+XHJcbiAgICBAYWNjZWxlcmF0aW9uLnNjYWxlKDApXHJcbiAgICBAdmVsb2NpdHkuc2NhbGUoMClcclxuXHJcbiAgZWRnZUZvcmNlOiAobWF4KSAtPlxyXG4gICAgbm9ybWFsID0gdmVjIDAsIDBcclxuICAgIGlmIEBjZW50ZXIueCA8IEByYWRpdXMgXHJcbiAgICAgIG5vcm1hbC54ID0gMVxyXG4gICAgZWxzZSBpZiBAY2VudGVyLnggPiBtYXgueCAtIEByYWRpdXNcclxuICAgICAgbm9ybWFsLnggPSAtMVxyXG4gICAgZWxzZSBpZiBAY2VudGVyLnkgPCBAcmFkaXVzIFxyXG4gICAgICBub3JtYWwueSA9IDFcclxuICAgIGVsc2UgaWYgQGNlbnRlci55ID4gbWF4LnkgLSBAcmFkaXVzXHJcbiAgICAgIG5vcm1hbC55ID0gLTFcclxuICAgIHNhbWVEaXJlY3Rpb25YID0gKEB2ZWxvY2l0eS54ID4gMCBhbmQgbm9ybWFsLnggPiAwKSBvciAoQHZlbG9jaXR5LnggPCAwIGFuZCBub3JtYWwueCA8IDApXHJcbiAgICBzYW1lRGlyZWN0aW9uWSA9IChAdmVsb2NpdHkueSA+IDAgYW5kIG5vcm1hbC55ID4gMCkgb3IgKEB2ZWxvY2l0eS55IDwgMCBhbmQgbm9ybWFsLnkgPCAwKSBcclxuICAgIHNhbWVEaXJlY3Rpb24gPSBzYW1lRGlyZWN0aW9uWCBvciBzYW1lRGlyZWN0aW9uWVxyXG4gICAgaWYgbm9ybWFsLmxlbmd0aCgpID4gMCBhbmQgIXNhbWVEaXJlY3Rpb25cclxuICAgICAgbm9ybWFsLnNjYWxlKEB2ZWxvY2l0eS5zY2FsZWQoLTIpLmRvdChub3JtYWwpKVxyXG4gICAgcmV0dXJuIG5vcm1hbFxyXG5cclxuICBzZXBhcmF0ZUZvcmNlOiAoY2lyY2xlcykgLT5cclxuICAgIGZvcmNlPSB2ZWMgMCwgMFxyXG4gICAgY291bnQgPSAwXHJcbiAgICBmb3IgY2lyY2xlIGluIGNpcmNsZXNcclxuICAgICAgY29udGludWUgaWYgY2lyY2xlID09IEBcclxuICAgICAgZGlzdGFuY2UgPSBAY2VudGVyLm1pbnVzKGNpcmNsZS5jZW50ZXIpXHJcbiAgICAgIGN1cnJlbnREaXN0YW5jZSA9IGRpc3RhbmNlLmxlbmd0aCgpXHJcbiAgICAgIG1pbkRpc3RhbmNlID0gY2lyY2xlLnJhZGl1cyArIEByYWRpdXNcclxuICAgICAgYWN1cmFuY2UgPSAwLjc1XHJcbiAgICAgIGNvbnRpbnVlIGlmIGN1cnJlbnREaXN0YW5jZSA+PSBtaW5EaXN0YW5jZSAtIGFjdXJhbmNlXHJcbiAgICAgIGYgPSBkaXN0YW5jZS5ub3JtYWxpemUoKS5zY2FsZShtaW5EaXN0YW5jZS9jdXJyZW50RGlzdGFuY2UpXHJcbiAgICAgICMgZiA9IGRpc3RhbmNlLm5vcm1hbGl6ZSgpLnNjYWxlKEB2ZWxvY2l0eS5zY2FsZWQoLTIpLmRvdChkaXN0YW5jZSkpI21pbkRpc3RhbmNlL2N1cnJlbnREaXN0YW5jZVxyXG4gICAgICBAZHJhd1F1ZWUucHVzaChkcmF3LmxpbmUuYmluZChkcmF3LGNpcmNsZS5jZW50ZXIsY2lyY2xlLmNlbnRlci5wbHVzKGYuc2NhbGVkKGNpcmNsZS5yYWRpdXMvMikpKSlcclxuICAgICAgZm9yY2UuYWRkKGYpO1xyXG4gICAgICBjb3VudCsrXHJcblxyXG4gICAgaWYgKGNvdW50ID4gMClcclxuICAgICAgZm9yY2Uuc2NhbGUoMS9jb3VudClcclxuICAgIGZvcmNlXHJcblxyXG4gIGNvbm5lY3Q6IChjaXJjbGVzKS0+XHJcbiAgICByZXR1cm4gaWYgQGFjY2VsZXJhdGlvbi5sZW5ndGgoKSA+IDBcclxuICAgIGZvciBjaXJjbGUgaW4gY2lyY2xlc1xyXG4gICAgICBjb250aW51ZSBpZiBjaXJjbGUgPT0gQFxyXG4gICAgICByZXR1cm4gaWYgQGZyaWVuZHMubGVuZ3RoID09IDIgXHJcbiAgICAgIGRpc3RhbmNlID0gQGNlbnRlci5taW51cyhjaXJjbGUuY2VudGVyKS5sZW5ndGgoKVxyXG4gICAgICBtaW5EaXN0YW5jZSA9IGNpcmNsZS5yYWRpdXMgKyBAcmFkaXVzXHJcbiAgICAgIGFjdXJhbmNlID0gMC43NVxyXG4gICAgICBcclxuICAgICAgIyBpc0F0RWRnZSA9IGRpc3RhbmNlIDwgbWluRGlzdGFuY2UgKyBhY3VyYW5jZSBhbmQgZGlzdGFuY2UgPj0gbWluRGlzdGFuY2UgLSBhY3VyYW5jZVxyXG4gICAgICBpc0F0RWRnZSA9IE1hdGguYWJzKGRpc3RhbmNlIC0gbWluRGlzdGFuY2UpIDw9IGFjdXJhbmNlXHJcbiAgICAgIGhhc1BsYWNlRm9yRnJlaW5kID0gY2lyY2xlLmZyaWVuZHMubGVuZ3RoIDwgMlxyXG4gICAgICBpc0FjY2VsZXJhdGVkID0gY2lyY2xlLmFjY2VsZXJhdGlvbi5sZW5ndGgoKSA+IDBcclxuICAgICAgaXNJbkZyaWVuZHMgPSBAZnJpZW5kcy5pbmRleE9mKGNpcmNsZSkgPiAtMVxyXG4gICAgICBpc1N0b3BlZCA9IGNpcmNsZS5mcmllbmRzLmxlbmd0aCA+IDAgb3IgICFpc0FjY2VsZXJhdGVkXHJcbiAgICAgIGlmIGlzQXRFZGdlIGFuZCBoYXNQbGFjZUZvckZyZWluZCBhbmQgaXNTdG9wZWQgYW5kICFpc0luRnJpZW5kc1xyXG4gICAgICAgIEBmcmllbmRzLnB1c2goY2lyY2xlKVxyXG4gICAgICAgIEBhY2NlbGVyYXRpb24uc2NhbGUoMClcclxuICAgICAgICBAdmVsb2NpdHkuc2NhbGUoMClcclxuXHJcbiAgICAgICAgY2lyY2xlLmZyaWVuZHMucHVzaChAKVxyXG4gICAgICAgIGNpcmNsZS5hY2NlbGVyYXRpb24uc2NhbGUoMClcclxuICAgICAgICBjaXJjbGUudmVsb2NpdHkuc2NhbGUoMClcclxuXHJcblxyXG4gIHNlcGFyYXRlOiAoY2lyY2xlcykgLT5cclxuICAgIEBhcHBseUZvcmNlKEBzZXBhcmF0ZUZvcmNlKGNpcmNsZXMpKVxyXG5cclxuICBlZGdlOiAobWF4KSAtPlxyXG4gICAgQGFwcGx5Rm9yY2UoQGVkZ2VGb3JjZShtYXgpKVxyXG5cclxuICBjaGVja0xvb3A6ICh0aW1lKSAtPlxyXG4gICAgaWYgQGZyaWVuZHMubGVuZ3RoID4gMCBvciBAcmVxdWVzdHMubGVuZ3RoID4gMCBcclxuICAgICAgcmV0dXJuXHJcbiAgICBcclxuICAgIGlmIEBhY2NlbGVyYXRpb24ubGVuZ3RoKCkgPT0gMFxyXG4gICAgICBAYWNjZWxlcmF0aW9uVGltZVN0YXJ0ID0gZmFsc2VcclxuICAgIGVsc2VcclxuICAgICAgaWYgQGFjY2VsZXJhdGlvblRpbWVTdGFydCAgPT0gZmFsc2VcclxuICAgICAgICBAYWNjZWxlcmF0aW9uVGltZVN0YXJ0ID0gdGltZSBcclxuICAgICAgQGFjY2VsZXJhdGlvbkR1cmF0aW9uID0gdGltZSAtIEBhY2NlbGVyYXRpb25UaW1lU3RhcnRcclxuICAgICAgaWYoQGFjY2VsZXJhdGlvbkR1cmF0aW9uID4gMzAwMCAmJiBAcmFkaXVzID4gQG1pblJhZGl1cyozKVxyXG4gICAgICAgIEByYWRpdXMgLT0gNTtcclxuICAgICAgaWYoQGFjY2VsZXJhdGlvbkR1cmF0aW9uID4gNjAwMCAmJiBAcmFkaXVzID4gQG1pblJhZGl1cylcclxuICAgICAgICBAcmFkaXVzIC09IDU7XHJcbiAgICAgIGlmKEBhY2NlbGVyYXRpb25EdXJhdGlvbiA+IDkwMDAgJiYgQHJhZGl1cyA+IEBtaW5SYWRpdXMqMC41KVxyXG4gICAgICAgIEByYWRpdXMgLT0gNTtcclxuICBcclxuXHJcbiAgdXBkYXRlOiAodGltZSkgLT5cclxuICAgIHJldHVybiBpZiBAZnJpZW5kcy5sZW5ndGggPiAwIFxyXG4gICAgQHZlbG9jaXR5LmFkZChAYWNjZWxlcmF0aW9uKTtcclxuICAgIEB2ZWxvY2l0eS5ib3VuZE1heFxyXG4gICAgICB4OjFcclxuICAgICAgeToxXHJcbiAgICBAY2VudGVyLmFkZChAdmVsb2NpdHkpXHJcbiAgICBAYWNjZWxlcmF0aW9uLnNjYWxlKDApO1xyXG4gICAgQGRyYXdRdWVlLnB1c2goZHJhdy5saW5lLmJpbmQoZHJhdyxAY2VudGVyLEBjZW50ZXIucGx1cyhAdmVsb2NpdHkuc2NhbGVkKEByYWRpdXMvMikpKSlcclxuICAgIEByZXF1ZXN0cyA9IFtdXHJcbiAgICByZXR1cm5cclxuXHJcbiAgZHJhd0NpcmNsZTogKGN0eCkgLT5cclxuICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgY3R4LmFyYyBAY2VudGVyLngsIEBjZW50ZXIueSwgQHJhZGl1cywgMCwgMiAqIE1hdGguUEksIGZhbHNlXHJcbiAgICBjdHgubGluZVdpZHRoID0gMVxyXG4gICAgaWYgQGZyaWVuZHMubGVuZ3RoID09IDBcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCdcclxuICAgIGVsc2UgaWYgQGZyaWVuZHMubGVuZ3RoID09IDFcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2dyZWVuJ1xyXG4gICAgZWxzZSBpZiBAZnJpZW5kcy5sZW5ndGggPT0gMlxyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnb3JhbmdlJ1xyXG4gICAgZWxzZVxyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSdcclxuICAgIGN0eC5zdHJva2UoKVxyXG5cclxuICBkcmF3OiAoY3R4KSAtPlxyXG4gICAgIyBpZiBAZnJpZW5kcy5sZW5ndGggPT0gMVxyXG4gICAgIyAgIGRyYXdHcm91cChnZW5lcmF0ZUdyb3VwKEAsQGZyaWVuZHNbMF0pKVxyXG4gICAgIyBlbHNlXHJcbiAgICAjICAgQGRyYXdDaXJjbGUoY3R4KVxyXG5cclxuICAgIEBkcmF3Q2lyY2xlKGN0eClcclxuXHJcbiAgICBpZiBAZnJpZW5kcy5sZW5ndGggPiAwXHJcbiAgICAgIGZvciBmcmllbmQgaW4gQGZyaWVuZHMgIFxyXG4gICAgICAgIGRyYXcubGluZShAY2VudGVyLGZyaWVuZC5jZW50ZXIsY3R4LCdzaWx2ZXInKVxyXG5cclxuICAgIGZvciBkIGluIEBkcmF3UXVlZVxyXG4gICAgICBkKGN0eCwncmVkJylcclxuICAgIEBkcmF3UXVlZSA9IFtdXHJcblxyXG4gICAgcmV0dXJuXHJcblxyXG5DaXJjbGUucmFuZG9tID0gKG1heCxwYWRkaW5nKS0+XHJcbiAgcyA9IG5ldyBDaXJjbGVcclxuICBzLnN0YXJ0ID0gXHJcbiAgICB4OiBNYXRoLnJhbmRvbSgpKihtYXgueCArIDIqcGFkZGluZykgKyBwYWRkaW5nXHJcbiAgICB5OiBNYXRoLnJhbmRvbSgpKihtYXgueSArIDIqcGFkZGluZykgKyBwYWRkaW5nXHJcbiAgcy5yYWRpdXMgPSBNYXRoLnJhbmRvbSgpKjMwICsgMzBcclxuICBzLmFuZ2xlID0gMzYwKk1hdGgucmFuZG9tKCkqKE1hdGguUEkvMTgwKVxyXG4gIHMuZGlyZWN0aW9uID0gISEoTWF0aC5yYW5kb20oKSA+IDAuNSlcclxuICBzLmNpcmNsZXMgPSB+figyICsgTWF0aC5yYW5kb20oKSo0KVxyXG4gIHJldHVybiBzO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDaXJjbGUiLCJkcmF3ID0gXHJcbiAgbGluZTogKHN0YXJ0LGVuZCxjdHgsY29sb3IpIC0+XHJcbiAgICAjIHN0cm9rZVN0eWxlID0gY3R4LnN0cm9rZVN0eWxlXHJcbiAgICAjIGN0eC5zdHJva2UoKVxyXG4gICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAoY29sb3Igb3IgXCJibHVlXCIpXHJcbiAgICBjdHgubW92ZVRvIHN0YXJ0Lngsc3RhcnQueVxyXG4gICAgY3R4LmxpbmVUbyBlbmQueCxlbmQueVxyXG4gICAgY3R4LnN0cm9rZSgpXHJcbiAgICAjIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgIyBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZVxyXG5cclxuICBzcGlyYWw6IChjdHgsbykgLT5cclxuICAgIHNBbmdsZSA9IE1hdGguUEkgKyBvLmFuZ2xlO1xyXG4gICAgZUFuZ2xlID0gc0FuZ2xlICsgTWF0aC5QSSAqIDIgKiBvLmNpcmNsZXM7XHJcbiAgICBcclxuICAgIGNlbnRlciA9IFxyXG4gICAgICB4OiBvLnN0YXJ0LnggKyBNYXRoLmNvcyhvLmFuZ2xlKSpvLnJhZGl1c1xyXG4gICAgICB5OiBvLnN0YXJ0LnkgKyBNYXRoLnNpbihvLmFuZ2xlKSpvLnJhZGl1c1xyXG4gICAgXHJcblxyXG4gICAgZHJhdy5saW5lKG8uc3RhcnQsY2VudGVyLGN0eCwnYmxhY2snKVxyXG5cclxuICAgIGluY3JlbWVudCA9IDIgKiBNYXRoLlBJIC8gNjAgI1NURVBTX1BFUl9ST1RBVElPTlxyXG4gICAgdGhldGEgPSBzQW5nbGVcclxuICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgY3R4Lm1vdmVUbyBjZW50ZXIueCxjZW50ZXIueVxyXG4gICAgd2hpbGUgdGhldGEgPD0gZUFuZ2xlICsgaW5jcmVtZW50XHJcbiAgICAgIHRlbXBUaGV0YSA9IGlmIG8uZGlyZWN0aW9uIHRoZW4gdGhldGEgZWxzZSAtMSoodGhldGEgLSAyKm8uYW5nbGUpXHJcbiAgICAgIHBvaW50ID1cclxuICAgICAgICB4OiBjZW50ZXIueCArIG8ucmFkaXVzICogTWF0aC5jb3ModGVtcFRoZXRhKSAqIChwcm9ncmVzcylcclxuICAgICAgICB5OiBjZW50ZXIueSArIG8ucmFkaXVzICogTWF0aC5zaW4odGVtcFRoZXRhKSAqIChwcm9ncmVzcylcclxuICAgICAgcHJvZ3Jlc3MgPSAodGhldGEgLSBzQW5nbGUpLyhlQW5nbGUgLSBzQW5nbGUpXHJcbiAgICAgIHRoZXRhICs9IGluY3JlbWVudDtcclxuICAgICAgY3R4LmxpbmVUbyBwb2ludC54LCBwb2ludC55XHJcbiAgICBjdHguc3Ryb2tlKClcclxuICAgIHJldHVyblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkcmF3OyJdfQ==
