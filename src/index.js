export default {
  renderMark(inProps, inEditor, inNext) {
    const { children, ...attributes } = inProps;
    const value = inProps.node.data.get('value');
    switch (inProps.node.type) {
      case 'color':
        return <span style={{ color: value }} children={children} />;
      default:
        return inNext();
    }
  }
};
