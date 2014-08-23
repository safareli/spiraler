(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/app.coffee":[function(require,module,exports){
var draw, f, n;

f = require('franim');

n = require('numberer');

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
    eAngle = sAngle + Math.PI * 2 * o.number;
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

f("canvas", {
  config: {
    fullSize: true
  },
  clear: function(ctx) {
    ctx.fillStyle = "black";
    return ctx.fillRect(0, 0, this.width.get(), this.height.get());
  },
  setup: function(ctx) {
    this.width = new n(this.anim.getWidth);
    this.height = new n(this.anim.getHeight);
    this.clear(ctx);
  },
  update: function(time) {},
  randSpiral: function() {
    var radius;
    radius = Math.random() * 70 + 30;
    return {
      start: {
        x: Math.random() * (this.width.get() - 400) + 200,
        y: Math.random() * (this.height.get() - 400) + 200
      },
      angle: 360 * Math.random() * (Math.PI / 180),
      direction: !!(Math.random() > 0.5),
      radius: radius,
      number: ~~(radius / 10 + Math.random() * 3)
    };
  },
  draw: function(ctx) {
    this.clear(ctx);
    ctx.strokeStyle = "red";
    console.log(this.randSpiral());
    draw.spiral.call(ctx, 17, this.randSpiral(), (function() {
      return this.randSpiral();
    }).bind(this));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcaXJha2xpLnNhZmFyZWxpXFxEZXNrdG9wXFxzcGlyYWxlclxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJjOlxcVXNlcnNcXGlyYWtsaS5zYWZhcmVsaVxcRGVza3RvcFxcc3BpcmFsZXJcXHNyY1xcanNcXGFwcC5jb2ZmZWUiLCJjOi9Vc2Vycy9pcmFrbGkuc2FmYXJlbGkvRGVza3RvcC9zcGlyYWxlci9ub2RlX21vZHVsZXMvZnJhbmltL2ZyYW5pbS5qcyIsImM6L1VzZXJzL2lyYWtsaS5zYWZhcmVsaS9EZXNrdG9wL3NwaXJhbGVyL25vZGVfbW9kdWxlcy9udW1iZXJlci9saWIvbnVtYmVyZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLFVBQUE7O0FBQUEsQ0FBQSxHQUFJLE9BQUEsQ0FBUSxRQUFSLENBQUosQ0FBQTs7QUFBQSxDQUNBLEdBQUksT0FBQSxDQUFRLFVBQVIsQ0FESixDQUFBOztBQUFBLElBRUEsR0FDRTtBQUFBLEVBQUEsSUFBQSxFQUFNLFNBQUMsS0FBRCxFQUFPLEdBQVAsR0FBQTtBQUNKLFFBQUEsV0FBQTtBQUFBLElBQUEsV0FBQSxHQUFjLElBQUMsQ0FBQSxXQUFmLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxNQUFELENBQUEsQ0FEQSxDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsU0FBRCxDQUFBLENBRkEsQ0FBQTtBQUFBLElBR0EsSUFBQyxDQUFBLFdBQUQsR0FBZSxNQUhmLENBQUE7QUFBQSxJQUlBLElBQUMsQ0FBQSxNQUFELENBQVEsS0FBSyxDQUFDLENBQWQsRUFBZ0IsS0FBSyxDQUFDLENBQXRCLENBSkEsQ0FBQTtBQUFBLElBS0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxHQUFHLENBQUMsQ0FBWixFQUFjLEdBQUcsQ0FBQyxDQUFsQixDQUxBLENBQUE7QUFBQSxJQU1BLElBQUMsQ0FBQSxN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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmID0gcmVxdWlyZSAnZnJhbmltJ1xyXG5uID0gcmVxdWlyZSAnbnVtYmVyZXInXHJcbmRyYXcgPSBcclxuICBsaW5lOiAoc3RhcnQsZW5kKSAtPlxyXG4gICAgc3Ryb2tlU3R5bGUgPSBAc3Ryb2tlU3R5bGVcclxuICAgIEBzdHJva2UoKVxyXG4gICAgQGJlZ2luUGF0aCgpXHJcbiAgICBAc3Ryb2tlU3R5bGUgPSBcImJsdWVcIlxyXG4gICAgQG1vdmVUbyBzdGFydC54LHN0YXJ0LnlcclxuICAgIEBsaW5lVG8gZW5kLngsZW5kLnlcclxuICAgIEBzdHJva2UoKVxyXG4gICAgQGJlZ2luUGF0aCgpXHJcbiAgICBAc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZVxyXG5cclxuICBzcGlyYWw6IChudW0sbyxnZW5lcmF0b3IpIC0+XHJcbiAgICByZXR1cm4gaWYgbnVtID09IDA7IFxyXG4gICAgbmV4dCA9IGdlbmVyYXRvcigpO1xyXG5cclxuICAgIHNBbmdsZSA9IE1hdGguUEkgKyBvLmFuZ2xlO1xyXG4gICAgZUFuZ2xlID0gc0FuZ2xlICsgTWF0aC5QSSAqIDIgKiBvLm51bWJlcjtcclxuICAgIFxyXG4gICAgY2VudGVyID0gXHJcbiAgICAgIHg6IG8uc3RhcnQueCArIE1hdGguY29zKG8uYW5nbGUpKm8ucmFkaXVzXHJcbiAgICAgIHk6IG8uc3RhcnQueSArIE1hdGguc2luKG8uYW5nbGUpKm8ucmFkaXVzXHJcbiAgICBcclxuXHJcbiAgICBkcmF3LmxpbmUuY2FsbChALG8uc3RhcnQsY2VudGVyKTtcclxuXHJcbiAgICBpbmNyZW1lbnQgPSAyICogTWF0aC5QSSAvIDYwICNTVEVQU19QRVJfUk9UQVRJT05cclxuICAgIHRoZXRhID0gc0FuZ2xlXHJcbiAgICBzYXZlQXRBbmdsZSA9IChNYXRoLnJhbmRvbSgpICsgMC41KSpNYXRoLlBJXHJcbiAgICBzYXZlZCA9IGZhbHNlXHJcbiAgICBAYmVnaW5QYXRoKClcclxuICAgIEBtb3ZlVG8gY2VudGVyLngsY2VudGVyLnlcclxuICAgIHdoaWxlIHRoZXRhIDw9IGVBbmdsZSArIGluY3JlbWVudFxyXG4gICAgICB0ZW1wVGhldGEgPSBpZiBvLmRpcmVjdGlvbiB0aGVuIHRoZXRhIGVsc2UgLTEqKHRoZXRhIC0gMipvLmFuZ2xlKVxyXG4gICAgICBwb2ludCA9XHJcbiAgICAgICAgeDogY2VudGVyLnggKyBvLnJhZGl1cyAqIE1hdGguY29zKHRlbXBUaGV0YSkgKiAocHJvZ3Jlc3MpXHJcbiAgICAgICAgeTogY2VudGVyLnkgKyBvLnJhZGl1cyAqIE1hdGguc2luKHRlbXBUaGV0YSkgKiAocHJvZ3Jlc3MpXHJcbiAgICAgIGlmIG5vdCBzYXZlZCBhbmQgZUFuZ2xlIC0gc2F2ZUF0QW5nbGUgPCB0aGV0YVxyXG4gICAgICAgIG5leHQuc3RhcnQueCA9IHBvaW50LnhcclxuICAgICAgICBuZXh0LnN0YXJ0LnkgPSBwb2ludC55XHJcbiAgICAgICAgc2F2ZWQgPSB0cnVlXHJcbiAgICAgICAgc2F2ZUF0QW5nbGUgPSB0ZW1wVGhldGFcclxuICAgICAgICBkcmF3LmxpbmUuY2FsbChALGNlbnRlcixwb2ludCk7XHJcblxyXG4gICAgICBwcm9ncmVzcyA9ICh0aGV0YSAtIHNBbmdsZSkvKGVBbmdsZSAtIHNBbmdsZSlcclxuICAgICAgdGhldGEgKz0gaW5jcmVtZW50O1xyXG4gICAgICBAbGluZVRvIHBvaW50LngsIHBvaW50LnlcclxuICAgIEBzdHJva2UoKVxyXG5cclxuICAgIG5leHQuYW5nbGUgPSBzYXZlQXRBbmdsZSUoTWF0aC5QSSoyKVxyXG4gICAgbmV4dC5kaXJlY3Rpb24gPSAhby5kaXJlY3Rpb247XHJcblxyXG4gICAgZHJhdy5zcGlyYWwuY2FsbCBALCAtLW51bSwgbmV4dCxnZW5lcmF0b3I7XHJcbiAgICByZXR1cm5cclxuXHJcbmYgXCJjYW52YXNcIixcclxuICBjb25maWc6XHJcbiAgICBmdWxsU2l6ZTogdHJ1ZVxyXG5cclxuICBjbGVhcjogKGN0eCkgLT5cclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCJcclxuICAgIGN0eC5maWxsUmVjdCAwLCAwLCBAd2lkdGguZ2V0KCksIEBoZWlnaHQuZ2V0KClcclxuXHJcbiAgc2V0dXA6IChjdHgpIC0+XHJcbiAgICBAd2lkdGggPSBuZXcgbiBAYW5pbS5nZXRXaWR0aFxyXG4gICAgQGhlaWdodCA9IG5ldyBuIEBhbmltLmdldEhlaWdodFxyXG4gICAgQGNsZWFyKGN0eClcclxuICAgIHJldHVyblxyXG5cclxuICB1cGRhdGU6ICh0aW1lKSAtPlxyXG5cclxuICAgIHJldHVyblxyXG5cclxuICByYW5kU3BpcmFsOiAoKSAtPlxyXG4gICAgcmFkaXVzID0gTWF0aC5yYW5kb20oKSo3MCArIDMwXHJcbiAgICBcclxuICAgIHN0YXJ0OlxyXG4gICAgICB4Ok1hdGgucmFuZG9tKCkqKEB3aWR0aC5nZXQoKSAtIDQwMCkrMjAwIFxyXG4gICAgICB5Ok1hdGgucmFuZG9tKCkqKEBoZWlnaHQuZ2V0KCkgLSA0MDApKzIwMFxyXG4gICAgYW5nbGU6MzYwKk1hdGgucmFuZG9tKCkqKE1hdGguUEkvMTgwKVxyXG4gICAgZGlyZWN0aW9uOiEhKE1hdGgucmFuZG9tKCkgPiAwLjUpXHJcbiAgICByYWRpdXM6cmFkaXVzXHJcbiAgICBudW1iZXI6fn4ocmFkaXVzLzEwICsgTWF0aC5yYW5kb20oKSozKVxyXG5cclxuICBkcmF3OiAoY3R4KSAtPlxyXG4gICAgQGNsZWFyKGN0eClcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCJcclxuICAgIGNvbnNvbGUubG9nKEByYW5kU3BpcmFsKCkpO1xyXG4gICAgZHJhdy5zcGlyYWwuY2FsbCBjdHgsIDE3ICwgQHJhbmRTcGlyYWwoKSwgKCgpLT5AcmFuZFNwaXJhbCgpKS5iaW5kKEApXHJcbiAgICBAYW5pbS5wYXVzZSgpO1xyXG4gICAgcmV0dXJuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBmcmFuaW0oY2FudmFzZUlkLCBjb250ZXh0KSB7XG4gICAgdmFyIHdpZHRoICA9ICB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzZUlkKSxcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZSxcbiAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICBjdHggPSBkb21FbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBkb21FbGVtZW50LndpZHRoID0gd2lkdGg7XG4gICAgZG9tRWxlbWVudC5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICBmdW5jdGlvbiByZWNhbGN1bGF0ZSgpIHtcbiAgICAgICAgaWYgKHdpZHRoICAhPT0gd2luZG93LmlubmVyV2lkdGggfHwgaGVpZ2h0ICE9PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIGRvbUVsZW1lbnQud2lkdGggID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICBkb21FbGVtZW50LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoICA9IGRvbUVsZW1lbnQud2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSBkb21FbGVtZW50LmhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGlvbkNhbGxiYWNrKHRpbWUpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuY29uZmlnICYmIGNvbnRleHQuY29uZmlnLmZ1bGxTaXplKSB7XG4gICAgICAgICAgICByZWNhbGN1bGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0LnVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29udGV4dC51cGRhdGUodGltZSk7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXcoY3R4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhdyhjdHgsIHRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzUnVubmluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQpO1xuICAgICAgICAgICAgcmVxdWVzdElkID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5hbmltID0ge1xuICAgICAgICBnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoY29udGV4dC5jb25maWcgJiYgY29udGV4dC5jb25maWcuZnVsbFNpemUpID8gaGVpZ2h0IDogZG9tRWxlbWVudC5oZWlnaHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFdpZHRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGNvbnRleHQuY29uZmlnICYmIGNvbnRleHQuY29uZmlnLmZ1bGxTaXplKSA/IHdpZHRoIDogZG9tRWxlbWVudC53aWR0aDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzdW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXF1ZXN0SWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGNvbnRleHQuc2V0dXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGV4dC5zZXR1cChjdHgpO1xuICAgIH1cbiAgICByZXF1ZXN0SWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkNhbGxiYWNrKTtcblxuICAgIHJldHVybiBjb250ZXh0O1xufVxuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnJhbmltO1xufSIsIi8qXG4gKiBudW1iZXJlclxuICogaHR0cHM6Ly9naXRodWIuY29tL3NhZmFyZWxpL251bWJlcmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IElyYWtsaSBTYWZhcmVsaVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIG1hdGggPSBmdW5jdGlvbihvcGVyYXRpb24sIGFyZ3Mpe1xuICAgIHJldHVybiBuZXcgTnVtYmVyZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uKHAsIGMpe1xuICAgICAgICAgICAgdmFyIGEgPSAocCAmJiBwLmdldCkgPyBwLmdldCgpIDogcDtcbiAgICAgICAgICAgIHZhciBiID0gKGMgJiYgYy5nZXQpID8gYy5nZXQoKSA6IGM7XG4gICAgICAgICAgICBzd2l0Y2gob3BlcmF0aW9uKXtcbiAgICAgICAgICAgICAgICBjYXNlICdwbHVzJzogcmV0dXJuIGEgKyBiO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21pbnVzJzogcmV0dXJuIGEgLSBiO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Rpdic6IHJldHVybiBhIC8gYjtcbiAgICAgICAgICAgICAgICBjYXNlICdtdWx0JzogcmV0dXJuIGEgKiBiO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21vZCc6IHJldHVybiBhICUgYjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bmtub3duIG9wZXJhdGlvbiAnK29wZXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gTnVtYmVyZXIodmFsdWUpe1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbHVlO1xufVxuXG5OdW1iZXJlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgdiA9IHRoaXMuX192YWx1ZTtcbiAgICBpZih0eXBlb2YgdiA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdigpO1xuICAgIGVsc2UgcmV0dXJuIHY7XG59O1xuXG5OdW1iZXJlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xufTtcbk51bWJlcmVyLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIG5ldyBOdW1iZXJlcih0aGlzLl9fdmFsdWUpO1xufTtcblxuWydwbHVzJywgJ21pbnVzJywgJ2RpdicsICdtdWx0JywgJ21vZCddLmZvckVhY2goZnVuY3Rpb24obmFtZSl7XG4gICAgTnVtYmVyZXIucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICBhcmdzLnVuc2hpZnQodGhpcy5jbG9uZSgpKTtcbiAgICAgICAgdGhpcy5fX3ZhbHVlID0gKG1hdGgobmFtZSwgYXJncykpLl9fdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBOdW1iZXJlcltuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbWF0aChuYW1lLFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlcmVyOyJdfQ==
