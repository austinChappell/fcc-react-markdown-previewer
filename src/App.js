import React, { Component } from 'react';
import { css } from 'react-emotion';

import Editor from './components/Editor';
import Previewer from './components/Previewer';

const SAMPLE_VALUE = `
# Header
## Subheader
Here is a link to [google](https://www.google.com)\n
This is an \`example\` of \`inline\` code\n
And a block of code:\n
\`\`\`
class Editor extends Component {
  render() {
    return (
      <div id="editor">
        <h2>Editor</h2>
      </div>
    )
  }
}
\`\`\`
### List Items
- Item 1
- Item 2

### Blockquotes
> Here is an example of a blockquote.

### Image
![three dogs](https://picsum.photos/200/300)

### Font Styling
You can make font **bold**, _italic_, ~~strike through~~ or ~~_**all three**_~~!
`;

const appStyle = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

const flexStyle = css`
  align-items: stretch;
  display: flex;
  flex: 1;
  height: 100%;
  & > * {
    flex: 1;
    overflow: auto;
    padding: 20px;
  }
`;

class App extends Component {
  state = {
    value: SAMPLE_VALUE,
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className={appStyle}>
        <div className={flexStyle}>
          <Editor
            handleChange={this.handleChange}
            value={value}
          />
          <Previewer
            value={value}
          />       
        </div>
      </div>
    );
  }
}

export default App;
