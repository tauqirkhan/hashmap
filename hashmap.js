function HashMap() {
  const buckets = new Array(16).fill(null);
  const LOADFACTOR = 0.75;
  let entry = 0;

  //Setting initial value
  buckets.length = 16;

  const Node = (key, value, nextNode = null) => {
    return {
      key,
      value,
      nextNode,
    };
  };
  const hash = (key) => {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;
    }

    return hashCode;
  };

  const set = (key, value) => {
    if (entry / buckets.length > LOADFACTOR) {
      handleBucketsGrowth();
    }
    const hashCode = hash(key);
    let currentBucket = buckets[hashCode];

    if (!currentBucket) {
      buckets[hashCode] = Node(key, value);
      entry++;
      return;
    }

    let node = currentBucket;
    while (node) {
      if (node.key === key) {
        node.value = value;
        return;
      }
      if (!node.nextNode) {
        node.nextNode = Node(key, value);
        entry++;
        return;
      }
      node = node.nextNode;
    }
  };

  const get = (key) => {
    const index = hash(key);

    let bucket = buckets[index];

    let node = bucket;
    while (node) {
      if (node.key === key) {
        return node.value;
      }
      node = node.nextNode;
    }

    return null;
  };

  const handleBucketsGrowth = () => {
    const newSize = buckets.length * 2;
    const newBucket = new Array(newSize);

    for (let i = 1; i < buckets.length; i++) {
      let node = buckets[i];
      while (node) {
        const newIndex = hash(node.key) % newSize;
        const newNode = Node(node.key, node.value);

        if (!newBucket[newIndex]) {
          newBucket[newIndex] = newNode;
        } else {
          let current = newBucket[newIndex];
          while (current.nextNode) {
            current = current.nextNode;
          }
          current.nextNode = newNode;
        }

        node = node.nextNode;
      }
    }

    buckets = newBucket;
  };

  const has = (key) => {
    const index = hash(key);
    const bucket = buckets[index];

    let node = bucket;
    while (node) {
      if (node.key === key) return true;
      node = node.nextNode;
    }

    return false;
  };

  const remove = (key) => {
    const index = hash(key);
    const bucket = buckets[index];

    if (!bucket) return false;

    let node = bucket;
    let prevNode = null;
    while (node) {
      if (node.key === key) {
        //Removing node from middle and end of the list
        if (prevNode) {
          prevNode.nextNode = node.nextNode;
        } else {
          //Removing the first node
          buckets[index] = node.nextNode;
        }
        entry--;
        return true;
      }
      prevNode = node;
      node = node.nextNode;
    }
    return false;
  };

  const length = () => {};

  const clear = () => {};

  const keys = () => {};

  const values = () => {};

  const entries = () => {};
}

export { HashMap };
