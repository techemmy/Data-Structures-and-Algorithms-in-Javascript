class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head;
        this.tail;
    }

    prepend(item) {
        const newNode = {item}

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
            return;
        }

        const currNode = this.head;
        newNode.next = currNode;

        this.head = newNode;
        this.length++;
    }

    insertAt(item, idx) {
        let currNode = this.head, nextNode = this.head.next, prevNode;
        const newNode = {item};

        if (idx === 0) {
            this.prepend(item);
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx > this.length - 1){
             return;
        }

        for (let i = 0; i < this.length; i++) {
            if (idx === i) {
                if (prevNode) {
                    prevNode.next = currNode.next;
                } else {
                    this.head = currNode.next;
                }
                newNode.next = currNode;
                prevNode.next = newNode;

                this.length++;
                return newNode.item;
            }

            prevNode = currNode;
            currNode = nextNode;
            if (currNode) nextNode = currNode.next;
        }
    }

    append(item) {
        const newNode = {item};

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    remove(item) {
        let currNode = this.head, nextNode = this.head.next, prevNode;
        for (let i = 0; i < this.length; i++) {
            if (currNode.item === item) {
                if (prevNode) {
                    prevNode.next = currNode.next;
                } else {
                    this.head = currNode.next;
                }
                this.length--;
                return currNode.item;
            }
            // console.log("C:",currNode, currNode.next)
            prevNode = currNode;
            currNode = nextNode;
            if (currNode) nextNode = currNode.next;
        }
    }

    get(idx) {
        let currNode = this.head, nextNode = this.head.next;
        for (let i = 0; i < this.length; i++) {
            if (idx === i) {
                return currNode.item;
            }

            currNode = nextNode;
            nextNode = currNode.next;
        }
    }

    removeAt(idx) {
        let currNode = this.head, nextNode = this.head.next, prevNode;
        for (let i = 0; i < this.length; i++) {
            if (idx === i) {
                if (prevNode) {
                    prevNode.next = currNode.next;
                } else {
                    this.head = currNode.next;
                }

                this.length--;
                return currNode.item;
            }

            prevNode = currNode;
            currNode = nextNode;
            if (currNode) nextNode = currNode.next;
        }
    }

}

const list = new SinglyLinkedList();

// test cases
list.append(5)
list.append(7)
list.append(9)

console.log(list.get(2) === 9);
console.log(list.removeAt(1) === 7);
console.log(list.length === 2);

list.append(11);
console.log(list.removeAt(1) === 9);
console.log(list.remove(9) === undefined);
console.log(list.removeAt(0) === 5);
console.log(list.removeAt(0) === 11);
console.log(list.length === 0);

list.prepend(5)
list.prepend(7)
list.prepend(9)

console.log(list.get(2) === 5)
console.log(list.get(0) === 9)
console.log(list.remove(9) === 9)
console.log(list.length === 2)
console.log(list.get(0) === 7)

list.insertAt(10, 0)
console.log(list.get(0) === 10)
list.insertAt(11, 0)
console.log(list.get(0) === 11)
list.insertAt(20, 1)
console.log(list.get(1) === 20)
console.log(list.get(2) === 10)
