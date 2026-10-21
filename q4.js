"use strict";
class A {
    productid = 1;
    productprice = 999;
    productcategory = "digital";
    display() {
        console.log(this.productid);
        console.log(this.productprice);
        console.log(this.productcategory);
    }
}
const s1 = new A();
s1.display();
console.log(s1.productid);
class ElectronicProduct extends A {
    meth() {
        console.log(this.productcategory);
    }
}
const s2 = new ElectronicProduct();
s2.meth();
