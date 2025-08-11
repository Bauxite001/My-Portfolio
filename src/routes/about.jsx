export default function About() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800  to-black text-white px-6 py-16">
			{/* Header */}
			<header className="text-center mb-12">
				<h1 className="text-4xl md:text-5xl font-bold mb-2">About Me</h1>
				<p className="text-lg text-gray-400">Who I Am & What I Do</p>
			</header>

			{/* Main Content */}
			<main className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-gray-800/50 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
				{/* Profile Image */}
				<div className="flex-shrink-0">
					{/* <img
						src="/profile.jpg" // Replace with your actual image path
						alt="Agbo Moses "/> */}
					<div className="w-48 h-48 rounded-full flex items-center justify-center border-4 border-blue-500 shadow-lg p-3">
						<p className="text-gray-400">
							haven't found it yet... just give me a few sec.
						</p>
					</div>
				</div>

				{/* Text Section */}
				<div>
					<p className="text-gray-300 leading-relaxed mb-4">
						I’m <span className="font-semibold text-white">Agbo Moses</span>, a
						passionate Frontend Developer currently diving deeper into Python
						and AWS to become a{" "}
						<span className="text-blue-400 font-semibold">
							full-stack cloud engineer
						</span>
						. I love building clean, responsive web interfaces using modern
						tools like React and Tailwind CSS.
					</p>

					<p className="text-gray-300 leading-relaxed mb-4">
						Outside of code, I’m a curious learner with a deep interest in
						cybersecurity and cloud solutions. My goal? To solve real-world
						problems with scalable, user-friendly tech — and to never stop
						growing as a developer.
					</p>

					<div className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium shadow-md transition-all">
						Self-Taught & Growing 🚀
					</div>
				</div>
			</main>
		</div>
	);
}
