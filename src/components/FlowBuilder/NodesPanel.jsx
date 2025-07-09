import React from 'react';

/**
 * NodesPanel component - Right sidebar containing draggable node types
 * Features:
 * - Extensible design for adding new node types
 * - Drag and drop functionality
 * - Currently supports Message node type
 */
const NodesPanel = ({ onAddNode }) => {
  // Define available node types (extensible for future additions)
  const nodeTypes = [
    {
      id: 'message',
      label: 'Message',
      icon: '💬',
      description: 'Send a text message',
      color: '#319795',
    },
    // Future node types can be added here:
    // {
    //   id: 'condition',
    //   label: 'Condition',
    //   icon: '🔀',
    //   description: 'Add conditional logic',
    //   color: '#D69E2E',
    // },
  ];

  // Handle drag start for node types
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType.id);
    event.dataTransfer.effectAllowed = 'move';
  };

  // Handle click to add node (alternative to drag & drop)
  const handleAddNode = (nodeType) => {
    // Add node at a default position (center of canvas)
    const position = { x: 250, y: 250 };
    onAddNode(nodeType.id, position);
  };

  return (
    <div
      style={{
        height: '100%',
        background: '#F7FAFC',
        padding: '20px',
        borderLeft: '1px solid #E2E8F0',
      }}
    >
      {/* Panel Header */}
      <div
        style={{
          marginBottom: '24px',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#2D3748',
            margin: '0 0 8px 0',
          }}
        >
          Nodes Panel
        </h3>
        <p
          style={{
            fontSize: '12px',
            color: '#718096',
            margin: 0,
          }}
        >
          Drag and drop nodes to the canvas
        </p>
      </div>

      {/* Node Types List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {nodeTypes.map((nodeType) => (
          <div
            key={nodeType.id}
            draggable
            onDragStart={(event) => onDragStart(event, nodeType)}
            onClick={() => handleAddNode(nodeType)}
            style={{
              background: 'white',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              padding: '16px',
              cursor: 'grab',
              transition: 'all 0.2s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }}
          >
            {/* Node Icon and Label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  background: nodeType.color,
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px',
                  fontSize: '16px',
                }}
              >
                {nodeType.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#2D3748',
                    marginBottom: '2px',
                  }}
                >
                  {nodeType.label}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#718096',
                  }}
                >
                  {nodeType.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div
        style={{
          marginTop: '32px',
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
          How to use:
        </h4>
        <ul
          style={{
            fontSize: '11px',
            color: '#718096',
            margin: 0,
            paddingLeft: '16px',
          }}
        >
          <li>Drag nodes to the canvas</li>
          <li>Click nodes to edit them</li>
          <li>Connect nodes with edges</li>
          <li>Save your flow when ready</li>
        </ul>
      </div>
    </div>
  );
};

export default NodesPanel;
