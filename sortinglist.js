//Write an algorithm that will sort a given linked list. F
//or example given a list such as 3->2->5->7->1, your program
//will output the sorted version of this list which will be 1->2->3->5->7.
//You may not use another list or any other data structure such as an array to store the data.
//Also, you can only go through the list once, O(n) runtime.

//psuedo const SLL = new LinkedList

function sortLinkedList(linkedList) {
  let newLinkedList = new LinkedList();
  for (let i = 0; i < linkedList.length; i++) {
    if ([i].value > [i].next.value) {
      newLinkedList.append([i].value);
    } else {
      newLinkedList.append([i].next.value);
    }
  }
  return newLinkedList;
}

// sortLinkedList(SLL);
