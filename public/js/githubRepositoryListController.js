(function() {
  function githubRepositoryListController(RepoRequest) {
    var self = this;

    self.doRepoRequest = function() {
      RepoRequest.query()
        .then(function(response) {
          self.reposObject = response.data;
        });
    };
  }
  angular.module('AngularRequirements')
  .controller('GithubRepositoryListController', ['RepoRequest',githubRepositoryListController]);

}());
