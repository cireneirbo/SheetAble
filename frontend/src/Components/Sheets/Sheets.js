import React from 'react'

import './Sheets.css'

import { useHistory } from "react-router-dom";
import axios from 'axios';



function Sheets(props) {
	const { sheets } = props

	let history = useHistory();


	const sheetItems = sheets.map((sheet, index) => {
		return (			
			<li key={sheet.sheet_name} onClick={() => history.push(`sheet/${sheet.pdf_url.split("pdf/").pop()}`)}>
				<div className="box-container remove_shadow" >
					<img className="thumbnail-image" src={`${axios.defaults.baseURL}/sheet/thumbnail/${sheet.safe_sheet_name}`} alt="Sheet Thumbnail" />
					<div className="sheet-name-container">
						<span className="sheet-name">{sheet.sheet_name}</span>
					</div>
					<div className="sheet-composer-container">
						<span className="sheet-composer">{sheet.composer}</span>
					</div>
				</div>
			</li>
		)
	}
 	
	);

	return (
		<ul className="all-sheets-container">
			{sheetItems}
		</ul>
	)
}



export default Sheets
