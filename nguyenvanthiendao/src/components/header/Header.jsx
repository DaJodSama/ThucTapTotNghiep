import Annoucement from "../annoucement/Annoucement";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";

export default function Header() {
	return (
		<div>
			<Annoucement />
			<Navbar />
			<Menu />
		</div>
	);
}
