class Item {
   constructor(title, price, img) {
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
      return this._price * this._quantity;
   }

   render() {
      return `<div class="shopping__single">
      <div class="shopping__item">
         <a href="single-page.html"><img src="${this._img}" alt="product"></a>
         <div class="item__prop">
            <a href="single-page.html" class="item__prop__heading">${this._title}</a>
            <div class="item__prop__all">
               <p class="item__prop__text"><span>Color:</span> Red</p>
               <p class="item__prop__text"><span>Size:</span> XXL</p>
            </div>
         </div>
      </div>
      <div class="shopping__item__char shopping__char">
         <p class="char__text shopping__paddinger">$${this._price}</p>
         <p class="char__text shopping__paddinger shopping__item_bdr">${this._quantity}</p>
         <p class="char__text shopping__paddinger">FREE</p>
         <p class="char__text shopping__paddinger">$${this.getPrice()}</p>
         <button class="shopping__paddinger" type="reset">
            <i class="fa fa-times-circle char__text"></i>
         </button>
      </div>
   </div>`
   }
}


class goodsList {
   constructor(goods, container) {
      this._goods = goods;
      this._$goodsListContainer = container;
   }

   renderGoodsList() {
      let goodsList = this._goods.map(
         item => item.render()
      ).join('');
      this._$goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
   }
}


let list = new goodsList([
   new ItemToBuy('Mango People T-shirt', 150, 'image/product1preview.png', 1),
   new ItemToBuy('Mango People T-shirt', 150, 'image/product2preview.png', 2),
   new ItemToBuy('Mango People T-shirt', 150, 'image/product3preview.png', 1),
], document.querySelector('.shopping__cart'));

list.renderGoodsList();