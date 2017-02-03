// create all actions associated with activeSubreddit
export function  setMembers(members){

	return{
		type: 'SET_MEMBERS',
		members
	}
}


export function getMembers(){

	
	return (despatch) => {

	fetch('/api/members')
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
			despatch(setMembers(data))
		});
	}
}
