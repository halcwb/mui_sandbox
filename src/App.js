import "./styles.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const element = <h1>Hello, world!</h1>;
const MyText = (props) => {
  return (
    <Typography>
      <Box
        backgroundColor={grey[200]}
        color="GrayText"
        variant="body1"
        display="inline"
      >
        <strong>{props.Value}</strong>
      </Box>
      <Box display="inline"> </Box>
      <Box variant="body2" display="inline">
        mg
      </Box>
    </Typography>
  );
};

export default function App() {
  let [state, setState] = React.useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>And there it is: hello world</h3>
      <div>{element}</div>
      <MyText Value={state}></MyText>
      <React.Fragment>
        <Button
          onClick={() => {
            setState(state + 1);
          }}
        >
          My button
        </Button>
      </React.Fragment>
    </div>
  );
}
