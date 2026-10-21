function displayproducts<T>(items:T[]){
    return items;
}
console.log(displayproducts<String>(["AC","TV","washing machine"]));
console.log(displayproducts<number>([1000,5000,5000]));
console.log(displayproducts<number>([1,3,5]));

function getFirstElement<T>(items:T[]){
    return items[0];
}
console.log(getFirstElement<string>(["Laptop", "Mobile"]));
console.log(getFirstElement<number>([100, 200]));
console.log(getFirstElement<boolean>([true, false]));