import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { X } from 'lucide-react';

const VideoUploadModal = ({ isOpen, onRequestClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnailFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleThumbnailChange = (e) => {
    setThumbnailFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') setTitle(value);
    if (name === 'description') setDescription(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!videoFile || !thumbnail) {
      setUploadError('Please select both a video and a thumbnail.');
      return;
    }

    setUploading(true);
    setUploadSuccess(false);
    setUploadError('');
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('videoFile', videoFile);
    formData.append('thumbnail', thumbnail);

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/videos/upload-video`, formData, {
        headers: {
          'Authorization': `Bearer {cookie.get('accessToken')}`,
        },        

        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(percent);
        },
      });
      
      setUploadSuccess(true);
      setUploading(false);
      console.log('Video uploaded successfully:', response.data);
    } catch (error) {
      setUploadError('Error uploading video');
      setUploading(false);
      console.error('Upload error:', error);
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      contentLabel="Video Upload"
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1000,
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#e1e3e3',
          padding: '0',
          borderRadius: '0.75rem',
          width: '80%',
          height: '90%',
          maxWidth: '90%',
          border: 'none',
        },
      }}
    >
      <div className="relative bg-[#e1e3e3] rounded-xl shadow-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Upload Video</h2>
          <button
            onClick={onRequestClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleInputChange}
              placeholder="Enter video title"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              name="description"
              value={description}
              onChange={handleInputChange}
              placeholder="Enter video description"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Video File:</label>
            <input
              type="file"
              accept="video/*"
              name='videoFile'
              onChange={handleVideoChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Thumbnail Image:</label>
            <input
              type="file"
              name='thumbnail'
              accept="image/*"
              onChange={handleThumbnailChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {uploading && (
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Uploading: {uploadProgress}%</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}

          {uploadSuccess && (
            <p className="text-sm text-green-600 font-medium">Upload successful!</p>
          )}
          
          {uploadError && (
            <p className="text-sm text-red-600 font-medium">{uploadError}</p>
          )}

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onRequestClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={uploading}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default VideoUploadModal;