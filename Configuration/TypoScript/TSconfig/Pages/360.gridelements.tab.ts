# Tabs Container
tx_gridelements.setup.fftab_container {
	title = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.tab_container.title
	description = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.tab_container.description
  icon = EXT:bhsiteconf/Resources/Public/Icons/GridElements/tab.gif
	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.tab_container.title
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
	title = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.tab_element.title
	description = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.tab_element.description
	flexformDS = FILE:EXT:bhsiteconf/Configuration/FlexForms/gridelements_ffaccordion_element.xml
  icon = EXT:bhsiteconf/Resources/Public/Icons/GridElements/container.gif
	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = LLL:EXT:bhsiteconf/Resources/Private/Language/backend.xlf:gridelements.tab_element.title
						colPos = 100
					}
				}
			}
		}
	}
}