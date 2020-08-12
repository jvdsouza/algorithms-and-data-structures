import { LinkedList } from './linkedLists';

// Example Linked List usage
let myLL = new LinkedList(10);
myLL.append(5);
myLL.append(6);

myLL.insert(1, 3);
myLL.insert(16, 3);

myLL.insert(0, 43);

console.log(myLL.getListAsArray());