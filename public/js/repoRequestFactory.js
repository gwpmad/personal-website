(function() {

  function repoRequest($http) {
    // Env variable set on Heroku using https://devcenter.heroku.com/articles/config-vars
    var queryURL = "https://api.github.com/users/gwpmad/repos?access_token=" + process.env.API_KEY;

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
