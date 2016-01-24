(function() {


  function githubRepositoryListController(RepoRequest) {
    self = this;

    self.doRepoRequest = function() {
      RepoRequest.query()
        .then(function(response) {
          self.reposArray = response.data;
        });
    };
  }
  angular.module('AngularRequirements')
  .controller('GithubRepositoryListController', ['RepoRequest',githubRepositoryListController]);

}());
