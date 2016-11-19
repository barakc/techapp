import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {serverData} from '../actions/serverData';

class Servers extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: {}
        };
    }

    createServersList() {
        return this.props.servers.map(server => {
            if (server.status) { server.status = <div className='serverStatus serverOn'>on</div> } else { server.status = <div className='serverStatus serverOff'>off</div> }
            if (this.props.activeAction.id === server.id) { this.state.data = this.props.activeAction; } else { this.state.data = ''; }
            return (
                <div className="rowWrapper">
                    <div
                        key={server.id}
                        className={this.state.data ? 'active rowContainer' : "rowContainer"}
                        onClick={ () => this.props.serverData(server) }
                    >
                        <div className="serverIp">{server.ip}</div>
                        <div className="serverName">{server.name}</div>
                        { server.status }
                        <div className="serverGroup">{server.group}</div>
                    </div>
                    <div className="serverData">
                        <p className="dataID">{this.state.data.id}</p>
                        <p>{this.state.data.name}</p>
                        <p>{this.state.data.group}</p>
                        <p>{this.state.data.ip}</p>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="container serverContainer">
                <div className="rowContainer">
                    <div className="serverIp rowHeader">Server IP</div>
                    <div className="serverName rowHeader">Server Name</div>
                    <div className="serverStatus rowHeader">Server Status</div>
                    <div className="serverGroup rowHeader">Group</div>
                </div>
                { this.createServersList() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        servers: state.servers,
        activeAction: state.activeAction
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({serverData: serverData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Servers);