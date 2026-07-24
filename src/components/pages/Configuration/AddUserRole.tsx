import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../../Shared/Navbar/TopNav';
import BottomNav from '../../Shared/Navbar/BottomNav';
import SaveButton from '../../Shared/Footer/SaveButton';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from 'react-icons/md';
import AddUser from '../../../../src/assets/images/configImages/userRoleConfigImage.png';

export default function AddUserRole() {
    const navigate = useNavigate();
    const [roleName, setRoleName] = useState('');
    const [accessLevel, setAccessLevel] = useState('');

    const handleSave = () => {
        if (!roleName || !accessLevel) {
            return;
        }

        navigate('/add-user');
    };

    const handleCreateNewRole = () => {
        setRoleName('');
        setAccessLevel('');
    };
    return (
        <div className="min-h-screen bg-[#f8fafc] text-[#24304a]">
            <TopNav />
            <BottomNav />

            <div className="max-w-full mx-auto">
                <div className="relative bg-white p-10 pl-50 pr-50 flex gap-12 items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-6">
                            <button onClick={() => navigate(-1)} className="p-2 rounded-md bg-[rgb(70,61,149)] text-white cursor-pointer">
                <MdArrowBackIosNew className="w-4 h-4" />
              </button>
                            <button onClick={() => navigate('/add-user')} className="p-2 rounded-md bg-[rgb(70,61,149)] text-white cursor-pointer">
                <MdArrowForwardIos className="w-4 h-4" />
              </button>
                            <h2 className="text-lg">
                <span className="text-[#94A3B8] font-medium">Configure / </span>
                <span className="font-bold text-[#334155]">Confirmation</span>
              </h2>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select User Role</label>
                            <div className="relative">
                                <select
                                    value={roleName}
                                    onChange={(e) => setRoleName(e.target.value)}
                                    className="w-full pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                >
                                    <option value="">Select User Role</option>
                                    <option>Admin</option>
                                    <option>Manager</option>
                                    <option>Student</option>
                                </select>
                            </div>
                            <div className="mt-2 flex gap-4 text-sm">
                                <a className="text-[#94A3B8] hover:text-neutral-600 underline cursor-pointer">Edit</a>
                                <a className="text-[#94A3B8] hover:text-neutral-600 underline cursor-pointer">Delete</a>
                                <a className="text-[#94A3B8] hover:text-neutral-600 underline cursor-pointer">+ Add</a>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Access Level</label>
                            <div className="relative">
                                <select
                                    value={accessLevel}
                                    onChange={(e) => setAccessLevel(e.target.value)}
                                    className="w-full pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                >
                                    <option value="">Select Access Level</option>
                                    <option value="Read">Read</option>
                                    <option value="Write">Write</option>
                                    <option value="Admin">Admin</option>
                                    </select>
                            </div>
                            <div className="mt-2 flex gap-4 text-sm">
                                <a className="text-[#94A3B8] hover:text-neutral-600 underline cursor-pointer">Edit</a>
                                <a className="text-[#94A3B8] hover:text-neutral-600 underline cursor-pointer">Delete</a>
                                <a className="text-[#94A3B8] hover:text-neutral-600 underline cursor-pointer">+ Add</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mt-6 mb-10">
                            <button onClick={handleCreateNewRole} className="px-6 py-2 bg-[rgb(70,61,149)] text-white text-sm rounded-md font-semibold">Save & Create New Role</button>
                            <button onClick={handleSave} disabled={!roleName || !accessLevel} className="px-6 py-2 bg-[#F29100] text-white text-sm rounded-md font-semibold disabled:cursor-not-allowed disabled:opacity-60">Save & Continue</button>
                        </div>
                    </div>

                    <div className="w-1/2 flex items-center justify-center">
            <img src={AddUser} alt="illustration" className="max-w-full h-auto" />
          </div>
                    <div className="absolute left-50 right-50 bottom-4">
                        <SaveButton fullWidth onClick={handleSave} disabled={!roleName || !accessLevel}>
                            Save & Continue
                        </SaveButton>
                    </div>
                </div>

                
            </div>
        </div>
    );
}