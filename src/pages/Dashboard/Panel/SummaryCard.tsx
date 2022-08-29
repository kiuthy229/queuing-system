import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
// import { ReactComponent as ServiceIc } from '../../../../Assets/service.svg';
// import { ReactComponent as TiviIc } from '../../../../Assets/tivi.svg';
import './summarycard.scss';
import 'react-circular-progressbar/dist/styles.css';

const SummaryCard: React.FC<{
  type: string;
  percentage: number;
  total: number;
  active?: number;
  inactive?: number;
  ignore?: number;
}> = ({ type, percentage, total, active, inactive, ignore }) => {
  return (
    <div className='app__summary-card'>
      <div className='rounded-graph'>
        <CircularProgressbarWithChildren
          styles={buildStyles({
            pathColor: '#FF7506',
            textColor: '#535261',
            textSize: 22,
            strokeLinecap: 1,
            trailColor: '#EAEAEC',
          })}
          value={percentage}
          maxValue={100}
          // text={`${percentage}%`}
        >
          <div className='inner' style={{ height: 45, width: 45 }}>
            <CircularProgressbarWithChildren
              styles={buildStyles({
                pathColor: '#7E7D88',
                textColor: '#535261',
                textSize: 22,
                trailColor: '#EAEAEC',
              })}
              value={5}
              maxValue={100}
              text={`${`5`}%`}
            />
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className='hight-light-stats'>
        <div className='hight-light-stats__number'>{total}</div>
        <div className='hight-light-stats__type'>
          <div className='type-image'>
            {/* {type === 'device' && <TiviIc />} */}
            {/* {type === 'service' && <ServiceIc />} */}
            {/* {type === 'numberProvide' && <ServiceIc />} */}
          </div>
          <div className='type-name'>
            {type === 'device' && 'Thiết bị'}
            {type === 'service' && 'Dịch vụ'}
            {type === 'numberProvide' && 'Cấp số'}
          </div>
        </div>
      </div>
      <div className='status orange'>
        {typeof active === 'number' && (
          <div className='status__item acitve orange'>
            <span />
            <span>Đang hoạt động</span>
            <span>{active}</span>
          </div>
        )}

        {typeof inactive === 'number' && (
          <div className='status__item inactive blue'>
            <span />
            <span>Ngừng hoạt động</span>
            <span>{inactive}</span>
          </div>
        )}

        {typeof ignore === 'number' && (
          <div className='status__item inactive green'>
            <span />
            <span>Bỏ qua</span>
            <span>{ignore}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryCard;