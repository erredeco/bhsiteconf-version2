<?php
defined('TYPO3_MODE') or die();

$GLOBALS['TCA']['tt_content']['types']['newtextmedia'] = $GLOBALS['TCA']['tt_content']['types']['textmedia'];


//Registering the element
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items']['newtextmedia'] = array(
		'LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:ttcontent.newtextmedia.title',  // Name of the content element
		'newtextmedia',  // TCA  name element
		'EXT:bhsiteconf/Resources/Public/Icons/ContentElements/typologo.svg'  // image of the content element
);