// create all actions associated with activeSubreddit
export function  setPosts(posts){

	return{
		type: 'SET_POSTS',
		posts
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
