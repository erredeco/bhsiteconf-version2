# Tabs Container
tx_gridelements.setup.fftab_container {
	title = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:gridelements.tab_container.title
	description = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:gridelements.tab_container.description
	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = Tabs Container
						colPos = 100
						allowed = gridelements_pi1
					}
				}
			}
		}
	}
}

# Tabs Element
tx_gridelements.setup.fftab_element {
	title = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:gridelements.tab_element.title
	description = LLL:EXT:bhsiteconf/Resources/Private/Language/locallang_db.xlf:gridelements.tab_element.description
	flexformDS = FILE:EXT:bhsiteconf/Configuration/FlexForms/gridelements_ffaccordion_element.xml

	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = Tab Element
						colPos = 100
					}
				}
			}
		}
	}
}