import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'

class App extends Component {
    render () {
      return (<Home />)
      // return (
      //     <Router history={browserHistory}>
      //       <Route component={App}>
      //         <Route path='/' component={Home} />
      //         <Route path='*' component={NotFound} />
      //       </Route>
      //     </Router>
      // )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('app'))