const LinkedList = require('../src/linkedLists').LinkedList

describe('testing append method of LinkedList class', () => {
    let myLL = new LinkedList(10);
    test('appends 5 as a value to the linked list and produces 10->5->null', () => {
        myLL.append(5);
        expect(myLL.getList()).toEqual({ value: 10, next: { value: 5, next: null } });
    });
    test('appends 6 as a value to the linked list and produces 10->5->6->null', () => {
        myLL.append(6);
        expect(myLL.getList()).toEqual({ value: 10, next: { value: 5, next: { value: 6, next: null } } });
    });
    test('linked list length after 3 elements have been appended should be 3', () => {
        expect(myLL.length).toBe(3);
    });
    test('linked list tail should be updated to be {value: 6, next: null}', () => {
        expect(myLL.tail).toEqual({ value: 6, next: null });
    });
});