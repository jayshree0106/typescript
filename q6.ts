abstract class D{
    id:number=1
    empname:string="tom"
    empprice:number=1200
    abstract calculateFinalPrice():void

    
}
class electonicpro extends D{
    calculateFinalPrice(): void {
    const dis:Number=this.empprice-(this.empprice*0.10);
    console.log(dis);
    }
    Info(){
        console.log(this.id);
        console.log(this.empname);
        console.log(this.empprice);
    }

}
class GroceryProduct extends D{
    calculateFinalPrice(): void {
         const dis:Number=this.empprice-(this.empprice*0.15);
    console.log(dis);
        
    }
}

const s3= new electonicpro();
s3.calculateFinalPrice();
s3.Info();

const s4= new GroceryProduct();
s4.calculateFinalPrice();



 