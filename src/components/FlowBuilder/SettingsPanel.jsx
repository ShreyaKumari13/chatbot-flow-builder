import React, { useState, useEffect } from 'react';

/**
 * SettingsPanel component - Appears when a node is selected
 * Features:
 * - Edit text content of selected node
 * - Back button to return to NodesPanel
 * - Real-time updates to node data
 */
const SettingsPanel = ({ selectedNode, onUpdateNode, onBack }) => {
  const [text, setText] = useState('');

  // Update local state when selected node changes
  useEffect(() => {
    if (selectedNode?.data?.text) {
      setText(selectedNode.data.text);
    }
  }, [selectedNode]);

  // Handle text change and update node
  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    
    // Update the node data in real-time
    if (selectedNode) {
      onUpdateNode(selectedNode.id, { text: newText });
    }
  };

  if (!selectedNode) {
    return null;
  }

  return (
    <div
      style={{
        height: '100%',
        background: '#F7FAFC',
        padding: '20px',
        borderLeft: '1px solid #E2E8F0',
      }}
    >
      {/* Panel Header with Back Button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            marginRight: '8px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4A5568',
            fontSize: '16px',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#E2E8F0';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'none';
          }}
        >
          ←
        </button>
        <div>
          <h3
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#2D3748',
              margin: '0 0 4px 0',
            }}
          >
            Message Settings
          </h3>
          <p
            style={{
              fontSize: '12px',
              color: '#718096',
              margin: 0,
            }}
          >
            Edit your message content
          </p>
        </div>
      </div>

      {/* Node Info */}
      <div
        style={{
          background: 'white',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '12px',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              background: '#319795',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '8px',
              fontSize: '12px',
            }}
          >
            💬
          </div>
          <div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#2D3748',
              }}
            >
              Text Message
            </div>
            <div
              style={{
                fontSize: '12px',
                color: '#718096',
              }}
            >
              ID: {selectedNode.id}
            </div>
          </div>
        </div>
      </div>

      {/* Text Editor */}
      <div
        style={{
          marginBottom: '20px',
        }}
      >
        <label
          style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '600',
            color: '#2D3748',
            marginBottom: '8px',
          }}
        >
          Message Text
        </label>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your message here..."
          style={{
            width: '100%',
            minHeight: '120px',
            padding: '12px',
            border: '1px solid #E2E8F0',
            borderRadius: '6px',
            fontSize: '14px',
            color: '#2D3748',
            background: 'white',
            resize: 'vertical',
            fontFamily: 'inherit',
            outline: 'none',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#319795';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#E2E8F0';
          }}
        />
        <div
          style={{
            fontSize: '12px',
            color: '#718096',
            marginTop: '6px',
          }}
        >
          {text.length} characters
        </div>
      </div>

      {/* Additional Settings (Future Enhancement) */}
      <div
        style={{
          padding: '16px',
          background: '#EDF2F7',
          borderRadius: '8px',
          border: '1px solid #E2E8F0',
        }}
      >
        <h4
          style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#4A5568',
            margin: '0 0 8px 0',
          }}
        >
          Node Properties:
        </h4>
        <div
          style={{
            fontSize: '11px',
            color: '#718096',
          }}
        >
          <div>Type: Text Message</div>
          <div>Position: ({Math.round(selectedNode.position.x)}, {Math.round(selectedNode.position.y)})</div>
          <div>Connections: Available</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
