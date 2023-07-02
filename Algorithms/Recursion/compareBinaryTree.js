function compare(treeA, treeB) {
    // structural check
    if (treeA === null && treeB === null) {
        return true
    }

    // we could do this instead of the last 2 conditions
    // both value and structural checks at the same time
    // if (treeA?.value !== treeB?.value) {
    //     return false
    // }

    // structural check
    if (treeA === null || treeB === null) {
        return false
    }
    // value check
    if (treeA.value !== treeB.value) {
        return false
    }

    return compare(treeA.left, treeB.left) && compare(treeA.right, treeB.right)
}