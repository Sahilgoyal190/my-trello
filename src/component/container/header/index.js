import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">
                            <i className="glyphicon glyphicon-home"></i>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;