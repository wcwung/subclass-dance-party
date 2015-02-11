var mjMoonwalker = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="img/mj_action2.gif" class="mj-moonwalker">');
  this.setPosition(top, left);
  this.resetTop = top;
  this.resetLeft = left;
  this.resetMoonwalk();
};
mjMoonwalker.prototype = Object.create(Dancer.prototype);
mjMoonwalker.prototype.constructor = mjMoonwalker;

mjMoonwalker.prototype.step = function(){
  Dancer.prototype.step.call(this);
};
mjMoonwalker.prototype.resetMoonwalk = function() {
  var context = this;
  this.$node.animate({left: "+="+($("body").width()+50)}, 10000, "linear", function(){
    context.$node.css("left", -50);
  });
  setTimeout(this.resetMoonwalk.bind(this), 10000);
}
