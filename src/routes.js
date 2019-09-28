import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import Erro from './pages/erro'

const Routes = ()=>{
    return(
        <BrowserRouter>

            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='*' component={Erro} />
            </Switch>

        </BrowserRouter>
    );
}

export default Routes;