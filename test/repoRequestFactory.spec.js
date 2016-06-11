describe('factory: RepoRequest', function(){
  var repoRequest
  var repos =[{
    "foo": "bar"
  }];

  beforeEach(module('AngularRequirements'));

  beforeEach(inject(function(RepoRequest){
    repoRequest = RepoRequest;
  }));

  var httpBackend;
  var requestAddress = "/getrepositories";

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
    .when("GET", requestAddress)
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
    repoRequest.query()
    .then(function(response){
      expect(response.data.repos).toEqual(repos);
    });
    httpBackend.flush();
  });
});
