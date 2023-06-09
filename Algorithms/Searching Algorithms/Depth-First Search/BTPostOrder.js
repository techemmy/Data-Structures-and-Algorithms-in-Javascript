// Binary Tree Post Order Search

function walk(currNode, path) {
    if (currNode === null) {
        return path
    }

    // recurse
    // pre

    // recurse
    walk(currNode.left, path)
    walk(currNode.right, path)

    // post
    path.push(currNode.value)

    return path
}

function binaryTreePreOrderSearch(headNode) {
    return walk(headNode, [])
}