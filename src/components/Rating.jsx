import React from "react";

import '../styles/card.css';
import  starg from "../assets/starg.png";
import  star from "../assets/star.png";


export default function Rate({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate-comp">
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={star}
						alt="rating star"
					/>
				) : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
					<img
						key={level.toString()}
						className="star"
						src={starg}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}
