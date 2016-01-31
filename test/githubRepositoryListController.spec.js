describe('GithubRepositoryListController', function() {
  var ctrl, repoRequestFactoryFake, scope, repos;

  beforeEach(module('AngularRequirements'));

  beforeEach(function() {
    repoRequestFactoryFake = jasmine.createSpyObj('repoRequestFactoryFake', ['query']);
    module({
      RepoRequest: repoRequestFactoryFake
    });
  });

  beforeEach(inject(function($controller) {
    ctrl = $controller('GithubRepositoryListController');
  }));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope;
  }));

  beforeEach(function(){
    repos = [{
      "foo": "bar"
    }];
  });

  beforeEach(inject(function($q) {
    repoRequestFactoryFake.query.and.returnValue($q.when({
      data: {
        repos: repos
      }
    }));
  }));

  describe('Pulling in repositories', function(){
    it('initialises with an empty array of repos', function() {
      expect(ctrl.reposObject).toBeUndefined();
    });

    it('pulls in Github repositories', function(){
      ctrl.doRepoRequest();
      scope.$apply();
      expect(ctrl.reposObject.repos).toEqual(repos);
    });
  });
});
