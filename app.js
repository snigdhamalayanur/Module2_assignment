(function() {
'use strict';

var ShoppingList = [
    {
        name : "T-Shirts",
        qty : 10
    },
    {
        name : "Laptops",
        qty : 2
    },
    {
        name : "Bed",
        qty : 1
    },
    {
        name : "BeanBag",
        qty : 4
    },
    {
        name : "Books",
        qty : 10
    }
];
angular.module('Module2',[])
.controller('toBuyController',toBuyController)
.controller('alreadyBoughtController',alreadyBoughtController)
.provider('ShoppingListService',ShoppingListServiceProvider);

toBuyController.$inject = ['ShoppingListService'];
function toBuyController(ShoppingListService){
var toBuy = this;
toBuy.toBuyList = ShoppingList;
toBuy.name="";
toBuy.qty = "";
toBuy.boughtList = [];

toBuy.bought = function(itemIndex){
    
    //console.log(name ," of ",qty);
    ShoppingListService.addItem(itemIndex);

}

}
//end of toBuyController

alreadyBoughtController.$inject = ['ShoppingListService'];
function alreadyBoughtController(ShoppingListService){
    var Bought = this;
    Bought.boughtList = ShoppingListService.getItems();
   

}
//end of alreadyBoughtController

function ShoppingListService(){

    var service = this;
    var boughtList = [];
    var toBuyList = ShoppingList;
    var name = "";
    var qty = "";
    service.addItem = function(itemIndex) {

        console.log("toBuyList:" ,toBuyList);
        boughtList.push(toBuyList[itemIndex]);
       var newItem = toBuyList.splice(itemIndex,1);
      // name = newItem[0].name;
      // qty = newItem[0].qty;
     //  console.log("name :",name ,"qty :",qty);
     //  var items = {
      //     name :name,
      //     qty :qty
     //  };
        //   boughtList.push(newItem);
    console.log("BoughtList: ",boughtList);

}

service.getItems = function(){
    return boughtList;
}

}
//end of ShoppingListService
function ShoppingListServiceProvider(){
var provider = this;

provider.$get = function(){
    var shoppingList = new ShoppingListService();

        return shoppingList;
}

}
//end of ShoppingListServiceProvider
})();