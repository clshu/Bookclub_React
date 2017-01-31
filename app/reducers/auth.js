export default function auth(state = {
	isLoggedIn : true,
	redirectUrl:"",
	username: "bhagya",
	loginMessage:"",
	signupMessage:""
	//redirectUrl: '/login'

}, action = {}){

	switch(action.type){

		case 'SET_PROFILE' :

			return { ...state , isLoggedIn: true, username: action.username}

		case 'SET_LOGIN_MSG':

			return {...state, loginMessage: action.msg }

		case 'SET_SIGNUP_MSG':

				return {...state, signupMessage: action.msg }

		case 'SET_REDIRECT_URL':

				return {...state, redirectUrl: action.url }

		default :

		return state;
	}

}