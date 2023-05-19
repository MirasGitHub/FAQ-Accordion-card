import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./AccordionItem.css";

const AccordionItem = ({
	handleClick,
	activeAccordionNumber,
	itemNumber,
	title,
	content,
}) => {
	return (
		<div className="accordion-wrapper">
			<div onClick={() => handleClick(itemNumber)}>
				<div id="accordionTitleContainer">
					<h3
						className={
							activeAccordionNumber === itemNumber ? "active" : "title"
						}
					>
						{title}
					</h3>
					<div>
						<FontAwesomeIcon
							icon={faArrowDown}
							className="arrow"
							style={{
								transform:
									activeAccordionNumber !== itemNumber
										? "none"
										: "rotate(180deg)",
								transition: "all 0.3s ease",
							}}
						/>
					</div>
				</div>
				{activeAccordionNumber === itemNumber ? <p>{content}</p> : null}
			</div>
		</div>
	);
};

export default AccordionItem;
