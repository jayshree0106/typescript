class B{
    proprice:number=999

    calculatePrice(){
        const discount:number=this.proprice*0.05;
       console.log(discount);

    }
}
class elecproducts extends B{
calculatePrice(): void {
    const discount:number=this.proprice-(this.proprice*0.10);
    console.log(discount);
}
}
class ClothingProduct extends B{
    calculatePrice(): void {
        const discount:number=this.proprice-(this.proprice*0.15);
    console.log(discount);
    }

}

const ob=new B();
ob.calculatePrice();

const ab= new elecproducts();
ab.calculatePrice();

const c= new ClothingProduct();
c.calculatePrice();