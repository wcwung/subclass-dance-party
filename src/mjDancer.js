var mjDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // console.log(Dancer.prototype.step);
  this.$node = $('<img src="img/mj_dance1.gif" class="mj-dancer">');
  this.setPosition(top, left);
  var context = this;
  $(this.$node).click(function(){
    //note to self, replace back to top
    context.$node.replaceWith( "<img src='img/mj_dance2.gif' class='mj-dancer' style='bottom: "+top+"px; left: "+left+"px;'>" );
  });
};
mjDancer.prototype = Object.create(Dancer.prototype);
mjDancer.prototype.constructor = mjDancer;

mjDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // var context = this;
  // this.newTop = this.top;
  // this.newLeft = this.left;
  // this.$node.replaceWith( "<img src='img/mj_action1.gif' class='mj-dancer' style='top: "+this.top+"px; left: "+this.left+"px;'>" );
  // this.$node.replaceWith( "<img src='img/mj_dance2.gif' class='mj-dancer' style='top: "+this.top+"px; left: "+this.left+"px;'>" ).delay( 800 );
};
