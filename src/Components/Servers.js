import React from 'react';
import Collapsible from 'react-collapsible';
import ServersList from '../actions/serversAction';
import $ from 'jquery';
// import PopUp from './PopUp';

class Servers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            popUpData: '',
            dates: {
                from: '',
                to: ''
            }
        }
    }

    onChange(e) {
        this.setState({
            search: e.target.value,
        });
    }

    onClick(server) {
        this.setState({
            popUpData: server,
        })
    }

    saveChanges() {
        if($('#from').val() === '' || $('#to').val() === ''  ) {
            alert("Can't save change of empty string");
        } else {
            this.setState({
                popUpData: ''
            });
            this.setState({
                dates: {
                    from: $('#from').val(),
                    to: $('#to').val()
                }
            });
        }
    }


    render() {

        let ServerMapping = ServersList.filter(
            (server) => {
                if (server.Short_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || server.Internal_IP.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                    return server;
                } else {
                    return false;
                }
            }
        );
        ServerMapping = ServerMapping.map((server) => {
            const serverHeaderData = (
                <div className="rowContainer serversRowContainer">
                    <li className="col-md-3 col-xs-3">{server.Internal_IP}</li>
                    <li className="col-md-3 col-xs-3">{server.Short_name}</li>
                    <li className="col-md-3 col-xs-3">{server.Operator}</li>
                    <li className="col-md-3 col-xs-3">Group name</li>
                </div>
            );

            const serverData = (
                <div className="serverData">
                    <ul>
                        <li className="col-md-4"><b>Name: </b>{server.Short_name}</li>
                        <li className="col-md-4"><b>Host Name:</b> {server.Host_name}</li>
                        <li className="col-md-4"><b>IP: </b>{server.Internal_IP}</li>
                        <li className="col-md-4"><b>Owner: </b>{server.Owner}</li>
                        <li className="col-md-4"><b>App Version:</b> {server.App_Version}</li>
                        <li className="col-md-4"><b>Environment: </b>{server.Environment}</li>
                        <li className="col-md-4"><b>Managed By Cheaf?: </b> {server.Managed_By_chef}</li>
                        <li className="col-md-4"><b>OS: </b>{server.OS_version}</li>
                        <li>
                            <button type="button" className="btn btn-primary" data-toggle="modal" value={server}
                                    onClick={() => this.onClick(server)} data-target="#gridSystemModal">Set Dates
                            </button>
                        </li>
                    </ul>
                </div>
            );
            return (
                <Collapsible trigger={serverHeaderData} key={server.Internal_IP}>
                    {serverData}
                </Collapsible>
            );
        });
        return (
            <div className="container">
                <div className="modal fade" id="gridSystemModal" tabIndex="-1" role="dialog"
                     aria-labelledby="gridSystemModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="gridSystemModalLabel">Set dates
                                    for {this.state.popUpData.Short_name}</h4>
                            </div>
                            <div className="modal-body">
                                <h4>Server Name: {this.state.popUpData.Short_name}</h4>
                                <h4>Server IP: {this.state.popUpData.Internal_IP}</h4>
                                <h4>Owner: {this.state.popUpData.Owner}</h4>
                            </div>

                            <label htmlFor="from">From</label>
                            <input type="text" id="from" name="from" />
                            <label htmlFor="to">to</label>
                            <input type="text" id="to" name="to" />

                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary btnSaveCahnges" onClick={this.saveChanges.bind(this)}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Search:</h2>
                <div className="searchBox">
                    <input
                        type="text"
                        className="form-control"
                        onChange={ this.onChange.bind(this) }
                        value={this.state.search}
                    />
                </div>
                <div className="content">
                    <div className="serverContainer clearfix">
                        <div className="rowContainer">
                            <div className="serverIp rowHeader col-md-3 col-xs-3">Server IP</div>
                            <div className="serverName rowHeader col-md-3 col-xs-3">Server Name</div>
                            <div className="serverStatus rowHeader col-md-3 col-xs-3">Server Status</div>
                            <div className="serverGroup rowHeader col-md-3 col-xs-3">Group</div>
                        </div>
                    </div>
                    {ServerMapping}
                </div>
            </div>
        )
    }
}

export default Servers;