/* eslint-disable */
import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Checkbox, FormControl, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';

// third-party
import ReactApexChart from 'react-apexcharts';

// project import
import useConfig from 'hooks/useConfig';
import MainCard from 'components/MainCard';

// chart options
const areaChartOptions = {
  chart: {
    height: 340,
    type: 'line',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 1.5
  },
  grid: {
    strokeDashArray: 4
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2019-05-19T00:00:00.000Z',
      '2020-06-19T00:00:00.000Z',
      '2021-07-19T01:30:00.000Z',
      '2022-08-19T02:30:00.000Z',
      '2023-09-19T03:30:00.000Z',
      '2024-10-19T04:30:00.000Z'
    ],
    labels: {
      format: 'yyyy'
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  tooltip: {
    x: {
      format: 'yyyy'
    }
  }
};

// ==============================|| REPORT AREA CHART ||============================== //

const KavachKmChart = () => {
  const theme = useTheme();
  const { mode } = useConfig();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.warning.main],
      xaxis: {
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary, secondary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      tooltip: {
        theme: mode === 'dark' ? 'dark' : 'light'
      },
      legend: {
        labels: {
          colors: 'grey.500'
        }
      }
    }));
  }, [mode, primary, secondary, line, theme]);

  const [series] = useState([
    {
      name: 'Km',
      data: [88320, 58004, 94570, 148154, 176001, 188252]
    }
  ]);

  return (
    <MainCard sx={{ mt: 1 }} content={false}>
      <Box sx={{ p: 2.5, pb: 0 }}>
        <div id="chart">
          <ReactApexChart options={options} series={series} type="line" height={290} />
        </div>
      </Box>
    </MainCard>
  );
};

export default KavachKmChart;
