(function() {

  function repoRequest($http) {
    var queryURL = '/getrepositories';

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
