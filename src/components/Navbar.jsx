import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    justifyContent="center"
    sx={{
      backgroundColor: "#000",
      position: "sticky",
      top: 0,
      left: 0,
      // justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: 18,
        left: 12,
      }}
    >
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
