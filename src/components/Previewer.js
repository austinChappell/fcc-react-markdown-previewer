import React from 'react';
import marked from 'marked';
import { css } from 'react-emotion';

const previewerStyle = css({
  textAlign: 'left',
});

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

renderer.link = ( href, title, text ) => `<a target="_blank" href="${href}" title="${title}">${text}</a>`;

const Previewer = ({
  value,
}) => (
  <div
    className={previewerStyle}
    dangerouslySetInnerHTML={{ __html: marked(value, { renderer }) }}
    id="preview"
  />
);

export default Previewer;
