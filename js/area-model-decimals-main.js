// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var DecimalsScreen = require( 'AREA_MODEL_COMMON/screens/DecimalsScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  var areaModelDecimalsTitleString = require( 'string!AREA_MODEL_DECIMALS/area-model-decimals.title' );

  var simOptions = {
    credits: {
      leadDesign: 'Amy Hanson, Amanda McGarry',
      softwareDevelopment: 'Jonathan Olson',
      team: 'Karina Hensberry, Kathy Perkins, Ariel Paul, Susan Miller',
      qualityAssurance: 'Steele Dalton, Ethan Johnson, Liam Mulhall',
      graphicArts: 'Amanda McGarry, Diana Lopez Tavares'
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( areaModelDecimalsTitleString, [ new DecimalsScreen() ], simOptions );
    sim.start();
  } );
} );