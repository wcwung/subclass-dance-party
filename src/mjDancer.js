var mjDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="img/mj_dance1.gif" class="mj-dancer">');
  this.setPosition(top, left);
};
mjDancer.prototype = Object.create(Dancer.prototype);
mjDancer.prototype.constructor = mjDancer;

mjDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};
mjDancer.prototype.bustMoves = function(){
  this.$node.attr("src", "img/mj_dance2.gif");
  setTimeout((function(){this.$node.attr("src", "img/mj_dance1.gif");}).bind(this), 4200);
};
