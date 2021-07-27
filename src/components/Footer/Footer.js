/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
             <ListItem className={classes.inlineBlock}>
              <a
                href="mailto:druzhcom@yandex.ru"
                className={classes.block}
                target="_blank"
              >
                druzhcom@yandex.ru
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="tel:+79252325524"
                className={classes.block}
                target="_blank"
              >
                +7 925 232-55-24
              </a>
            </ListItem>
           <ListItem className={classes.inlineBlock}>
              <a
                href="tg://resolve?domain=ilyadruzh"
                className={classes.block}
                target="_blank"
              >
                Написать в Telegram
              </a>
            </ListItem>
            {/*  <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem> */}
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} сделано {" "}
          {/* made with*/}
          {/* <Favorite className={classes.icon} /> by{" "} */} 
          <p
            className="russian navbar-brand-russian js-scroll-trigger"
            href="#p"
            id="pfooter"
          >
            <a
              href="http://druzh.com"
              className={aClasses}
              target="_blank"
              id="p"
            >
              Дружининъ
            </a>{" "}
          </p>

          {/* for a better web. */}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
