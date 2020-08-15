import Node from './Node';
import { IDoublyLinkedList } from './interfaces';

class DoublyLinkedList implements IDoublyLinkedList {
    head;
    tail;
    length; 

    constructor(value) {
        this.head = new Node(value); 
        this.tail = this.head;
        this.length = 1;
    }
    
    append(value) {
        const newTail = new Node(value);
        this.tail.next = newTail;
        newTail.previous = this.tail;
        this.tail = newTail;
        this.length++;
        return this.getListAsArray();
    }

    prepend(value) {
        const newHead = new Node(value);
        newHead.next = this.head;
        this.head.previous = newHead;
        this.head = newHead;
        this.length++;
        return this.getListAsArray();
    }

    insert(index, value) {
        let currentNode = this.head;
        let currentIndex = 0;

        if (index > this.length - 1) {
            this.append(value);
            return this.getListAsArray();
        }

        if(index === 0) {
            this.prepend(value);
            return this.getListAsArray();
        }

        while(currentIndex + 1 !== index) {
            if(currentNode.next === null) {
                this.append(value);
                return this.getListAsArray();
            }

            currentNode = currentNode.next;
        }

        let nextNode = currentNode.next;
        currentNode.next = new Node(value);
        nextNode.previous = currentNode;

        currentNode = currentNode.next;
        currentNode.next = nextNode;
        return this.getListAsArray();
    }

    remove(index) {
        let currentIndex = 0;
        
        if(index >= this.length - 1) {
            console.log("Index out of range");
            return this.getListAsArray();
        } 

        if(index === 0) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            this.head.previous = null;
            return removedValue.value;
        }

        let currentNode = this.head;

        while (currentIndex + 1 !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        const removedValue = currentNode.next;

        currentNode.next = currentNode.next.next;
        currentNode.next.previous = currentNode;

        return removedValue.value;
    }

    getList() {
        return this.head;
    }

    getListAsArray() {
        const array = [];
        let currentNode = this.head;

        while(currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return array;
    }
}

export default DoublyLinkedList;