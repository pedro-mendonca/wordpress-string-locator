import React, { useReducer, useEffect } from 'react';
import Edit from './components/Edit';
import Search from './components/Search';
import apiFetch from '@wordpress/api-fetch';

function App() {
	const [ state, setState ] = useReducer(
		( s, a ) => ( { ...s, ...a } ),
		{
			isSearching: false,
			searchResults: [],
			searchString: '',
			searchRegex: true,
			isEditing: false,
			editFile: null,
		}
	);

	const {
		isSearching,
		searchResults,
		searchString,
		searchRegex,
		isEditing,
		editFile,
	} = state;

	if ( isEditing ) {
		return (
			<>
				<Edit
					editFile={ editFile }
				/>
			</>
		);
	}

	return (
		<>
			<Search
				isSearching={ isSearching }
				searchResults={ searchResults }
				searchString={ searchString }
				searchRegex={ searchRegex }
			/>
		</>
	);
}

export default App;
