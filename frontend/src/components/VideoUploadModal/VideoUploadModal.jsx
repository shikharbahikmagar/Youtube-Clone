import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { X, Upload } from 'lucide-react';

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
    alert('Video uploaded successfully');
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

      withCredentials: true,        

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

  useEffect( () => {

    

}, []);
//console.log(title, description);

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
          backgroundColor: 'rgba(70, 65, 65, 0.8)',
          zIndex: 1000,
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#0f0f0f',
          padding: '0',
          borderRadius: '0.5rem',
          width: '90%',
          maxWidth: '960px',
          height: '95vh',
          border: 'none',
        },
      }}
    >
      <div className="flex flex-col h-full bg-black">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <h2 className="text-xl font-medium text-white">Upload video</h2>
          <button
            onClick={onRequestClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-6">
            {/* Upload area */}
            <div className="mb-4 border-2 border-dashed border-gray-700 rounded-lg p-12 text-center bg-black">
              {!uploading ? (
                <div className="space-y-4">
                  <Upload className="w-12 h-8 mx-auto text-gray-400" />
                  <div>
                    <p className="text-lg font-medium text-white">Drag and drop video files to upload</p>
                    <p className="text-sm text-gray-400">Your videos will be private until you publish them</p>
                  </div>
                  <input
                    type="file"
                    accept="video/*"
                    name="videoFile"
                    onChange={handleVideoChange}
                    required
                    className="hidden"
                    id="video-upload"
                  />
                  <label
                    htmlFor="video-upload"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                  >
                    SELECT FILE
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm font-medium text-white">Uploading: {uploadProgress}%</p>
                  <div className="w-full bg-gray-800 rounded-full h-1">
                    <div
                      className="bg-blue-600 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Details section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Title (required)</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                  placeholder="Add a title that describes your video"
                  required
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md shadow-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                <textarea
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                  placeholder="Tell viewers about your video"
                  required
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md shadow-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Thumbnail</label>
                <input
                  type="file"
                  name="thumbnail"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  required
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md shadow-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-800 file:text-white hover:file:bg-gray-700"
                />
              </div>
            </div>

            {uploadSuccess && (
              <div className="mt-4 p-4 bg-green-900 rounded-md">
                <p className="text-sm text-green-300 font-medium">Upload successful!</p>
              </div>
            )}
            
            {uploadError && (
              <div className="mt-4 p-4 bg-red-900 rounded-md">
                <p className="text-sm text-red-300 font-medium">{uploadError}</p>
              </div>
            )}
            
            {/* Submit button */}
            <div className="px-6 py-4 border-t border-gray-800 bg-black">
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onRequestClose}
              className="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={uploading}
              className="px-4 py-2 text-sm font-medium text-black bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
        </div>
          </form>
        </div>

        {/* Footer */}
      </div>
    </Modal>
  );
};

export default VideoUploadModal;