import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../../Shared/Navbar/TopNav';
import BottomNav from '../../Shared/Navbar/BottomNav';
import SaveButton from '../../Shared/Footer/SaveButton';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from 'react-icons/md';
import AddUser from '../../../../src/assets/images/configImages/userRoleConfigImage.png';
import { RiDropdownList } from 'react-icons/ri';

export default function AddUserRole() {
    const navigate = useNavigate();
    const [roleName, setRoleName] = useState('');
    const [permissions, setPermissions] = useState<string[]>([]);
    const allPermissions = ['View Plans', 'Edit Plans', 'Manage Users', 'Access Reports'];
    const handlePermissionChange = (permission: string) => {
        if (permissions.includes(permission)) {
            setPermissions(permissions.filter(p => p !== permission));
        } else {
            setPermissions([...permissions, permission]);
        }
    };
    const handleSave = () => {
        // Save the new user role logic here
    };
    return (
        <div className="min-h-screen bg-[#f8fafc] text-[#24304a]">
            <TopNav />
            <BottomNav />

            <div className="max-w-[1400px] mx-auto py-2">
                <div className="relative bg-white rounded-lg shadow-lg p-25 flex gap-12 items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                            <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-lg bg-[rgb(70,61,149)] text-white flex items-center justify-center">
                                <MdArrowBackIosNew className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-lg bg-[rgb(70,61,149)] text-white flex items-center justify-center">
                                <MdArrowForwardIos className="w-4 h-4" />
                            </button>
                            <h2 className="text-xl">
                                <span className="text-[#94A3B8] font-medium">Configure / </span>
                                <span className="font-bold text-[#334155]">Add User Role</span>
                            </h2>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select User Role</label>
                            <div className="relative">
                                <select className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <option>Select User Role</option>
                                </select>
                            </div>
                            <div className="mt-2 flex gap-4 text-sm">
                                <a className="text-indigo-700 underline cursor-pointer">Edit</a>
                                <a className="text-indigo-700 underline cursor-pointer">Delete</a>
                                <a className="text-indigo-700 underline cursor-pointer">+ Add</a>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Access Level</label>
                            <div className="relative">
                                <select className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <option>Select Access Level</option>
                                </select>
                            </div>
                            <div className="mt-2 flex gap-4 text-sm">
                                <a className="text-indigo-700 underline cursor-pointer">Edit</a>
                                <a className="text-indigo-700 underline cursor-pointer">Delete</a>
                                <a className="text-indigo-700 underline cursor-pointer">+ Add</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <button className="px-6 py-3 bg-[rgb(70,61,149)] text-white rounded-md font-semibold">Save & Create New Role</button>
                            <button onClick={handleSave} className="px-6 py-3 bg-[#F29100] text-white rounded-md font-semibold">Save & Continue</button>
                        </div>
                    </div>

                    <div className="w-1/2 flex items-center justify-center">
            <img src={AddUser} alt="illustration" className="max-w-full h-auto" />
          </div>
                    <div className="absolute left-25 right-25 bottom-6">
                        <SaveButton fullWidth onClick={handleSave} disabled={!roleName || permissions.length === 0}>
                            Save & Continue
                        </SaveButton>
                    </div>
                </div>

                
            </div>
        </div>
    );
}