import React from 'react';
import { Handle, Position } from 'reactflow';

/**
 * Custom Text Node component for the chatbot flow
 * Features:
 * - Target handle (left) - can accept multiple connections
 * - Source handle (right) - can only have one outgoing connection
 * - Displays message text
 * - Styled to match the UI mockup
 */
const TextNode = ({ data, selected }) => {
  return (
    <div
      style={{
        background: '#B2F5EA', // Light teal background
        border: selected ? '2px solid #319795' : '1px solid #4FD1C7',
        borderRadius: '8px',
        padding: '12px 16px',
        minWidth: '200px',
        maxWidth: '250px',
        position: 'relative',
        boxShadow: selected ? '0 4px 12px rgba(0,0,0,0.15)' : '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {/* Target Handle - Left (can accept multiple connections) */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          background: '#319795',
          width: '12px',
          height: '12px',
          border: '2px solid #fff',
          left: '-6px',
        }}
      />

      {/* Node Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '8px',
          fontSize: '12px',
          fontWeight: '600',
          color: '#2D3748',
        }}
      >
        <div
          style={{
            width: '16px',
            height: '16px',
            background: '#319795',
            borderRadius: '4px',
            marginRight: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'white', fontSize: '10px' }}>💬</span>
        </div>
        Send Message
      </div>

      {/* Message Content */}
      <div
        style={{
          background: 'white',
          border: '1px solid #E2E8F0',
          borderRadius: '4px',
          padding: '8px',
          fontSize: '14px',
          color: '#4A5568',
          minHeight: '40px',
          wordWrap: 'break-word',
        }}
      >
        {data.text || 'Enter your message here...'}
      </div>

      {/* Source Handle - Right (only one outgoing connection allowed) */}
      <Handle
        type="source"
        position={Position.Right}
        style={{
          background: '#319795',
          width: '12px',
          height: '12px',
          border: '2px solid #fff',
          right: '-6px',
        }}
      />
    </div>
  );
};

export default TextNode;
