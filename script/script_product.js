const $allGoodsList = document.querySelector('.product__all');

function renderItems ({title, price, img}) {
   return `<div class="item">
   <a class="product" href="single-page.html">
      <div class="pic__back">
         <img class="item__pic" src="${img}" alt="item">
      </div>
      <div class="product__text">
         <p class="item__name">${title}</p>
         <p class="item__price">$${price}</p>
      </div>
   </a>
   <div class="box__add">
      <a class="add" href="#">
         <img class="add__cart" src="image/cart.svg" alt="add">
         Add to Cart
      </a>
   </div>
</div>`
};

function renderGoodsList (list, selector) {
   let goodsList = list.map(
      item => renderItems(item)
   ).join('');

   selector.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList(allGoods, $allGoodsList);