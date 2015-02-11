var Dancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');

  this.setPosition(top, left);
  this.lineTop = top;
  this.lineLeft = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};

Dancer.prototype.step = function(){
  this.timeout = setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // I know I'm being lazy :P
  var styleSettings = {
    'bottom': top,
    'left': left
  };
  this.$node.animate(styleSettings);
};

Dancer.prototype.lineUp = function() {
  clearTimeout(this.timeout);
  this.setPosition(50, this.lineLeft);
};
