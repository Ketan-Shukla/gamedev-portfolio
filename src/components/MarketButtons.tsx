import React from 'react';
import Image from 'next/image';
import { StoreButtons } from '../data/data';

interface MarketButtonsProps {
  marketplaces: string[];
}

const MarketButtons: React.FC<MarketButtonsProps> = ({ marketplaces }) => {
  return (
    <div className="market-buttons mt-4">
      {marketplaces.includes('ios') && (
        <a href="ios-link" className="mr-2">
          <Image
            src={StoreButtons.appstore}
            alt="iOS"
            width={150} 
            height={50}
            className="store-button"
          />
        </a>
      )}
      {marketplaces.includes('android') && (
        <a href="android-link" className="mr-2">
          <Image
            src={StoreButtons.playstore}
            alt="Android"
            width={150}
            height={50}
            className="store-button"
          />
        </a>
      )}
      {marketplaces.includes('facebook') && (
        <a href="facebook-link" className="mr-2">
          <Image
            src={StoreButtons.fbplay}
            alt="Facebook"
            width={150}
            height={50}
            className="store-button"
          />
        </a>
      )}
    </div>
  );
};

export default MarketButtons;
