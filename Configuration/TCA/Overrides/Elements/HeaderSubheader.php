<?php
defined('TYPO3_MODE') or die();

//prevent defining global variables 
call_user_func(function () {

  $languageFilePrefix = 'LLL:EXT:fluid_styled_content/Resources/Private/Language/Database.xlf:';
  $customLanguageFilePrefix = 'LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:';
  $frontendLanguageFilePrefix = 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:';
  $tcaLanguageFilePrefix = 'LLL:EXT:lang/locallang_tca.xlf:';

  // Add the CType "header_subheader"
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
      [
        'LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:ttcontent.headlinesubheadline.title',
        'header_subheader',
        'content-header'
      ],
    'textmedia',
    'after'
  );
 
  //icon in the dropdown    
  $GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['header_subheader'] = $GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['header'];    
    
  // Define what fields to display
  $GLOBALS['TCA']['tt_content']['types']['header_subheader'] = [
    'showitem' => '
      --palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
      header;' . $customLanguageFilePrefix . 'ttcontent.headlinesubheadline.headline,
      subheader;'  . $customLanguageFilePrefix . 'ttcontent.headlinesubheadline.subheadline, 
      rowDescription,  
      --div--;' . $frontendLanguageFilePrefix . 'tabs.appearance,
      --palette--;' . $frontendLanguageFilePrefix . 'palette.frames;frames,
      --div--;' . $frontendLanguageFilePrefix . 'tabs.access,
      --palette--;' . $frontendLanguageFilePrefix . 'palette.visibility;visibility,
      --palette--;' . $frontendLanguageFilePrefix . 'palette.access;access,
      --div--;' . $tcaLanguageFilePrefix . 'sys_category.tabs.category,categories
      ',
    ];
});



