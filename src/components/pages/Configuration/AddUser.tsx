import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../../Shared/Navbar/TopNav';
import BottomNav from '../../Shared/Navbar/BottomNav';
import SaveButton from '../../Shared/Footer/SaveButton';
import AddUserImg from '../../../../src/assets/images/configImages/userRoleConfigImage.png';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

type UserProfile = {
  id: string;
  name: string;
  email: string;
  role: string;
  jobTitle: string;
};

export default function AddUser() {
  const navigate = useNavigate();
  const defaultUsers: UserProfile[] = [
    { id: 'jenifer', name: 'Jenifer', email: 'jenifer@sams.com', role: 'Admin', jobTitle: 'Operations Lead' },
    { id: 'jhon-doe', name: 'Jhon Doe', email: 'jhon.doe@sams.com', role: 'Manager', jobTitle: 'Program Manager' },
    { id: 'john-xc', name: 'John XC', email: 'john.xc@sams.com', role: 'Student', jobTitle: 'Trainee' },
    { id: 'new-user-test', name: 'New User test', email: 'new.user@sams.com', role: 'Admin', jobTitle: 'Support Analyst' },
    { id: 'paysalesdemos', name: 'paysalesdemos', email: 'paysalesdemos@sams.com', role: 'Manager', jobTitle: 'Sales Manager' },
    { id: 'raidu', name: 'Raidu', email: 'raidu@sams.com', role: 'Student', jobTitle: 'Assistant' },
    { id: 'rousnay123', name: 'rousnay123', email: 'rousnay123@sams.com', role: 'Admin', jobTitle: 'System Owner' },
  ];

  const [users, setUsers] = useState<UserProfile[]>(defaultUsers);
  const [selectedUserId, setSelectedUserId] = useState('');
  const selectedUser = users.find((user) => user.id === selectedUserId);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const clearForm = () => {
    setSelectedUserId('');
    setName('');
    setEmail('');
    setRole('');
    setJobTitle('');
  };

  const syncSelectedUser = (userId: string) => {
    const user = users.find((entry) => entry.id === userId);

    if (!user) {
      return;
    }

    setSelectedUserId(user.id);
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setJobTitle(user.jobTitle);
  };

  const goToActivation = () => {
    navigate('/user-activation', {
      state: {
        userName: name,
      },
    });
  };

  const handleSave = () => {
    if (!name || !email || !role || !jobTitle) {
      return;
    }

    if (!selectedUser) {
      const newUser: UserProfile = {
        id: `${Date.now()}`,
        name,
        email,
        role,
        jobTitle,
      };

      setUsers((currentUsers) => [...currentUsers, newUser]);
      setSelectedUserId(newUser.id);
    } else {
      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user.id === selectedUserId
            ? { ...user, name, email, role, jobTitle }
            : user,
        ),
      );
    }

    goToActivation();
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#24304a]">
      <TopNav />
      <BottomNav />

      <div className="max-w-300 mx-auto py-8 px-4">
        <div className="mb-6 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            title="Go back"
            className="p-3 rounded-md bg-[rgb(70,61,149)] font-bold text-white"
          >
            <MdArrowBackIosNew className="w-4 h-4" />
          </button>

          <button
            type="button"
            aria-label="Go forward"
            title="Go forward"
            className="p-3 rounded-md bg-[rgb(70,61,149)] font-bold text-white"
            onClick={goToActivation}
          >
            <MdArrowForwardIos className="w-4 h-4" />
          </button>

          <h2 className="text-xl">
            <span className="text-[#94A3B8] font-medium">Configure / </span>
            <span className="font-bold text-[#334155]">Add User</span>
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-12 gap-6 items-start">

          {/* Left list */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <button onClick={clearForm} className="w-full flex items-center gap-3 justify-center bg-[#463D95] text-white rounded-md py-3 font-semibold">
                <span className="text-xl">+</span>
                <span>Create User</span>
              </button>

              <div className="mt-4 space-y-3">
                {users.map((user) => (
                  <div
                    key={user.id}
                    onClick={() => syncSelectedUser(user.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer ${user.id === selectedUserId ? 'bg-[#463D95] text-white' : 'bg-[#f6f9fb] text-[#334155]'}`}
                  >
                    <div>{user.name}</div>
                    <div className={`w-7 h-7 flex items-center justify-center rounded-full ${user.id === selectedUserId ? 'bg-white text-[#463D95]' : 'bg-white text-gray-400 border'}`}>i</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center form */}
          <div className="col-span-5">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">User Name</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-4 py-3 shadow-sm"
                aria-label="User Name"
                placeholder="Enter user name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">User Email</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-4 py-3 shadow-sm"
                aria-label="User Email"
                placeholder="Enter user email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">User Role</label>
              <select
                className="w-full border border-gray-200 rounded-lg px-4 py-3 shadow-sm"
                aria-label="User Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select role</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Student">Student</option>
                <option value="Guest">Guest</option>
              </select>
              <div className="mt-2 flex gap-4">
                <a className="text-green-700 underline">Include Access</a>
                <a className="text-red-600 underline">Exclude Access</a>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">User Job Title</label>
              <select
                className="w-full border border-gray-200 rounded-lg px-4 py-3 shadow-sm"
                aria-label="User Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              >
                <option value="">Select job title</option>
                <option value="Operations Lead">Operations Lead</option>
                <option value="Program Manager">Program Manager</option>
                <option value="Trainee">Trainee</option>
                <option value="Support Analyst">Support Analyst</option>
                <option value="Sales Manager">Sales Manager</option>
                <option value="Assistant">Assistant</option>
                <option value="System Owner">System Owner</option>
              </select>
              <div className="mt-2 flex gap-4">
                <a className="text-orange-500 underline">Edit</a>
                <a className="text-indigo-700 underline">+ Add</a>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <button className="px-5 py-2 bg-[#463D95] text-white rounded-md font-semibold">Update</button>
              <button onClick={() => navigate('/user-activation')} className="px-5 py-2 bg-[#F29100] text-white rounded-md font-semibold">Activate User</button>
            </div>
          </div>

          {/* Right illustration */}
          <div className="col-span-4 self-center flex items-center justify-center">
            <div className="w-full min-h-105 bg-transparent flex items-center justify-center p-0">
              <img src={AddUserImg} alt="illustration" className="max-w-full h-auto bg-transparent scale-125 origin-center" />
            </div>
          </div>

          {/* Bottom full-width Save button */}
          <div className="col-span-12">
            <div className="mt-6">
              <SaveButton fullWidth onClick={handleSave} disabled={!name || !email || !role || !jobTitle}>
                Save & Continue
              </SaveButton>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
