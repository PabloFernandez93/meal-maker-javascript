const menu = {
	_menu: '',
	_price: 0,

/* menu._meal = 8;
menu._price = 'Pizza';
console.log(menu); */

//{ _menu: '', _price: 'Pizza', _meal: 8 }


    set meal(mealToCheck) {
	if (typeof mealToCheck === 'string') {
	    return this._meal = mealToCheck;
	}
},

set price(priceToCheck) {
if (typeof priceToCheck === 'number') {
	    return this._price = priceToCheck;
	}
},
  
/* menu.meal = 8;
menu.price = 'Pizza';
console.log(menu); */

// { _menu: '', _price: 0, meal: [Setter], price: [Setter] }


/* menu.meal = 'Pizza';
menu.price = 8;
console.log(menu); */

// { _menu: '', _price: 8, meal: [Setter], price: [Setter], _meal: 'Pizza' }

get todaysSpecial(){
if (this._meal && this._price) {
 return `Today's Meal is ${this._meal} for $$${this._price}!`
} else {
return `Meal or price not set correctly!`
}
}
};


menu.meal = 'Pizza';
menu.price = 8;

console.log(menu.todaysSpecial);
//Today's Meal is Pizza for $8!
