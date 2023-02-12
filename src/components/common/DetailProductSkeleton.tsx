import React from 'react';

const DetailProductSkeleton = () => {
  return (
    <div>
      <div className="h-4 rounded-md bg-gray-200 max-w-[200px] mb-10"></div>
      <div className="flex h-96 rounded-2xl bg-gray-200 overflow-hidden"></div>
    </div>
  );
};

export default DetailProductSkeleton;