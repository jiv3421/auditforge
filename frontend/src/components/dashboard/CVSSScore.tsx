import { Cvss3P1 } from 'ae-cvss-calculator';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';

import { getAuditById } from '@/services/audits';

ChartJS.register(ArcElement, Tooltip, Legend);

const cvssStringToSeverity = (cvssScore: string) => {
  try {
    const cvssVector = new Cvss3P1(cvssScore);
    const score = cvssVector.calculateExactOverallScore();
    if (score >= 9.0) {
      return 'C';
    }
    if (score >= 7.0) {
      return 'H';
    }
    if (score >= 4.0) {
      return 'M';
    }
    if (score >= 0.1) {
      return 'L';
    }
  } catch (error) {
    console.error('Invalid CVSS vector:', error);
  }
  return 'I';
};

const CVSSScore: React.FC = () => {
  const [pieChartData, setPieChartData] = useState({
    labels: ['Critical', 'High', 'Medium', 'Low', 'Informative'],
    datasets: [
      {
        data: [0, 0, 0, 0],
        backgroundColor: ['#FF4136', '#FF851B', '#FFDC00', '#2ECC40'],
        borderColor: ['#FF4136', '#FF851B', '#FFDC00', '#2ECC40'],
        borderWidth: 1,
      },
    ],
  });
  const { auditId } = useParams();
  useEffect(() => {
    getAuditById(auditId)
      .then(audit => {
        setPieChartData({
          labels: ['Critical', 'High', 'Medium', 'Low', 'Informative'],
          datasets: [
            {
              data: [
                audit.datas.findings.filter(
                  finding => cvssStringToSeverity(finding.cvssv3) === 'C',
                ).length,
                audit.datas.findings.filter(
                  finding => cvssStringToSeverity(finding.cvssv3) === 'H',
                ).length,
                audit.datas.findings.filter(
                  finding => cvssStringToSeverity(finding.cvssv3) === 'M',
                ).length,
                audit.datas.findings.filter(
                  finding => cvssStringToSeverity(finding.cvssv3) === 'L',
                ).length,
                audit.datas.findings.filter(
                  finding => cvssStringToSeverity(finding.cvssv3) === 'I',
                ).length,
              ],
              backgroundColor: [
                '#FF4136',
                '#FF851B',
                '#FFDC00',
                '#2ECC40',
                '#00A8FF',
              ],
              borderColor: [
                '#FF4136',
                '#FF851B',
                '#FFDC00',
                '#2ECC40',
                '#00A8FF',
              ],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch(console.error);
  }, [auditId]);

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="chart-container" style={{ height: '400px' }}>
        <Pie data={pieChartData} options={pieChartOptions} />
      </div>
    </div>
  );
};

export default CVSSScore;
