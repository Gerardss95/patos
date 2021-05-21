import React from 'react'
import { Route, Switch} from "react-router-dom";
import MainPage from './Mainpage';


function App() {
  return (
  <div>
    <Switch>
      <Route path={'/'} component={MainPage} />
    </Switch>
    
  </div>
  );
}

export default App;
