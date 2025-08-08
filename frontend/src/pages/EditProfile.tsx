import { motion } from 'framer-motion';
import { useState } from 'react';
import SideBar from '../components/SideBar';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaBuilding, 
  FaHome, 
  FaPencilAlt, 
  FaSave,
  FaTimes,
  FaUser
} from 'react-icons/fa';
import profile from '../assets/ishan.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: 'Ishan',
    lastName: 'Sitaula',
    email: 'user1@gmail.com',
    phone: '+977 9876543210',
    address: 'Nepaltar',
    street: 'Bodegal Road',
    houseNo: '001-002-003'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      // Handle save logic here
      console.log('Saving profile:', formData);
      // You can add navigation back to profile page here
    }
  };

  const handleCancel = () => {
    // Navigate back to profile page
    window.history.back();
  };

  return (
    <div className="flex min-h-screen bg-[#f6fbf7]">
      <SideBar />
      
      <motion.div 
        className="flex-1 p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div 
          className="bg-[#e8f5e8] p-6 rounded-xl mb-6 flex items-center gap-4"
          variants={cardVariants}
        >
          <div className="w-12 h-12 bg-[#00A72C] rounded-full flex items-center justify-center">
            <FaUser className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#00A72C]">Edit Profile</h1>
            <p className="text-gray-600">Update your personal information and contact details</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Information Form */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            variants={cardVariants}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
              <FaPencilAlt className="w-4 h-4 text-gray-400" />
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <img src={profile} alt="Profile" className="w-16 h-16 rounded-full object-cover border-2 border-gray-200" />
              <div>
                <button className="text-[#00A72C] hover:text-[#00A72C]/80 text-sm font-medium">
                  Change Photo
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A72C] focus:border-transparent ${
                      errors.firstName ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A72C] focus:border-transparent ${
                      errors.lastName ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A72C] focus:border-transparent ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A72C] focus:border-transparent ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Address Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A72C] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Street Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Name
                </label>
                <div className="relative">
                  <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A72C] focus:border-transparent"
                  />
                </div>
              </div>

              {/* House Number Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  House Number
                </label>
                <div className="relative">
                  <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="houseNo"
                    value={formData.houseNo}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A72C] focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            variants={cardVariants}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">Actions</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Save Changes</h3>
                <p className="text-sm text-blue-700 mb-4">
                  Click save to update your profile information. All changes will be applied immediately.
                </p>
                <div className="flex gap-3">
                  <motion.button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-[#00A72C] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#00A72C]/90 transition"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaSave className="w-4 h-4" />
                    Save Changes
                  </motion.button>
                  <motion.button
                    onClick={handleCancel}
                    className="flex items-center gap-2 bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaTimes className="w-4 h-4" />
                    Cancel
                  </motion.button>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-900 mb-2">Important Note</h3>
                <p className="text-sm text-yellow-700">
                  Your profile information is used for waste collection scheduling and billing purposes. 
                  Please ensure all details are accurate and up to date.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EditProfile;
