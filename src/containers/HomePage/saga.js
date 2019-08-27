import {call,put,takeEvery,takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {setListAction} from './action.js'

function* gitGitHub(action){
	const data = yield call(getData,action.data);
	yield put(setListAction(data));
}
const getData = function(username){
			return axios.get(`https://api.github.com/users/${username}/repos?type=all&sort=updated`).then(res=>{
    		// this.setState({
    		// 	list:res.data
    		// })  
    		return res.data;
    	  })
	}

function* homeSaga(){
	yield takeLatest("GET_LIST",gitGitHub)
}
export default homeSaga;