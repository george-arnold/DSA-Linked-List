// Reverse a list

// Write an algorithm to reverse a linked list.
//The time complexity of your algorithm should be linear (O(n)).
// For this exercise, notice we are not asking you just to print the linked list in reverse or use
//another linked list to store the value in reverse order. Your program should reverse the direction
// of a given singly linked list. In other words, all pointers should point backward.
//BONUS: Solve this problem using both recursive and iterative algorithms.
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}
// after making a Linked List you could run LinkedListName.reverse()
