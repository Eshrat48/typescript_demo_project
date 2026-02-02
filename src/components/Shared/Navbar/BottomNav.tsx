import React from "react";
import VarsityLogo from '../../../assets/images/university_of_sheffield.png';

export default function BottomNav(): JSX.Element {
	return (
		<div className="w-full bg-white border-b border-gray-200">
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<div className="flex items-center gap-4">
					<img src={VarsityLogo} alt="logo" className="h-10 w-auto" />
					<div className="flex flex-col">
						<span className="font-semibold text-lg text-gray-900">University of Sheffield</span>
						<span className="text-sm text-gray-500">Western Bank, Sheffield, S10 2TN</span>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full shadow-sm hover:bg-gray-200 flex items-center gap-2">Dashboard</button>
					<button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full shadow-sm hover:bg-gray-200 flex items-center gap-2">Build Your Event / Trip</button>
					<button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full shadow-sm hover:bg-gray-200 flex items-center gap-2">Reports</button>
					<button className="px-4 py-2 bg-orange-500 text-white rounded-full shadow hover:bg-orange-600">Configuration</button>
				</div>
			</div>
		</div>
	);
}

