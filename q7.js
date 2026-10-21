"use strict";
class E {
    proid = 1;
    proname = "Ac";
    proprice = 1200;
    procategory = "electronic";
    printProduct() {
        console.log(this.proid);
        console.log(this.proname);
        console.log(this.procategory);
    }
}
const w = new E();
w.printProduct();
