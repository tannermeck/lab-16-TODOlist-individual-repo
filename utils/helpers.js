export function findByName(array, name) {
    for (let item of array) {
        if (item.name === name) {
            return item;
        }
    }
    return null;
}