import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Get styles.
import '../styles/styles.scss';

{ document.getElementById( 'string-locator' ).length >= 1 &&
	ReactDOM.render(
		<App />,
		document.getElementById( 'string-locator' )
	);
}
