import { request_content } from './utils';
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

	fetch('/api/posts', request_content("GET"))
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
			despatch(setPosts(data))
		});
	}
}


export function savePost(post,Member){

	console.log(post);

return (despatch) => {

		fetch('/api/posts/new',
					request_content("POST", JSON.stringify(post)))
		.then(data=>data.json())
		.then(data=>{
			console.log("from add post")
			console.log(data);
			despatch(addPost({...data,Member}));
		});
	}
}
