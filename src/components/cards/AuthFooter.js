// material-ui
import { Container, Link, Stack, Typography, useMediaQuery } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        justifyContent={matchDownSM ? 'center' : 'center'}
        spacing={2}
        textAlign={matchDownSM ? 'center' : 'inherit'}
      >
        <Typography variant="subtitle1" color="secondary" component="span">
          ©2024 - Developed by{' '}
          <Typography component={Link} variant="subtitle1" href="https://railbit.in/" target="_blank" underline="hover">
            Railbit Engineers Pvt. Ltd.
          </Typography>
        </Typography>

        {/* <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3} textAlign={matchDownSM ? 'center' : 'inherit'}>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://codedthemes.com"
            target="_blank"
            underline="hover"
          >
            Terms and Conditions
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://codedthemes.com"
            target="_blank"
            underline="hover"
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://codedthemes.com"
            target="_blank"
            underline="hover"
          >
            CA Privacy Notice
          </Typography>
        </Stack> */}
      </Stack>
    </Container>
  );
};

export default AuthFooter;
