import React from 'react';
import { header } from 'react-materialize';
import logo from '../../images/logo.png';
class Header extends React.Component {

    render() {
        return (
            <span>
            <header className="section">
                <div className="logo center-align"><a href=""><img className="responsive-img" src={logo} alt=""/></a></div>
                {/**-- Logo Ends --**/}
            </header>
        <div className="divider hdr-bdr"></div>
            </span>
    )
    }
}

export default Header;