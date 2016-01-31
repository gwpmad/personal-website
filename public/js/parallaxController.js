(function(){
  function parallaxController(parallaxHelper){
    var self = this,easingFactor = -0.3;

    self.setBackgroundForParallax = function(){
      self.background = parallaxHelper.createAnimator(easingFactor);
    };
  }

  angular.module('AngularRequirements')
  .controller('ParallaxController',['parallaxHelper',parallaxController]);
}());
