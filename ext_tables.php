<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

/* Add default Static Typoscript */
TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'My Provider extension for pages and content');


/* Add default TSConfig Typoscript */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
  '<INCLUDE_TYPOSCRIPT: source="DIR:EXT:' . $_EXTKEY . '/Configuration/TypoScript/TSconfig/Pages" extensions="t3s">'
  );

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('
  <INCLUDE_TYPOSCRIPT: source="DIR:EXT:' . $_EXTKEY . '/Configuration/TypoScript/TSconfig/Users" extensions="t3s">'
  );
?>