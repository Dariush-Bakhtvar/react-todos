import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import style from './Chart.module.scss';
import { useTodos } from '../Provider/TodoProvider';
ChartJS.register(ArcElement, Tooltip, Legend, Title);
// Chart Primary confing color and data
const TaskDate = () => {
  const Task = useTodos();
  const Business = Task.filter(task => task.taskType === 'Business').length || 0;
  const Personal = Task.filter(task => task.taskType === 'Personal').length || 0;
  const Family = Task.filter(task => task.taskType === 'Family').length || 0;
  const Work = Task.filter(task => task.taskType === 'Work').length || 0;
  const All = Task.length || 0;
  return {
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
        data: [All, Business, Personal, Family, Work]
      }
    ]
  }

}
const Chart = () => {
  return (
    <div className={style.ChartWrapper}>
      <Pie
        data={TaskDate()}
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
