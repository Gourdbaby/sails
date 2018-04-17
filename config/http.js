/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * The order in which middleware should be run for HTTP requests.           *
    * (This Sails app's routes are handled by the "router" middleware below.)  *
    *                                                                          *
    ***************************************************************************/

    order: [
      'cookieParser',
      'bodyParser',
      'session',
      'passportInit',
      'passportSession',
      'verifiesUser',
      'compress',
      'poweredBy',
      'router',
      'www',
      'favicon'
    ],


    /***************************************************************************
    *                                                                          *
    * The body parser that will handle incoming multipart HTTP requests.       *
    *                                                                          *
    * https://sailsjs.com/config/http#?customizing-the-body-parser             *
    *                                                                          *
    ***************************************************************************/

    bodyParser: (function _configureBodyParser(){
      var skipper = require('skipper');
      var middlewareFn = skipper({ strict: true });
      return middlewareFn;
    })(),

    verifiesUser: (function (){
      let white = ['/user', '/createUser'];
      return function (req,res,next) {
        if(req.user || white.indexOf(req.path) != -1){
          return next();
        }
        res.send({
          status:'noLogin',
          message:'当前登录状态已失效，请重新登录'
        })
      };
    })(),

    passportInit: (function (){
      var passport = require('passport');
      var reqResNextFn = passport.initialize();
      return reqResNextFn;
    })(),

    passportSession: (function (){
      var passport = require('passport');
      var reqResNextFn = passport.session();
      return reqResNextFn;
    })(),
  },

};
