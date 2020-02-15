<?php
if ( ! defined( 'ABSPATH' ) ) {
	die();
}

$this_url = admin_url( ( is_multisite() ? 'network/admin.php' : 'tools.php' ) . '?page=string-locator' );

$search_string   = '';
$search_location = '';
$search_regex    = false;

if ( isset( $_POST['string-locator-string'] ) ) {
	$search_string = $_POST['string-locator-string'];
}
if ( isset( $_POST['string-locator-search'] ) ) {
	$search_location = $_POST['string-locator-search'];
}

if ( isset( $_GET['restore'] ) ) {
	$restore = get_transient( 'string-locator-search-overview' );

	if ( false !== $restore ) {
		$search_string   = $restore->search;
		$search_location = $restore->directory;
		$search_regex    = String_Locator::absbool( $restore->regex );
	} else {
?>
	<div class="notice notice-large notice-warning">No previous searches could be restored.</div>
<?php
	}
}
?>
<div class="wrap add-padding">


	<div class="notices"></div>

	<div class="string-locator-feedback hide">
		<progress id="string-locator-search-progress" max="100"></progress>
		<span id="string-locator-feedback-text"><?php esc_html_e( 'Preparing search&hellip;', 'string-locator' ); ?></span>
	</div>

	<div class="table-wrapper">
		<?php
		if ( isset( $_GET['restore'] ) ) {
			$items = get_transient( 'string-locator-search-history' );
			if ( false === $items ) {
				$items = array();
			}

			echo String_Locator::prepare_full_table( $items, array( 'restore' ) );
		}
		else {
			echo String_Locator::prepare_full_table( array() );
		}
		?>
	</div>
</div>
