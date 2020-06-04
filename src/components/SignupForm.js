import React from 'react'

class SignupForm extends React.Component {

	constructor() {
		super();
		this.state = {
			email: '',
			password: false,
			passwordRetype: false,
			terms: false
		}
	}

	render() {

		const btnClicked = () => {

			let emailVerify = false;
			let passwordVerify = false;
			let passwordRetypeVerify = false;
			let passwordsMatch = false;
			let termsVerify = false;

			if (this.state.email === '') {
				document.getElementById('email').style.borderBottomColor = 'red';
			} else {
				emailVerify = true;
			}
			if (this.state.password === false) {
				document.getElementById('password').style.borderBottomColor = 'red';				
			} else {
				passwordVerify = true;
			}
			if (this.state.passwordRetype === false) {
				document.getElementById('password-retype').style.borderBottomColor = 'red';				
			} else {
				passwordRetypeVerify = true;
				passwordsMatch = (document.getElementById('password').value === document.getElementById('password-retype').value);
			}
			if(passwordsMatch === false) {
				alert('Passwords do not match...')
				document.getElementById('password-retype').style.borderBottomColor = 'red';			
			}
			if (!this.state.terms === false) {
				termsVerify = true;
			}
			if (emailVerify === true && passwordVerify === true && passwordRetypeVerify === true && passwordsMatch === true && termsVerify === true) {
				// register user !!!need to check if passwords match still!!!
				alert("Your account has been successfully registered!");
				pageChange('login');
			}
			
		}

		const checkEmail = e => {

			let typedText = e.target.value;
			let borderColor = '';
			let btnSignup = document.getElementById('btn-signup');
			let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

			if(typedText.match(emailFormat)) {
				borderColor = 'green';
				this.setState({email: typedText})
				// remove btn-disabled from login-btn if this.state.password === true
				if (this.state.password === true && this.state.passwordRetype === true && this.state.terms === true) {
					if(btnSignup.classList.contains('btn-disabled')) {
						btnSignup.classList.remove('btn-disabled');
					}
				}
			} else {
				borderColor = 'red';
				this.setState({email: ''})
				// add btn-disabled if not already appended to login-btn
				if(!btnSignup.classList.contains('btn-disabled')) {
					btnSignup.classList.add('btn-disabled')
				}
			}
			document.getElementById('email').style.borderBottomColor = borderColor;
		}

		const checkPassword = e => {

			let typedText = e.target.value;
			let borderColor = '';
			let btnSignup = document.getElementById('btn-signup');

			if(typedText.length > 7) {
				borderColor = 'green';
				this.setState({password: true});
				// remove btn-disabled from login-btn if this.state.email !== ''
				if (this.state.email !== '' && this.state.passwordRetype === true && this.state.terms === true) {
					if(btnSignup.classList.contains('btn-disabled')) {
						btnSignup.classList.remove('btn-disabled')
					}
				}
				
			} else {
				borderColor = 'red';
				this.setState({password: false})
				// add btn-disabled if not already appended to login-btn
					if(!btnSignup.classList.contains('btn-disabled')) {
						btnSignup.classList.add('btn-disabled')
					}
			}
			document.getElementById('password').style.borderBottomColor = borderColor;
		}

		const checkPasswordRetype = e => {

			let typedText = e.target.value;
			let borderColor = '';
			let btnSignup = document.getElementById('btn-signup');

			if(typedText.length > 7) {
				borderColor = 'green';
				this.setState({passwordRetype: true});
				// remove btn-disabled from login-btn if this.state.email !== ''
				if (this.state.email !== '' && this.state.password === true && this.state.terms === true) {
					if(btnSignup.classList.contains('btn-disabled')) {
						btnSignup.classList.remove('btn-disabled')
					}
				}
				
			} else {
				borderColor = 'red';
				this.setState({passwordRetype: false})
				// add btn-disabled if not already appended to login-btn
					if(!btnSignup.classList.contains('btn-disabled')) {
						btnSignup.classList.add('btn-disabled')
					}
			}
			document.getElementById('password-retype').style.borderBottomColor = borderColor;
		}

		const termsChecked = () => {

			let checkboxState = document.getElementById('terms').checked;
			let btnSignup = document.getElementById('btn-signup');
			
			this.setState({terms: checkboxState});

			if (checkboxState === true) {
				if (this.state.email !== '' && this.state.password === true && this.state.passwordRetype === true) {
					if(btnSignup.classList.contains('btn-disabled')) {
						btnSignup.classList.remove('btn-disabled')
					}
				}
			} else {
				if(!btnSignup.classList.contains('btn-disabled')) {
					btnSignup.classList.add('btn-disabled')
				}
			}
		}

		const pageChange = (x) => {
			this.props.pageChange(x)
		}


		/* ---------- */


		return(

      <div className="form-container">

				<div className="header-container">
					<h3>Create a new account</h3>
				</div>

				<div className="input-height">
					
					<div className="form-group">
						<div className="input-wrapper">
							<label htmlFor="email">Email: </label>
							<input type="email" className="form-control email" id="email" placeholder="example@mail.com" autoComplete="off" onChange={checkEmail} />
						</div>
					</div>
					
					<div className="form-group">
						<div className="input-wrapper">
							<label htmlFor="password">Choose a password: </label>
							<input type="password" className="form-control password" id="password" placeholder="••••••••" autoComplete="off" onChange={checkPassword} />
						</div>
					</div>

					<div className="form-group">
						<div className="input-wrapper">
							<label htmlFor="password-retype">Retype password: </label>
							<input type="password" className="form-control password-retype" id="password-retype" placeholder="••••••••" autoComplete="off" onChange={checkPasswordRetype} />
						</div>
					</div>
					
					<div className="form-group">
						<div className="input-wrapper">
							<input type="checkbox" className="checkbox terms" name="terms" id="terms" onChange={termsChecked} />
							<label htmlFor="terms" className="no-select">I agree to the <a href="#" onClick={() => {alert('I don\'t believe in terms & conditions')}}>Terms &amp; Conditions</a></label>
						</div>
					</div>


				</div>
				<div>
					<button className="btn btn-primary btn-signup btn-disabled" id="btn-signup" onClick={btnClicked}>Sign up</button>
				</div>

				<div className="sub-text login-account">
					<a onClick={() => {pageChange('login')}}>Already have an account? Log in here</a>
				</div>

			</div>

		)
	}
}

export default SignupForm;