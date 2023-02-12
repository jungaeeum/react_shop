import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
  cartProductArrayToJson,
  cartProductAtom,
} from '../module/CartProductModule';
import BreadCrumb from './common/BreadCrumb';
import CartList from './CartList';
import Confirm from './common/Confirm';
interface IbuyButtonProps {
  price: number;
}

const BuyProductionButton = ({ price }: IbuyButtonProps) => {
  return (
    <div className="self-start shrink-0 flex items-center mt-10 mb-20">
      <span className="text-xl md:text-2xl">총 : ${price}</span>
      <label
        htmlFor="confirm-modal"
        className="modal-button btn btn-primary ml-5"
      >
        구매하기
      </label>
    </div>
  );
};

const EmptyCart = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
        <Link to="/" className="btn btn-primary mt-10">
          담으러 가기
        </Link>
      </div>
      <div className="lg:flex justify-between mb-20">
        <div></div>
      </div>
    </>
  );
};

const Cart = () => {
  const { data, totalPrice } = useRecoilValue(cartProductArrayToJson);
  const handleBuy = useResetRecoilState(cartProductAtom);

  const handleCartProductBuy = () => {
    handleBuy();
  };

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb name="홈" title="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {!data.length ? (
          <EmptyCart />
        ) : (
          <div className="lg:flex justify-between mb-20">
            <div>
              {data.map((cartItem) => (
                <CartList key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
            <BuyProductionButton price={totalPrice} />
          </div>
        )}
      </div>
      <Confirm onBuyProduct={handleCartProductBuy} />
    </section>
  );
};

export default Cart;