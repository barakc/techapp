import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userData} from '../actions/userData';

class Users extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: {}
        };
    }

    createUsersList() {
        return this.props.users.map(user => {
            if (this.props.activeAction.id === user.id) { this.state.data = this.props.activeAction; } else { this.state.data = ''; }
            return (
                <div className="rowWrapper">
                    <div
                        key={user.id}
                        className="rowContainer"
                        onClick={ () => this.props.userData(user) }
                    >
                        <div className="userName">{user.id}</div>
                        <div className="userGroup">{user.name}</div>
                    </div>
                </div>
            )
        });
    }
    render() {
        return (
            <div className="container serverContainer">
                <div className="rowContainer">
                    <div className="userID rowHeader">User ID</div>
                    <div className="userName rowHeader">User Name</div>
                </div>
                { this.createUsersList() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        activeAction: state.activeAction
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({userData: userData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);