import React from "react";
import HomePage from "./HomePage";

function App(){
    return(
        <Switch>
        <Route exact path="/">
            <HomePage />
        </Route>
        </Switch>    
    )
}
export default App;