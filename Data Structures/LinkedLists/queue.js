class Queue {
    constructor() {
        this.head = this.tail;
        this.length = 0;
    }

    enqueue(item) {
        const node = { value: item };

        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque() {
        if (!this.head)
            return;

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        //free
        head.next = undefined;
        if (this.length === 0) {
            this.tail = undefined;
        }
        return head.value;
    }

    peek() {
        return this.head?.value;
    }
}

const list = new Queue();

// test cases
list.enqueue(5);
list.enqueue(7);
list.enqueue(9);

console.log(list.deque() == 5)
console.log(list.length == 2)

console.log(list.deque() === 7);
console.log(list.deque() === 9);
console.log(list.peek() !== 11);
console.log(list.deque() !== 11);
console.log(list.deque() === undefined);
console.log(list.length === 0);

list.enqueue(69);
console.log(list.peek() === 69);
console.log(list.length === 1)
