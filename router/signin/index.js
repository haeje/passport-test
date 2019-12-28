const express = require('express');
const router = express.Router();
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    console.log('serializeUser', user);
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
      console.log('deserializeUser', id);
      done(null, id);
  });

router.route('/')
  .get(function(req, res) {
    res.render('login.ejs')
  })
  .post( 
      passport.authenticate('local', { successRedirect: '/',
                                        failureRedirect: '/signin',
                                        failureFlash: true })
  )

  passport.use(new LocalStrategy(
    function(username, password, done) {

        const result = signIn(username, password);
        if( result === 0 ) return done(err);
        if( result === 1) return done( null, false, {message:"Incoreect username"});
        else return done(null, result);
    }
  ));


  function signIn(username, passwd){
      if( !username || !passwd ) {
            console.log('!username || !passwd ');
            return 0;
        }
      else if( username !== "haja"){
        console.log('username !== "haja"');
        return 1;
      } 
      else return {username, password : passwd, id : 2};


  }

module.exports = router;