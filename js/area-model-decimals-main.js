// Copyright 2018-2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const DecimalsScreen = require( 'AREA_MODEL_COMMON/screens/DecimalsScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  const areaModelDecimalsTitleString = require( 'string!AREA_MODEL_DECIMALS/area-model-decimals.title' );

  var simOptions = {
    credits: {
      leadDesign: 'Amy Hanson, Amanda McGarry',
      softwareDevelopment: 'Jonathan Olson',
      team: 'Karina Hensberry, Susan Miller, Ariel Paul, Kathy Perkins, Oliver Nix',
      qualityAssurance: 'Steele Dalton, Bryce Griebenow, Ethan Johnson, Liam Mulhall, Ben Roberts, Jacob Romero, Ethan Ward, Clara Wilson, Kathryn Woessner',
      graphicArts: 'Mariah Hermsmeyer, Amanda McGarry, Diana L\u00f3pez Tavares'
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( areaModelDecimalsTitleString, [ new DecimalsScreen() ], simOptions );
    sim.start();
  } );
} );
