class MinStack {
    constructor() {
        this.stack = [];
        this.monotonic = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.min = Math.min(this.min, val);

        if (this.monotonic.length == 0) {
            this.monotonic.push(val)
        } else if (val <= this.monotonic[this.monotonic.length - 1]) {
            this.monotonic.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const toDelete = this.stack.pop();

        if (toDelete == this.monotonic[this.monotonic.length - 1]) {
            this.monotonic.pop();
            this.min = this.monotonic.length ? this.monotonic[this.monotonic.length - 1] : Infinity;
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
