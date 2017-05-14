const React = require('react')
const { Link } = require('react-router')
const AuthService = require('./AuthService')
var FontAwesome = require('react-fontawesome');
require('../public/css/sass/style.scss');

const auth = new AuthService('Qf8kzqMP4z4dlup6vdZqxaTLAFcmu_Ee', 'serveless-software.eu.auth0.com');

var loggedInText = '';

if(auth.loggedIn() === true) {
  loggedInText = 'Congratulations youre authenticated'
} else {
  auth.login();
}


const Landing = () => (
  <div>
    <div className="container background">
      <div className="row">
        <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 text-center">
          <span className='heading'>SOMETHING SPECTACULAR IS ABOUT TO HAPPEN</span>
          <FontAwesome
            name='cloud'
            size='5x'
            spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
          <h3>{loggedInText}</h3>
        </div>
      </div>
    </div>
    <div id="footer">
      <img src="public/images/AWS_logo_poweredby_black_127px.png"/>
    </div>
  </div>
)


module.exports = Landing
