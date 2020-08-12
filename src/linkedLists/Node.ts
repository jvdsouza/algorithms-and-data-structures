import { INode } from './interfaces';

class Node implements INode {
    value;
    next;
    
    constructor(value) {
        this.value = value
        this.next = null
    }
}

export default Node;