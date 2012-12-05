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
