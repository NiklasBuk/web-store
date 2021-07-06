const $goodsList = document.querySelector('.items');

const renderItems = ({title, price, img}) => {
   return `<div class="item">
   <a class="product" href="single-page.html">
      <div>
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

const renderGoodsList = (list = goods) => {
   let goodsList = list.map(
      item => renderItems(item)
   ).join('');

   $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();