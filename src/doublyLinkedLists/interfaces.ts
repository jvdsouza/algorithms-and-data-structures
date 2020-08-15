interface IDoubleNode {
    value: any;
    next: IDoubleNode | null;
    previous: IDoubleNode | null;
}

interface IDoublyLinkedList {
    head: IDoubleNode;
    tail: IDoubleNode;
    length: number;
}

export { 
    IDoubleNode, 
    IDoublyLinkedList 
};