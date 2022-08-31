import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './companents/home';
import Coments from './companents/coments';

function App() {
  return (
    <Router>  
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/coments" exact component={Coments}/>
        </Switch>     
    </Router>
  );
}

export default App;
