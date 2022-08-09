import './LandingPage.css';

import React, { useEffect } from 'react';

// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";
import styles from 'assets/jss/material-kit-react/views/landingPage.js';
import classNames from 'classnames';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';

import { makeStyles } from '@material-ui/core/styles';

import { getDir } from '../../redux/selectors/i18n';
import ProductSection from './Sections/ProductSection.js';

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
            Druzh.com
          </p>
        }
        rightLinks={<HeaderLinks />}
        // leftLinks={<HeaderLinks />}
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

              
              {/* <br /> */}
              {/* <TechIcons /> */}
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
