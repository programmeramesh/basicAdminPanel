import React, { useEffect, useState } from "react";
import { DATA } from "../../utils/data";
import DataListItem from "./DataListItem";

const DataList = (props) => {
	const { selectTab, selectedTab, search } = props;
	const [list, setList] = useState([]);

	useEffect(() => {
    if (search) {
			const filterData = DATA.filter((i) =>
				i.firstName.toLowerCase().includes(search)
			);
			setList(filterData);
		} else {
			setList(DATA);
		}
	}, [search]);


  console.log("Test",search)

	return (
		<div id="table-section">
			<div id="table-wrapper">
				<div id="table-headers">
					<table>
						<thead>
							<tr>
								<th className="column1">Id</th>
								<th className="column2">FirstName</th>
								<th className="column3">LastName</th>
								<th className="column4">Email</th>
								<th className="column5">Phone</th>
							</tr>
						</thead>
					</table>
				</div>

				<div id="table-data">
					<table>
						<tbody id="table_body">
							{list.map((item) => (
								<DataListItem
									selectedTab={selectedTab}
									item={item}
									key={item.id}
									{...props}
								/>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
export default DataList;
