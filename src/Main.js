import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import Dashboard from './components/Dashboard'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css'

import Illustration from './images/a.jpg'

class Main extends React.Component {

	constructor() {
		super();

		this.state = {
			page: 'login',
			showPage: true,
			email: ''
		}

		this.pageChange = this.pageChange.bind(this);
	}

	// pass this function as props to all children to update page
	pageChange(x) {
		this.setState({page: x});
	}
  

  render() {

		const backgroundImg = {
      backgroundImage: `url(${Illustration})`
		}

		const loadPage = () => {

			// check state for current page
			switch(this.state.page) {

				case 'login':
					return <LoginPage backgroundImg={backgroundImg} pageChange={this.pageChange} showPage={this.state.showPage} email={this.state.email} />
					break;

				case 'signup':
					return <SignupPage backgroundImg={backgroundImg} pageChange={this.pageChange} showPage={this.state.showPage} email={this.state.email} />
					break;

				case 'dashboard':
					return <Dashboard backgroundImg={backgroundImg} pageChange={this.pageChange} showPage={this.state.showPage} email={this.state.email} />
					break;

				default:
					break;
				}


		}

		return(
			<>

				<CSSTransition
					in={true}
					appear={true} 
					timeout={1000}
					classNames="fade"
				>

					{loadPage}

				</CSSTransition>		
		
			</>
		)
  }
}

export default Main;