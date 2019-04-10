import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import './MyEditorApp.css';

class MyEditorApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    }
    this.onChange = (editorState) => this.setState({ editorState });
  }
  
  // RichUtils has information of key commands available to web editors
  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if(newState){
      console.log(command); // We could find what action had done by key command. 
      // It will log value 'bold' if we press 'CTRL+B' (similar to 'italic' & 'underline') after selecting some text.
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  // Instead of pressing the key, assigning the functions to do that operations
  // Toggle Button Events
  toggleButtonEvents = (format) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, format));
  }

  render() {
    return (
      <div className="MyEditorApp">
        <div className="editingOptions">
          <button onClick={() => this.toggleButtonEvents('BOLD')}><strong>B</strong></button>
          <button onClick={() => this.toggleButtonEvents('ITALIC')}><em>i</em></button>
          <button onClick={() => this.toggleButtonEvents('UNDERLINE')}><u>U</u></button>
        </div>
        <div className="editor">
          <Editor 
            editorState={this.state.editorState} 
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

export default MyEditorApp;
