import React from 'react';
import footerLogo from '../../images/footer-logo.png';
class Footer extends React.Component {

    render() {
        return (
            <span>
            <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l4 s12">
                <img className="responsive-img" src={footerLogo} alt="" />
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Terms and conditions</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="col l8 s12 ">
                <h5 className="white-text">PRIVACY & LEGAL</h5>
                <p>For more information, or to contact the classNames administrator or clads counsel at no cost regarding
all settlements, visit the official settlement websites. Collectively is not a law firm and does not give
‘legal advice. Collectively is not associalted with the className administrator, the court, className council or
any other official parties associated with the settlements. For claimants qualifying and/or filling a
claim to participate, pleasenote that a third-party service is not required to participate in the monetary
relief of settlements. No-cost assistance from the className administrator and className counsel is availabale.
More information can be found by contacting the className administrator or className council directly.</p>
<p>
            Collectively © 2018 All rights reserved.
            </p>

              </div>
            </div>
          </div>
        </footer>
            </span>
    )
    }
}

export default Footer;