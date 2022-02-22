import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDir } from "../../redux/selectors/i18n";
import { Translate } from "react-redux-i18n";
import { PropTypes } from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import TechIcons from "components/TechIcons/TechIcons.js";

import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import "./LandingPage.css";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

function LandingPage(props) {
  const classes = useStyles();

  useEffect(() => {
    document.dir = props.dir;
  }, [props.dir]);

  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={
          <p
            className="russian navbar-brand-russian js-scroll-trigger"
            href="#p"
            // id="p"
          >
            @druzh.com
          </p>
        }
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />

      <Parallax filter image={require("assets/img/landing-bg.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3 className={classes.title}>
                <Translate value="title" />
              </h3>
              <h4>
                <Translate value="description" />
              </h4>
              <br />
              <TechIcons />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <TeamSection /> */}
          {/* <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

LandingPage.propTypes = {
  dir: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ dir: getDir(state) });
export default connect(mapStateToProps)(LandingPage);
