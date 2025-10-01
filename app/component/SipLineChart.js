import { useRef, useEffect } from "react";
import * as Chart from 'chart.js/auto';



const SIPBusinessChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart.Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            type: 'bar',
            label: 'SIP Amount (₹L)',
            data: [45, 52, 48, 65, 59, 72, 68, 75, 82, 88, 95, 102],
            backgroundColor: 'rgba(99, 102, 241, 0.7)',
            borderColor: 'rgba(99, 102, 241, 1)',
            borderWidth: 1,
            yAxisID: 'y'
          }, {
            type: 'line',
            label: 'New SIP Clients',
            data: [120, 145, 132, 178, 165, 195, 188, 210, 225, 242, 268, 285],
            borderColor: 'rgba(236, 72, 153, 1)',
            backgroundColor: 'rgba(236, 72, 153, 0.1)',
            borderWidth: 3,
            tension: 0.4,
            yAxisID: 'y1',
            fill: false
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
              text: 'SIP Business Overview - 2024',
              font: { size: 16, weight: 'bold' }
            }
          },
          scales: {
            y: {
              type: 'linear',
              position: 'left',
              title: {
                display: true,
                text: 'SIP Amount (₹ Lakhs)'
              },
              ticks: {
                callback: (value) => '₹' + value + 'L'
              }
            },
            y1: {
              type: 'linear',
              position: 'right',
              title: {
                display: true,
                text: 'Number of Clients'
              },
              grid: {
                drawOnChartArea: false
              }
            }
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

export default SIPBusinessChart