import Node from './Node';

class LinkedList {
    head;
    tail;
    length; 

    constructor(value) {
        this.head = new Node(value); 
        this.tail = this.head;
        this.length = 1;
    }
    
    append(value) {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.length++;
    }

    getList() {
        return this.head;
    }
}

export default LinkedList;