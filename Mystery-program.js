function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

// sets current to the head of the list argument
// while that current node exists, set newNode to the current node
// during that loop, while newNode.next nexts (there is another node ahead)
// if the newNode.next's value is equal to the current value
//set the pointer of newNode to the node beyond that
// else set the newNode's pointer to the next node

// then set the current node to the next?

// I'm not entire sure what the last line does,
// but this seems to be checking for repeating data and setting points around repeating data to delete it.
// Big O -> n^2 is a worst case scenario
