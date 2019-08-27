const initState = {
	list1:[]
}
const FeatureReducer = (state=initState,action)=>{
    switch(action.type){
        case'SET_LIST1':
        // let temp = [];
        // temp.push(action.data)
        let orgin = [...action.data,...state.list1];
        return Object.assign({},state,{list1:orgin})
        // return {...state,list:temp}
        default:
            return state
    }
}

// const FeatureReducer = (state=initState,action) =>{
// 	switch(action.type){
// 		case 'SET_LIST1':
// 			let temp =state.list1;
// 			temp.push(action.data)
// 			let temp1 = JSON.parse(JSON.stringify(temp))
// 			return Object.assign({},state,{list1:temp1})
// 		default:
// 			return state

// 	}
// }

export default FeatureReducer;