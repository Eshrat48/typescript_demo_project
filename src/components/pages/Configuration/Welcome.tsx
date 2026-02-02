import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../../Shared/Navbar/TopNav';
import BottomNav from '../../Shared/Navbar/BottomNav';
import SaveButton from '../../Shared/Footer/SaveButton';
import welcomeImg from '../../../../src/assets/images/configImages/welcomeConfigImage.png';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from 'react-icons/md';

export default function Welcome() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  const handleContinue = () => {
    if (agreed) navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#24304a]">
      <TopNav />
      <BottomNav />
      <div className="max-w-full mx-auto py-2">
        <div className="relative bg-white rounded-lg shadow-lg p-25 flex gap-12 items-center">
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate(-1)}
                  className="p-3 rounded-md bg-white font-bold border border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  <MdArrowBackIosNew className="w-4 h-4" />
                </button>
                <div className="p-3 rounded-md bg-[rgb(70,61,149)] font-bold text-white">
                  <MdArrowForwardIos className="w-4 h-4" />
                </div>
                <h2 className="text-lg">
                <span className="text-[#94A3B8] font-medium">Configure /</span>
                <span className="font-bold text-[#334155]"> Welcome</span>
              </h2>  
              </div>
              <h1 className="text-3xl font-extrabold mt-10">Welcome to <span className="text-[#334155]">SAMS</span> <span className="text-[#F29100]">Planner</span></h1>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 leading-relaxed">
                By proceeding with your SAMS360 account setup, you confirm your institution's acceptance of the terms and conditions outlined in your signed contract with SAMS Global. These Terms govern your use of the SAMS360 platform, including data handling, access rights, and support arrangements. Please ensure all relevant internal stakeholders are aware of and adhere to these Terms.
              </p>
            </div>

            <div className="mb-6">
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 rounded border-gray-300 text-indigo-600" />
                <span className="text-sm text-gray-700">
                  I confirm that I have read and understood the Terms and Conditions outlined in our signed contract with SAMS Global, and that our institution agrees to comply with them in using the SAMS360 platform.
                </span>
              </label>
            </div>

            <div className="mb-6">
              <button disabled={!agreed} onClick={handleContinue} className={`px-4 py-2 rounded-md font-semibold ${agreed ? 'bg-[#F29100] text-white hover:bg-[#F29100]' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
                Configure the System
              </button>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img src={welcomeImg} alt="illustration" className="max-w-full h-auto" />
          </div>
          <div className="absolute left-25 right-25 bottom-6">
            <SaveButton fullWidth disabled={!agreed} onClick={handleContinue} />
          </div>
        </div>
      </div>
    </div>
  );
}
