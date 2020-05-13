import React from 'react'
import Logo from './Logo'
import SignupForm from './SignupForm'

class SignupPage extends React.Component {

	render() {

		return(

      <div className="container-fluid">
        <div className="row">

          <div className="col-12 col-sm-7 col-md-6 col-lg-5 col-left">
						<div className="signup-container">
							
							<Logo />
							<SignupForm pageChange={this.props.pageChange} />

						</div>
					</div>
					
          <div className="col-sm-5 col-md-6 col-lg-7 col-right">
            <div className="illustration" alt="Illustration" style={this.props.backgroundImg}>
            </div>
          </div>

				</div>
			</div>
			
		)
	}
}

export default SignupPage;