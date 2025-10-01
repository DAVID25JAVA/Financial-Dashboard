import { useRef, useEffect } from "react";
import * as Chart from 'chart.js/auto';


const MonthlyMISChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart.Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Equity Funds',
            data: [320, 345, 330, 380, 395, 410, 425, 445, 468, 490, 515, 542],
            borderColor: 'rgba(59, 130, 246, 1)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
          }, {
            label: 'Debt Funds',
            data: [280, 285, 295, 290, 310, 315, 325, 330, 345, 355, 370, 385],
            borderColor: 'rgba(16, 185, 129, 1)',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
          }, {
            label: 'Hybrid Funds',
            data: [200, 215, 225, 240, 255, 268, 280, 295, 310, 328, 345, 362],
            borderColor: 'rgba(249, 115, 22, 1)',
            backgroundColor: 'rgba(249, 115, 22, 0.1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
          }, {
            label: 'Index Funds',
            data: [150, 165, 175, 190, 205, 218, 235, 252, 268, 285, 305, 325],
            borderColor: 'rgba(139, 92, 246, 1)',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
          }, {
            label: 'ELSS',
            data: [180, 185, 195, 210, 225, 238, 250, 265, 280, 295, 312, 330],
            borderColor: 'rgba(236, 72, 153, 1)',
            backgroundColor: 'rgba(236, 72, 153, 0.1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Monthly MIS - Fund Performance (AUM in ₹Cr)',
              font: { size: 16, weight: 'bold' }
            }
          },
          scales: {
            y: {
              title: {
                display: true,
                text: 'Assets Under Management (₹ Crores)'
              },
              ticks: {
                callback: (value) => '₹' + value + 'Cr'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Month'
              }
            }
          },
          interaction: {
            mode: 'index',
            intersect: false
          }
        }
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="h-96">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};


export default MonthlyMISChart
