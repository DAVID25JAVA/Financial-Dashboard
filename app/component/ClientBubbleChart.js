import { useRef, useEffect } from "react";
import * as Chart from 'chart.js/auto';


 const ClientsBubbleChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const data = {
        labels: [
          'High Net Worth',
          'Retail Investors',
          'Corporate Clients',
          'NRI Clients',
          'Institutional'
        ],
        datasets: [{
          label: 'Client Distribution',
          data: [45, 65, 28, 18, 34],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(255, 205, 86, 0.7)',
            'rgba(201, 203, 207, 0.7)',
            'rgba(54, 162, 235, 0.7)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ],
          borderWidth: 2
        }]
      };

      chartInstanceRef.current = new Chart.Chart(chartRef.current, {
        type: 'polarArea',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Client Portfolio Distribution',
              font: { size: 16, weight: 'bold' }
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label || '';
                  const value = context.parsed.r || 0;
                  return `${label}: ${value} clients`;
                }
              }
            }
          },
          scales: {
            r: {
              ticks: {
                backdropColor: 'rgba(255, 255, 255, 0)'
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

 export default ClientsBubbleChart
