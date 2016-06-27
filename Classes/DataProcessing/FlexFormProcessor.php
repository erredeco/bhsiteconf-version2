<?php
namespace BH\bhsiteconf\DataProcessing;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;
use TYPO3\CMS\Frontend\ContentObject\DataProcessorInterface;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Service\FlexFormService;
/**
 * Class for flexform processing for a content element
 *
 * Example TypoScript configuration:
 * 
 * dataProcessing {
 *   10 = BH\bhsiteconf\DataProcessing\FlexFormProcessor
 * }
 *
 */
class FlexFormProcessor implements DataProcessorInterface
{
    /**
     * Process flexform data
     *
     * @param ContentObjectRenderer $cObj The data of the content element or page
     * @param array $contentObjectConfiguration The configuration of Content Object
     * @param array $processorConfiguration The configuration of this processor
     * @param array $processedData Key/value store of processed data (e.g. to be passed to a Fluid View)
     * @return array the processed data as key/value store
     */
    public function process(
        ContentObjectRenderer $cObj,
        array $contentObjectConfiguration,
        array $processorConfiguration,
        array $processedData
    )
    {
        $flexFormService = GeneralUtility::makeInstance(FlexFormService::class);
        // The variable to be used within the result
        $targetVariableName = $cObj->stdWrapValue('as', $processorConfiguration, 'flexFormData');
        $processedData[$targetVariableName] = $flexFormService->convertFlexFormContentToArray($processedData['data']['pi_flexform']);
        return $processedData;
    }
}