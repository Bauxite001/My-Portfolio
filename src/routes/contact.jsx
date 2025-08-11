import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-12">
			<header className="text-center mb-8">
				<h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Me</h1>
				<h2 className="text-lg md:text-xl text-gray-400">Let’s Connect</h2>
			</header>

			<main className="max-w-xl text-center space-y-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
				<p className="text-gray-300">
					Whether you’re a recruiter, fellow developer, or just curious — I’d
					love to hear from you!
				</p>

				<div className="flex flex-col gap-4 text-lg">
					<a
						href="mailto:mosesagbo373@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-blue-600 transition-all px-5 py-3 rounded-lg shadow-md"
					>
						<MdEmail className="text-2xl" /> mosesagbo373@gmail.com
					</a>

					<a
						href="https://www.linkedin.com/in/agbo-moses-639a53375/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-blue-500 transition-all px-5 py-3 rounded-lg shadow-md"
					>
						<FaLinkedin className="text-2xl" /> LinkedIn
					</a>

					<a
						href="https://github.com/Bauxite001"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 transition-all px-5 py-3 rounded-lg shadow-md"
					>
						<FaGithub className="text-2xl" /> GitHub
					</a>
				</div>

				<p className="text-sm text-gray-400 mt-6">
					I typically reply within 24 hours. Let’s build something awesome
					together.
				</p>
			</main>
		</div>
	);
}
