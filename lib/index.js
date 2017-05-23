/* eslint-disable no-param-reassign */

module.exports = () => ({
  visitor: {
    Program(path) {
      path.node.body = [];
    },
  },
});
