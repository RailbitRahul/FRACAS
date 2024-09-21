/* eslint-disable */
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

// material-ui
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import IncomeAreaChart from 'sections/dashboard/default/IncomeAreaChart';
import MonthlyBarChart from 'sections/dashboard/default/MonthlyBarChart';
import ReportAreaChart from 'sections/dashboard/default/ReportAreaChart';
import SalesChart from 'sections/dashboard/SalesChart';
import OrdersTable from 'sections/dashboard/default/OrdersTable';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';

import HoverKavachCard from 'sections/dashboard/kavach/HoverKavachCard';
import KavachChart from 'sections/dashboard/kavach/KavachChart';
import KavachKmChart from 'sections/dashboard/kavach/KavachKmChart';

import TrainIcon from 'assets/images/loco.png';
import StationIcon from 'assets/images/railway-station.png';
import RouteIcon from 'assets/images/route.png';
import CounterIcon from 'assets/images/counter.png';
import KmIcon from 'assets/images/km.png';
import ClockIcon from 'assets/images/digital-clock.png';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// sales report status
const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const KavachDashboard = () => {
  const [value, setValue] = useState('today');
  const [slot, setSlot] = useState('week');
  const theme = useTheme();

  return (
    <Grid container rowSpacing={2.5} columnSpacing={1.75}>
      
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Kavach Dashboard</Typography>
      </Grid>

      <Grid item xs={12} lg={3} sm={6}>
        <HoverKavachCard primary="Total Kavach Loco" secondary="130 +" iconPrimary={TrainIcon} color={theme.palette.primary.main} />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <HoverKavachCard primary="Total Kavach Station" secondary="138 +" iconPrimary={StationIcon} color={theme.palette.primary.light} />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <HoverKavachCard primary="Total Route KMs" secondary="1465 +" iconPrimary={RouteIcon} color={theme.palette.info.main} />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <HoverKavachCard primary="Total No. of Trips" secondary="4282 +" iconPrimary={CounterIcon} color={theme.palette.primary.light} />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <HoverKavachCard primary="Total KMs Run" secondary="753301 +" iconPrimary={KmIcon} color={theme.palette.secondary.light} />
      </Grid>
      <Grid item xs={12} lg={3} sm={6}>
        <HoverKavachCard primary="Total Running Hours" secondary="28921 +" iconPrimary={ClockIcon} color={theme.palette.primary.dark} />
      </Grid>

      <Grid item xs={12} lg={7} sm={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Kavach Data</Typography>
          </Grid>
        </Grid>
        <KavachChart />
      </Grid>

      <Grid item xs={12} lg={5} sm={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Kavach KMs Run</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <KavachKmChart />
      </Grid>
      
    </Grid>
  );
};

export default KavachDashboard;
