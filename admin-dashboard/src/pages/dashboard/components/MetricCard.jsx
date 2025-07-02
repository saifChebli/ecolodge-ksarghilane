import React from 'react';
import Icon from '../../../ui/Icon';

const MetricCard = ({ title, value, icon, color }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'success':
        return 'bg-green-200 text-green-700 border-green-200';
      case 'warning':
        return 'bg-warning-50 text-warning-700 border-warning-200';
      case 'error':
        return 'bg-error-50 text-error-700 border-error-200';
      case 'accent':
        return 'bg-accent-50 text-accent-700 border-accent-200';
      default:
        return 'bg-primary-50 text-primary-700 border-primary-200';
    }
  };

  return (
    <div className=" rounded-lg border border-gray-300 p-6 shadow-lg hover:shadow-xl transition-smooth">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-text-secondary mb-1">{title}</p>
          <p className="text-2xl font-bold text-text-primary mb-2">{value}</p>
        
        </div>
        <div className='p-3 rounded-lg border bg-[#EFF6FF] border-[#bbd3f3] text-[#1D4ED8]'>
          <Icon name={icon} size={24} />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;