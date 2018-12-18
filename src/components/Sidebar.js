import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="side">
                <ul>
                    <i className="fa fa-dropbox" ></i>
                    <li>Profile</li>
                    <li>Setting</li>
                    <li>Log Out</li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;