(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/app.coffee":[function(require,module,exports){
var draw, f, n;

f = require('franim');

n = require('numberer');

draw = {
  spiral: function(o) {
    var center, eAngle, increment, newX, newY, progress, sAngle, tempTheta, theta;
    sAngle = Math.PI + o.angle;
    eAngle = sAngle + Math.PI * 2 * o.number;
    center = {
      x: o.start.x + Math.cos(o.angle) * o.radius,
      y: o.start.y + Math.sin(o.angle) * o.radius
    };
    increment = 2 * Math.PI / 60;
    theta = sAngle;
    this.beginPath();
    this.moveTo(center.x, center.y);
    while (theta <= eAngle + increment) {
      progress = (theta - sAngle) / (eAngle - sAngle);
      tempTheta = o.direction ? theta : -1 * (theta - 2 * o.angle);
      newX = o.radius * Math.cos(tempTheta) * progress;
      newY = o.radius * Math.sin(tempTheta) * progress;
      theta += increment;
      this.lineTo(center.x + newX, center.y + newY);
    }
    this.stroke();
  }
};

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
    this.spirals = [];
    for (i = _i = 0; _i < 20; i = ++_i) {
      this.spirals[i] = {
        start: {
          x: Math.random() * (this.width.get() - 200) + 100,
          y: Math.random() * (this.height.get() - 200) + 100
        },
        angle: Math.random() * 360 * (Math.PI / 180),
        direction: !!(Math.random() > 0.5),
        radius: Math.random() * 120 + 30,
        number: ~~(Math.random() * 7 + 3)
      };
    }
  },
  update: function(time) {},
  draw: function(ctx) {
    var spiral, _i, _len, _ref;
    ctx.clearRect(0, 0, this.width.get(), this.height.get());
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.width.get(), this.height.get());
    ctx.strokeStyle = "red";
    _ref = this.spirals;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      spiral = _ref[_i];
      console.log(spiral);
      draw.spiral.call(ctx, spiral);
    }
    this.anim.pause();
  }
});



},{"franim":"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\node_modules\\franim\\franim.js","numberer":"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\node_modules\\numberer\\lib\\numberer.js"}],"c:\\Users\\irakli.safareli\\Desktop\\spiraler\\node_modules\\franim\\franim.js":[function(require,module,exports){
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
},{}]},{},["./src/js/app.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcaXJha2xpLnNhZmFyZWxpXFxEZXNrdG9wXFxzcGlyYWxlclxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGFwcC5jb2ZmZWUiLCJjOi9Vc2Vycy9pcmFrbGkuc2FmYXJlbGkvRGVza3RvcC9zcGlyYWxlci9ub2RlX21vZHVsZXMvZnJhbmltL2ZyYW5pbS5qcyIsImM6L1VzZXJzL2lyYWtsaS5zYWZhcmVsaS9EZXNrdG9wL3NwaXJhbGVyL25vZGVfbW9kdWxlcy9udW1iZXJlci9saWIvbnVtYmVyZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLFVBQUE7O0FBQUEsQ0FBQSxHQUFJLE9BQUEsQ0FBUSxRQUFSLENBQUosQ0FBQTs7QUFBQSxDQUNBLEdBQUksT0FBQSxDQUFRLFVBQVIsQ0FESixDQUFBOztBQUFBLElBRUEsR0FDRTtBQUFBLEVBQUEsTUFBQSxFQUFRLFNBQUMsQ0FBRCxHQUFBO0FBQ04sUUFBQSx5RUFBQTtBQUFBLElBQUEsTUFBQSxHQUFTLElBQUksQ0FBQyxFQUFMLEdBQVUsQ0FBQyxDQUFDLEtBQXJCLENBQUE7QUFBQSxJQUNBLE1BQUEsR0FBUyxNQUFBLEdBQVMsSUFBSSxDQUFDLEVBQUwsR0FBVSxDQUFWLEdBQWMsQ0FBQyxDQUFDLE1BRGxDLENBQUE7QUFBQSxJQUdBLE1BQUEsR0FDRTtBQUFBLE1BQUEsQ0FBQSxFQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBUixHQUFZLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBQyxDQUFDLEtBQVgsQ0FBQSxHQUFrQixDQUFDLENBQUMsTUFBbkM7QUFBQSxNQUNBLENBQUEsRUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQVIsR0FBWSxJQUFJLENBQUMsR0FBTCxDQUFT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QyxNQUFNLENBQUMsSUFBWixDQUFpQixHQUFqQixFQUFzQixNQUF0QixDQURBLENBREY7QUFBQSxLQUpBO0FBQUEsSUFPQSxJQUFDLENBQUMsSUFBSSxDQUFDLEtBQVAsQ0FBQSxDQVBBLENBREk7RUFBQSxDQTNCTjtDQURGLENBMUJBLENBQUE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZiA9IHJlcXVpcmUgJ2ZyYW5pbSdcclxubiA9IHJlcXVpcmUgJ251bWJlcmVyJ1xyXG5kcmF3ID0gXHJcbiAgc3BpcmFsOiAobykgLT5cclxuICAgIHNBbmdsZSA9IE1hdGguUEkgKyBvLmFuZ2xlO1xyXG4gICAgZUFuZ2xlID0gc0FuZ2xlICsgTWF0aC5QSSAqIDIgKiBvLm51bWJlcjtcclxuICAgIFxyXG4gICAgY2VudGVyID0gXHJcbiAgICAgIHg6IG8uc3RhcnQueCArIE1hdGguY29zKG8uYW5nbGUpKm8ucmFkaXVzXHJcbiAgICAgIHk6IG8uc3RhcnQueSArIE1hdGguc2luKG8uYW5nbGUpKm8ucmFkaXVzXHJcbiAgICBcclxuICAgIGluY3JlbWVudCA9IDIgKiBNYXRoLlBJIC8gNjAgI1NURVBTX1BFUl9ST1RBVElPTlxyXG4gICAgdGhldGEgPSBzQW5nbGVcclxuICAgIEBiZWdpblBhdGgoKVxyXG4gICAgQG1vdmVUbyBjZW50ZXIueCxjZW50ZXIueVxyXG4gICAgd2hpbGUgdGhldGEgPD0gZUFuZ2xlICsgaW5jcmVtZW50XHJcbiAgICAgIHByb2dyZXNzID0gKHRoZXRhIC0gc0FuZ2xlKS8oZUFuZ2xlIC0gc0FuZ2xlKVxyXG4gICAgICB0ZW1wVGhldGEgPSBpZiBvLmRpcmVjdGlvbiB0aGVuIHRoZXRhIGVsc2UgLTEqKHRoZXRhIC0gMipvLmFuZ2xlKVxyXG4gICAgICBuZXdYID0gby5yYWRpdXMgKiBNYXRoLmNvcyh0ZW1wVGhldGEpICogKHByb2dyZXNzKVxyXG4gICAgICBuZXdZID0gby5yYWRpdXMgKiBNYXRoLnNpbih0ZW1wVGhldGEpICogKHByb2dyZXNzKVxyXG4gICAgICB0aGV0YSArPSBpbmNyZW1lbnQ7XHJcbiAgICAgIEAubGluZVRvIGNlbnRlci54ICsgbmV3WCwgY2VudGVyLnkgKyBuZXdZXHJcbiAgICBALnN0cm9rZSgpXHJcblxyXG4gICAgcmV0dXJuXHJcblxyXG5mIFwiY2FudmFzXCIsXHJcbiAgY29uZmlnOlxyXG4gICAgZnVsbFNpemU6IHRydWVcclxuXHJcbiAgY2xlYXI6IChjdHgpIC0+XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiXHJcbiAgICBjdHguZmlsbFJlY3QgMCwgMCwgQHdpZHRoLmdldCgpLCBAaGVpZ2h0LmdldCgpXHJcblxyXG4gIHNldHVwOiAoY3R4KSAtPlxyXG4gICAgQHdpZHRoID0gbmV3IG4gQGFuaW0uZ2V0V2lkdGhcclxuICAgIEBoZWlnaHQgPSBuZXcgbiBAYW5pbS5nZXRIZWlnaHRcclxuICAgIEBjbGVhcihjdHgpXHJcbiAgICBAc3BpcmFscyA9IFtdXHJcbiAgICBmb3IgaSBpbiBbMC4uLjIwXVxyXG4gICAgICBAc3BpcmFsc1tpXSA9XHJcbiAgICAgICAgc3RhcnQ6XHJcbiAgICAgICAgICB4Ok1hdGgucmFuZG9tKCkqKEB3aWR0aC5nZXQoKS0yMDApICsgMTAwXHJcbiAgICAgICAgICB5Ok1hdGgucmFuZG9tKCkqKEBoZWlnaHQuZ2V0KCktMjAwKSArIDEwMFxyXG4gICAgICAgIGFuZ2xlOk1hdGgucmFuZG9tKCkqMzYwKihNYXRoLlBJLzE4MClcclxuICAgICAgICBkaXJlY3Rpb246ISEoTWF0aC5yYW5kb20oKSA+IDAuNSlcclxuICAgICAgICByYWRpdXM6TWF0aC5yYW5kb20oKSoxMjAgKyAzMFxyXG4gICAgICAgIG51bWJlcjp+fihNYXRoLnJhbmRvbSgpKjcrIDMpXHJcbiAgICByZXR1cm5cclxuXHJcbiAgdXBkYXRlOiAodGltZSkgLT5cclxuXHJcbiAgICByZXR1cm5cclxuXHJcbiAgZHJhdzogKGN0eCkgLT5cclxuICAgIGN0eC5jbGVhclJlY3QgIDAsIDAsIEB3aWR0aC5nZXQoKSwgQGhlaWdodC5nZXQoKVxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIlxyXG4gICAgY3R4LmZpbGxSZWN0IDAsIDAsIEB3aWR0aC5nZXQoKSwgQGhlaWdodC5nZXQoKVxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIlxyXG4gICAgZm9yIHNwaXJhbCBpbiBAc3BpcmFsc1xyXG4gICAgICBjb25zb2xlLmxvZyhzcGlyYWwpXHJcbiAgICAgIGRyYXcuc3BpcmFsLmNhbGwgY3R4LCBzcGlyYWxcclxuICAgIEAuYW5pbS5wYXVzZSgpO1xyXG4gICAgcmV0dXJuXHJcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZnJhbmltKGNhbnZhc2VJZCwgY29udGV4dCkge1xuICAgIHZhciB3aWR0aCAgPSAgd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc2VJZCksXG4gICAgICAgIGlzUnVubmluZyA9IHRydWUsXG4gICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgY3R4ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgZG9tRWxlbWVudC53aWR0aCA9IHdpZHRoO1xuICAgIGRvbUVsZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgZnVuY3Rpb24gcmVjYWxjdWxhdGUoKSB7XG4gICAgICAgIGlmICh3aWR0aCAgIT09IHdpbmRvdy5pbm5lcldpZHRoIHx8IGhlaWdodCAhPT0gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICBkb21FbGVtZW50LndpZHRoICA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgZG9tRWxlbWVudC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCAgPSBkb21FbGVtZW50LndpZHRoO1xuICAgICAgICAgICAgaGVpZ2h0ID0gZG9tRWxlbWVudC5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRpb25DYWxsYmFjayh0aW1lKSB7XG4gICAgICAgIGlmIChjb250ZXh0LmNvbmZpZyAmJiBjb250ZXh0LmNvbmZpZy5mdWxsU2l6ZSkge1xuICAgICAgICAgICAgcmVjYWxjdWxhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dC51cGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnRleHQudXBkYXRlKHRpbWUpO1xuICAgICAgICAgICAgY29udGV4dC5kcmF3KGN0eCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXcoY3R4LCB0aW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1J1bm5pbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElkKTtcbiAgICAgICAgICAgIHJlcXVlc3RJZCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuYW5pbSA9IHtcbiAgICAgICAgZ2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGNvbnRleHQuY29uZmlnICYmIGNvbnRleHQuY29uZmlnLmZ1bGxTaXplKSA/IGhlaWdodCA6IGRvbUVsZW1lbnQuaGVpZ2h0O1xuICAgICAgICB9LFxuICAgICAgICBnZXRXaWR0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIChjb250ZXh0LmNvbmZpZyAmJiBjb250ZXh0LmNvbmZpZy5mdWxsU2l6ZSkgPyB3aWR0aCA6IGRvbUVsZW1lbnQud2lkdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3VtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25DYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHBhdXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0LnNldHVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRleHQuc2V0dXAoY3R4KTtcbiAgICB9XG4gICAgcmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25DYWxsYmFjayk7XG5cbiAgICByZXR1cm4gY29udGV4dDtcbn1cblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZyYW5pbTtcbn0iLCIvKlxuICogbnVtYmVyZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zYWZhcmVsaS9udW1iZXJlclxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBJcmFrbGkgU2FmYXJlbGlcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBtYXRoID0gZnVuY3Rpb24ob3BlcmF0aW9uLCBhcmdzKXtcbiAgICByZXR1cm4gbmV3IE51bWJlcmVyKGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbihwLCBjKXtcbiAgICAgICAgICAgIHZhciBhID0gKHAgJiYgcC5nZXQpID8gcC5nZXQoKSA6IHA7XG4gICAgICAgICAgICB2YXIgYiA9IChjICYmIGMuZ2V0KSA/IGMuZ2V0KCkgOiBjO1xuICAgICAgICAgICAgc3dpdGNoKG9wZXJhdGlvbil7XG4gICAgICAgICAgICAgICAgY2FzZSAncGx1cyc6IHJldHVybiBhICsgYjtcbiAgICAgICAgICAgICAgICBjYXNlICdtaW51cyc6IHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgICAgICBjYXNlICdkaXYnOiByZXR1cm4gYSAvIGI7XG4gICAgICAgICAgICAgICAgY2FzZSAnbXVsdCc6IHJldHVybiBhICogYjtcbiAgICAgICAgICAgICAgICBjYXNlICdtb2QnOiByZXR1cm4gYSAlIGI7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IFR5cGVFcnJvcigndW5rbm93biBvcGVyYXRpb24gJytvcGVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIE51bWJlcmVyKHZhbHVlKXtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbn1cblxuTnVtYmVyZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHYgPSB0aGlzLl9fdmFsdWU7XG4gICAgaWYodHlwZW9mIHYgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHYoKTtcbiAgICBlbHNlIHJldHVybiB2O1xufTtcblxuTnVtYmVyZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5OdW1iZXJlci5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBuZXcgTnVtYmVyZXIodGhpcy5fX3ZhbHVlKTtcbn07XG5cblsncGx1cycsICdtaW51cycsICdkaXYnLCAnbXVsdCcsICdtb2QnXS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xuICAgIE51bWJlcmVyLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgYXJncy51bnNoaWZ0KHRoaXMuY2xvbmUoKSk7XG4gICAgICAgIHRoaXMuX192YWx1ZSA9IChtYXRoKG5hbWUsIGFyZ3MpKS5fX3ZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgTnVtYmVyZXJbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG1hdGgobmFtZSxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXJlcjsiXX0=
