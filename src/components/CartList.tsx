import React from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { handleCountCart } from '../module/CartProductModule';
import { ICartProduct } from '../type/products';

type Props = {
  cartItem: ICartProduct;
};

const CartList = ({ cartItem }: Props) => {
  const handleCountProduct = useSetRecoilState(handleCountCart);

  const handleCartProductCount = (id: number, type: 'plus' | 'minus') => {
    return handleCountProduct({ id, type });
  };

  return (
    <div
      key={cartItem.id}
      className="lg:flex lg:items-center mt-4 px-2 lg:px-0"
    >
      <Link to={`product/${cartItem.id}`}>
        <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
          <img
            src={cartItem.image}
            alt="title"
            className="object-contain w-full h-48"
          />
        </figure>
      </Link>
      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title">
          <Link to={`product/${cartItem.id}`}>{cartItem.title}</Link>
        </h2>
        <p className="mt-2 mb-4 text-3xl">${cartItem.totalPrice}</p>
        <div className="card-actions">
          <div className="btn-group">
            <button
              className="btn btn-primary"
              onClick={() => handleCartProductCount(cartItem.id, 'minus')}
            >
              -
            </button>
            <button className="btn btn-ghost no-animation">
              {cartItem.count}
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleCartProductCount(cartItem.id, 'plus')}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;