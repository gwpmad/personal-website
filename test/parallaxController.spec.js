describe('GithubRepositoryListController', function() {
  var ctrl;

  beforeEach(module('AngularRequirements'));

  beforeEach(inject(function($controller) {
    ctrl = $controller('ParallaxController');
  }));

  describe('Changing background to parallax setting', function(){
    it('initialises without background set to parallax setting', function() {
      expect(ctrl.background).not.toBeDefined();
    });

    it('changes background to parallax setting', function(){
      ctrl.setBackgroundForParallax();
      expect(ctrl.background).toBeDefined();
    });
  });
});
