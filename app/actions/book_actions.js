// create all actions associated with activeSubreddit

export function  setBooks(books){

	return{
		type: 'SET_BOOKS',
		books
	}
}



export function getBooks(){

	
	return (despatch) => {

	fetch('/api/books')
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
			despatch(setBooks(data))
		});
	}
}

