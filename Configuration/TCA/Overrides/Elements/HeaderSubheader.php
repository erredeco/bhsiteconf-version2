<?php
if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}

$tca = array (
	'types'  => array(
		'header_subheader'  => array(
      'showitem'  => '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,  
      header;Headline,
      subheader;Subheadline,     
      --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,
          --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.frames;frames,
    	--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.access,
          --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.visibility;visibility,
          --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access,
    	--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.extended'
		)
	),
	'columns' => array (
		'CType' => array (
			'config' => array (
				'items' => array (
					'header_subheader' => array (
						'LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:ttcontent.headlinesubheadline.title',  // Name of the content element
						'header_subheader',  // TCA  name element
						'EXT:bhsiteconf/Resources/Public/Icons/ContentElements/typo3logo.svg'  // image of the content element
					)
				)
			)
		)
	)
);