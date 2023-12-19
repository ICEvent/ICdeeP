import {InternetIdentityProvider, NFIDProvider, signIn} from "@junobuild/core";
import { useContext } from "react";
import { signOut } from "@junobuild/core";
import { AuthContext } from "./Auth";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export const Nav = () => {
  const { setBusy } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  const login = async (signIn) => {
    setBusy(true);

    try {
      await signIn();
    } catch (err) {
      console.error(err);
    }

    setBusy(false);
  };

  const signInII = async () =>
    login(async () =>
      signIn({
        provider: new InternetIdentityProvider({
          domain: "ic0.app",
        }),
      })
    );

  const signInNFID = async () =>
    login(async () =>
      signIn({
        provider: new NFIDProvider({
          appName: "CoinFacts",
          logoUrl:
            "https://y7m4b-fiaaa-aaaal-acgna-cai.raw.icp0.io/logo512.png",
        }),
      })
    );

  return (
<AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Coin Facts
      </Typography>
      {user == null ? <Button color="inherit" onClick={signInII}>Login</Button> :
      <Button color="inherit" onClick={signOut}>Logout</Button>}
    </Toolbar>
  </AppBar>
  );
};
