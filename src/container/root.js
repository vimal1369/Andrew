import React from 'react';
import '../materialize.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../style.css';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header/header';
import Footer from "../components/Footer/footer";


class Root extends React.Component {

    render() {
        return (
            <div id="wrapper">
                <div className="container">
                    <div className="main-content z-depth-3">
                        <Header />
                            {this.props.children}
                    </div>
                </div>
                <Footer/>
            </div>
    )
    }
    }
    export default withRouter(Root);