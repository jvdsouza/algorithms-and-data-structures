const LinkedList = require('../src/linkedLists').LinkedList

describe('testing methods of LinkedList class', () => {
    let myLL = new LinkedList(10);
    test('appends 5 as a value to the linked list and produces 10->5->null', () => {
        myLL.append(5);
        expect(myLL.getList()).toEqual({ value: 10, next: { value: 5, next: null } });
    });
    test('appends 6 as a value to the linked list and produces 10->5->6->null', () => {
        myLL.append(6);
        expect(myLL.getList()).toEqual({ value: 10, next: { value: 5, next: { value: 6, next: null } } });
    });
});