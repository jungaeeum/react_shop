import './index.css';
import './assets/css/style.css';
import './assets/css/tailwind.css';

import React, { Suspense, useEffect, useRef } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { getProductsApi } from './api/products';

import Drawer from './components/common/Drawer';
import LoadingSpinner from './components/common/LoadingSpinner';
import Footer from './components/Footer';
import Header from './components/Header';
import { ScrollToTop } from './lib/helpers';
import { productValueFilter } from './module/ProductModule';

const Digital = React.lazy(() => import('./page/DigitalPage'));
const MainPage = React.lazy(() => import('./page/MainPage'));
const CartPage = React.lazy(() => import('./page/CartPage'));
const ErrorPage = React.lazy(() => import('./page/ErrorPage'));
const FashionPage = React.lazy(() => import('./page/FashionPage'));
const AccessoryPage = React.lazy(() => import('./page/AccessoryPage'));
const DetailProductPage = React.lazy(() => import('./page/DetailProductPage'));

function App() {
  const setProduct = useSetRecoilState(productValueFilter);
  const $hamburger = useRef<HTMLInputElement>(null);
  const closeOverlay = () => {
    $hamburger?.current?.click();
  };

  const getProductAll = async () => {
    const response = await getProductsApi();
    setProduct(response.data);
  };

  useEffect(() => {
    // 카테고리 페이지 새로고침시 전역데이터 Reset으로 인한 데이터 재요청

    // 문제점 : 모든 페이지 마다 데이터 재요청 로직 반복
    // 해결 : 최상위 컴포넌트에서 렌더링 해줌으로서 해결

    // 생각해 볼 것 : 데이터 변경이 일어난 후 관련된 하위 컴포넌트 재 렌더링 문제점
    // 결론 : 새로고침 후 첫 렌더링 되기 때문에 불필요한 렌더링 없음 totalRender 2번.
    // -> firstRender Data : undefined, secondRender Data : Success

    // 문제점? : 비동기 통신으로 loading 일 때의 로직 작성해야 함. 안그러면 Data undefined Error
    // -> Props로 관리 할 순 없나 ? 현재 Depth는 깊지 않기 때문에 가능은 함. 하지만  Prop Drilling을 줄이기 위해 Global State를 사용하는게 의미가 없어짐.
    // 결론 : App Component에 API 호출 후 각 페이지 컴포넌트마다 Data false일 떄 Loaind Component 반환

    getProductAll();
  }, []);

  return (
    <>
      <ScrollToTop />
      <input type="checkbox" id="side-menu" className="drawer-toggle" />
      <section className="drawer-content">
        <Header />
        <section className="main pt-16">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/fashion" element={<FashionPage />} />
              <Route path="/accessory" element={<AccessoryPage />} />
              <Route path="/digital" element={<Digital />} />
              <Route path="/product/:id" element={<DetailProductPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </section>
        <Footer />
      </section>
      <Drawer closeOverlay={closeOverlay} />
    </>
  );
}

export default App;