import "./ImageComponent.css";
import BoxIllustration from "../../assets/illustration-box-desktop.svg";

const ImageComponent = () => {
	return (
		<div>
			<div className="imgContainer">
				<div className="desktop-img"></div>
			</div>
			<div className="box-img">
				<img src={BoxIllustration} alt="boxIMG" />
			</div>
		</div>
	);
};

export default ImageComponent;
