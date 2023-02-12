import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../type/products';

interface IProps {
  data: IProduct[];
  slice: number;
  title: string;
  onLoading: React.ReactNode;
}

const ItemList = ({ data, slice, title, onLoading }: IProps) => {
  const product = data.filter((_: any, idx: number) => slice > idx);

  return (
    <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        {title}
      </h2>
      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
        data-scroll="true"
      >
        {!product.length && onLoading}
        {product &&
          product.map((el) => (
            <Link
              key={el.id}
              className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
              to={`/product/${el.id}`}
            >
              <figure className="flex h-80 bg-white overflow-hidden">
                <img
                  className="transition-transform duration-300"
                  src={el.image}
                  alt="상품 이미지"
                />
              </figure>
              <div className="card-body bg-gray-100 dark:bg-gray-700">
                <p className="card-title text-base">{el.title}</p>
                <p className="text-base">${el.price}</p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default ItemList;