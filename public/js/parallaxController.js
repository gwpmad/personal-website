(function(){
  function parallaxController(parallaxHelper){
    self = this;
    self.background = parallaxHelper.createAnimator(-0.3);
  }

  angular.module('AngularRequirements')
  .controller('ParallaxController',['parallaxHelper',parallaxController]);
}());
