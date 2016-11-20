import React from 'react';
import Collapsible from 'react-collapsible';
import groupsData from '../data/groupsData';

class Groups extends React.Component {

    render() {
        var groupList = groupsData.map((map)=> {
            const serverHeaderData = (
                <div className="rowContainer serversRowContainer">
                    <li>{map.group}</li>
                    <li>{map.owner_name}</li>
                </div>
            );

            const userData = (
                <div className="serverData">
                    <ul>
                        <li>-- {map.id}</li>
                        <li>-- {map.group}</li>
                        <li>-- {map.owner_name}</li>
                    </ul>
                </div>
            );
            return (
                <Collapsible trigger={serverHeaderData} key={map.id}>
                    {userData}
                </Collapsible>
            );
        });
        return (
            <div className="container serverContainer">
                <div className="rowContainer">
                    <div className="serverIp rowHeader">Group Name</div>
                    <div className="serverName rowHeader">Mange By</div>
                </div>
                {groupList}
            </div>
        )
    }
}

export default Groups;