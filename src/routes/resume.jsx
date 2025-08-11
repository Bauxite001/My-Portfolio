export default function Resume() {
	return (
		<main className="px-6 md:px-20 py-10">
			<section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
				{/* Header */}
				<header className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-800">Agbo Moses</h1>
					<p className="text-gray-600">
						Frontend Developer | Backend Developer | AWS Engineer
					</p>
					<div className="mt-2 text-sm text-gray-500">
						<a href="mailto:mosesagbo373@gmail.com" className="hover:underline">
							mosesagbo373@gmail.com
						</a>{" "}
						|{" "}
						<a
							href="https://github.com/Bauxite001"
							target="_blank"
							className="hover:underline"
						>
							GitHub
						</a>{" "}
						|{" "}
						<a
							href="https://www.linkedin.com/in/agbo-moses-639a53375/"
							target="_blank"
							className="hover:underline"
						>
							LinkedIn
						</a>
					</div>
				</header>

				{/* Summary */}
				<section className="mb-6">
					<h2 className="text-xl font-semibold text-gray-800 border-b pb-1 mb-3">
						Summary
					</h2>
					<p className="text-gray-700">
						Passionate and self-taught web developer with skills in frontend and
						backend technologies. Currently expanding expertise in Python and
						AWS cloud services. Dedicated to building user-friendly applications
						and continuously improving my craft.
					</p>
				</section>

				{/* Skills */}
				<section className="mb-6">
					<h2 className="text-xl font-semibold text-gray-800 border-b pb-1 mb-3">
						Skills
					</h2>
					<ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700">
						<li>React.js</li>
						<li>Tailwind CSS</li>
						<li>JavaScript (ES6+)</li>
						<li>Python (Pending)</li>
						<li>Backend Development</li>
						<li>AWS Cloud (Pending)</li>
					</ul>
				</section>

				{/* Projects */}
				<section className="mb-6">
					<h2 className="text-xl font-semibold text-gray-800 border-b pb-1 mb-3">
						Projects
					</h2>
					<div className="space-y-4">
						<div>
							<h3 className="font-bold text-gray-800">
								E-Commerce Product Page
							</h3>
							<p className="text-gray-700">
								Built a responsive e-commerce page with React, Tailwind CSS, and
								Swiper.js, featuring a product carousel, quantity controls, and
								cart functionality.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-gray-800">Portfolio Website</h3>
							<p className="text-gray-700">
								Personal portfolio showcasing skills, projects, and contact
								details with a clean UI built in React and Tailwind CSS.
							</p>
						</div>
					</div>
				</section>

				{/* Education */}
				<section className="mb-6">
					<h2 className="text-xl font-semibold text-gray-800 border-b pb-1 mb-3">
						Education
					</h2>
					<p className="text-gray-700">
						Self-taught via online platforms such as Alison, freeCodeCamp, and
						documentation.
					</p>
				</section>

				{/* Contact */}
				<section>
					<h2 className="text-xl font-semibold text-gray-800 border-b pb-1 mb-3">
						Contact
					</h2>
					<p className="text-gray-700">📧 mosesagbo373@gmail.com</p>
					<p className="text-gray-700">🌐 GitHub: github.com/Bauxite001</p>
					<p className="text-gray-700">
						💼 LinkedIn: linkedin.com/in/agbo-moses-639a53375/
					</p>
				</section>
			</section>
		</main>
	);
}
