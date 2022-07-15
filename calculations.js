// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 60 
function calculateFruitCost(fruitName,quantity){ 
    var fruits={mangoes:30,bananas:10,oranges:5,peas:15,pinapples:40}  
    for(let i=0;i<Object.keys(fruits).length;i++){ 
        if(fruitName==Object.keys(fruits)[i]){ 
             console.log(Object.values(fruits)[i]*quantity)
        } 

    }
}  
calculateFruitCost("mangoes",3)


// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 
// kioskCalc.getTotalCost( )  // returns “2 orange for KES 60”      
// class KioskCalc{ 
//     constructor(fruit,quantity){ 
//         this.fruit=fruit 
//         this.quantity=quantity  
//         this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };     
//         this.getTotalCost=function(){  
//             var key=Object.keys(this.fruitsPriceList) 
//             var value=Object.values(this.fruitsPriceList)
//             for(let i=0;i<key;i++){ 
//                 if(fruit===key[i]){ 
//                 console.log(value[i]*quantity)
//                 }
//             }
//         }  
//         }  
//         } 
//         var kioskCalc = new KioskCalc("orange",2);      
//         console.log(kioskCalc.getTotalCost()) 

class KioskCalc{ 
    constructor(fruit,quantity){ 
        this.fruit=fruit 
        this.quantity=quantity  
        this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };     
        this.getTotalCost=function(){  
            var key=Object.keys(this.fruitsPriceList) 
            var value=Object.values(this.fruitsPriceList)
            for(let i=0;i<key;i++){ 
               for(let j=0;j<value;j++){ 
                if(fruit===key[i]){ 
                    return `${quantity} ${fruit} for ${quantity*value[j]}`
                }
               }
            }
        }  
        }   
        } 
        var kioskCalc = new KioskCalc("orange",2);      
        console.log(kioskCalc.getTotalCost()) 

 


