/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import CardMedia from '@material-ui/core/CardMedia';
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/techIcons.js";

import ETH from "assets/img/blockchains/ethereum.png";
import SUBSTRATE from "assets/img/blockchains/substrate-1.png";
import WASM from "assets/img/blockchains/webassembly-1.png";
import RUST from "assets/img/blockchains/rust-1.png";
import REACT from "assets/img/blockchains/react.png";
import ELIXIR from "assets/img/blockchains/elixir.png";
import BTC from "assets/img/blockchains/BTC.png";
import BNB from "assets/img/blockchains/BNB.png";



const useStyles = makeStyles(styles);

export default function TechIcons(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}
      >
        <Tooltip
          id="instagram-twitter"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}

        >
          <Button
            href=""
            target="_blank"
            color="transparent"
            variant="outlined"
            className={classes.navLink}
            // style={{ borderRadius: "50% !important" }}
          >
            <img src={ETH} alt="..." className={classes.socialIcons} style={{ width: "50px", backgroundColor: "#ffffff", borderRadius: "50%" }} />

          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href=""
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <img src={SUBSTRATE} alt="..." className={classes.socialIcons} style={{ width: "50px", backgroundColor: "#ffffff", borderRadius: "50%"  }} />

          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="wasm"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href=""
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <img src={WASM} alt="..." className={classes.socialIcons} style={{ width: "50px" }} />

          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="rust"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href=""
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <img src={RUST} alt="..." className={classes.socialIcons} style={{ width: "50px", backgroundColor: "#ffffff", borderRadius: "50%"  }} />

          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="rust"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href=""
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <img src={REACT} alt="..." className={classes.socialIcons} style={{ width: "50px"  }} />

          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="rust"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href=""
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <img src={ELIXIR} alt="..." className={classes.socialIcons} style={{ width: "50px", backgroundColor: "#ffffff", borderRadius: "50%"  }} />

          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="rust"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href=""
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <img src={BNB} alt="..." className={classes.socialIcons} style={{ width: "50px" }} />

          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="rust"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href=""
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <img src={BTC} alt="..." className={classes.socialIcons} style={{ width: "50px" }} />

          </Button>
        </Tooltip>
      </ListItem>


    </List>
  );
}
