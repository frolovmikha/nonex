// Assuming DataContainer is a class
class DataContainer {
    constructor(data) {
        this.data = data;
    }
}

// Creating a new instance of DataContainer with new_data
function createDataContainer(new_data) {
    return new DataContainer(new_data);
}

// Example usage:
let new_data = { key: 'value' };
let container = createDataContainer(new_data);
console.log(container); // This will log an instance of DataContainer with new_data as its data property
