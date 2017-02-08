// create all actions associated with activeSubreddit

export function  setBooks(books){

	return{
		type: 'SET_BOOKS',
		books
	}
}


export function  updateBook(rating,member){
	console.log("update Book", rating);
	return{
		type: 'UPDATE_BOOK',
		rating: {...rating,
		 Member: { id: member.id, fname: member.fname,lname:member.lname,piclink:member.piclink}

		}
	
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


export function saveRating(rating,member){

	
	return (despatch) => {

	fetch('/api/books/newrating', 
		{   
		  method: "POST",
		  body: JSON.stringify(rating),
		  headers: {
		    "Content-Type": "application/json"
		  },
		  credentials: "same-origin"
    	})
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
			despatch(updateBook(data,member))
		});
	}
}
