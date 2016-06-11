var https = require('https');

module.exports = function(app) {
  app.get('/getrepositories', getRepositories);
}

function getRepositories (req, res) {
  var mainRes = res;
  var requestHostName = 'api.github.com';
  // Env variable set on Heroku using https://devcenter.heroku.com/articles/config-vars
  var requestPath = '/users/gwpmad/repos?access_token=' + process.env.API_KEY;

  https.get({
    'hostname': requestHostName,
    'path': requestPath,
    'method': 'GET',
    'headers': {
      'User-Agent': 'gwpmad',
    },
  }, function(res) {
    var body = '';
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      body = JSON.parse(body);
      mainRes.send(body);
    })
  })
  .on('error', (err) => {
    console.log('problem with request:', err);
  });
}
