// create all actions associated with activeSubreddit
export function  setProfile(username){

	return{
		type: 'SET_PROFILE',
		isLoggedIn:true,
		username
	}
}


export function  setLoginMsg(msg){

	return{
		type: 'SET_LOGIN_MSG',
	    msg
	}
}


export function  setSignupMsg(msg){

	return{
		type: 'SET_SIGNUP_MSG',
	    msg
	}
}


export function  setRedirectUrl(url){

	return{
		type: 'SET_REDIRECT_URL',
	    url
	}
}


export function despatchAuthLogin(user){
	console.log(JSON.stringify(user));

	return (despatch) => {

		fetch('/login', 
		{   
		  method: "POST",
		  body: JSON.stringify(user),
		  headers: {
		    "Content-Type": "application/json"
		  },
		  credentials: "same-origin"
    	})
		.then(data=>data.json())
		.then(data=>{
			console.log("from auth login")
			console.log(data);
			//console.log(data.local.username);

			if(!data.error){

				despatch(setProfile(data.local.username));
			}else{
				console.log(data.error[0])
				despatch(setLoginMsg(data.error[0]));
			}
			//despatch(addPost(data));
		});
	}
}


export function despatchAuthSignup(user){
	console.log(JSON.stringify(user));


	return (despatch) => {

		fetch('/signup', 
		{   
		  method: "POST",
		  body: JSON.stringify(user),
		  headers: {
		    "Content-Type": "application/json"
		  },
		  credentials: "same-origin"
    	})
		.then(data=>data.json())
		.then(data=>{
			console.log("from auth signup")
			console.log(data);
			//console.log(data.local.username);
			
			if(!data.error){

				despatch(setProfile(data.local.username));
			}else{
				console.log(data.error[0])
				despatch(setSignupMsg(data.error[0]));
			}
		});
	}
}