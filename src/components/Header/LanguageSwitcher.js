import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Navbar } from "react-bulma-components";
import { makeStyles } from "@material-ui/core/styles";
import ReactCountryFlag from "react-country-flag";

import { supportedLocales } from "../../config/i18n";
import { setLocaleWithFallback } from "../../redux/actions";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

function LanguageSwitcher(props) {
  const classes = useStyles();

  const handleLanguageLinkClick = (e, code) => {
    e.preventDefault();
    props.setLocaleWithFallback(code);
  };

  return (
    <Navbar.Item dropdown hoverable href="#">
      <Navbar.Dropdown>
        {Object.keys(supportedLocales).map((code) => (
          <Navbar.Item
            href="#"
            key={code}
            active={code === props.locale}
            onClick={(e) => handleLanguageLinkClick(e, code)}
          >
            {code === "en" ? (
              <ReactCountryFlag
                countryCode="GB"
                className={classes.navLink}
                style={{
                  fontSize: "1.5em",
                }}
              />
            ) : (
              <ReactCountryFlag
                countryCode="RU"
                className={classes.navLink}
                style={{
                  fontSize: "1.5em",
                }}
              />
            )}
          </Navbar.Item>
        ))}
      </Navbar.Dropdown>
    </Navbar.Item>
  );
}
LanguageSwitcher.propTypes = {
  locale: PropTypes.string.isRequired,
  setLocaleWithFallback: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({ locale: state.i18n.locale });
const mapDispatchToProps = { setLocaleWithFallback };
export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);
