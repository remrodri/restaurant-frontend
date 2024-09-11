import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return <Box>
    MAIN PAGE
    <Outlet/>
  </Box>;
}
export default MainLayout;