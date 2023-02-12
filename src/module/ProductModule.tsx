import { atom, selector, selectorFamily } from 'recoil';
import { IProduct } from '../type/products';

interface CategoryProduct {
  digital: IProduct[];
  accessory: IProduct[];
  fashion: IProduct[];
  [key: string]: any;
}

export interface ProductIntoName extends IProduct {
  name: string;
}

export const productOriginalListAtom = atom<IProduct[]>({
  key: 'ORIGINAL_LIST_PRODUCT',
  default: [],
});

export const productListAtom = atom<CategoryProduct>({
  key: 'CATEGORY_LIST_PRODUCT',
  default: {
    digital: [],
    accessory: [],
    fashion: [],
  },
});

export const productOnceInfo = selectorFamily({
  key: 'ONCE_PRODUCT',
  get:
    (id) =>
    ({ get }) => {
      const originalData = get(productOriginalListAtom);
      const filterdData: IProduct = originalData.find((item) => item.id == id)!;

      return filterdData;
    },
});

export const productValueFilter = selector({
  key: 'FILTER_LIST_PRODUCT',
  get: ({ get }) => {
    const product = get(productListAtom);

    const digital = product.digital;
    const accessory = product.accessory;
    const fashion = product.fashion;

    return { digital, accessory, fashion };
  },
  set: ({ get, set }, newVal) => {
    if (!Array.isArray(newVal)) return;
    // [...20 Data] => {fashion: [], digital: [], accessory: []} 카테고리별 변환
    const data = [...newVal];
    const filterdData = data.reduce((acc: any, cur: IProduct) => {
      switch (cur.category) {
        case 'electronics':
          acc.digital = acc.digital ? [...acc.digital, cur] : [cur];
          break;
        case 'jewelery':
          acc.accessory = acc.accessory ? [...acc.accessory, cur] : [cur];
          break;
        case `men's clothing`:
        case `women's clothing`:
          acc.fashion = acc.fashion ? [...acc.fashion, cur] : [cur];
          break;
        default:
          break;
      }
      return acc;
    }, {});

    set(productOriginalListAtom, newVal);
    set(productListAtom, filterdData);
  },
});
