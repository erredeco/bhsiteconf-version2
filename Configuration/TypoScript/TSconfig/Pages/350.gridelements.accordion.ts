# Accordion Container
tx_gridelements.setup.ffaccordion_container {
	title = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.accordion_container.title
	description = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.accordion_container.description
	flexformDS = FILE:EXT:bhsiteconf/Configuration/FlexForms/gridelements_ffaccordion_container.xml
  icon = EXT:bhsiteconf/Resources/Public/Icons/GridElements/accordion.gif
	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.accordion_container.title
						colPos = 100
						allowed = gridelements_pi1
					}
				}
			}
		}
	}
}

# Accordion Element
tx_gridelements.setup.ffaccordion_element {
	title = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.accordion_element.title
	description = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.accordion_element.description
	flexformDS = FILE:EXT:bhsiteconf/Configuration/FlexForms/gridelements_ffaccordion_element.xml
  icon = EXT:bhsiteconf/Resources/Public/Icons/GridElements/container.gif
	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.accordion_element.title
						colPos = 100
					}
				}
			}
		}
	}
}