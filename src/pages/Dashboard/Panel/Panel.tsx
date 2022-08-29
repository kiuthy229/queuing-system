import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { ReactComponent as Calendar1Ic } from '../../../Assets/calendar1.svg';
import { ReactComponent as Calendar2Ic } from '../../../Assets/calendar2.svg';
import { ReactComponent as WaitIc } from '../../../Assets/wait.svg';
import { ReactComponent as PassingIc } from '../../../Assets/passing.svg';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import './panel.scss';
import StatsPanel from './StatsPanel';
import arrow from '../../../images/arrow.png';
const selectOptions = ['Ngày', 'Tháng', 'Năm'];


const activeStatuses = [
    'Ngày',
    'Tuần',
    'Tháng'
  ];
const Counter = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  const data = {
    labels: [1, 5, 15, 20, 25, 30],
    drawActiveElementsOnTop: false,
    datasets: [
      {
        label: '',
        data: [
          25.0, 32.4, 22.2, 39.4, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1,
        ],
        fill: true,
        lineTension: 0.4,
        backgroundColor: 'rgba(206, 221, 255, 0.4)',
        borderColor: '#5185F7',
        borderWidth: 1,
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  const [activeStatus, setActiveStatus] = useState<string>("");
  const handleChangeActiveStatus = (event: SelectChangeEvent<typeof activeStatus>) => {
    setActiveStatus(event.target.value as string);
    };
  return (
    <div className='app__layout-dashboard__counter'>
      <div className='app__layout-dashboard__counter__container'>
        <div className='counter-label'>Biểu đồ cấp số</div>
        <div className='counter-cards'>
          <div className='counter-cards__card'>
            <div className='row'>
              <div className='image blue'>
                {/* <Calendar1Ic /> */}
              </div>
              <div className='label'>Số thứ tự đã cấp</div>
            </div>
            <div className='row'>
              <div className='count'>4.221</div>
              <div className='diff raise'>
                <img src={arrow}/>
                32,41%
              </div>
            </div>
          </div>
          <div className='counter-cards__card'>
            <div className='row'>
              <div className='image green'>
                {/* <Calendar2Ic /> */}
              </div>
              <div className='label'>Số thứ tự đã cấp</div>
            </div>
            <div className='row'>
              <div className='count'>3.721</div>

              <div className='diff drop'>
                <img src={arrow}/>
                32,41%
              </div>
            </div>
          </div>
          <div className='counter-cards__card'>
            <div className='row'>
              <div className='image orange'>
                {/* <WaitIc /> */}
              </div>
              <div className='label'>Số thứ tự đã cấp</div>
            </div>
            <div className='row'>
              <div className='count'>468</div>
              <div className='diff drop'>
                <img src={arrow}/>
                32,41%
              </div>
            </div>
          </div>
          <div className='counter-cards__card'>
            <div className='row'>
              <div className='image red'>
                {/* <PassingIc /> */}
              </div>
              <div className='label'>Số thứ tự đã cấp</div>
            </div>
            <div className='row'>
              <div className='count'>32</div>
              <div className='diff raise'>
                <img src={arrow}/>
                32,41%
              </div>
            </div>
          </div>
        </div>
        <div className='counter-chart'>
              <div className='view-mode'>
                <div>
                  <span>Xem theo</span>
                  <Select
                            sx={{
                                border: "none",
                                borderRadius: "8px",
                                "& .MuiSvgIcon-root": {
                                    color: "orange",
                                },
                            }}
                            displayEmpty
                            value={activeStatus}
                            onChange={handleChangeActiveStatus}
                            input={<OutlinedInput />}
                            MenuProps={{
                                PaperProps: {
                                  sx: {
                                    '& .MuiMenuItem-root:hover': {
                                            bgcolor: '#FFF2E7',
                                    },
                                  },
                                },
                            }}
                            renderValue={(selected) => {
                                return selected;
                            }}
                            >
                            {activeStatuses.map((status) => (
                                <MenuItem
                                key={status}
                                value={status}
                                >
                                {status}
                                </MenuItem>
                            ))}
                  </Select>
                </div>
                
                <div>
                  <Line data={data} options={options} />
                </div>

              </div>
        </div>
      </div>
    </div>
  );
};

const change = (newValue: string) => {
  console.log(newValue);
};

const Panel = () => {
  return (
    <div className='app__layout-dashboard'>
      <Counter />
      <StatsPanel />
    </div>
  );
};

export default Panel;