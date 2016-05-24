<?php
defined('TYPO3_MODE') or die();

//prevent defining global variables 
call_user_func(function () {

  $languageFilePrefix = 'LLL:EXT:fluid_styled_content/Resources/Private/Language/Database.xlf:';
  $customLanguageFilePrefix = 'LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:';
  $frontendLanguageFilePrefix = 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:';
  $tcaLanguageFilePrefix = 'LLL:EXT:lang/locallang_tca.xlf:';


  // Add the CType "plaintext"
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
      [
        'LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:ttcontent.plaintext.title',
        'plaintext',
        'content-text'
      ],
    'textmedia',
    'after'
  );
  
  //icon in list, page    
  $GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['plaintext'] = 'content-text';  

  // Add a flexform to the plaintext CType
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
        '',
        'FILE:EXT:bhsiteconf/Configuration/FlexForms/plaintext.xml',
        'plaintext'
    );

  //icon in the dropdown    
  $GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['plaintext'] = $GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['content-text'];    
    
  // Define what fields to display
  $GLOBALS['TCA']['tt_content']['types']['plaintext'] = [
    'showitem'  => 
      '--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,         
      --palette--;' . $frontendLanguageFilePrefix . 'palette.header;header,rowDescription,
      bodytext;' . $frontendLanguageFilePrefix . 'bodytext_formlabel;;richtext:rte_transform[flag=rte_enabled|mode=ts_css],rte_enabled; 
      --div--;' . $frontendLanguageFilePrefix . 'tabs.appearance,
      --palette--;' . $frontendLanguageFilePrefix . 'palette.frames;frames,pi_flexform,
    	--div--;' . $frontendLanguageFilePrefix . 'tabs.access,
      --palette--;' . $frontendLanguageFilePrefix . 'palette.visibility;visibility,
      --palette--;' . $frontendLanguageFilePrefix . 'palette.access;access,     
      --div--;' . $tcaLanguageFilePrefix . 'sys_category.tabs.category,categories
      ',
  ];
});