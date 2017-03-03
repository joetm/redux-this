'use strict';

import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TextField from 'material-ui/TextField';

import LD from './LD.js';

import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
const theme = getMuiTheme({
  palette: {
    primary1Color: pinkA200,
    primary2Color: cyan700,
    primary3Color: grey400
  }
});

const styles = {
    button: {
      margin: 12,
    }
};

export default class App extends React.Component {

    constructor() {
        this.state = {
            endpointUrl: 'https://query.wikidata.org/sparql?query='
        };
        this.LDStore = new LD;
    }

    fetchItem() {
        let promise = this.LDStore.fetch();
        promise.then(data => {
            // TODO
            // inject data into redux
        });
    }

  	render() {
  		  return (
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    <TextField
                        hintText="Stuff"
                    />
                    <RaisedButton
                        label="Fetch"
                        primary={true}
                        style={styles.button}
                    />
                </div>
            </MuiThemeProvider>
  		  );
  	}

}
