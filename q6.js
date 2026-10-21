"use strict";
class D {
    id = 1;
    empname = "tom";
    empprice = 1200;
}
class electonicpro extends D {
    calculateFinalPrice() {
        const dis = this.empprice - (this.empprice * 0.10);
        console.log(dis);
    }
    Info() {
        console.log(this.id);
        console.log(this.empname);
        console.log(this.empprice);
    }
}
class GroceryProduct extends D {
    calculateFinalPrice() {
        const dis = this.empprice - (this.empprice * 0.15);
        console.log(dis);
    }
}
const s3 = new electonicpro();
s3.calculateFinalPrice();
s3.Info();
const s4 = new GroceryProduct();
s4.calculateFinalPrice();
