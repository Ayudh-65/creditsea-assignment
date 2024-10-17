import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Button } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "white",
  color: "black",
}));

export default function AdminLayout() {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, color: "#0A512F", fontWeight: "bold" }}
            >
              Credit App
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button sx={{ color: "#268700" }} startIcon={<HomeIcon />}>
              Home
            </Button>
            <Button sx={{ color: "#0A512F" }}>Payments</Button>
            <Button
              sx={{ color: "#0A512F" }} // Green color
            >
              Budget
            </Button>
            <Button
              sx={{ color: "#0A512F" }} // Green color
            >
              Card
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <MessageIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, padding: theme.spacing(3) }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
