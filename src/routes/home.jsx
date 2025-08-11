import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
			{/* Hero Section */}
			<div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
				{/* Profile Image */}
				<div className="h-40 w-40 rounded-full border-4 p-4 border-amber-400 shadow-lg bg-gray-700 flex items-center justify-center">
					<p className="text-gray-400 ">still searching for a nice picture</p>
				</div>

				{/* Info Section */}
				<div className="flex flex-col gap-4 max-w-md">
					<p className="text-3xl font-bold">Hi, I'm Agbo Moses.</p>
					<p className="text-gray-300">
						A Frontend Developer, Python enthusiast, BackEnd learner, and
						aspiring AWS Engineer.
					</p>

					{/* Skills Badges */}
					<div className="flex flex-wrap gap-3 text-sm">
						<span className="bg-amber-700 px-3 py-1 rounded-lg">
							AWS (Pending)
						</span>
						<span className="bg-blue-700 px-3 py-1 rounded-lg">
							Python (Pending)
						</span>
						<span className="bg-green-700 px-3 py-1 rounded-lg">
							BackEnd (Pending)
						</span>
						<Link
							to="/Resume"
							className="bg-purple-700 hover:bg-purple-800 px-4 py-1 rounded-lg transition"
						>
							View Résumé
						</Link>
					</div>

					{/* Social Icons */}
					<div className="flex gap-6 text-3xl mt-4 justify-center md:justify-start text-gray-500">
						<a
							href="https://github.com/Bauxite001"
							target="_blank"
							className="hover:text-white transition"
						>
							<FaGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/agbo-moses-639a53375/"
							target="_blank"
							className="hover:text-blue-500 transition"
						>
							<FaLinkedin />
						</a>
						<a
							href="mailto:mosesagbo373@gmail.com"
							target="_blank"
							className="hover:text-red-500 transition"
						>
							<MdEmail />
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
