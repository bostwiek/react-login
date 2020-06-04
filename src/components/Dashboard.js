import React from 'react'

import Logo from './Logo'

class Dashboard extends React.Component {

	render() {

		const pageChange = (x) => {
			this.props.pageChange(x)
		}
		return(
			
      <div className="container-fluid">
				<div className="row">

					<div className="col-12 col-sm-7 col-md-6 col-lg-5 col-left">
						<div className="login-container">
							
							<Logo />
							
							<div className="dashboard-container">
								<h3>Welcome to your Dashboard!</h3>

								<br /><br /><br />
								<a href="#" onClick={() => pageChange('login')}>Back to login page</a>
								<br />
								<a href="#" onClick={() => pageChange('signup')}>Back to signup page</a>
							</div>

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

export default Dashboard;