import React, {Component} from 'react';

//Redux Tools
import { connect } from 'react-redux';
import { getText } from '../store/actions/textAction';

class FormText extends Component{

	constructor(props){
		super(props)
		this.state = {
			text: ''
		}
	}

	handleSubmit(event){
		event.preventDefault();
    	this.props.getText(this.state.text);
    	
    	this.setState({text: ''});
	}

	onChange(e){
		this.setState({text: e.target.value});
		console.log(this.props);
	}

	render(){
		let { text } = this.props;
		const nameInputStyles = {
          background: 'transparent',
          color: '#999',
          border: 0,
          borderBottom: '1px solid #666',
          borderRadius: 0,
          fontSize: '3rem',
          fontWeight: 500,
          boxShadow: 'none !important'
        };		

		return(
			<main className="container-fluid position-absolute h-100 bg-dark">
				<div className="row position-absolute w-100 h-100">
					<section className="col-md-8 d-flex flex-row flex-wrap align-items-center align-content-center px-5">
						<div className="px-5 mx-5">
							<span className="d-block w-100 h1 text-light" style={{marginTop: -50}}>
        					{
                        	text
                          		? ( <span>
                              			<span style={{color: '#999'}}>Hello!</span> {text}
                            		</span>)
                          		: 	`What is your name?`
                      		}
        					</span>
        					<form onSubmit={this.handleSubmit.bind(this)}>
		        				<input id="text" name="username" type="text" onChange={this.onChange.bind(this)} style={nameInputStyles} />
        					</form>        					
        				</div>
        			</section>
        		</div>
        	</main>
		)
	}
}

const mapStateToProps = state => ({
	text: state.text.info
 })
 export default connect(mapStateToProps, { getText })(FormText);