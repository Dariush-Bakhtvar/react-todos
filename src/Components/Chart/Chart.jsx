import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import style from './Chart.module.scss';
ChartJS.register(ArcElement, Tooltip, Legend, Title);
const Data = {
  type: 'Pie',
  labels: ['همه کارها', 'کسب و کار', 'شخصی', 'خانوادگی', 'کاری'],
  datasets: [
    {
      label: 'Task summeray',
      backgroundColor: [
        '#fbc531',
        '#00c7c7',
        '#F24C4C',
        '#844685',
        '#05ff97'
      ],
      hoverBackgroundColor: [
        '#7e6521',
        '#037272',
        '#702525',
        '#562d56',
        '#1c6a4a'
      ],
      data: [1, 1, 1, 1, 1]
    }
  ]
}
const Chart = () => {
  return (
    <div className={style.ChartWrapper}>
      <Pie
        data={Data}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'شرح وظایف ایجاد شده',
              align: 'center',
              color: '#dddcda',
              font: {
                size: window.innerWidth > 720 ? 22 : 16,
                family: "'Shabnam', sans-serif",
              },
            },
            legend: {
              display: true,
              position: 'left',
              labels: {
                color: '#dddcda',
                font: {
                  size: window.innerWidth > 720 ? 16 : 10,
                  family: "'Shabnam', sans-serif",
                },
              }
            },
          }
        }}
      />
    </div>
  )
}

export default Chart
