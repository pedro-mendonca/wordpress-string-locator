import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function Search( { isSearching, searchResults, searchString, searchRegex } ) {
	return (
		<>
			<Header />
			<SearchForm
				searchString={ searchString }
				searchRegex={ searchRegex }
			/>

			<SearchResults
				isSearching={ isSearching }
				searchResults={ searchResults }
			/>
		</>
	);
}

export default Search;
