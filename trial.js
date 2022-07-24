// Create a class Mkulima that will keep a list of farms, grocery vendors and products. A single farm record 
// should contain id, farm name, farmer, phone number and address. A single grocery vendor record should contain 
// id, store name and phone number. A product should have id, name and price fields.  
// Users of the system should be able to:
//  addFarm - params: farmId, name, farmer, phone, address
//  removeFarm - params: farmId
//  updateFarm - params: farmId, name, farmer, phone, address
//  getFarm - params: farmId - returns a farm object
//  addProduct - params: productId, name, price
//  removeProduct - params: productId
//  updateProduct - params: productId, name, price
//  getProduct - params: productId - returns a product object
//  printProducts - No param, console logs a list of product items with their prices.
// calculateOrderCost - params: productId, quantity
 

class Mkulima {
    constructor() {
      this.farms = [];
      this.products = [];
      this.orders = []; 

      let addFarm=()=>{ 
        this.farms.push({farmId:"frm123",farmName:"Njogu's",
        farmer:"Njogu",phoneNo:"0700620110",address:"616Muranga"},{farmId:"frm124",farmName:"Waweru's",
        farmer:"Waweru",phoneNo:"0742386462",address:"617Muranga"},{farmId:"frm125",farmName:"Mwangi's",
        farmer:"Mwangi",phoneNo:"0742386462",address:"618Muranga"})   
        console.log(addFarm())
      } 
      let removeFarm=()=>{ 
        this.farms.splice(1,1) 
        console.log(removeFarm())
      } 
      let updateFarm=this.farms.map(obj=>{ 
        if(obj.farmName=="Waweru's"){ 
          console.log(obj.farmName="Njeri's")
        }

      })  
      let getfarm=this.farms.find(obj=>{ 
        if(obj.farmId=="frm"){ 
          console.log(obj)
        }
      }) 
      let addProduct=()=>{ 
        this.farms.push({productId:"Prdct",})
      }
        
      
    

      }


    } 

 
  
 
 
 
 









