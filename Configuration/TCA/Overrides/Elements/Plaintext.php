<?php
defined('TYPO3_MODE') or die();

$GLOBALS['TCA']['tt_content']['types']['plaintext'] = array(
      'showitem'  => '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,         
      --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.header;header,rowDescription,
      bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:bodytext_formlabel;;richtext:rte_transform[flag=rte_enabled|mode=ts_css],rte_enabled; 
      --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,
          --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.frames;frames,
    	--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.access,
          --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.visibility;visibility,
          --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access,  
      --div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category,categories'
		);

$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items']['plaintext'] = array(
		'LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:ttcontent.plaintext.title',  // Name of the content element
		'plaintext',  // TCA  name element
		'EXT:bhsiteconf/Resources/Public/Icons/ContentElements/typologo.svg'  // image of the content element

);