import Portfolio from "../assets/portfolio.png";
import Huddle from "../assets/huddle.png";
import Contact from "../assets/contactForm.png";
import Commerce from "../assets/Ecom.png";

export default function Projects() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-16">
			{/* Header */}
			<header className="mb-12 text-center text-white">
				<h1 className="text-4xl md:text-5xl font-bold mb-2">Projects</h1>
				<p className="text-lg text-gray-400">Some things I've built</p>
			</header>

			{/* Projects Grid */}
			<main className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
				{/* Project Card */}
				<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 flex flex-col  md:flex-row">
					<div className="p-6 flex flex-col justify-between w-full">
						<h2 className="text-xl font-semibold mb-3">
							🛒 E-Commerce Product Page
						</h2>
						<div className="bg-gray-200 h-40 w-full rounded-lg mb-4">
							<img src={Commerce} alt="E-Com demo" className="h-full w-full" />
						</div>
						<a
							href="https://firstecomm.netlify.app/"
							target="_blank"
							className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center block"
						>
							Live Demo
						</a>
					</div>
					<div className="p-6 flex flex-col justify-between">
						<p className="text-gray-600 mb-4 leading-relaxed md:w-50">
							My first attempt at building an e-commerce UI with React and
							Tailwind. Still a work in progress with a few mobile swiper bugs,
							but it taught me a lot about components, state, and layout.
						</p>
						<p className="text-sm text-gray-500 italic">
							Tech used: React, Tailwind CSS, Swiper.js
						</p>
					</div>
				</div>

				{/* Project Card */}
				<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 flex flex-col md:flex-row">
					<div className="p-6 flex flex-col justify-between w-full">
						<h2 className="text-xl font-semibold mb-3">📃 Contact Form</h2>
						<div className="bg-gray-200 h-40 w-full rounded-lg mb-4">
							<img src={Contact} alt="contact demo" className="h-full w-full" />
						</div>
						<a
							href="https://bauxitecontactform.netlify.app/"
							target="_blank"
							className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center block"
						>
							Live Demo
						</a>
					</div>
					<div className="p-6 flex flex-col justify-between">
						<p className="text-gray-600 mb-4 leading-relaxed md:w-50">
							A responsive Contact Us form with input validation and
							accessibility features for all users.
						</p>
						<p className="text-sm text-gray-500 italic">
							Tech used: React, Tailwind CSS
						</p>
					</div>
				</div>

				{/* Project Card */}
				<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 flex flex-col md:flex-row">
					<div className="p-6 flex flex-col justify-between w-full">
						<h2 className="text-xl font-semibold mb-3">🌐 Portfolio Website</h2>
						<div className="bg-gray-200 h-40 w-full rounded-lg mb-4">
							<img
								src={Portfolio}
								alt="Portfolio Demo"
								className=" w-full h-full"
							/>
						</div>
						<a
							href="/"
							className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center block"
						>
							Live Demo
						</a>
					</div>
					<div className="p-6 flex flex-col justify-between">
						<p className="text-gray-600 mb-4 leading-relaxed md:w-50">
							The very site you’re on! Built to introduce myself as a developer
							and showcase my journey in web and cloud development.
						</p>
						<p className="text-sm text-gray-500 italic">
							Tech used: Tailwind CSS, React, React Router, React Icons
						</p>
					</div>
				</div>

				{/* Project Card */}
				<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 flex flex-col md:flex-row">
					<div className="p-6 flex flex-col justify-between w-full">
						<h2 className="text-xl font-semibold mb-3">📄 Landing Page</h2>
						<div className="bg-gray-200 h-40 w-full overflow-hidden rounded-lg mb-4">
							<img src={Huddle} alt="Demo" className=" object-cover " />
						</div>
						<a
							href="https://bauxite2nd.netlify.app/"
							target="_blank"
							className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center block"
						>
							Live Demo
						</a>
					</div>
					<div className="p-6 flex flex-col justify-between">
						<p className="text-gray-600 mb-4 leading-relaxed md:w-50">
							A simple yet clean landing page to practice layout and design
							skills.
						</p>
						<p className="text-sm text-gray-500 italic">
							Tech used: Tailwind CSS, Font Awesome
						</p>
					</div>
				</div>
			</main>

			{/* New Project Loading */}
			<div className="mt-12 bg-gray-800/50 p-6 rounded-xl text-center text-white max-w-2xl mx-auto">
				<div className="italic text-gray-300">New project loading...</div>
				<p className="text-sm mt-2 text-gray-400">
					I’m currently working on projects that showcase what I’ve truly
					learned — stay tuned!
				</p>
			</div>
		</div>
	);
}
