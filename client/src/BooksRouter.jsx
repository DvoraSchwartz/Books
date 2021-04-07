import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Home, Books } from './pages';

export default function BooksRouter() {
    return (
        <Router>
            <button><Link to='/'>Home</Link></button>
            <button><Link to='/books'>Books</Link></button >
            <Switch>
                <Route exact path="/books" component={Books} />
                <Route exact path="/" component={Home} />
            </Switch>

        </Router >
    );
}