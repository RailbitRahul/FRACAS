/* eslint-disable */
import PropTypes from 'prop-types';

// material-ui
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

// ===========================|| HOVER SOCIAL CARD ||=========================== //

const HoverKavachCard = ({ primary, secondary, iconPrimary, color }) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary /> : null;

  return (
    <Card
      elevation={0}
      sx={{
        background: color,
        position: 'relative',
        color: '#fff',
        '&:hover svg': {
          opacity: 1,
          transform: 'scale(1.1)'
        }
      }}
    >
      <CardContent>
        <Box
          sx={{
            position: 'absolute',
            right: 15,
            top: 25,
            color: '#fff',
            '& svg': {
              width: 36,
              height: 36,
              opacity: 0.5,
              transition: 'all .3s ease-in-out'
            }
          }}
        >
          {/* {primaryIcon} */}
          <img src={iconPrimary} width="50" height="30" alt="Train"/>
        </Box>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h3" color="inherit">
              {secondary}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="inherit">
              {primary}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

HoverKavachCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string
};

export default HoverKavachCard;
