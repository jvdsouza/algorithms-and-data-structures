import Node from './Node';
import { ILinkedList } from './interfaces';

class LinkedList implements ILinkedList {
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
        return this.head;
    }

    prepend(value) {
        const newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
        return this.head;
    }

    insert(index, value) {
        let currentNode = this.head;
        let currentIndex = 0;

        if (index > this.length - 1) {
            this.append(value);
            return this.getListAsArray();
        }

        if(index === 0) {
            this.head = new Node(value);
            this.head.next = currentNode;
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
            return removedValue.value;
        }

        let currentNode = this.head;

        while (currentIndex + 1 !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        const removedValue = currentNode.next;

        currentNode.next = currentNode.next.next;

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

export default LinkedList;