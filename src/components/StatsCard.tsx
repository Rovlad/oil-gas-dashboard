import React from 'react';

interface StatsCardProps {
  title: string;
  value: number;
  icon?: React.ReactNode;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'gray';
}

const getColorClasses = (color: string = 'blue') => {
  switch (color) {
    case 'green':
      return 'bg-success-50 border-success-200 text-success-700';
    case 'yellow':
      return 'bg-warning-50 border-warning-200 text-warning-700';
    case 'red':
      return 'bg-danger-50 border-danger-200 text-danger-700';
    case 'gray':
      return 'bg-gray-50 border-gray-200 text-gray-700';
    default:
      return 'bg-primary-50 border-primary-200 text-primary-700';
  }
};

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color = 'blue' }) => {
  return (
    <div className={`p-6 rounded-lg border-2 ${getColorClasses(color)}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-75">{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
        {icon && (
          <div className="text-2xl opacity-75">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}; 