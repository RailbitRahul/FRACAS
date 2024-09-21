/* eslint-disable */
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
    <Typography variant="subtitle1" color="secondary" component="span">
        ©2024 - Developed by{' '}
        <Typography component={Link} variant="subtitle1" href="https://railbit.in/" target="_blank" underline="hover">
          Railbit Engineers Pvt. Ltd.
        </Typography>
      </Typography>
    {/* <Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">
      <Link component={RouterLink} to="#" target="_blank" variant="caption" color="textPrimary">
        About us
      </Link>
      <Link component={RouterLink} to="#" target="_blank" variant="caption" color="textPrimary">
        Privacy
      </Link>
      <Link component={RouterLink} to="#" target="_blank" variant="caption" color="textPrimary">
        Terms
      </Link>
    </Stack> */}
  </Stack>
);

export default Footer;
