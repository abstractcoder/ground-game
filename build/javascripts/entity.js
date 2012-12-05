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
