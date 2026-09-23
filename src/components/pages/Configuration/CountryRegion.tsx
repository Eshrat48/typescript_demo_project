import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../../Shared/Navbar/TopNav';
import BottomNav from '../../Shared/Navbar/BottomNav';
import SaveButton from '../../Shared/Footer/SaveButton';
import { MdArrowBackIosNew, MdArrowForwardIos, MdEdit, MdDelete } from 'react-icons/md';

interface CountryData {
  id: string;
  country: string;
  states: string;
  primaryManager: string;
  secondaryManager: string;
}

const COUNTRIES_STORAGE_KEY = 'sams-copy-country-region-countries';

const getStoredCountries = () => {
  if (typeof window === 'undefined') {
    return [] as CountryData[];
  }

  const stored = window.localStorage.getItem(COUNTRIES_STORAGE_KEY);
  if (!stored) {
    return [] as CountryData[];
  }

  try {
    const parsed = JSON.parse(stored) as CountryData[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [] as CountryData[];
  }
};

export default function CountryRegion() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState<CountryData[]>(() => getStoredCountries());
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    country: '',
    states: '',
    primaryManager: '',
    secondaryManager: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(COUNTRIES_STORAGE_KEY, JSON.stringify(countries));
  }, [countries]);

  const handleAddClick = () => {
    setFormData({ country: '', states: '', primaryManager: '', secondaryManager: '' });
    setEditingId(null);
    setShowForm(true);
  };

  const handleFormChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveCountry = () => {
    if (!formData.country || !formData.primaryManager) {
      return;
    }

    if (editingId) {
      setCountries((prev) =>
        prev.map((country) =>
          country.id === editingId ? { ...country, ...formData } : country,
        ),
      );
    } else {
      const newCountry: CountryData = {
        id: Date.now().toString(),
        ...formData,
      };

      setCountries((prev) => [...prev, newCountry]);
    }

    setShowForm(false);
    setFormData({ country: '', states: '', primaryManager: '', secondaryManager: '' });
  };

  const handleEditCountry = (country: CountryData) => {
    setFormData({
      country: country.country,
      states: country.states,
      primaryManager: country.primaryManager,
      secondaryManager: country.secondaryManager,
    });
    setEditingId(country.id);
    setShowForm(true);
  };

  const handleDeleteCountry = (id: string) => {
    setCountries((prev) => prev.filter((country) => country.id !== id));
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ country: '', states: '', primaryManager: '', secondaryManager: '' });
    setEditingId(null);
  };

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

          {!showForm && (
            <div className="flex justify-end mb-6">
              <button
                onClick={handleAddClick}
                className="px-4 py-2 bg-[rgb(70,61,149)] text-white rounded-md text-sm font-semibold hover:bg-[rgb(60,51,139)]"
              >
                + Add New Country/Region
              </button>
            </div>
          )}

          {showForm && (
            <div className="mb-8 p-6 bg-[#f8fafc] rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">
                {editingId ? 'Edit Country/Region' : 'Add New Country/Region'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => handleFormChange('country', e.target.value)}
                    placeholder="Enter country name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">States</label>
                  <input
                    type="text"
                    value={formData.states}
                    onChange={(e) => handleFormChange('states', e.target.value)}
                    placeholder="Enter states/regions"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Country Manager</label>
                  <input
                    type="text"
                    value={formData.primaryManager}
                    onChange={(e) => handleFormChange('primaryManager', e.target.value)}
                    placeholder="Enter manager name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Secondary Country Manager</label>
                  <input
                    type="text"
                    value={formData.secondaryManager}
                    onChange={(e) => handleFormChange('secondaryManager', e.target.value)}
                    placeholder="Enter manager name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSaveCountry}
                  className="px-4 py-2 bg-[rgb(70,61,149)] text-white rounded-md text-sm font-semibold hover:bg-[rgb(60,51,139)]"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md text-sm font-semibold hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {countries.length > 0 && !showForm && (
            <div className="flex-1 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-300">
                    <th className="text-left px-4 py-3 text-sm font-semibold">Country</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold">States</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Primary Country Manager</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold">Secondary Country Manager</th>
                    <th className="text-center px-4 py-3 text-sm font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((country) => (
                    <tr key={country.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">{country.country}</td>
                      <td className="px-4 py-3 text-sm">{country.states}</td>
                      <td className="px-4 py-3 text-sm">{country.primaryManager}</td>
                      <td className="px-4 py-3 text-sm">{country.secondaryManager}</td>
                      <td className="px-4 py-3 text-center flex gap-2 justify-center">
                        <button
                          onClick={() => handleEditCountry(country)}
                          aria-label="Edit country"
                          title="Edit"
                          className="p-2 text-gray-600 hover:text-[rgb(70,61,149)]"
                        >
                          <MdEdit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteCountry(country.id)}
                          aria-label="Delete country"
                          title="Delete"
                          className="p-2 text-gray-600 hover:text-red-600"
                        >
                          <MdDelete className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {countries.length === 0 && !showForm && (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-sm text-[#64748b]">No countries added yet. Click "Add New Country/Region" to get started.</p>
            </div>
          )}

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
