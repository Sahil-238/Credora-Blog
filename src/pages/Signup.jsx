import { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, ArrowLeft, Check, X } from 'lucide-react';

function Signup() {
  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
    // In a real app, this would use react-router-dom's useNavigate
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'password':
        if (value.length < 8) return 'Password must be at least 8 characters';
        if (!/(?=.*[a-z])/.test(value)) return 'Password must contain lowercase letter';
        if (!/(?=.*[A-Z])/.test(value)) return 'Password must contain uppercase letter';
        if (!/(?=.*\d)/.test(value)) return 'Password must contain a number';
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    // Success animation or redirect
    console.log('Signup successful:', formData);
  };

  const getPasswordStrength = () => {
    const { password } = formData;
    if (!password) return { strength: 0, label: '' };
    
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^a-zA-Z\d]/.test(password)) score++;
    
    const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
    
    return { strength: score, label: labels[score - 1] || '', color: colors[score - 1] || 'bg-gray-300' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-10 animate-ping" style={{animationDuration: '4s'}}></div>
      </div>

      {/* Back button */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 flex items-center text-gray-600 hover:text-indigo-600 transition-all duration-300 group z-10"
      >
        <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="font-medium">Back</span>
      </button>

      {/* Main form container */}
      <div className="max-w-md w-full relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 transform hover:scale-105 transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Create Account
            </h2>
            <p className="text-gray-600 mt-2">Join us and start your journey</p>
          </div>

          <div onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                  focusedField === 'name' ? 'text-indigo-500' : 'text-gray-400'
                }`} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full pl-12 pr-12 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50/50 backdrop-blur-sm ${
                    errors.name ? 'border-red-300 focus:border-red-500' :
                    focusedField === 'name' ? 'border-indigo-300 focus:border-indigo-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-4 focus:ring-indigo-500/10`}
                  placeholder="Enter your full name"
                />
                {formData.name && !errors.name && (
                  <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                )}
                {errors.name && (
                  <X className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
                )}
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 animate-pulse">{errors.name}</p>
              )}
            </div>

            {/* Email field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                  focusedField === 'email' ? 'text-indigo-500' : 'text-gray-400'
                }`} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full pl-12 pr-12 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50/50 backdrop-blur-sm ${
                    errors.email ? 'border-red-300 focus:border-red-500' :
                    focusedField === 'email' ? 'border-indigo-300 focus:border-indigo-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-4 focus:ring-indigo-500/10`}
                  placeholder="Enter your email address"
                />
                {formData.email && !errors.email && (
                  <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                )}
                {errors.email && (
                  <X className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
                )}
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 animate-pulse">{errors.email}</p>
              )}
            </div>

            {/* Password field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                  focusedField === 'password' ? 'text-indigo-500' : 'text-gray-400'
                }`} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full pl-12 pr-12 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50/50 backdrop-blur-sm ${
                    errors.password ? 'border-red-300 focus:border-red-500' :
                    focusedField === 'password' ? 'border-indigo-300 focus:border-indigo-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-4 focus:ring-indigo-500/10`}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Password strength indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex space-x-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                          i <= passwordStrength.strength ? passwordStrength.color : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">
                    Password strength: <span className="font-medium">{passwordStrength.label}</span>
                  </p>
                </div>
              )}
              
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 animate-pulse">{errors.password}</p>
              )}
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button 
                onClick={() => navigate('/login')}
                className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-300"
              >
                Sign in here
              </button>
            </p>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-4 -left-4 w-3 h-3 bg-indigo-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
}

export default Signup;