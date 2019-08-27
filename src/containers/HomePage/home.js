import React,{Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {setListAction,getFromGithub} from './action.js'
class Home extends Component{
	constructor(props)
	{
		super(props)
		this.state={
			username:'',
		}
	}
	onChange = (e)=>{
		this.setState({
			username:e.target.value
		})
	}
    onQuery = ()=>{
    	this.props.getListFromGithub(this.state.username)
    	// axios.get(`https://api.github.com/users/${this.state.username}/repos?type=all&sort=updated`).then(res=>{
    	// 	// this.setState({
    	// 	// 	list:res.data
    	// 	// })  
    	// 	this.props.setList(res.data);
    	//   })
    	}
	render(){

		const{username}=this.state;
		return(
			<div>
			    <input
			    type='text'
			    onChange={this.onChange}
			    value={username}
			    ></input>
			    <button onClick={this.onQuery}>Query
			    </button>

			    <div style={{margin:'20px'}}>
			    {this.props.mylist.map(item=>{
			    	return(
			    		<div key={item.id}>{item.name}</div>
			    		)
			    })}
                </div>
               {/* <div>{JSON.stringify(this.props.mylist)}</div>*/}
			</div>

			)
	}
}


const mapStateToProps = (state)=> ({
	mylist:state.homeReducer.list
})

const mapDispatchToProps = (dispatch)=>({
		dispatch,
		getListFromGithub:(username)=>{
			dispatch(getFromGithub(username))
		},
		// setList:(data)=>{
		// 	dispatch(setListAction(data))
		// }


})
export default connect(mapStateToProps,mapDispatchToProps)(Home);