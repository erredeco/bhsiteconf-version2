<?php
if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}

//Add here all the contents
require 'Elements/HeaderSubheader.php';
require 'Elements/Plaintext.php';




 
$GLOBALS['TCA']['tt_content'] = array_replace_recursive($GLOBALS['TCA']['tt_content'],$tca);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::makeCategorizable('css_styled_content', 'tt_content', 'categories', array(), TRUE);
