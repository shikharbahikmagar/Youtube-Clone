import React from 'react'
import Modal from 'react-modal';
import { X } from 'lucide-react';
import { User, Lock, Shield, HelpCircle, LogOut } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Setting({ isSettingOpen, onRequestCloseSetting }) {
  

  const navigate = useNavigate()



  const handleLogout = async() => {

      try {
              const logout = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/users/logout`,
              {},
              {
                  withCredentials: true,
              });

                // refresh
                navigate(0)

              // console.log(logout);
              
      } catch (error) {
          console.log(error); 
      }
  }


  
  return (
    <Modal 
    isOpen={isSettingOpen} 
    onRequestCloseSetting={onRequestCloseSetting} 
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
        top: '30%',
        left: '90%',
        transform: 'translate(-50%, -50%)',
        background: '#e1e3e3',
        padding: '0',
        borderRadius: '0.75rem',
        width: '17%',
        height: '45%',
        maxWidth: '90%',
        border: 'none',
      },
    }}
  >
          <div className="relative bg-[#e1e3e3] rounded-lg mt-2 shadow-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Settings</h2>
          <button
            onClick={onRequestCloseSetting}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        </div>

        <div className="w-64 bg-white rounded-xl shadow-lg p-2">
      <ul className="space-y-1">
        <li>
          <button className="w-full flex items-center space-x-3 py-3 px-4 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200 group">
            <User className="w-5 h-5 text-gray-500 group-hover:text-blue-500" />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">Account</span>
          </button>
        </li>
        
        <li>
          <button className="w-full flex items-center space-x-3 py-3 px-4 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200 group">
            <Lock className="w-5 h-5 text-gray-500 group-hover:text-blue-500" />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">Privacy</span>
          </button>
        </li>
        
        <li>
          <button className="w-full flex items-center space-x-3 py-3 px-4 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200 group">
            <Shield className="w-5 h-5 text-gray-500 group-hover:text-blue-500" />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">Security</span>
          </button>
        </li>
        
        <li>
          <button className="w-full flex items-center space-x-3 py-3 px-4 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200 group">
            <HelpCircle className="w-5 h-5 text-gray-500 group-hover:text-blue-500" />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">Help</span>
          </button>
        </li>
        
        <li className="pt-2">
       <button onClick={handleLogout} className="w-full flex items-center space-x-3 py-3 px-4 text-left bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-200 group">
            <LogOut className="w-5 h-5 text-red-500" />
            <span className="text-sm text-red-600">Sign out</span>
          </button>
        </li>
      </ul>
    </div>
    </Modal>
  )
}

export default Setting
