import React, { useState, useCallback, useRef } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';

import TextNode from './TextNode';
import NodesPanel from './NodesPanel';
import SettingsPanel from './SettingsPanel';
import SaveButton from './SaveButton';

// Define custom node types
const nodeTypes = {
  textNode: TextNode,
};

/**
 * Main FlowBuilder component that manages the chatbot flow
 * Handles nodes, edges, and panel switching between nodes and settings
 */
const FlowBuilder = () => {
  // State for nodes and edges using React Flow hooks
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // State for panel management
  const [selectedNode, setSelectedNode] = useState(null);
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);

  // Ref for React Flow instance
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  // Handle edge connections with validation
  const onConnect = useCallback((params) => {
    // Validation: Source handle can only have one outgoing connection
    const existingEdge = edges.find(edge =>
      edge.source === params.source && edge.sourceHandle === params.sourceHandle
    );

    if (existingEdge) {
      // Remove existing edge before adding new one (only one connection per source)
      setEdges((eds) => eds.filter(edge => edge.id !== existingEdge.id));
    }

    setEdges((eds) => addEdge(params, eds));
  }, [edges, setEdges]);

  // Handle node selection
  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setShowSettingsPanel(true);
  }, []);

  // Handle drag over for drop zone
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  // Handle drop to add new nodes
  const onDrop = useCallback((event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');

    // Check if the dropped element is valid
    if (typeof type === 'undefined' || !type) {
      return;
    }

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    const newNode = {
      id: `${type}-${Date.now()}`,
      type: 'textNode',
      position,
      data: {
        label: 'New Message',
        text: 'Enter your message here...'
      },
    };

    setNodes((nds) => nds.concat(newNode));
  }, [reactFlowInstance, setNodes]);

  // Handle adding new nodes from the panel (alternative to drag & drop)
  const onAddNode = useCallback((nodeType, position) => {
    const newNode = {
      id: `${nodeType}-${Date.now()}`,
      type: 'textNode',
      position,
      data: {
        label: 'New Message',
        text: 'Enter your message here...'
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  // Handle updating node data
  const onUpdateNode = useCallback((nodeId, newData) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...newData } } : node
      )
    );
  }, [setNodes]);

  // Handle going back to nodes panel
  const onBackToNodesPanel = useCallback(() => {
    setShowSettingsPanel(false);
    setSelectedNode(null);
  }, []);

  return (
    <ReactFlowProvider>
      <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
        {/* Main Flow Canvas */}
        <div
          ref={reactFlowWrapper}
          style={{ flex: 1, height: '100%' }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
            snapToGrid={true}
            snapGrid={[15, 15]}
          >
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>

          {/* Save Button */}
          <SaveButton nodes={nodes} edges={edges} />
        </div>

        {/* Right Panel - Nodes or Settings */}
        <div style={{ width: '300px', height: '100%', borderLeft: '1px solid #ddd' }}>
          {showSettingsPanel ? (
            <SettingsPanel
              selectedNode={selectedNode}
              onUpdateNode={onUpdateNode}
              onBack={onBackToNodesPanel}
            />
          ) : (
            <NodesPanel onAddNode={onAddNode} />
          )}
        </div>
      </div>
    </ReactFlowProvider>
  );
};

export default FlowBuilder;
