import React, {setState} from "react";
import piggy from "../assets/porco.png";
import HogTile from "./HogTile";

const Nav = () => {
	// const [filterGreased, setFilterGreased] = setState(false)
	// function handleFilterGreased() {
		

	// }

	return (
		<>
			<div className="navWrapper">
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<img src={piggy} className="App-logo" alt="piggy" />
				</div>
				<span className="normalText">
					A React App for County Fair Hog Fans
				</span>
			</div>
			<button>Filter Greased</button>
			<div className="ui grid container">
				<HogTile />
			</div>

		</>
	);
};

export default Nav;
