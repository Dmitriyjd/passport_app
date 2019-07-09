import express from 'express';
import render from 'server/routes/renderer';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import userOauthRouth from 'server/routes/userOauth';
import keys from 'server/config/keys';
import 'server/config/passport-setup';

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  }),
);

server.use(passport.initialize());
server.use(passport.session());
server.use('/auth', userOauthRouth);

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res, next) => {
    const { user } = req;

    if (
      (user && !req.path.includes('/api/') && !req.path.includes('/auth/')) ||
      req.path === '/'
    ) {
      render(req, res);
      next();
    } else {
      res.redirect('/');
    }
  });
export default server;
