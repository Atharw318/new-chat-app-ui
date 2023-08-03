import { styled, alpha } from "@mui/material/styles";


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.paper, 1),
    marginRight: theme.spacing,
    marginLeft: 0,
    width: "100%",
  }));

  export default Search