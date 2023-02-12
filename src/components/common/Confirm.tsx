import React from 'react';

type Props = {
  onBuyProduct: () => void;
};

const Confirm = ({ onBuyProduct }: Props) => {
  return (
    <>
      <input id="confirm-modal" type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
          <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
          <div className="modal-action">
            <label
              htmlFor="confirm-modal"
              className="btn btn-primary"
              onClick={onBuyProduct}
            >
              네
            </label>
            <label htmlFor="confirm-modal" className="btn btn-outline">
              아니오
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;