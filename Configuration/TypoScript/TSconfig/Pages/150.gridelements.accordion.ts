# Accordion Container
tx_gridelements.setup.ffaccordion_container {
	title = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:gridelements.accordion_container.title
	description = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:gridelements.accordion_container.description
	flexformDS = FILE:EXT:bhsiteconf/Configuration/FlexForms/gridelements_ffaccordion_container.xml
	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = Accordion Container
						colPos = 0
						allowed = gridelements_pi1
					}
				}
			}
		}
	}
}

# Accordion Element
tx_gridelements.setup.ffaccordion_element {
	title = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:gridelements.accordion_element.title
	description = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:gridelements.accordion_element.description
	flexformDS = FILE:EXT:bhsiteconf/Configuration/FlexForms/gridelements_ffaccordion_element.xml

	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = Accordion Element
						colPos = 0
					}
				}
			}
		}
	}
}