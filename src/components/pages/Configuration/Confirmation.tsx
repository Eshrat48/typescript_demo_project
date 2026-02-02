import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../../Shared/Navbar/TopNav';
import BottomNav from '../../Shared/Navbar/BottomNav';
import SaveButton from '../../Shared/Footer/SaveButton';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from 'react-icons/md';
import welcomeImg from '../../../../src/assets/images/configImages/welcomeConfigImage.png';

export default function Confirmation() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState<'yes' | 'no' | null>(null);

  const handleSubmit = () => {
    // handle submit action (e.g., store selection)
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#24304a]">
      <TopNav />
      <BottomNav />

      <div className="max-w-[1400px] mx-auto py-2">
        <div className="relative bg-white rounded-lg shadow-lg p-25 flex gap-12 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => navigate(-1)} className="p-2 rounded-md bg-[rgb(70,61,149)] text-white">
                <MdArrowBackIosNew className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-md bg-[rgb(70,61,149)] text-white">
                <MdArrowForwardIos className="w-4 h-4" />
              </button>
              <h2 className="text-lg">
                <span className="text-[#94A3B8] font-medium">Configure / </span>
                <span className="font-bold text-[#334155]">Confirmation</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Please confirm if your institution currently subscribes to other SAMS Products. If so, you can import your user roles, users and agents without the need to add them manually. You can move directly to the 'Create Labels' section of the configuration. Importing user roles, users and agents will be triggered by your confirmation below. Please note that the system may take 24 hours to update your data. You will receive a notification when your data has been imported.
            </p>

            <div className="mb-6">
              <label className="flex items-start gap-3">
                <input type="radio" name="import" value="yes" checked={selection === 'yes'} onChange={() => setSelection('yes')} className="mt-1 w-4 h-4 rounded border-gray-300 text-indigo-600" />
                <span className="text-sm text-gray-700">Yes, I can confirm that my institution is currently subscribed to SAMS Manage. Please import the relevant data to SAMS Planner.</span>
              </label>
            </div>

            <div className="mb-6">
              <label className="flex items-start gap-3">
                <input type="radio" name="import" value="no" checked={selection === 'no'} onChange={() => setSelection('no')} className="mt-1 w-4 h-4 rounded border-gray-300 text-indigo-600" />
                <span className="text-sm text-gray-700">No, I can confirm that my institution is not currently subscribed to SAMS Manage.</span>
              </label>
            </div>

            <div className="mb-6">
              <button onClick={handleSubmit} className="px-4 py-2 rounded-md bg-[#F29100] text-white text-sm font-semibold">Submit</button>
            </div>
          </div>
            <div className="w-1/2 flex items-center justify-center mt-10">
            <img src={welcomeImg} alt="illustration" className="max-w-full h-auto" />
          </div>
          <div className="absolute left-25 right-25 bottom-6">
            <SaveButton fullWidth disabled={!selection} onClick={handleSubmit}>
              Save & Continue
            </SaveButton>
          </div>
        </div>
      </div>
    </div>
  );
}