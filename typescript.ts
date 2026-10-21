
//q2
class Product{
    productID:number;
    name:string;
    price:number;
    category:string;

    constructor(productID:number,name:string,price:number,category:string){
        this.productID=productID
        this.name=name
        this.price=price
        this.category=category
    }
    displayInfo(){
        console.log(this.productID);
        console.log(this.name);
        console.log(this.price);
        console.log(this.category);
    }
}
const e= new Product(1,"jayshree",12900,"electronic");
e.displayInfo();
const e1= new Product(2,"jayshree",12900,"electronic");
e1.displayInfo();

const e2= new Product(3,"jayshree",12900,"electronic");
e2.displayInfo();


