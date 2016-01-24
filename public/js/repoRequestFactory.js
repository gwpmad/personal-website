(function() {

  function repoRequest($http) {
    var auth = "feefe",queryURL = "https://api.github.com/users/gwpmad/repos?access_token=f827" + auth + "7e6bb6d16d2f0585a4fbb6ae765221a";

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
