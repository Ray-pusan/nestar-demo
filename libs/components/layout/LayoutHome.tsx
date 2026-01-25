import { Stack } from "@mui/material";
import { brown } from "@mui/material/colors";
import Head from "next/head";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Hestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack sx={{ background: "#81c784" }}>Header Home</Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack sx={{ background: brown[300] }}>Footer</Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;
