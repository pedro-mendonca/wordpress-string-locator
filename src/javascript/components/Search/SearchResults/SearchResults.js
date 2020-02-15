import React from 'react';

function SearchResults() {
	return(
		<>
			<div className="table-wrapper">
				<div className="tablenav top">
					<br className="clear" />
				</div>

				<table className="wp-list-table widefat fixed striped tools_page_string-locator">
					<thead>
						<tr>
							<th scope="col" class="manage-column column-stringresult column-primary">%s</th>
							<th scope="col" class="manage-column column-filename">%s</th>
							<th scope="col" class="manage-column column-linenum">%s</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>
								SearchResult
								<div className="row-actions">
									<span class="edit">
										<a href="EditLink" aria-label="Edit">
											Edit
										</a>
									</span>
								</div>
							</td>

							<td>
								<a href="EditLink">
									Filename
								</a>
							</td>

							<td>
								Line Number
							</td>
						</tr>
					</tbody>

					<tfoot>
						<tr>
							<th scope="col" class="manage-column column-stringresult column-primary">%s</th>
							<th scope="col" class="manage-column column-filename">%s</th>
							<th scope="col" class="manage-column column-linenum">%s</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	);
}

export default SearchResults;
