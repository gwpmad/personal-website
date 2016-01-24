(function() {

  function repoRequest($http) {
    var queryURL = "https://api.github.com/users/gwpmad/repos?access_token=7bafccc58c21a85c420a826cb1f7ffa218fa959d";

    return {
      query: function() {
        return ($http({
          url: queryURL,
          method: 'GET'
        }));
      }
    };
  }

  angular.module('AngularRequirements')
    .factory('RepoRequest', ['$http', repoRequest]);

})();
