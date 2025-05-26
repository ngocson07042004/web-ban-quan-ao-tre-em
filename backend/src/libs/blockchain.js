const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(data, previousHash = '') {
        this.timestamp = new Date()
        this.data = data
        this.previousHash = previousHash
        this.hash = this.calculateHash()
    }

    calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data)).toString()
    }

    getHash() {
        return this.hash
    }
}

class Blockchain {
    constructor(includeGenesis = true) {
        this.chain = includeGenesis ? [this.createGenesisBlock()] : []
    }

    createGenesisBlock() {
        return new Block("Blockchain", "000")
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock) {
        if (this.chain.length > 0) {
            newBlock.previousHash = this.getLatestBlock().hash
        }
        newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock)
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const current = this.chain[i]
            const previous = this.chain[i - 1]

            if (current.hash !== current.calculateHash() || current.previousHash !== previous.hash)
                return false
        }
        return true
    }
}

module.exports = { Block, Blockchain }