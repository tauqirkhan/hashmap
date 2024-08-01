import { HashMap } from "./hashmap.js";
import { HashSet } from "./hashset.js";

// Testing HashMap
console.log("Testing HashMap");
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

//Testing get, has, remove, length, clear, keys, values, entries methods on hashmaps
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

//Testing SetMap
console.log("Testing SetMap");
const setmap = HashSet();
setmap.insert("apple");
setmap.insert("banana");
setmap.insert("carrot");
setmap.insert("dog");
setmap.insert("elephant");
setmap.insert("frog");
setmap.insert("grape");
setmap.insert("hat");
setmap.insert("ice cream");
setmap.insert("jacket");
setmap.insert("kite");
setmap.insert("lion");

//Try to insert duplicate keys
setmap.insert("grape");
setmap.insert("lion");
setmap.insert("ice cream");

//Inserting keys after excedding loadFactor
setmap.insert("moon");
setmap.insert("night");
setmap.insert("elephant");
setmap.insert("carrot");

//Testing has, remove, length, clear, keys methods on hashset
console.log(setmap.has("grape"));
console.log(setmap.has("apple"));
console.log(setmap.has("night"));
console.log(setmap.has("hat"));

console.log(setmap.remove("dog")); //True
console.log(setmap.has("dog")); //False

console.log(setmap.length("night"));
console.log(setmap.length("moon"));
console.log(setmap.length("banana"));

console.log(setmap.keys());

hashmap.clear();

console.log(hashmap.keys());
