import VarsityLogo from '../../../assets/images/university_of_sheffield.png';
import { CiGrid42 } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { BsGear } from "react-icons/bs";


export default function BottomNav() {
	return (
		<div className="w-full bg-white border-b border-gray-200 sticky top-13 z-40">
			<div className="max-w-full mx-auto px-4 sm:px-4 lg:px-8 h-14 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<img src={VarsityLogo} alt="logo" className="h-10 w-auto" />
					<div className="flex flex-col">
						<span className="font-bold text-2xsm text-gray-900">University of Sheffield</span>
						<span className="text-xs text-gray-500">Western Bank, Sheffield, S10 2TN</span>
					</div>
				</div>

				<div className="flex items-center gap-2.5">
					<button className="px-2 sm:px-2 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-md shadow-sm hover:bg-gray-100 flex items-center gap-1">
						<CiGrid42 className="text-base" />
						<span>Dashboard</span>
					</button>

					<button className="px-2 sm:px-2 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-md shadow-sm hover:bg-gray-100 flex items-center gap-1">
						<LuMapPin className="text-base" />
						<span>Build Your Event / Trip</span>
					</button>

					<button className="px-2 sm:px-2 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-md shadow-sm hover:bg-gray-100 flex items-center gap-1">
						<HiOutlineDocumentChartBar className="text-base" />
						<span>Reports</span>
					</button>

					<button className="px-2 sm:px-2 py-1.5 bg-[#f29100] text-white text-xs font-semibold rounded-md shadow-md hover:bg-orange-600 flex items-center gap-1">
						<BsGear className="text-base" />
						<span>Configuration</span>
					</button>
				</div>
			</div>
		</div>
	);
}

