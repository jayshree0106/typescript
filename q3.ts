class F{

    static companyName:string="techstore"
    ID:number=1
    productName:string="AC"
    price:number=999

    static displayCompany(){
        console.log(this.companyName);
    }

    displayInfo(){
        console.log(this.ID);
        console.log(this.productName);
        console.log(this.price);
    }



}
const a= new F();
console.log(a.displayInfo());
F.displayCompany();
