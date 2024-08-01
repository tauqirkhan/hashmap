import { Node } from "./node.js";

function HashMap() {
  const LOADFACTOR = 0.75;
  let buckets = new Array(16).fill(null);
  let entry = 0;

  const _hash = (key, size = buckets.length) => {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % size;
    }

    return hashCode;
  };

  const _handleBucketsGrowth = () => {
    const newSize = buckets.length * 2;
    let newBucket = new Array(newSize).fill(null);

    for (let i = 0; i < buckets.length; i++) {
      let node = buckets[i];

      let pointer = node;
      while (pointer !== null) {
        let newNode = Node(pointer.key, pointer.value);
        let newIndex = _hash(pointer.key, newSize);

        if (newBucket[newIndex] === null) {
          newBucket[newIndex] = newNode;
        } else {
          let current = newBucket[newIndex];
          let newPointer = current;
          while (newPointer.nextNode !== null) {
            newPointer = newPointer.nextNode;
          }
          newPointer.nextNode = newNode;
        }

        pointer = pointer.nextNode;
      }
    }

    buckets = newBucket;
  };

  const set = (key, value) => {
    if (!key || !value) return "Enter key value properly";

    if (entry / buckets.length > LOADFACTOR) {
      _handleBucketsGrowth();
    }

    const hashCode = _hash(key);
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
    if (!key) return "Key is empty";

    const index = _hash(key);

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

  const has = (key) => {
    if (!key) return "Key is empty";

    const index = _hash(key);
    const bucket = buckets[index];

    let node = bucket;
    while (node) {
      if (node.key === key) return true;
      node = node.nextNode;
    }

    return false;
  };

  const remove = (key) => {
    if (!key) return "Key is empty";

    const index = _hash(key);
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

  const length = (key) => {
    if (!key) return "Key is empty";

    let index = _hash(key);
    let bucket = buckets[index];
    let length = 0;

    if (!bucket) return length;
    let node = bucket;
    while (node) {
      length++;
      node = node.nextNode;
    }
    return length;
  };

  const clear = () => {
    let totalBuckets = buckets.length;

    for (let index = 0; index < totalBuckets; index++) {
      if (buckets[index] !== null) {
        buckets[index] = null;
      }
    }
  };

  const keys = () => {
    let totalBuckets = buckets.length;
    let keysArray = [];

    for (let index = 0; index < totalBuckets; index++) {
      if (buckets[index] !== null) {
        let node = buckets[index];

        while (node) {
          keysArray.push(node.key);
          node = node.nextNode;
        }
      }
    }

    return keysArray;
  };

  const values = () => {
    let totalBuckets = buckets.length;
    let valuesArray = [];

    for (let index = 0; index < totalBuckets; index++) {
      if (buckets[index] !== null) {
        let node = buckets[index];

        while (node) {
          valuesArray.push(node.value);
          node = node.nextNode;
        }
      }
    }

    return valuesArray;
  };

  const entries = () => {
    let totalBuckets = buckets.length;
    let totalBucketPair = [];

    for (let index = 0; index < totalBuckets; index++) {
      if (buckets[index] !== null) {
        let node = buckets[index];
        while (node) {
          totalBucketPair.push([node.key, node.value]);
          node = node.nextNode;
        }
      }
    }

    return totalBucketPair;
  };

  return { set, get, has, remove, length, clear, keys, values, entries };
}

export { HashMap };
