import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Root from './components/Root'
import Servers from './components/Servers'
import Users from './components/Users'
import Groups from './components/Groups'
import '../scss/style.scss';

class Main extends React.Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root} >
                    <IndexRoute component={Servers} />
                    <Route path={"users"} component={Users} />
                    <Route path={"servers"} component={Servers} />
                    <Route path={"groups"} component={Groups} />
                </Route>
            </Router>
        )
    }
}

export default Main;