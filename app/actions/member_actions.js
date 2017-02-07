// create all actions associated with activeSubreddit

export function  setMembers(members){

	return{
		type: 'SET_MEMBERS',
		members
	}
}


export function  updateMember(member){
	console.log("action update member",member);
	return{
		type: 'UPDATE_MEMBER',
		member
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


export function editMember(member){

	console.log(member);
	// return (despatch) => {
	return (despatch) => {
	fetch('/api/members/edit?_method=PUT',
	{   
		  method: "POST",
		  body: JSON.stringify(member),
		  headers: {
		    "Content-Type": "application/json"
		  },
		  credentials: "same-origin"
    	})
	.then(data=>data.json())
		.then(data=>{
			console.log("from members edit")
			console.log(data);
			//console.log(data.local.username);
			
			if(!data.error){
				

				despatch(updateMember(data));
			}
		
		});
	}
}