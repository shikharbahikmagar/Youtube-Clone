import React from 'react'
import Modal from 'react-modal';

function Setting({ isSettingOpen, onRequestCloseSetting }) {
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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#e1e3e3',
        padding: '0',
        borderRadius: '0.75rem',
        width: '20%',
        height: '60%',
        maxWidth: '90%',
        border: 'none',
      },
    }}
  >

    </Modal>
  )
}

export default Setting
