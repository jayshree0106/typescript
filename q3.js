"use strict";
class pro {
    static companyName = "techstore";
    ID = 1;
    productName = "AC";
    price = 999;
    static displayCompany() {
        console.log(this.companyName);
    }
    displayInfo() {
        console.log(this.ID);
        console.log(this.productName);
        console.log(this.price);
    }
}
const a = new pro();
console.log(a.displayInfo());
pro.displayCompany();
