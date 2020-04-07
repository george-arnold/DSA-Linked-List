class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
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
  find(nodeValue) {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currentNode.value !== nodeValue) {
      if (currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
  insertAt(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  insertBefore(insValue, beforeThisValue) {
    const newNode = new Node(insValue);
    const leader = this.find(beforeThisValue - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  insertAfter(insValue, afterThisValue) {
    const newNode = new Node(insValue);
    const leader = this.find(afterThisValue);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  //third from the end
  thirdfromEnd() {
    const tail = this.tail.index;
    const thirdFromLast = this.traverseToIndex(tail - 3);
    return thirdFromLast;
  }
  middleElement() {
    const tailIndex = this.tail.index;
    const headIndex = this.head.index;
    const middleValue = this.traverseToIndex(
      Math.floor(tailIndex + headIndex / 2)
    );
    return middleValue;
  }
}
function main() {
  const SLL = new LinkedList("Apollo");
  SLL.append("Boomer");
  SLL.append("Helo");
  SLL.append("Husker");
  SLL.append("Starbuck");
  SLL.append("Tauhida");
  SLL.remove("Husker");
  SLL.insertBefore("Athena", "Boomer");
  SLL.insertAfter("Hotdog", "Helo");
  SLL.insertAt(3, "Kat");
}
// how to pass it in here
function display() {
  SLL.printList();
}

function size() {
  return SLL.length;
}

function isEmpty() {
  if (SLL.traverseToIndex(0) === null) {
    return true;
  } else {
    return false;
  }
}

function findPrevious(index) {
  SLL.traverseToIndex(index - 1);
}

function findLast(index) {
  return SLL.tail;
}

module.exports = LinkedList;
