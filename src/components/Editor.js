import React from 'react';
import { css } from 'react-emotion';

const editorStyle = css({
  backgroundColor: '#111111',
  border: 'none',
  color: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  fontSize: 16,
  resize: 'none',
  width: '100%',
});

const Editor = ({
  handleChange,
  value,  
}) => (
  <textarea
    className={editorStyle}
    id="editor"
    onChange={handleChange}
    value={value}
  />
);

export default Editor;
