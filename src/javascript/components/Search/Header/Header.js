import React from 'react';
import { __ } from '@wordpress/i18n';

function Header() {
	return (
		<>
			<h1>
				{ __( 'String Locator', 'string-locator' ) }
			</h1>
		</>
	);
}

export default Header;
