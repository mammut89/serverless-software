const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const ReactRouter = require('react-router')


const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
     <Route path='/' component={Landing}>
       <IndexRoute component={Landing} />
     </Route>
   </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
