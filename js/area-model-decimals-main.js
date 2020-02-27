// Copyright 2018-2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import DecimalsScreen from '../../area-model-common/js/screens/DecimalsScreen.js';
import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import areaModelDecimalsStrings from './area-model-decimals-strings.js';

const areaModelDecimalsTitleString = areaModelDecimalsStrings[ 'area-model-decimals' ].title;

const simOptions = {
  credits: {
    leadDesign: 'Amy Hanson, Amanda McGarry',
    softwareDevelopment: 'Jonathan Olson',
    team: 'Karina Hensberry, Susan Miller, Ariel Paul, Kathy Perkins, Oliver Nix',
    qualityAssurance: 'Steele Dalton, Bryce Griebenow, Ethan Johnson, Liam Mulhall, Ben Roberts, Jacob Romero, Ethan Ward, Clara Wilson, Kathryn Woessner',
    graphicArts: 'Mariah Hermsmeyer, Amanda McGarry, Diana L\u00f3pez Tavares'
  }
};

SimLauncher.launch( function() {
  const sim = new Sim( areaModelDecimalsTitleString, [ new DecimalsScreen() ], simOptions );
  sim.start();
} );