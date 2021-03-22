import React from 'react';

export type CardProps = {
  children: React.ReactNode;
  title: string;
};

export const Card: React.FC<CardProps> = ({ children, title }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <div className="card-body">
        {children}
      </div>
    </div>
  </div>
);
