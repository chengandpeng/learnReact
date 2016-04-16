export default function({ dispatch }) {
	return next => action => {
		// actions does not have payload 
		// or payload does not have a .then
		// then we send it on
		if (!action.payload || !action.payload.then) {
			return next(action);
		}

		// Make sure the action's promise resolves
		action.payload
			.then(function(response) {
				const newAction = { ...action, payload:response}
				dispatch(newAction);
			});
	};
}