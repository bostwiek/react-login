import React from 'react'

import Logo from './Logo'

class Dashboard extends React.Component {

	state = {
		name: '<name>',
		nameMissing: 'Erm... what was your name again?'
	}

	render() {

		const pageChange = (x) => {
			this.props.pageChange(x)
		}

		const updateName = e => {
			this.setState({
				name: e.target.value,
				nameMissing: ''
			});
		}

		return(
			
      <div className="container-fluid">
				<div className="row">

					<div className="col-12 col-sm-7 col-md-6 col-lg-5 col-left">
						<div className="login-container">
							
							<Logo />
							
							<div>
								<h3>Welcome to your Dashboard, {this.state.name}!</h3>
								<div className="height-container">{this.state.nameMissing}</div>
					
								<div className="form-group">
									<div className="input-wrapper">
										<label htmlFor="name">Name: </label>
										<input type="name" className="form-control name" id="name" placeholder="Richard Cheese" autoComplete="off" onChange={updateName} />
									</div>
								</div>

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