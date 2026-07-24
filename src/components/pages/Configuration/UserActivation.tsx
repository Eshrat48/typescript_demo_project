import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TopNav from '../../Shared/Navbar/TopNav';
import BottomNav from '../../Shared/Navbar/BottomNav';
import SaveButton from '../../Shared/Footer/SaveButton';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function UserActivation() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { userName?: string } | null;

  const [userName, setUserName] = useState(state?.userName ?? '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordRules = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>_\\[\];'`~/-]/.test(password),
    passwordsMatch: password.length > 0 && confirmPassword.length > 0 && password === confirmPassword,
  };

  const showPasswordRequirements = password.length > 0;
  const showConfirmPasswordError = confirmPassword.length > 0 && password.length > 0 && password !== confirmPassword;

  const isFormValid = Boolean(
    userName &&
      passwordRules.minLength &&
      passwordRules.hasUppercase &&
      passwordRules.hasLowercase &&
      passwordRules.hasNumber &&
      passwordRules.hasSpecialChar &&
      passwordRules.passwordsMatch,
  );

  const handleNext = () => {
    if (!isFormValid) {
      return;
    }

    navigate('/country-region');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#24304a]">
      <TopNav />
      <BottomNav />

      <div className="max-w-310 mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 min-h-[calc(100vh-220px)] flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={() => navigate(-1)}
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
              onClick={() => navigate('/country-region')}
            >
              <MdArrowForwardIos className="w-4 h-4" />
            </button>

            <h2 className="text-lg font-semibold">
              <span className="text-[#94A3B8] font-medium">Configure / </span>
              <span className="text-[#94A3B8] font-medium">Add User / </span>
              <span className="font-bold text-[#334155]">User Activation</span>
            </h2>
          </div>

          <div className="flex-1 flex flex-col items-center justify-start pt-8">
            <div className="w-full max-w-180 space-y-6">
              <div className="grid grid-cols-[180px_1fr] items-center gap-6">
                <label className="text-sm font-semibold text-[#334155]">User Name</label>
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  aria-label="User Name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>

              <div className="grid grid-cols-[180px_1fr] items-center gap-6">
                <label className="text-sm font-semibold text-[#334155]">Set Password</label>
                <div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-label="Set Password"
                      placeholder="Enter password"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      title={showPassword ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPassword((current) => !current)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <AiOutlineEyeInvisible className="h-5 w-5" /> : <AiOutlineEye className="h-5 w-5" />}
                    </button>
                  </div>

                  {showPasswordRequirements ? (
                    <div className="mt-3 text-xs">
                      <div className="mb-2 font-semibold text-[#334155]">Password requirements</div>
                      <ul className="space-y-1">
                        <li className={passwordRules.minLength ? 'text-green-700' : 'text-gray-500'}>
                          {passwordRules.minLength ? '✓' : '○'} At least 8 characters
                        </li>
                        <li className={passwordRules.hasUppercase ? 'text-green-700' : 'text-gray-500'}>
                          {passwordRules.hasUppercase ? '✓' : '○'} One uppercase letter
                        </li>
                        <li className={passwordRules.hasLowercase ? 'text-green-700' : 'text-gray-500'}>
                          {passwordRules.hasLowercase ? '✓' : '○'} One lowercase letter
                        </li>
                        <li className={passwordRules.hasNumber ? 'text-green-700' : 'text-gray-500'}>
                          {passwordRules.hasNumber ? '✓' : '○'} One number
                        </li>
                        <li className={passwordRules.hasSpecialChar ? 'text-green-700' : 'text-gray-500'}>
                          {passwordRules.hasSpecialChar ? '✓' : '○'} One special character
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-[180px_1fr] items-center gap-6">
                <label className="text-sm font-semibold text-[#334155]">Confirm Password</label>
                <div>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      aria-label="Confirm Password"
                      placeholder="Confirm password"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                    <button
                      type="button"
                      aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                      title={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                      onClick={() => setShowConfirmPassword((current) => !current)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <AiOutlineEyeInvisible className="h-5 w-5" /> : <AiOutlineEye className="h-5 w-5" />}
                    </button>
                  </div>

                  {showConfirmPasswordError ? (
                    <p className="mt-2 text-sm text-red-600">Passwords do not match.</p>
                  ) : null}
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleNext}
                  disabled={!isFormValid}
                  className="min-w-28 rounded-md bg-[#F29100] px-7 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8">
            <SaveButton fullWidth disabled={!isFormValid} onClick={handleNext}>
              Save & Continue
            </SaveButton>
          </div>
        </div>
      </div>
    </div>
  );
}