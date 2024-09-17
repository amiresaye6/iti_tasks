function* generateId() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const iterableObject = {
    data: [1, 2, 3, 4, 5],
    
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return { value: this.data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

export { 
    generateId,
    iterableObject
};
