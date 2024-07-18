import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={NavLink} to={'/'} sx={{flexGrow: 1}}
                      className={'text-white text-decoration-none'}>
            TV Shows
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
