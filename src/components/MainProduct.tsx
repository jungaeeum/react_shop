import React from 'react';
import { useRecoilValue } from 'recoil';
import { productValueFilter } from '../module/ProductModule';
import ItemList from './common/ItemList';
import ItemSkeleton from './common/ItemSkeleton';

const MainProduct = () => {
  const { fashion, accessory, digital } = useRecoilValue(productValueFilter);

  return (
    <>
      <ItemList
        data={fashion}
        slice={4}
        onLoading={<ItemSkeleton count={4} />}
        title={'패션'}
      />
      <ItemList
        data={accessory}
        slice={4}
        onLoading={<ItemSkeleton count={4} />}
        title={'액세서리'}
      />
      <ItemList
        data={digital}
        slice={4}
        onLoading={<ItemSkeleton count={4} />}
        title={'디지털'}
      />
    </>
  );
};

export default MainProduct;