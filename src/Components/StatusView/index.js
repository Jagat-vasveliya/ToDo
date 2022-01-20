import React from "react";
import "./index.css";

export default function StatusView(props) {
	return (
		<div>
			<div className={`listView ${props.status}`}>
				<p className="todoTitle">
					{props.data.length
						? props.status
						: `Nothing ${props.status}`}
				</p>
				<ul>{props.data}</ul>
			</div>
		</div>
	);
}
