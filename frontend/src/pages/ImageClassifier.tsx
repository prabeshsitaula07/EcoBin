import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import { FaUpload, FaImage, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

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

const tips = [
  "Ensure good lighting and clear visibility of the waste item",
  "Take photos from a close distance for better detail",
  "Avoid blurry or heavily shadowed images",
  "Include the entire waste item in the frame"
];

const ImageClassifier = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isClassifying, setIsClassifying] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleClassify = async () => {
    if (!selectedFile) return;
    
    setIsClassifying(true);
    // Simulate classification process
    setTimeout(() => {
      const isDegradable = Math.random() > 0.5;
      setResult(isDegradable ? 'Degradable' : 'Non-Degradable');
      setIsClassifying(false);
      // Redirect to image result page after classification
      navigate('/image-result');
    }, 2000);
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
          className="mb-8"
          variants={cardVariants}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-[#00A72C] mb-2">Waste Image Classification</h1>
              <p className="text-gray-600">Upload an image to identify if your waste is degradable or non-degradable</p>
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
              <FaImage className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upload Section */}
          <motion.div 
            className="lg:col-span-2"
            variants={cardVariants}
          >
            <div className="bg-white rounded-xl shadow-sm border-2 border-dashed border-green-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <FaImage className="w-5 h-5 text-green-600" />
                <h2 className="text-xl font-bold text-gray-900">Upload Waste Image</h2>
              </div>
              <p className="text-gray-600 mb-6">Drag and drop an image or click to select from your device</p>
              
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragOver ? 'border-green-400 bg-green-50' : 'border-gray-300'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                {selectedFile ? (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <FaCheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{selectedFile.name}</p>
                      <p className="text-sm text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFile(null);
                      }}
                      className="text-red-600 hover:text-red-700 text-sm"
                    >
                      Remove file
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                      <FaUpload className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Drop your image here</p>
                      <p className="text-gray-500">or click to browse files</p>
                    </div>
                    <p className="text-xs text-gray-400">Supports JPG, PNG, WEBP formats</p>
                  </div>
                )}
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              
              <motion.button
                onClick={handleClassify}
                disabled={!selectedFile || isClassifying}
                className={`w-full mt-6 py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
                  selectedFile && !isClassifying
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
                whileHover={selectedFile && !isClassifying ? { scale: 1.02 } : {}}
                whileTap={selectedFile && !isClassifying ? { scale: 0.98 } : {}}
              >
                {isClassifying ? 'Classifying...' : 'Classify Waste'}
              </motion.button>
            </div>
          </motion.div>

          {/* Tips Section */}
          <motion.div 
            variants={cardVariants}
          >
            <div className="bg-white rounded-xl shadow-sm border border-green-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <FaLightbulb className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-bold text-green-600">Tips for better results:</h3>
              </div>
              <ul className="space-y-3">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Result Section */}
        {result && (
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`bg-white rounded-xl shadow-sm border p-6 ${
              result === 'Degradable' ? 'border-green-200' : 'border-orange-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  result === 'Degradable' ? 'bg-green-100' : 'bg-orange-100'
                }`}>
                  <FaCheckCircle className={`w-6 h-6 ${
                    result === 'Degradable' ? 'text-green-600' : 'text-orange-600'
                  }`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Classification Result</h3>
                  <p className={`font-semibold ${
                    result === 'Degradable' ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    This waste is {result}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ImageClassifier;
