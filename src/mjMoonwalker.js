var mjMoonwalker = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // console.log(Dancer.prototype.step);
  this.$node = $('<img src="img/mj_action2.gif" class="mj-dancer">');
  this.setPosition(top, left);
  // var context = this;
  // $(this.$node).click(function(){
  //   context.$node.replaceWith( "<img src='img/mj_dance2.gif' class='mj-dancer' style='top: "+top+"px; left: "+left+"px;'>" );
  // });
};
mjMoonwalker.prototype = Object.create(Dancer.prototype);
mjMoonwalker.prototype.constructor = mjMoonwalker;

mjMoonwalker.prototype.step = function(){
  Dancer.prototype.step.call(this);
  $(this.$node).animate({
    left: "10000px"
  }, 80000, "swing" );
};
