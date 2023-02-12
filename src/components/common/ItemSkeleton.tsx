import React from 'react';

interface IProps {
  count: number;
}

const ItemSkeleton = ({ count }: IProps) => {
  return (
    <>
      {new Array(count).fill(0).map((_, idx) => (
        <div
          key={idx}
          className=" dark:border-gray-800 card-compact lg:card-normal"
        >
          <div className="flex h-80 rounded-2xl bg-gray-200 overflow-hidden"></div>
          <div>
            <div className="h-5 rounded-md bg-gray-200 max-w-[440px] mt-8 mb-4"></div>
            <div className="h-5 rounded-md bg-gray-200 max-w-[460px] w-[150px] mb-4"></div>
            <div className="h-5 rounded-md bg-gray-200 max-w-[360px] w-[50px]"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemSkeleton;