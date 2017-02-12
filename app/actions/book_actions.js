import { request_content } from './utils';

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

	fetch('/api/books', request_content("GET"))
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
				request_content("POST", JSON.stringify(rating)))
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
			despatch(updateBook(data,member))
		});
	}
}
