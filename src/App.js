import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ItemDetails from './components/ItemDetails'
import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/not-found" component={NotFound} />
      <Route exact path="/products/:id" component={ItemDetails} />
      <Redirect to="not-found" />
    </Switch>
  </div>
)

export default App
