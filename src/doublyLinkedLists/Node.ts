import { IDoubleNode } from './interfaces';

class Node implements IDoubleNode {
    value;
    next;
    previous;

    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

export default Node;