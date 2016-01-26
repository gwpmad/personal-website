describe('GithubRepositoryListController', function() {
  var ctrl;

  beforeEach(module('AngularRequirements'));

  beforeEach(inject(function($controller) {
    ctrl = $controller('ParallaxController');
  }));

  describe('Background', function(){
    it('initialises with an empty array of repos', function() {
      expect(ctrl.background).toBeDefined();
    });
  });
});
