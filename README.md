# Chatbot Flow Builder

A modern, extensible chatbot flow builder built with React and React Flow. This application allows users to create chatbot conversation flows by connecting message nodes through a visual drag-and-drop interface.

## 🌐 Live Demo

**[View Live Application](https://chatbot-flow-builder-lac.vercel.app/)**

Experience the full functionality of the chatbot flow builder in your browser!

## 🚀 Features

### Core Functionality
- **Visual Flow Builder**: Drag-and-drop interface for creating chatbot flows
- **Text Message Nodes**: Support for text message nodes with editable content
- **Node Connections**: Connect nodes with edges to define conversation flow
- **Real-time Editing**: Live updates when editing node content
- **Flow Validation**: Validates flow structure before saving

### Handle System
- **Source Handles**: Each node can have only ONE outgoing connection (enforced automatically)
- **Target Handles**: Each node can accept MULTIPLE incoming connections
- **Smart Connection Management**: Automatically replaces existing connections when creating new ones from source handles

### UI/UX Features
- **Nodes Panel**: Sidebar with available node types for drag-and-drop
- **Settings Panel**: Context-sensitive panel for editing selected nodes
- **Save Button**: Prominent save button with validation feedback
- **Visual Feedback**: Clear visual indicators for node selection and connections
- **Error Handling**: User-friendly error messages for validation failures

## 🛠️ Technical Requirements

### Handle Constraints
- **Source Handles**: Each node can have only ONE outgoing connection
- **Target Handles**: Each node can accept MULTIPLE incoming connections

### Validation Rules
- **Save Validation**: Error shown if more than one node exists and more than one node has empty target handles
- **Flow Integrity**: Ensures proper flow structure before allowing save operations

## 🎯 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chatbot-flow-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   └── FlowBuilder/
│       ├── FlowBuilder.jsx      # Main flow builder component
│       ├── TextNode.jsx         # Custom text message node
│       ├── NodesPanel.jsx       # Sidebar with draggable nodes
│       ├── SettingsPanel.jsx    # Node editing panel
│       └── SaveButton.jsx       # Save functionality with validation
├── App.jsx                      # Main app component
├── App.css                      # Global styles
├── main.jsx                     # App entry point
└── index.css                    # Base styles
```

## 🎯 Usage

### Adding Nodes
1. **Drag & Drop**: Drag a "Message" node from the right panel onto the canvas
2. **Click to Add**: Click on a node type in the panel to add it to the center of the canvas

### Editing Nodes
1. **Select Node**: Click on any node to select it
2. **Edit Content**: The settings panel will appear on the right with a text field
3. **Real-time Updates**: Changes are reflected immediately in the node
4. **Return to Nodes**: Click the back arrow to return to the nodes panel

### Connecting Nodes
1. **Drag from Source**: Drag from the right handle (source) of any node
2. **Connect to Target**: Drop on the left handle (target) of another node
3. **Automatic Replacement**: If a source already has a connection, it will be replaced with the new one

### Saving Flows
1. **Save Button**: Click the "Save Changes" button in the top-right
2. **Validation**: The system will validate the flow structure
3. **Error Handling**: If validation fails, an error message will be displayed
4. **Success Feedback**: Successful saves show a confirmation message

## ⚠️ Validation Rules

### Save Validation
The save operation will fail with an error message if:
- **Multiple Nodes Exist**: There are more than one nodes in the flow
- **Multiple Empty Targets**: More than one node has no incoming connections (empty target handles)

This ensures that flows have a proper structure with a clear starting point.

## 🔧 Technical Implementation

### Built With
- **React 18**: Modern React with hooks and functional components
- **React Flow**: Professional flow builder library
- **Vite**: Fast build tool and development server
- **Modern JavaScript**: ES6+ features and best practices

### Key Features
- **Extensible Architecture**: Easy to add new node types
- **Performance Optimized**: Uses React.memo and useCallback for optimal performance
- **Responsive Design**: Works on desktop and tablet devices
- **Clean Code**: Well-documented and maintainable codebase

## ✅ Requirements Compliance

This implementation fully satisfies all specified requirements:

- ✅ Built with React and React Flow
- ✅ Supports Text Message nodes
- ✅ Drag-and-drop functionality from Nodes Panel
- ✅ Extensible node system architecture
- ✅ Settings Panel replaces Nodes Panel when node is selected
- ✅ Source handles limited to one edge
- ✅ Target handles support multiple edges
- ✅ Save button with proper validation
- ✅ Error handling for invalid flow structures

## 🚀 Future Enhancements

The extensible architecture allows for easy addition of:
- **Condition Nodes**: For branching logic
- **API Integration Nodes**: For external service calls
- **User Input Nodes**: For collecting user responses
- **Rich Media Nodes**: For images, videos, and files
- **Analytics Dashboard**: For flow performance metrics
- **Export/Import**: For sharing flows between systems

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Library
- [React Flow](https://reactflow.dev/) - Flow Builder Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Vercel](https://vercel.com/) - Deployment Platform

---

**[🌐 Live Demo](https://chatbot-flow-builder-lac.vercel.app/)** | **[📧 Contact](mailto:your-email@example.com)** | **[🐛 Report Issues](https://github.com/your-username/chatbot-flow-builder/issues)**
