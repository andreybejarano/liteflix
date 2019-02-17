const fs = require('fs');

const bundle = require('../../../dist/server.bundle');

const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./src/client/index.html', 'utf-8')
});

module.exports = (req, res, next) => {
  bundle.default({ url: req.url }).then((app) => {
    const context = {
      title: 'Liteflix',
      meta: `
                <meta description="vuejs server side render">
            `
    };

    renderer.renderToString(app, context, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found');
        } else {
          res.status(500).end('Internal Server Error');
        }
      } else {
        res.end(html);
      }
    });
  }, (err) => {
    return res.status(err.code || 500).send(err);
  });
};
