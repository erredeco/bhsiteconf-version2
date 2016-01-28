<?php
defined('TYPO3_MODE') or die();

$GLOBALS['TCA']['tt_content']['types']['header_subheader'] = array(
      'showitem'  => '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,  
      header;LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:ttcontent.headlinesubheadline.headline,
      subheader;LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:ttcontent.headlinesubheadline.subheadline, 
      rowDescription,    
      --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,
          --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.frames;frames,
    	--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.access,
          --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.visibility;visibility,
          --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access,
      --div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category,categories'

);


$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items']['header_subheader'] = array(
  'LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:ttcontent.headlinesubheadline.title',  // Name of the content element
  'header_subheader',  // TCA  name element
  'EXT:bhsiteconf/Resources/Public/Icons/ContentElements/typo3logo.svg'  // image of the content element

); 
