import React from 'react';
import { jsx } from 'slate-hyperscript';

export default {
  name: 'italic',
  importer: (el, children) => {
    const nodeName = el.nodeName.toLowerCase();
    if (nodeName === 'span' && el.style.color) {
      return jsx('text', { value: el.style.color }, children);
    }
  },
  // to-html
  exporter: (node, children) => {
    if (!children) {
      if (node.color) {
        const { value } = node.color;
        return `<span style="color: ${value};">${node.text}</span>`;
      }
    }
  },
  hooks: {
    leaf: (inContext, { attributes, children, leaf }) => {
      if (leaf.color) {
        const { value } = leaf.color;
        return (
          <span {...attributes} style={{ color: value }}>
            {children}
          </span>
        );
      }
    }
  }
};
