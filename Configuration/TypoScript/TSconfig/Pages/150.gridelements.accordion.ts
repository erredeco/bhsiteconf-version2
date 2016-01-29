# Accordion Container
tx_gridelements.setup.ffaccordion_container {
  title = Collapsible Container
	description = Ein Element das mehrere Collapsible enthält
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
  title = Accordion Element
	description = Ein Element für einen Collapsible-Container
	flexformDS = FILE:EXT:bhsiteconf/Configuration/FlexForms/gridelements_ffaccordion_element.xml

	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = Collapsible Element
						colPos = 0
					}
				}
			}
		}
	}
}