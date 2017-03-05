const React = require('react')
const { Link } = require('react-router')
var FontAwesome = require('react-fontawesome');
require('../public/css/sass/style.scss');


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
        </div>
      </div>
    </div>
    <div id="footer">
      <img src="public/images/AWS_logo_poweredby_black_127px.png"/>
    </div>
  </div>
)


module.exports = Landing
