// Binary Tree In Order Search

function walk(currNode, path) {
    if (currNode === null) {
        return path
    }

    // recurse
    // pre

    // recurse
    walk(currNode.left, path)
    path.push(currNode.value)
    walk(currNode.right, path)

    // post
    return path
}

function binaryTreePreOrderSearch(headNode) {
    return walk(headNode, [])
}

// test case
const order = binaryTreePreOrderSearch(
    {
        value: 7, left: {
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
)
console.log(JSON.stringify(order) === JSON.stringify([5, 23, 4, 7, 18, 3, 21]))