// Breadth First Search does not preserve shape.
// Depth First Search does

// Binary Tree Breadth-First Search
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

// we use a queue compared to depth-first search which uses a stack so the runtime is O(N)
// but if we use a list to represent a queue here that will make the runtime O(N^2)
function breadth_first_search(headNode, needle) {
    // const queue = [headNode]

    const queue = new Queue()
    queue.enqueue(headNode)

    while (queue.length) {
        const curr = queue.deque()
        if (!curr) {
            continue
        }

        if (curr.value === needle) {
            return true
        }

        queue.enqueue(curr.left)
        queue.enqueue(curr.right)
    }
    return false
}

// test case
const binaryTree = {
    value: 7,
    left: {
        value: 23,
        left: {
            value: 5,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right: {
        value: 3,
        left: {
            value: 18,
            left: null,
            right: null
        },
        right: {
            value: 21,
            left: null,
            right: null
        }
    }
}

console.log(breadth_first_search(binaryTree, 21))