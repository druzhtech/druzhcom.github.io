import React, { Component } from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// TODO: like OnGrid

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://didex.org/">
                Didex.org
        </Link>{' '}
            {new Date().getFullYear()}
            {''}
        </Typography>
    );
}

class Footer extends Component {
    render() {
        return (
            <footer
                className="bg-light py-5"
            >
                {/* <div className="container">
                    <div className="small text-center text-muted">Copyright &copy; 2019 - Didex</div>
                </div> */}
                <Copyright />
            </footer>
        )
    }
}

export default Footer;
