import { LinkedList } from './linkedLists';
import { DoublyLinkedList } from './doublyLinkedLists';

// Example Linked List usage
let myLL = new DoublyLinkedList(10);
myLL.append(5);
myLL.append(6);

myLL.insert(1, 3);
myLL.insert(16, 3);

myLL.insert(0, 43);

console.log(myLL.getListAsArray());

myLL.remove(1);

console.log(myLL.getListAsArray());
console.log(myLL.getList());

