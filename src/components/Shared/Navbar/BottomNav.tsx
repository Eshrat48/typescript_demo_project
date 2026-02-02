import VarsityLogo from '../../../assets/images/university_of_sheffield.png';
import { CiGrid42 } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { BsGear } from "react-icons/bs";


export default function BottomNav() {
	return (
		<div className="w-full bg-white border-b border-gray-200">
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<div className="flex items-center gap-1">
					<img src={VarsityLogo} alt="logo" className="h-10 w-auto" />
					<div className="flex flex-col">
						<span className="font-semibold text-3xsm text-gray-900">University of Sheffield</span>
						<span className="text-sm text-gray-500">Western Bank, Sheffield, S10 2TN</span>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full shadow-sm hover:bg-gray-200 flex items-center gap-1"><CiGrid42 />Dashboard</button>
					<button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full shadow-sm hover:bg-gray-200 flex items-center gap-1"><LuMapPin />Build Your Event / Trip</button>
					<button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full shadow-sm hover:bg-gray-200 flex items-center gap-1"><HiOutlineDocumentChartBar />Reports</button>
					<button className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full shadow hover:bg-orange-600 flex items-center gap-1"><BsGear />Configuration</button>
				</div>
			</div>
		</div>
	);
}

