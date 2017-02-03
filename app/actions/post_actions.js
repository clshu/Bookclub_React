// create all actions associated with activeSubreddit
export function  setPosts(posts){

	return{
		type: 'SET_POSTS',
		posts
	}
}


export function  addPost(post){

	return{
		type: 'ADD_POST',
		post
	}
}



export function getPosts(){

	
	return (despatch) => {

	fetch('/api/posts')
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
			despatch(setPosts(data))
		});
	}
}


export function savePost(post){

	console.log(post);

return (despatch) => {

		fetch('/api/posts/new', 
		{   
		  method: "POST",
		  body: JSON.stringify(post),
		  headers: {
		    "Content-Type": "application/json"
		  },
		  credentials: "same-origin"
    	})
		.then(data=>data.json())
		.then(data=>{
			console.log("from add post")
			console.log(data);
			despatch(addPost(data));
		});
	}
}