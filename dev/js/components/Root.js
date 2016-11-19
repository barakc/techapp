import React from 'react';
import {Link} from 'react-router'

class Root extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <div className="wrapper">
                        <div id="logo">
                            <img src="images/logo.png" alt="techFinancials"/>
                        </div>
                        <nav>
                            <ul className="navbar">
                                <li><Link to={"/servers"} activeClassName={"activeNav"}>Servers</Link></li>
                                <li><Link to={"/users"} activeClassName={"activeNav"}>Users</Link></li>
                                <li><Link to={"/groups"} activeClassName={"activeNav"}>Groups</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div className="content">
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Root;