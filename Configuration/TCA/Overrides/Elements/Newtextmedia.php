<?php
defined('TYPO3_MODE') or die();

//prevent defining global variables 
call_user_func(function () {

  $languageFilePrefix = 'LLL:EXT:fluid_styled_content/Resources/Private/Language/Database.xlf:';
  $customLanguageFilePrefix = 'LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:';
  $frontendLanguageFilePrefix = 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:';
  $tcaLanguageFilePrefix = 'LLL:EXT:lang/locallang_tca.xlf:';
  
  // Add the CType "newtextmedia"
  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
    'tt_content',
    'CType',
      [
        'LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:ttcontent.newtextmedia.title',
        'newtextmedia',
        'content-textpic'
      ],
    'textmedia',
    'after'
  );  
  
  //icon in list, page    
  $GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['newtextmedia'] = 'content-textpic';  
  
  // Define what fields to display: copy the whole textmedia!  
  $GLOBALS['TCA']['tt_content']['types']['newtextmedia'] = $GLOBALS['TCA']['tt_content']['types']['textmedia'];  

});
