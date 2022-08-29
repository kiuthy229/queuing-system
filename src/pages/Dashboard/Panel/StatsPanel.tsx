import React from 'react';
import SummaryCard from './SummaryCard';
import './statspanel.scss';
import Calendar from 'react-calendar';

interface summary {
  type: string;
  percentage: number;
  total: number;
  active?: number;
  inactive?: number;
  ignore?: number;
}

const summaryData: summary[] = [
  {
    type: 'device',
    percentage: 90,
    total: 4221,
    active: 3799,
    inactive: 422,
  },
  {
    type: 'service',
    percentage: 90,
    total: 4221,
    active: 3799,
    inactive: 422,
  },
  {
    type: 'numberProvide',
    percentage: 90,
    total: 4221,
    active: 3799,
    inactive: 422,
    ignore: 123,
  },
];

const StatsPanel: React.FC = () => {
  return (
    <div className='dashboard__stats'>
      <div className='dashboard__stats__container'>
        <div className='label'>Tổng quan</div>
        <div className='summary'>
          {summaryData.map((summary, index) => (
            <SummaryCard
              key={index}
              type={summary.type}
              total={summary.total}
              percentage={summary.percentage}
              active={summary.active}
              inactive={summary.inactive}
              ignore={summary.ignore}
            />
          ))}
        </div>
        <div className='calendar'>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;