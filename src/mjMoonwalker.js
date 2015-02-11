var mjMoonwalker = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // console.log(Dancer.prototype.step);
  this.$node = $('<img src="img/mj_action2.gif" class="mj-moonwalker">');
  this.setPosition(top, left);
  // var context = this;
  // $(this.$node).click(function(){
  //   context.$node.replaceWith( "<img src='img/mj_dance2.gif' class='mj-dancer' style='top: "+top+"px; left: "+left+"px;'>" );
  // });
  this.resetTop = top;
  this.resetLeft = left;
  // $(this.$node).animate({
  //   left: $("body").width()
  // }, 5000, "linear" );
  // this.timer = setInterval(this.reset.bind(this), 5000);
  this.resetMoonwalk();
};
mjMoonwalker.prototype = Object.create(Dancer.prototype);
mjMoonwalker.prototype.constructor = mjMoonwalker;

mjMoonwalker.prototype.step = function(){
  Dancer.prototype.step.call(this);
};
mjMoonwalker.prototype.resetMoonwalk = function() {
  var context = this;
  // var animateStyles = {
  //   left: "2000px"
  // };
  // this.$node.replaceWith('<img src="img/mj_action2.gif" class="mj-dancer" style="bottom: '+this.resetTop+'px; left: -50px;">')
  this.$node.animate({left: "+="+($("body").width()+50)}, 10000, "linear", function(){
    // console.log(this.resetLeft);
    context.$node.css("left", -50);
    // context.resetMoonwalk.bind(context);
  });
  // {
  //   duration: 5000,
  //   complete: function() {
  //     $(context.$node).replaceWith('<img src="img/mj_action2.gif" class="mj-dancer" style="bottom: '+context.resetTop+'px; left: -50px;">')
  //     context.resetMoonwalk();
  //     console.log(context.$node);
  //   }
  // );
  // console.log(this.resetMoonwalk);
  setTimeout(this.resetMoonwalk.bind(this), 10000);
}
