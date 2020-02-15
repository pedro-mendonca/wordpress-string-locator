import React from 'react';
import { __ } from '@wordpress/i18n';

function SearchForm( { searchString, searchRegex } ) {
	return (
		<>
			<form action="<?php echo esc_url( $this_url ); ?>" method="post" id="string-locator-search-form">
				<div class="form-group">
					<label for="string-locator-search">
						{ __( 'Search through', 'string-locator' ) }
					</label>

					<select name="string-locator-search" id="string-locator-search">
						<optgroup label="<?php esc_attr_e( 'Core', 'string-locator' ); ?>">
							<option value="core">
								{ __( 'The whole WordPress directory', 'string-locator' ) }
							</option>
							<option value="wp-content">
								{ __( 'Everything under wp-content', 'string-locator' ) }
							</option>
						</optgroup>
						<optgroup label="<?php esc_attr_e( 'Themes', 'string-locator' ); ?>">

						</optgroup>

						{ true &&
							<>
								{/* has MU plugins */}
								<optgroup label="<?php esc_attr_e( 'Must Use Plugins', 'string-locator' ); ?>">

								</optgroup>
							</>
						}
						<optgroup label="<?php esc_attr_e( 'Plugins', 'string-locator' ); ?>">

						</optgroup>
					</select>
				</div>

				<div class="form-group">
					<label for="string-locator-string">
						{ __( 'Search string', 'string-locator' ) }
					</label>

					<input type="text" name="string-locator-string" id="string-locator-string" value={ searchString } />
				</div>

				<div class="form-group">
					<label>
						<input type="checkbox" name="string-locator-regex" id="string-locator-regex" checked />
						{ __( 'RegEx search', 'string-locator' ) }
					</label>
				</div>

				<p class="form-group">
					<button type="button" id="submit" class="button button-primary">
						{ __( 'Search', 'string-locator' ) }
					</button>

					<button type="button" class="button button-primary">
						{ __( 'Restore last search', 'string-locator' ) }
					</button>
				</p>
			</form>
		</>
	);
}

export default SearchForm;
