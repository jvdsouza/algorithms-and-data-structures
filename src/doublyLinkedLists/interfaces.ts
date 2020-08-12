interface INode {
    value: any;
    next: INode | null;
}

interface ILinkedList {
    head: INode;
    tail: INode;
    length: number;
}

export { 
    INode, 
    ILinkedList 
};