import { StatusType } from '../types';
import { clsx } from 'clsx';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const getStatusStyles = (status: StatusType): string => {
  switch (status) {
    case 'Fit for Service':
    case 'Healthy':
    case 'Fit until COP':
      return 'bg-success-100 text-success-600 border-success-200';
    case 'Partially':
    case 'Compromised':
    case 'Will Partially':
      return 'bg-warning-100 text-warning-600 border-warning-200';
    case 'Not Fit':
    case 'Not functional':
    case 'Will Not Remain Fit':
      return 'bg-danger-100 text-danger-600 border-danger-200';
    case 'Not Defined':
      return 'bg-gray-100 text-gray-600 border-gray-200';
    default:
      return 'bg-gray-100 text-gray-600 border-gray-200';
  }
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        getStatusStyles(status),
        className
      )}
    >
      {status}
    </span>
  );
}; 