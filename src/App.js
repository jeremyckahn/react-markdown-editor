import React, { Component } from 'react';

import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/solarized.css';

import ReactMarkdown from 'react-markdown';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code:
`# Hello world!

You can edit this text to see it rendered live below.

*React is so cool!* 😊`
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
