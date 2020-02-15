import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Get styles.
import '../styles/styles.scss';

{ document.getElementById( 'string-locator' ) &&
	ReactDOM.render(
		<App />,
		document.getElementById( 'string-locator' )
	);
}
