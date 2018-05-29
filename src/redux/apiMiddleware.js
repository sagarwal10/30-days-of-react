
const apiMiddleware = (store) => (next) => (action) => {
    if (!action.meta || action.meta.type !== 'api') {
	return next(action);
    }

    console.log("###### Sending Request ######");
    console.log(action.meta);
    const {url} = action.meta;
    console.log(url);
    const fetchOptions = Object.assign({}, action);

    fetch(url, fetchOptions) 
        .then(resp => resp.json())
  	.then(json => {
	    let newAction = Object.assign({}, action, {
		payload: json.dateString
	    });
	    delete newAction.meta;
	    store.dispatch(newAction);
	});
}

export default apiMiddleware

