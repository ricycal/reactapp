import axios from 'axios'

export const setListAction = (list1)=> ({
	type:'SET_LIST1',
	data:list1
})

export const getFromGithub = (username)=>{
	return (dispatch)=>{
		axios.get(`https://api.github.com/users/${username}/repos?type=all&sort=updated`).then(res=>{
    	dispatch(setListAction(res.data))
	})
}
}