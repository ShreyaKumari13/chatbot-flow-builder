# Chatbot Flow Builder

A modern, extensible chatbot flow builder built with React and React Flow. This application allows users to create chatbot conversation flows by connecting message nodes through a visual drag-and-drop interface.

## 🚀 Features

### Core Functionality
- **Visual Flow Builder**: Drag-and-drop interface for creating chatbot flows
- **Text Message Nodes**: Support for text message nodes with editable content
- **Node Connections**: Connect nodes with edges to define conversation flow
- **Real-time Editing**: Live updates when editing node content
- **Flow Validation**: Validates flow structure before saving

### Technical Features
- **Extensible Architecture**: Easy to add new node types in the future
- **React Flow Integration**: Built on top of the powerful React Flow library
- **Modern React**: Uses React 18 with hooks and functional components
- **Responsive Design**: Works on different screen sizes
- **TypeScript Ready**: Codebase is structured to easily migrate to TypeScript

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
- **Flow Validation**: Error shown if more than one node exists and more than one node has empty target handles
- **Connection Limits**: Source handles are limited to one edge, target handles can have multiple

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chatbot-flow-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

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
1. Click on any node to select it
2. The right panel will switch to "Settings Panel"
3. Edit the message text in the text field
4. Changes are applied in real-time
5. Click the back arrow to return to the Nodes Panel

### Connecting Nodes
1. Click and drag from a node's source handle (right side)
2. Connect to another node's target handle (left side)
3. Each source handle can only have one outgoing connection
4. Target handles can accept multiple incoming connections

### Saving Flows
1. Click the "Save Changes" button in the top-right corner
2. The system will validate your flow:
   - ✅ Single node flows are always valid
   - ✅ Multiple nodes where only one has no incoming connections
   - ❌ Multiple nodes where more than one has no incoming connections
3. Valid flows will be saved successfully
4. Invalid flows will show an error message

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Node Types
The architecture is designed to be extensible. To add new node types:

1. Create a new node component in `src/components/FlowBuilder/`
2. Add the node type to the `nodeTypes` object in `FlowBuilder.jsx`
3. Add the new node type to the `nodeTypes` array in `NodesPanel.jsx`
4. Update the `SettingsPanel.jsx` to handle the new node type's properties

## 🎨 Styling

The application uses a modern, clean design with:
- **Teal Color Scheme**: Primary color #319795 for consistency
- **Responsive Layout**: Adapts to different screen sizes
- **Smooth Animations**: Hover effects and transitions
- **Clear Visual Hierarchy**: Distinct panels and components

## 📋 Requirements Compliance

This project fulfills all the specified requirements:

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

- **React 18** - UI framework
- **React Flow** - Flow diagram library
- **Vite** - Build tool and development server
- **Modern JavaScript** - ES6+ features
