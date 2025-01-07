import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    passwordprotectionenabled: false,
    preloaderenabled: true,
    sitepassword: ''
  });
  const [newPassword, setNewPassword] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchSettings(token);
  }, []);

  const fetchSettings = async (token) => {
    try {
      const response = await fetch('/api/admin/settings', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch settings');
      }

      const data = await response.json();
      setSettings(data);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSettingToggle = async (settingName) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        router.push('/admin/login');
        return;
      }

      const updatedSettings = {
        ...settings,
        [settingName]: !settings[settingName]
      };

      const response = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedSettings),
      });

      if (!response.ok) {
        throw new Error('Failed to update settings');
      }

      const data = await response.json();
      setSettings(data);
      setStatus({
        type: 'success',
        message: 'Settings updated successfully'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        router.push('/admin/login');
        return;
      }

      const response = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...settings,
          sitepassword: newPassword
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update password');
      }

      const data = await response.json();
      setSettings(data);
      setNewPassword('');
      setStatus({
        type: 'success',
        message: 'Password updated successfully'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-[#e3cbaa]">Loading...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-6 bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-[#e3cbaa]">Website Settings</h2>

          {status.message && (
            <div className={`p-4 rounded-lg ${
              status.type === 'success' 
                ? 'bg-green-500/10 border border-green-500 text-green-500' 
                : 'bg-red-500/10 border border-red-500 text-red-500'
            }`}>
              {status.message}
            </div>
          )}

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium">Password Protection</h3>
                <p className="text-gray-400 text-sm">Enable password protection for the website</p>
              </div>
              <button
                onClick={() => handleSettingToggle('passwordprotectionenabled')}
                disabled={loading}
                className={`relative inline-flex items-center cursor-pointer disabled:opacity-50 w-11 h-6 rounded-full transition-colors ${
                  settings.passwordprotectionenabled ? 'bg-[#d0b48f]' : 'bg-gray-700'
                }`}
              >
                <span className={`absolute w-5 h-5 bg-white rounded-full transition-transform transform ${
                  settings.passwordprotectionenabled ? 'translate-x-5' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium">Preloader</h3>
                <p className="text-gray-400 text-sm">Enable the intro animation</p>
              </div>
              <button
                onClick={() => handleSettingToggle('preloaderenabled')}
                disabled={loading}
                className={`relative inline-flex items-center cursor-pointer disabled:opacity-50 w-11 h-6 rounded-full transition-colors ${
                  settings.preloaderenabled ? 'bg-[#d0b48f]' : 'bg-gray-700'
                }`}
              >
                <span className={`absolute w-5 h-5 bg-white rounded-full transition-transform transform ${
                  settings.preloaderenabled ? 'translate-x-5' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="pt-4 border-t border-gray-800">
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label className="block text-[#d0b48f] mb-2">Set New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full bg-black border border-[#d0b48f] rounded p-2 text-white"
                    placeholder="Enter new password"
                    minLength={6}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!newPassword || loading}
                  className="bg-[#d0b48f] text-black px-4 py-2 rounded hover:bg-[#e3cbaa] transition-colors disabled:opacity-50"
                >
                  {loading ? 'Updating...' : 'Update Password'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}