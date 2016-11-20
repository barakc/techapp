import React from 'react';
import Collapsible from 'react-collapsible';
import usersData from '../data/usersData';

class Users extends React.Component {

    render() {
        var userList = usersData.map((map)=> {
            const userHeaderData = (
                <div className="rowContainer serversRowContainer">
                    <li>{map.full_name}</li>
                    <li>{map.position}</li>
                    <li>{map.email}</li>
                    <li>{map.group}</li>
                </div>
            );

            const userData = (
                <div className="serverData">
                    <ul>
                        <li>{map.full_name}</li>
                        <li>{map.position}</li>
                        <li>{map.email}</li>
                        <li>{map.group}</li>
                    </ul>
                </div>
            );
            return (
                <Collapsible trigger={userHeaderData} key={map.id}>
                    {userData}
                </Collapsible>
            );
        });
        return (
            <div className="container serverContainer">
                <div className="rowContainer">
                    <div className="serverIp rowHeader">Name</div>
                    <div className="serverName rowHeader">Position</div>
                    <div className="serverStatus rowHeader">Email</div>
                    <div className="serverGroup rowHeader">Group</div>
                </div>
                {userList}
            </div>
        )
    }
}

export default Users;