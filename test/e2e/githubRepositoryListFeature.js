describe('Github Repository List', function(){

  var repoQuantity = 10;

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('lists the expected number of repositories', function(){
    element.all(by.css('.repository-li')).then(function(items) {
      expect(items.length).toBe(repoQuantity);
    });
  });
});
