const htmlTags = require('html-tags/void');
const attributeString = require('attribute-string');
const styleString = require('style-string');

module.exports = (type, children, opts) => {
  if (Array.isArray(children)) children = children.join(' ');

  if (typeof children === 'object') {
    opts = children;
    children = '';
  }

  children = children || '';

  opts = Object.assign(
    {
      style: {},
      attributes: {}
    },
    opts
  );

  const attributes = attributeString(opts.attributes);
  const style = styleString(opts.style);

  let rv = `<${type}${attributes !== '' ? ' ' + attributes : ''}${style !== '' ? ' style="' + style + '"' : ''}>${children}</${type}>`;

  if (htmlTags.indexOf(type) !== -1) {
    rv = `<${type}${attributes !== '' ? ' ' + attributes : ''}${style !== '' ? ' style="' + style + '"' : ''} />`;
  }

  return rv;
};
