(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ShoppingListController1', ShoppingListController1)
.provider('ShoppingListService', ShoppingListServiceProvider);


//LIST #1 - controller
ShoppingListController1.$inject = ['ShoppingListService'];
function ShoppingListController1(ShoppingListService) {
  var list1 = this;

  //Use factory to create new shopping list service
  

  list1.items = ShoppingListService.getItems();

  list1.itemName = "";
  list1.itemQuantity = "";

  list1.addItem = function(){
    try{
      ShoppingListService.addItem(list1.itemName, list1.itemQuantity);
    } catch(error) {
      list1.errorMessage = error.message;
    }
  };

  list1.removeItem = function(itemIndex){
    ShoppingListService.removeItem(itemIndex);
  };

}


//If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems){
  var service = this;

  //List of shopping items
  var items = [];

  service.addItem = function(itemName, quantity){
    if ((maxItems === undefined) || 
      (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached." );
    }
  };

  service.removeItem = function(itemIndex){
      items.splice(itemIndex, 1);
  };

  service.getItems = function(){
    return items;
  };

}


function ShoppingListServiceProvider() {
  var provider = this;

  provider.defaults = {
    maxItems:10
  };

  provider.$get = function(){
    var shoppingList = new ShoppingListService (provider.defaults.maxItems);

    return shoppingList;
  };
}

})();


