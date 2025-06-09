//map 메서드
const arr = [1,2,3];
const newArr = arr.map((data) => {
    return data * 2;
})

function map<T, U>(arr: T[], callback:(data: T) => U) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

map(arr, (data) => data * 2);
map(['hi', 'hello'], (data) => parseInt(data));

//forEach
const arr2 = [1,2,3];
arr2.forEach((data) => console.log(data));

function forEach<T>(arr: T[], callback: (item: T) => void) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach(arr2, (data) => {
    console.log(data.toFixed());
})