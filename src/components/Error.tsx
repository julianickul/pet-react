import React from 'react';

function Error({ text: errorText } : {text : string }) {
	//errorElement.classList.add('result-error_is-visible');
	/*setTimeout(() => {
		errorElement.classList.remove('result-error_is-visible');
	}, 3000);*/
//}

	/*useEffect(() => {
		const timer = setTimeout(() => {
			setCount('Timeout called!');
		}, 3000);
		return () => clearTimeout(timer);
	}, []);*/
{/*<div className={`result-error ${errorText.length > 0 && 'result-error_is-visible'}`}>{errorText}</div>*/}
	return (
		<div className={`result-error`}>{errorText}</div>
	);
}

export default Error;
