class Item {
   constructor({title, price, img}) {
      this._title = title;
      this._price = price;
      this._img = img;
   }

   getPrice() {
      return this._price;
   }

   render() {
      return `<div class="item">
   <a class="product" href="single-page.html">
      <div class="pic__back">
         <img class="item__pic" src="${this._img}" alt="item">
      </div>
      <div class="product__text">
         <p class="item__name">${this._title}</p>
         <p class="item__price">$${this._price}</p>
      </div>
   </a>
   <div class="box__add">
      <a class="add" href="#">
         <img class="add__cart" src="image/cart.svg" alt="add">
         Add to Cart
      </a>
   </div>
</div>`
   }
}


class ItemToBuy extends Item {
   constructor(title, price, img, quantity = 1) {
      super(title, price, img);
      this._quantity = quantity;
   }

   getPrice() {
      return this._price * this.quantity;
   }
   
   render() {
      return `<div class="item">
   <a class="product" href="single-page.html">
      <div class="pic__back">
         <img class="item__pic" src="${this._img}" alt="item">
      </div>
      <div class="product__text">
         <p class="item__name">${this._title}</p>
         <p class="item__price">$${this._price}</p>
      </div>
   </a>
   <div class="box__add">
      <a class="add" href="#">
         <img class="add__cart" src="image/cart.svg" alt="add">
         Add to Cart
      </a>
   </div>
</div>`
   }
}


class goodsList {
   constructor(container) {
      this._goods = [];
      this._$goodsListContainer = container;
   }

   add(good) {
      this._goods.push(good);
   }

   renderGoodsList() {
      let goodsList = this._goods.map(
         item => item.render()
      ).join('');
      this._$goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
   }
}


let list = new goodsList(document.querySelector('.also-items'));


fetch('../json/single-page.json')
   .then((response) => {
      return response.json();
   })

   .then((response) => {
      response.forEach(newGood => {
         list.add(new Item(newGood));
      })
      list.renderGoodsList();
   })

   .catch((err) => {
      console.log(err);
   })