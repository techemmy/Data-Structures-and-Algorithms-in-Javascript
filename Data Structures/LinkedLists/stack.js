class Stack {
    constructor() {
        this.head;
        this.length = 0;
    }

    push(item) {
        const node = { value: item };

        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop() {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const head = this.head;
            this.head = null;
            return head?.value;
        }

        const head = this.head;
        this.head = head.prev;
        return head.value;
    }
    peek() {
        return this.head?.value;
    }
}

const list = new Stack();

// test cases
list.push(5);
list.push(7);
list.push(9);

console.log(list.pop() === 9);
console.log(list.length === 2);

list.push(11);
console.log(list.pop() === 11);
console.log(list.pop() === 7);
console.log(list.peek() === 5);
console.log(list.pop() === 5);
console.log(list.pop() === undefined);

list.push(69)
console.log(list.peek() === 69);
console.log(list.length === 1);
