<?php
/***************
 * Temporary variables
 */
$extensionKey = 'bhsiteconf';
/***************
 * Register PageTS
 */

// AdminPanel
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    $extensionKey,
    'Configuration/TSconfig/LocalPageTS/AdmPanel.ts',
    'EXT:bhsiteconf: Admin Panel'
);

// TCEMAIN
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    $extensionKey,
    'Configuration/TSconfig/LocalPageTS/TCEMAIN.ts',
    'EXT:bhstieconf: TCEMAIN'
);