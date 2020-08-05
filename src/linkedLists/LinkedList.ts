class LinkedList {
    head;
    tail;
    length; 

    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    
    append(value) {
        this.tail.next = {
            value,
            next: null
        }

        this.tail = this.tail.next;
    }

    getList() {
        return this.head;
    }
}

export default LinkedList;