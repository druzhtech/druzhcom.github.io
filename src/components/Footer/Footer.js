import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from "react-redux";
import { Translate } from "react-redux-i18n";

import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

import { getDir } from "../../redux/selectors/i18n";

const useStyles = makeStyles(styles);

function Footer(props) {
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

  useEffect(() => {
    document.dir = props.dir;
  }, [props.dir]);

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="mailto:druzhcom@protonmail.com"
                className={classes.block}
                target="_blank"
                rel="noreferrer"
              >
                druzhcom@protonmail.com
              </a>
            </ListItem>
            {/* <ListItem className={classes.inlineBlock}>
              <a
                href="tel:+79252325524"
                className={classes.block}
                target="_blank"
                rel="noreferrer"
              >
                +7 925 232-55-24
              </a>
            </ListItem> */}
            <ListItem className={classes.inlineBlock}>
              <a
                href="tg://resolve?domain=didexBot"
                className={classes.block}
                target="_blank"
                rel="noreferrer"
              >
                <Translate value="sendByTelegram" />
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
          &copy; {1900 + new Date().getYear()} <Translate value="madeIn" />{" "}
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
              rel="noreferrer"
            >
              Дружининъ
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
  dir: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ dir: getDir(state) });
export default connect(mapStateToProps)(Footer);
