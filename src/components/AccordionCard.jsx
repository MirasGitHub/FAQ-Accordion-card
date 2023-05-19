import { useState } from "react";

import styles from "./AccordionCard.module.css";

import AccordionItem from "./AccordionItem";
import { DATA } from "../data/data";
import ImageComponent from "./ImageComponent/ImageComponent";

const AccordionCard = () => {
	const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);

	const handleClick = (accordionNumber) => {
		if (activeAccordionNumber === accordionNumber) {
			setActiveAccordionNumber(null);
		} else {
			setActiveAccordionNumber(accordionNumber);
		}
	};

	return (
		<div>
			<div className={styles.cardContainer}>
				<div>
					<ImageComponent />
				</div>
				<div id={styles.accordionContainer}>
					<h1>FAQ</h1>
					{DATA.map((item) => (
						<AccordionItem
							activeAccordionNumber={activeAccordionNumber}
							handleClick={handleClick}
							itemNumber={item.itemNumber}
							title={item.title}
							content={item.content}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export { AccordionCard };
