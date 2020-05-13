import React from 'react'
import MailIcon from '../images/mail1.png'
import LockIcon from '../images/lock1.png'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

class LoginForm extends React.Component {

	constructor() {
		super();
		this.state = {
			btn: true,
			email: '',
			password: false,
			rememberLogin: false
		}
	}

	render() {

		const btnClicked = () => {

			let emailVerify = false;
			let passwordVerify = false;

			if (this.state.email == '') {
				document.getElementById('email').style.borderBottomColor = 'red';
			} else {
				emailVerify = true;
			}
			if (this.state.password == false) {
				document.getElementById('password').style.borderBottomColor = 'red';				
			} else {
				passwordVerify = true;
			}
			if (emailVerify == true && passwordVerify == true) {
				this.props.pageChange('dashboard');
			}
			
		}

		const checkEmail = e => {

			let typedText = e.target.value;
			let borderColor = '';
			let btnLogin = document.getElementById('btn-login');

			if(typedText.includes('@')) {
				borderColor = 'green';
				this.setState({email: typedText})
				// remove btn-disabled from login-btn if this.state.password == true
				if (this.state.password == true) {
					if(btnLogin.classList.contains('btn-disabled')) {
						btnLogin.classList.remove('btn-disabled');
					}
				}
			} else {
				borderColor = 'red';
				this.setState({email: ''})
				// add btn-disabled if not already appended to login-btn
				if(!btnLogin.classList.contains('btn-disabled')) {
					btnLogin.classList.add('btn-disabled')
				}
			}
			document.getElementById('email').style.borderBottomColor = borderColor;
		}

		const checkPassword = e => {

			let typedText = e.target.value;
			let borderColor = '';
			let btnLogin = document.getElementById('btn-login');

			if(typedText.length > 7) {
				borderColor = 'green';
				this.setState({password: true});
				// remove btn-disabled from login-btn if this.state.email != ''
				if (this.state.email != '') {
					if(btnLogin.classList.contains('btn-disabled')) {
						btnLogin.classList.remove('btn-disabled')
					}
				}	
			} else {
				borderColor = 'red';
				this.setState({password: false})
				// add btn-disabled if not already appended to login-btn
				if(!btnLogin.classList.contains('btn-disabled')) {
					btnLogin.classList.add('btn-disabled')
				}
			}
			document.getElementById('password').style.borderBottomColor = borderColor;
		}

		const pageChange = (x) => {
			this.props.pageChange(x)
		}



		/* ---------- */

		
		
		return(

			<div className="form-container">

				<div className="header-container">
					<h3>Log in to your account</h3>
				</div>

				<div className="input-height">

					<div className="form-group">
						<div className="input-wrapper">
							<input type="email" className="form-control email" id="email" placeholder="Email address" autoComplete="off" onChange={checkEmail} />
							<img className="login-icon mail-icon" src={MailIcon} />
						</div>
					</div>

					<div className="form-group">
						<div className="input-wrapper">
							<input type="password" className="form-control password" id="password" placeholder="Password" onChange={checkPassword} />
							<img className="login-icon lock-icon" src={LockIcon} />
						</div>					
					</div>

					<div className="form-group">
						<div className="input-wrapper sub-text">
							<input type="checkbox" className="checkbox" id="rememberLogin" name="rememberLogin" value="true" />
							<label htmlFor="rememberLogin" id="remember-label" class="no-select">Remember Login?</label>
						</div>
					</div>

					<div className="sub-text forgot-pw">
						<a href="#" onClick={() => {alert('No you didn\'t, you liar')}}>Forgot Password?</a>
					</div>

				</div>

				<div>
					<CSSTransition
						in={this.state.btn}
						classNames="btn-login"
						timeout={0}
					>
						<button className="btn btn-primary btn-login btn-disabled" id="btn-login" onClick={btnClicked}>Sign In</button>

					</CSSTransition>
				</div>

				<div className="sub-text create-account">
					<a onClick={() => {pageChange('signup')}}>Don't have an account?  Create an account</a>
				</div>

			</div>

		)
	}
}

export default LoginForm;