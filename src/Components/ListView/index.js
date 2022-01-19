import React, { useState } from "react";
import AddUpdate from "../Add-Update-Todo";
import "./index.css";

export default function ListView() {
	const [addUpdateStatus, updateStatus] = useState(false);
	const change  = () => {
		updateStatus(!addUpdateStatus);
	}
	return (
		<>
			{addUpdateStatus ? (
				<>
					<div className="add">
						<button type="button" className="todoButton" onClick={change}>Add ToDo</button>
					</div>
					<div className="container">
						<div className="listView listView1">
							<p className="todoTitle">ToDo</p>
							<ul>
								<li>
									<span>hi</span>
									<button className="right">
										✏
									</button>
								</li>
								<li>
									<span>hi</span>
									<button className="right">
										✏
									</button>
								</li>
								<li>
									<span>hi</span>
									<button className="right">
										✏
									</button>
								</li>
							</ul>
						</div>
						<div className="listView listView2">
							<p className="todoTitle">In Progress</p>
							<ul>
								<li>
									<span>hi</span>
									<button className="right">
										✏
									</button>
								</li>
								<li>
									<span>hi</span>
									<button className="right">
										✏
									</button>
								</li>
								<li>
									<span>hi</span>
									<button className="right">
										✏
									</button>
								</li>
							</ul>
						</div>
						<div className="listView listView3">
							<p className="todoTitle">Done</p>
							<ul>
								<li>
									<span>hi</span>
									<button className="right">
										❌
									</button>
								</li>
								<li>
									<span>hi</span>
									<button className="right">
										❌
									</button>
								</li>
								<li>
									<span>hi</span>
									<button className="right">
										❌
									</button>
								</li>
							</ul>
						</div>
					</div>
				</>
			) : (
				<AddUpdate />
			)}
			<button type="button" className="todoButton" onClick={change}>Show/Hide</button>
		</>
	);
}
