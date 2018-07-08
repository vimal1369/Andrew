import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import { requestApiData } from "../../Actions/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    componentDidMount (){
       // this.props.requestApiData({"name":"vimal"});
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    isValid() {
        const {errors, isValid} = this.validateInput(this.state);

        if (!isValid) {
            this.setState({errors});
        }

        return isValid;
    }

    validateInput(data) {
        let errors = {};

        if (Validator.isEmpty(data.email)) {
            errors.email = 'Email is required';
            errors.emailError = true;
        }

        if (Validator.isEmpty(data.password)) {
            errors.password = 'Password is required';
            errors.passwordError = true;
        }

        return {
            errors,
            isValid: isEmpty(errors)
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.requestApiData(this.state);
        }
    }


    render() {
        const {errors, email, password} = this.state;
        return (
            <span>
               <div className="section-content center-align login-content">
                          <h2>Login to Collectively</h2>
                          <div className="row">
                            <form className="col s8 offset-s2" onSubmit={this.handleSubmit}>
                              <div className="row">
                                <div className="input-field col s12">
                                      <TextFieldGroup
                                          field="email"
                                          label="Username / Email"
                                          value={email}
                                          error={errors.email}
                                          onChange={this.onChange}
                                      />
                                </div>
                                <div className="input-field col s12"><TextFieldGroup
                                    field="password"
                                    label="Password"
                                    value={password}
                                    error={errors.password}
                                    onChange={this.onChange}
                                    type="password"
                                />
                                  <div className="forgot-psw">
                                      <a href="">Forgot Password?</a>
                                  </div>
                                </div>
                                <div className="col s12">
                                    <div className="recapcha z-depth-2">CAPTCHA DIV</div>
                                </div>
                                <div className="col s12">
                                  <button className="btn waves-effect waves-light primary-btn col s12" type="submit"
                                          name="action">Login
                                    <i className="material-icons">arrow_forward</i>
                                  </button>
                                </div>
                                <div className="col s12">
                                    <div className="create-account">
                                        <h5>New to Collectively? <a href="">Create an Account</a></h5>
                                    </div>
                                </div>

                              </div>
                            </form>
                        </div>

                        </div>
          </span>
        )
    }
}

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);