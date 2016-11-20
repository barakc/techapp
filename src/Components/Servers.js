import React from 'react';
import Collapsible from 'react-collapsible';
import serversData from '../data/serversData';

class Servers extends React.Component {
    render() {
        var serverList = serversData.map((map)=> {
            const serverHeaderData = (
                <div className="rowContainer serversRowContainer">
                    <li>{map.Internal_IP}</li>
                    <li>{map.Short_name}</li>
                    <li>{map.Operator}</li>
                    <li>Group name</li>
                </div>
            );

            const serverData = (
                <div className="serverData">
                    <ul>
                        <li>-- {map.Short_name}</li>
                        <li>-- {map.Host_name}</li>
                        <li>-- {map.Internal_IP}</li>
                        <li>-- {map.Owner}</li>
                        <li>-- {map.App_Version}</li>
                        <li>-- {map.Environment}</li>
                        <li>-- {map.Managed_By_chef}</li>
                        <li>-- {map.OS_version}</li>
                    </ul>
                </div>
            );
            return (
                <Collapsible trigger={serverHeaderData} key={map.Internal_IP}>
                    {serverData}
                </Collapsible>
            );
        });
        return (
            <div>
                <div className="container serverContainer">
                    <div className="rowContainer">
                        <div className="serverIp rowHeader">Server IP</div>
                        <div className="serverName rowHeader">Server Name</div>
                        <div className="serverStatus rowHeader">Server Status</div>
                        <div className="serverGroup rowHeader">Group</div>
                    </div>
                    {serverList}
                </div>
            </div>
        )
    }
}

export default Servers;