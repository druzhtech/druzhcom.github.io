import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Translate } from "react-redux-i18n";

import { makeStyles } from "@material-ui/core/styles";
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Code from "@material-ui/icons/Code";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import { getDir } from "../../../redux/selectors/i18n";

const useStyles = makeStyles(styles);

function ProductSection(props) {
  useEffect(() => {
    document.dir = props.dir;
  }, [props.dir]);

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            <Translate value="specTitle" />
          </h2>
          <h5 className={classes.description}>
            <Translate value="specDesc" />
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={<Translate value="specConsultTitle" />}
              description={<Translate value="specConsultDesc" />}
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={<Translate value="specAuditTitle" />}
              description={<Translate value="specAuditDesc" />}
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title={<Translate value="specDevelopTitle" />}
              description={<Translate value="specDevelopDesc" />}
              icon={Code}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

ProductSection.propTypes = {
  dir: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ dir: getDir(state) });
export default connect(mapStateToProps)(ProductSection);
