import { useState } from "react";
import menu from "./assets/icon-menu.svg";
import close from "./assets/icon-close.svg";
import { Link } from "react-router-dom";

function Nav() {
	const [isToggle, setIsToggle] = useState(false);
	const toggleMenu = () => setIsToggle(!isToggle);

	return (
		<nav className="flex justify-between items-center px-4 md:px-12 py-3 bg-gradient-to-r from-[#1a1f32] to-[#101322] text-white shadow-lg">
			{/* Brand */}
			<h1 className="text-xl md:text-2xl font-bold tracking-wide flex items-center justify-center">
				<img
					src="./logo.png"
					alt="logo"
					className="h-8 w-8 brightness-100 invert"
				/>
				AGBO MOSES
			</h1>

			{/* Desktop Links */}
			<ul className="hidden md:flex gap-8 text-sm font-medium">
				{["Home", "About", "Projects", "Contact"].map((item) => (
					<li
						key={item}
						className="hover:text-gray-300 transition-colors duration-200"
					>
						<Link to={`/${item === "Home" ? "" : item}`}>{item}</Link>
					</li>
				))}
			</ul>

			{/* Mobile Menu Button */}
			<button onClick={toggleMenu} className="md:hidden">
				<img
					src={menu}
					alt="menu-button"
					className={`w-6 invert ${isToggle ? "hidden" : ""}`}
				/>
			</button>

			{/* Mobile Sidebar */}
			<div
				className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-gradient-to-b from-[#1a1f32] to-[#101322] z-20 text-white shadow-2xl p-6 transform transition-transform duration-300 ease-in-out ${
					isToggle ? "translate-x-0" : "translate-x-full"
				}`}
			>
				{/* Close Button */}
				<button onClick={toggleMenu} className="absolute top-4 right-4">
					<img src={close} alt="close" className="w-6 invert" />
				</button>

				{/* Menu Items */}
				<ul className="flex flex-col gap-6 mt-12 text-lg font-medium">
					{["Home", "About", "Projects", "Contact"].map((item) => (
						<li key={item}>
							<Link
								to={`/${item === "Home" ? "" : item}`}
								onClick={toggleMenu}
								className="hover:text-gray-300 transition-colors"
							>
								{item}
							</Link>
						</li>
					))}
				</ul>

				{/* Footer or Social Links */}
				<div className="absolute bottom-6 left-6 text-sm text-gray-400">
					© 2025 Agbo Moses
				</div>
			</div>
		</nav>
	);
}

export default Nav;
