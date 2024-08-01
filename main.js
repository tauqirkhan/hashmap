import { HashMap } from "./hashmap.js";

const hashmap = HashMap();
hashmap.set("apple", "red");
hashmap.set("banana", "yellow");
hashmap.set("carrot", "orange");
hashmap.set("dog", "brown");
hashmap.set("elephant", "gray");
hashmap.set("frog", "green");
hashmap.set("grape", "purple");
hashmap.set("hat", "black");
hashmap.set("ice cream", "white");
hashmap.set("jacket", "blue");
hashmap.set("kite", "pink");
hashmap.set("lion", "golden");

//OverWritten values
hashmap.set("grape", "purpleOverWritten");
hashmap.set("lion", "goldenOverWritten");
hashmap.set("ice cream", "whiteOverWritten");

//Adding pair after excedding loadFactor
hashmap.set("moon", "silver");
hashmap.set("night", "black");
hashmap.set("elephant", "grayOverWrittenAfterGrowth");
hashmap.set("carrot", "orangeOverWrittenAfterGrowth");

//Testing get, has, remove, length, clear, keys, values, entries methods
console.log(hashmap.get("grape"));
console.log(hashmap.get("apple"));

console.log(hashmap.has("night"));
console.log(hashmap.has("hat"));

console.log(hashmap.remove("dog")); //True
console.log(hashmap.has("dog")); //False

console.log(hashmap.length("night"));
console.log(hashmap.length("moon"));
console.log(hashmap.length("banana"));

console.log(hashmap.keys());
console.log(hashmap.values());
console.log(hashmap.entries());

hashmap.clear();
console.log(hashmap.keys());
