import { atom, selector, selectorFamily } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { productOriginalListAtom } from './ProductModule';

interface CartInfo {
  id: number;
  count: number;
}

interface CartState {
  items: Record<string | number, CartInfo>;
  [key: number]: any
}

const { persistAtom } = recoilPersist();

export const cartProductAtom = atom({
  key: 'LIST_CART_PRODUCT',
  default: {} as CartState,
  effects_UNSTABLE: [persistAtom],
});

export const cartProductArrayToJson = selector({
  key: 'ARRAY_TO_JSON_PRODUCT',
  get: ({ get }) => {
    const jsonProduct = get(cartProductAtom);
    const originalProduct = get(productOriginalListAtom);

    const countPushFilterdData = originalProduct
      .filter((item) => item?.id == jsonProduct[item?.id]?.id)
      .map((item: any) =>
        item.id == jsonProduct[item.id].id
          ? {
              ...item,
              count: jsonProduct[item.id].count,
              totalPrice: Math.round(jsonProduct[item.id].count * item.price),
            }
          : '',
      );

    const totalPrice = Math.round(
      countPushFilterdData.reduce((acc, cur) => acc + cur.count * cur.price, 0),
    );

    return { data: countPushFilterdData, totalPrice };
  },
});

// {1: {id:1, count:2}, 2:{id:2, count:3}} return 5
export const totalCartCount = selector({
  key: 'GET_TOTAL_COUNT_CART',
  get: ({ get }) => {
    const originalData = get(cartProductAtom);
    let totalCount = 0;
    for (let item in originalData) {
      totalCount += originalData[item]['count'];
    }

    return totalCount;
  },
});

// (id, type: plus, minus) => {id: {id: id, count+1 or count-1}}
export const handleCountCart = selector({
  key: 'HANDLE_COUNT_CART_PRODUCT',
  get: ({ get }) => get(cartProductAtom),
  set: ({ get, set }, newVal: any) => {
    const prevData = get(cartProductAtom);
    const type = newVal.type === 'plus' ? 1 : -1;
    const newData = {
      ...prevData,
      [newVal.id]: {
        id: newVal.id,
        count: prevData[newVal.id] ? prevData[newVal.id]['count'] + type : 1,
      },
    };

    if (newData[newVal.id]['count'] === 0) delete newData[newVal.id];

    set(cartProductAtom, newData);
  },
});