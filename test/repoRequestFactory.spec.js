describe('factory: RepoRequest', function(){
  var repoRequest,repos =[{
    "foo": "bar"
  }];

  beforeEach(module('AngularRequirements'));

  beforeEach(inject(function(RepoRequest){
    repoRequest = RepoRequest;
  }));

  var httpBackend;
  beforeEach(function(){
  });

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
    .when("GET", "https://api.github.com/users/gwpmad/repos?access_token=7bafccc58c21a85c420a826cb1f7ffa218fa959d")
    .respond(
      { repos: repos }
    );
  }));

  afterEach(function(){
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('responds to query', function(){
    expect(repoRequest.query).toBeDefined();
  });

  it('returns repos', function(){
    console.log('repos: '+repos);
    repoRequest.query()
    .then(function(response){
      expect(response.data.repos).toEqual(repos);
    });
    httpBackend.flush();
  });
});
