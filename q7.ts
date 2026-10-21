interface  IProduct{
  proid:number
  proname:string
  proprice:number
  procategory:string

  printProduct():void



}
class E implements IProduct{
    proid: number=1
    proname: string="Ac"
    proprice: number=1200
    procategory: string="electronic"

    printProduct(): void {
        console.log(this.proid);
        console.log(this.proname);
        console.log(this.procategory);
        
    }


}

const w= new E();
w.printProduct();