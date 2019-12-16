import React from 'react';

import Nav from './Nav';
import About from './About'
import Contact from './Contact';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Shop from './Shop';
import Item from './Item';

function App(){
    return(
        <Router>
        <div className="App">
        <Nav></Nav>
        
            <Switch>
                <Route path="/" exact component={Home}>
                   
                </Route>
                <Route path="/shop" exact component={Shop}>
                   
                </Route>
                <Route path="/about" component={About}>
                          
                </Route>
                <Route path="/contact" component={Contact}>
                   
                </Route>
                <Route path="/shop/:id=" component={Item}/>
            </Switch>
            </div>
        </Router>
    )
}

const Home=()=>(
    <div>
        <h1> Home </h1>
    </div>
);
   export default App;
