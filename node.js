const Node = (key, value, nextNode = null) => {
  return {
    key,
    value,
    nextNode,
  };
};

const SetNode = (key, nextNode = null) => {
  return {
    key,
    nextNode,
  };
};

export { Node, SetNode };
