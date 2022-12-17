import React from "react";
import '../styles/host.css';

export default function Host(props) {
	return (
		<aside className="host-comp">
			<p className="host-name">{props.hostName}</p>
			<div className="hostPicture">
				<img src={props.hostPicture}  />
			</div>
		</aside>
	);
}
