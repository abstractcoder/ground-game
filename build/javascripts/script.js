(function() {

  this.Entity = (function() {

    function Entity() {}

    Entity.prototype.update = function(ctx) {
      throw "Override Entity.update()";
    };

    Entity.prototype.draw = function(ctx) {
      throw "Override Entity.draw()";
    };

    return Entity;

  })();

}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Ball = (function(_super) {

    __extends(Ball, _super);

    function Ball(x, y, r, color) {
      this.x = x;
      this.y = y;
      this.r = r != null ? r : 10;
      this.color = color != null ? color : "#f00";
      this.dx = 20;
      this.dy = 20;
    }

    Ball.prototype.update = function(ctx) {
      if (this.x <= 0 || this.x >= window.innerWidth) {
        this.dx *= -1;
      }
      if (this.y <= 0 || this.y >= window.innerHeight) {
        this.dy *= -1;
      }
      this.x += this.dx;
      return this.y += this.dy;
    };

    Ball.prototype.draw = function(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
      ctx.closePath();
      return ctx.fill();
    };

    return Ball;

  })(Entity);

}).call(this);
(function() {

  this.Engine = (function() {

    function Engine() {
      var _this = this;
      window.addEventListener('load', function() {
        return _this.init();
      }, false);
      window.addEventListener('resize', function() {
        return _this.resize();
      }, false);
      setInterval(function() {
        return _this.gameloop();
      }, 1000 / 60);
    }

    Engine.prototype.init = function() {
      var color, h, i, r, w, _i, _results;
      this.canvas = document.getElementsByTagName('canvas')[0];
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.ctx = this.canvas.getContext('2d');
      this.entities = [];
      _results = [];
      for (i = _i = 0; _i <= 5; i = ++_i) {
        h = Math.random() * this.canvas.height;
        w = Math.random() * this.canvas.width;
        h -= h % 20;
        w -= w % 20;
        h += 1;
        w += 1;
        r = 10;
        color = "#" + ((parseInt(Math.random() * 16 * 16 * 16)).toString(16));
        _results.push(this.entities.push(new Ball(w, h, r, color)));
      }
      return _results;
    };

    Engine.prototype.gameloop = function() {
      this.update();
      return this.draw();
    };

    Engine.prototype.clear = function() {
      return this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    Engine.prototype.update = function() {
      var entity, _i, _len, _ref, _results;
      _ref = this.entities;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        entity = _ref[_i];
        _results.push(entity.update(this.ctx));
      }
      return _results;
    };

    Engine.prototype.draw = function() {
      var entity, _i, _len, _ref, _results;
      _ref = this.entities;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        entity = _ref[_i];
        _results.push(entity.draw(this.ctx));
      }
      return _results;
    };

    Engine.prototype.resize = function() {
      if (navigator.userAgent.match(/iphone|ipad|ipod|android/i)) {
        document.body.style.height = (window.innerHeight + 50) + 'px';
      }
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.canvas.style.width = this.canvas.width + 'px';
      this.canvas.style.height = this.canvas.height + 'px';
      return window.setTimeout(function() {
        return window.scrollTo(0, 1);
      }, 1);
    };

    return Engine;

  })();

}).call(this);
(function() {
  var engine;

  window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  };

  engine = new Engine();

}).call(this);
