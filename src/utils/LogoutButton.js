import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";

function LogoutButton({ ...props }) {
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <Button
      style={{ backgroundColor: "white" }}
      onClick={handleLogout}
      startIcon={
        <LogoutIcon
          sx={{
            color: "black",
            transition: "color 0.3s, transform 0.6s",
            marginRight: "30px",
            "&:hover": {
              color: "blue",
              transform: "rotate(720deg)",
            },
          }}
        />
      }
    />
  );
}

export default LogoutButton;
