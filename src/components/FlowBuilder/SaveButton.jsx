import React, { useState } from 'react';

/**
 * SaveButton component with validation logic
 * Features:
 * - Validates flow before saving
 * - Shows error if more than one node exists and more than one node has empty target handles
 * - Provides visual feedback for save states
 */
const SaveButton = ({ nodes, edges }) => {
  const [saveStatus, setSaveStatus] = useState('idle'); // 'idle', 'saving', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Validate the flow according to the requirements
  const validateFlow = () => {
    // Reset error state
    setErrorMessage('');

    // If there's only one node or no nodes, validation passes
    if (nodes.length <= 1) {
      return true;
    }

    // Check for nodes with empty target handles (no incoming connections)
    const nodesWithoutIncomingConnections = nodes.filter(node => {
      // Check if this node has any incoming edges (target connections)
      const hasIncomingConnection = edges.some(edge => edge.target === node.id);
      return !hasIncomingConnection;
    });

    // Error condition: More than one node AND more than one node has empty target handles
    if (nodes.length > 1 && nodesWithoutIncomingConnections.length > 1) {
      setErrorMessage('Cannot save flow: More than one node has empty target handles');
      return false;
    }

    return true;
  };

  // Handle save button click
  const handleSave = async () => {
    setSaveStatus('saving');

    // Validate the flow
    if (!validateFlow()) {
      setSaveStatus('error');
      return;
    }

    try {
      // Simulate save operation (replace with actual save logic)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the flow data to your backend
      const flowData = {
        nodes,
        edges,
        timestamp: new Date().toISOString(),
      };
      
      console.log('Saving flow:', flowData);
      
      setSaveStatus('success');
      
      // Reset to idle after showing success
      setTimeout(() => {
        setSaveStatus('idle');
      }, 2000);
      
    } catch (error) {
      console.error('Save failed:', error);
      setErrorMessage('Failed to save flow. Please try again.');
      setSaveStatus('error');
    }
  };

  // Get button style based on status
  const getButtonStyle = () => {
    const baseStyle = {
      position: 'absolute',
      top: '20px',
      right: '320px', // Account for right panel width
      padding: '12px 24px',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      zIndex: 1000,
      minWidth: '120px',
    };

    switch (saveStatus) {
      case 'saving':
        return {
          ...baseStyle,
          background: '#CBD5E0',
          color: '#4A5568',
          cursor: 'not-allowed',
        };
      case 'success':
        return {
          ...baseStyle,
          background: '#48BB78',
          color: 'white',
        };
      case 'error':
        return {
          ...baseStyle,
          background: '#F56565',
          color: 'white',
        };
      default:
        return {
          ...baseStyle,
          background: '#3182CE',
          color: 'white',
        };
    }
  };

  // Get button text based on status
  const getButtonText = () => {
    switch (saveStatus) {
      case 'saving':
        return 'Saving...';
      case 'success':
        return 'Saved!';
      case 'error':
        return 'Error';
      default:
        return 'Save Changes';
    }
  };

  return (
    <>
      <button
        onClick={handleSave}
        disabled={saveStatus === 'saving'}
        style={getButtonStyle()}
        onMouseEnter={(e) => {
          if (saveStatus === 'idle') {
            e.target.style.background = '#2C5282';
          }
        }}
        onMouseLeave={(e) => {
          if (saveStatus === 'idle') {
            e.target.style.background = '#3182CE';
          }
        }}
      >
        {getButtonText()}
      </button>

      {/* Error Message */}
      {saveStatus === 'error' && errorMessage && (
        <div
          style={{
            position: 'absolute',
            top: '70px',
            right: '320px',
            background: '#FED7D7',
            border: '1px solid #FC8181',
            borderRadius: '6px',
            padding: '12px 16px',
            fontSize: '14px',
            color: '#C53030',
            maxWidth: '300px',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          <div style={{ fontWeight: '600', marginBottom: '4px' }}>
            Cannot save Flow
          </div>
          <div>{errorMessage}</div>
        </div>
      )}

      {/* Flow Statistics (Optional Info) */}
      {nodes.length > 0 && (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #E2E8F0',
            borderRadius: '6px',
            padding: '8px 12px',
            fontSize: '12px',
            color: '#4A5568',
            zIndex: 1000,
          }}
        >
          Nodes: {nodes.length} | Edges: {edges.length}
        </div>
      )}
    </>
  );
};

export default SaveButton;
