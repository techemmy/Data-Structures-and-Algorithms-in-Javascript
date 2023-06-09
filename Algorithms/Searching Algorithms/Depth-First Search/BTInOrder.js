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