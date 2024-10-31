const renderError = (errorElement: Element, errText: string) => {
	console.log(errText);
	errorElement.textContent = errText;
	errorElement.classList.add('result-error_is-visible');
	setTimeout(() => {
		errorElement.classList.remove('result-error_is-visible');
	}, 3000);
}

/*const renderLoading = (isLoading, spinner, content) => {
	if(isLoading) {
		spinner.classList.add('spinner_visible');
		content.classList.add('content_hidden');
	} else {
		spinner.classList.remove('spinner_visible');
		content.classList.remove('content_hidden');
	}
}*/

const renderSaving = (element: Element, text: string) => {
	element.textContent = text;
}
export {
	renderError,
	//renderLoading,
	renderSaving
};
