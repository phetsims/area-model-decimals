// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var AreaModelDecimalsScreen = require( 'AREA_MODEL_DECIMALS/area-model-decimals/AreaModelDecimalsScreen' );

  // strings
  var areaModelDecimalsTitleString = require( 'string!AREA_MODEL_DECIMALS/area-model-decimals.title' );

  var simOptions = {
    credits: {
      //TODO fill in proper credits, all of these fields are optional, see joist.AboutDialog
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      thanks: ''
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( areaModelDecimalsTitleString, [ new AreaModelDecimalsScreen() ], simOptions );
    sim.start();
  } );
} );