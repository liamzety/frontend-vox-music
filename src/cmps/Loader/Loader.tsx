import React from 'react';
import loader from '../../assets/img/loader.gif';
export const Loader: React.FC = () => {
  return (
    <div className="loader">
      <img src={loader} alt="" />
    </div>
  );
};
