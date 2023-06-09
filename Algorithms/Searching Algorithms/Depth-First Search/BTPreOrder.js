// Binary Tree Pre Order Search
function walk(currNode, path) {
    if (!currNode) {
        return path
    }

    // recurse
    // pre
    path.push(currNode.value)

    // recurse
    walk(currNode.left, path)
    walk(currNode.right, path)

    // post
    return path
}

function binaryTreePreOrderSearch(headNode) {
    return walk(headNode, [])
}