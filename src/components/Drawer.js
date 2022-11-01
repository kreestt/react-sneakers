function Drawer() {
    return (
        <div style={{display: 'none' }} className="overlay">
        <div className="drawer">
        <h2 className="mb-30 d-flex justify-between ">Корзина 
        <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>

         <div className="items flex 1">
         <div className="cartItem d-flex align-center mb-20">
          <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)' }} 
          className="cartItemImg"> </div>
          <div className="mr-20 flex">
            <p className="mb-5">Мужские кроссовки Nike Blazer Mid</p>
            <b>12 999 rub.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center">
          <div style={{backgroundImage: 'url(/img/sneakers/2.jpg)' }} 
          className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p className="mb-5">Мужские кроссовки Nike Blazer Mid</p>
            <b>12 999 rub.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
         </div>
         </div>
      
          <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 rub.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>1074 rub.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
          </div>
          </div>
      </div>
    );
}
export default Drawer;