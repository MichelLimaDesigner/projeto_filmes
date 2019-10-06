import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Movie from './pages/movies';
import Erro from './pages/erro';

const Routes = ()=>{
    return(
        <BrowserRouter>

            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/filmes/:id" component={Movie} />
                <Route path='*' component={Erro} />
            </Switch>

        </BrowserRouter>
    );
}

export default Routes;