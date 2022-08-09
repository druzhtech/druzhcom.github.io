import React from 'react';

// import LanguageSwitcher from "./LanguageSwitcher";
import styles
  from 'assets/jss/material-kit-react/components/headerLinksStyle.js';
import Button from 'components/CustomButtons/Button.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="#research"
          target="_blank"
          className={classes.navLink}
        >
          Research
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="#audit"
          target="_blank"
          className={classes.navLink}
        >
          Audit
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="#dev"
          target="_blank"
          className={classes.navLink}
        >
          Development
        </Button>
      </ListItem> */}

      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/druzhcom"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        {/* <Tooltip
          id="telegram-tooltip"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://t.me/DruzhcomENG"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-telegram"} />
          </Button>
        </Tooltip> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github-tooltip"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/druzhcom"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="twitter-tooltip"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://twitter.com/druzhcom/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>

      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="youtube-tooltip"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.youtube.com/channel/UCNpmeQQkMKRa7fcWOF5n7JA"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-youtube"} />
          </Button>
        </Tooltip>
      </ListItem> */}

      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="vk-tooltip"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://vk.com/druzhcom/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-vk"} />
          </Button>
        </Tooltip>
      </ListItem> */}
      {/* 

      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/druzhcom"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="facebook-tooltip"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/druzhcom"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="youtube-tooltip"
          title=""
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.youtube.com/channel/UCNpmeQQkMKRa7fcWOF5n7JA"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-youtube"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          // buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
          ]}
        />
      </ListItem>
 */}

      {/* <LanguageSwitcher /> */}
    </List>
  );
}
