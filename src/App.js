import React, { Component } from 'react';
import './App.css';

import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/solarized.css';

import ReactMarkdown from 'react-markdown';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code:
`# Hello world!

This is some markdown!`
    };
  }

  updateCode(newCode) {
    this.setState({
      code: newCode,
    });
  }

  render() {
    return (
      <div className="App">
        <CodeMirror
          value={this.state.code}
          onChange={change => this.updateCode(change)}
          options={{
            mode: 'markdown',
            theme: 'solarized light',
            lineNumbers: true
          }}
        />
        <ReactMarkdown source={this.state.code}/>
      </div>
    );
  }
}

export default App;
