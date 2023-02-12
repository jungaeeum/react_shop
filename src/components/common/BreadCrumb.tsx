import React from 'react';

interface props {
  name: string | undefined;
  title: string | undefined;
}

const BreadCrumb = ({ name, title }: props) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>{name}</li>
        <li>{title}</li>
      </ul>
    </div>
  );
};

export default BreadCrumb;