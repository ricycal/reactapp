import React,{Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import Button from '../../components/button/button.js'
import Tabs from '../../components/tabs/Tabs.js'
import TabPane from '../../components/tabs/Tabpane.js'
import {setListAction,getFromGithub} from './action.js'
class Feature extends Component{
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
	// add = ()=>{
		
	// 	this.props.add({id:'',name:this.state.username})
	// }
	callback = (key)=>{
		console.log(key);
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
		const {username}=this.state;
		return(
			
			<div>
			<div>
			This is Feature
			</div>
			    <input
			    type='text'
			    onChange={this.onChange}
			    value={username}
			    ></input>
			    <Button type="primary" onClick={this.onQuery}>Query
			    </Button>

			    <div style={{margin:'20px'}}>
			    {this.props.mylist.map((item,index)=>{
			    	return(
			    		<div key={index}>{item.name}</div>
			    		)
			    })}
                </div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                	<TabPane title={'Pane1'} key='1'>
						<div>pane1</div>
                	</TabPane>
                	<TabPane title={'Pane2'} key='2'>
						<div>pane2</div>
                	</TabPane>
                	<TabPane title={'Pane3'} key='3'>
						<div>pane3</div>
                	</TabPane>
                </Tabs>
              {/* { <div>{JSON.stringify(this.props.mylist)}</div>}*/}
			</div>
			)
	}
}

const mapStateToProps = (state)=> ({
	mylist:state.FeatureReducer.list1
})

const mapDispatchToProps = (dispatch)=>({
		dispatch,
		getListFromGithub:(username)=>{
		// setList:(data)=>{
			dispatch(getFromGithub(username))
		}


})
export default connect(mapStateToProps,mapDispatchToProps)(Feature);