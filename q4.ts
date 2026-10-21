class A{
    public productid:number=1
    private productprice:number=999
    protected productcategory:string="digital"

    display(){
        console.log(this.productid);
        console.log(this.productprice);
        console.log(this.productcategory);

    }
}
const s1= new A();
s1.display()
console.log(s1.productid);
class ElectronicProduct extends A{
    public meth(){
        console.log(this.productcategory);
    }
}
const s2=new ElectronicProduct();
s2.meth();