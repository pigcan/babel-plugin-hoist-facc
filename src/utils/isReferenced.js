import * as t from '@babel/types';

export default ({ node, parent }) => {
  // Dirty fix for https://github.com/babel/babel/issues/8686
  if (parent.type === 'AssignmentExpression') {
    return parent.left === node || parent.right === node;
  }

  return t.isReferenced(node, parent);
};
