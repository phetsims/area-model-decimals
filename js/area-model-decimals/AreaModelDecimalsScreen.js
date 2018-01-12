// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );
  var areaModelDecimals = require( 'AREA_MODEL_DECIMALS/areaModelDecimals' );
  var AreaModelDecimalsModel = require( 'AREA_MODEL_DECIMALS/area-model-decimals/model/AreaModelDecimalsModel' );
  var AreaModelDecimalsScreenView = require( 'AREA_MODEL_DECIMALS/area-model-decimals/view/AreaModelDecimalsScreenView' );

  /**
   * @constructor
   */
  function AreaModelDecimalsScreen() {

    var options = {
      backgroundColorProperty: new Property( 'white' )
    };

    Screen.call( this,
      function() { return new AreaModelDecimalsModel(); },
      function( model ) { return new AreaModelDecimalsScreenView( model ); },
      options
    );
  }

  areaModelDecimals.register( 'AreaModelDecimalsScreen', AreaModelDecimalsScreen );

  return inherit( Screen, AreaModelDecimalsScreen );
} );