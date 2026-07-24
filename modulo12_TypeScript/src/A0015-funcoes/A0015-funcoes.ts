type MapStringsCallback = (item: string) => string;

export function mapStrings(
    array: string[],
    callbackfn: MapStringsCallback,
): string[] {
    const newArray: string[] = [];

    // for (let i = 0; i < array.length; i++) {
    //     const item = array[i];
    //     if (typeof item === 'string') newArray.push(callbackfn(item));
    // }

    for (const item of array) {
        newArray.push(callbackfn(item));
    }
    return newArray;
}

const abc = ['a', 'b', 'c', 'd'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);
