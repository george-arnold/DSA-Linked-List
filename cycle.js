// Cycle in a list

// Write an algorithm to find whether a linked list has a cycle
// (i.e., whether a node in the list has its next value pointing to an earlier node in the list).
//  For this exercise, create a linked list with the name CycleList.
//   Be sure to insert nodes in the list so that it has a cycle.
//  Then test your program with a cycleList function.

const LinkedList = require("./linked-list-class");

const SLL = new LinkedList(5);
//psuedocode
//insert a few items into the list
// make it such that the head of one item points to
// the value of another whose head points to the value of the initial value
