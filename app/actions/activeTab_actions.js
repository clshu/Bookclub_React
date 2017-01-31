// create all actions associated with activeTab

export function setActive(tab){

	return {
		type: 'SET_ACTIVE',
		activeTab : tab
	}
}