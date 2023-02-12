import React from 'react';

import { ReactComponent as VisaSvg } from '/src/assets/svg/card1.svg';
import { ReactComponent as MasterCardSvg } from '/src/assets/svg/card2.svg';
import { ReactComponent as ExpressSvg } from '/src/assets/svg/card3.svg';
import { ReactComponent as PaypalSvg } from '/src/assets/svg/card4.svg';
import { ReactComponent as DinersClubSvg } from '/src/assets/svg/card5.svg';
import { ReactComponent as DiscoverSvg } from '/src/assets/svg/card6.svg';

import { ReactComponent as FacebookSvg } from '/src/assets/svg/facebook.svg';
import { ReactComponent as InstagramSvg } from '/src/assets/svg/instagram.svg';
import { ReactComponent as GithubSvg } from '/src/assets/svg/github.svg';

const Footer = () => {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content footer-center">
      <div className="grid grid-flow-col gap-4">
        <a
          href="https://zero-base.co.kr/"
          target="_blank"
          className="link link-hover"
        >
          React Shop
        </a>
      </div>
      <ul className="flex">
        <li>
          <VisaSvg />
        </li>
        <li>
          <MasterCardSvg />
        </li>
        <li>
          <ExpressSvg />
        </li>
        <li>
          <PaypalSvg />
        </li>
        <li>
          <DinersClubSvg />
        </li>
        <li>
          <DiscoverSvg />
        </li>
      </ul>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            data-tip="facebook"
            className="tooltip"
          >
            <FacebookSvg />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            data-tip="instagram"
            className="tooltip"
          >
            <InstagramSvg />
          </a>
          <a
            href="https://www.github.com/"
            target="_blank"
            data-tip="Github"
            className="tooltip"
          >
            <GithubSvg />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 Youn JaeWon</p>
      </div>
    </footer>
  );
};

export default Footer;