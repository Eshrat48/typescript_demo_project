import { useNavigate } from 'react-router-dom';
import TopNav from '../../Shared/Navbar/TopNav';
import BottomNav from '../../Shared/Navbar/BottomNav';
import SaveButton from '../../Shared/Footer/SaveButton';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

export default function CountryRegion() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#24304a]">
      <TopNav />
      <BottomNav />

      <div className="max-w-310 mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 min-h-[calc(100vh-220px)] flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={() => navigate('/user-activation')}
              aria-label="Go back"
              title="Go back"
              className="p-2 rounded-md bg-[rgb(70,61,149)] text-white"
            >
              <MdArrowBackIosNew className="w-4 h-4" />
            </button>

            <button
              type="button"
              aria-label="Go forward"
              title="Go forward"
              className="p-2 rounded-md bg-[rgb(70,61,149)] text-white"
              disabled
            >
              <MdArrowForwardIos className="w-4 h-4" />
            </button>

            <h2 className="text-lg font-semibold">
              <span className="text-[#94A3B8] font-medium">Configure / </span>
              <span className="text-[#94A3B8] font-medium">Add User / </span>
              <span className="font-bold text-[#334155]">Country / Region</span>
            </h2>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <p className="text-sm text-[#64748b]">Country / Region setup page placeholder.</p>
          </div>

          <div className="mt-auto pt-8">
            <SaveButton fullWidth onClick={() => navigate('/add-user')}>
              Save & Continue
            </SaveButton>
          </div>
        </div>
      </div>
    </div>
  );
}