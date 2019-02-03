class Node {
    constructor(id, name) {
        this.id = id,
        this.name = name
    }
}

class NodeLevel {
    constructor(node, level){
        this.node = node,
        this.level = level
    }
}

class NodeWeight {
    constructor(node, weight) {
    this.node = node,
    this.weight = weight
    }
}

export {Node, NodeLevel, NodeWeight};