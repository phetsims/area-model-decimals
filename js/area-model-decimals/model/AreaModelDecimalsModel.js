// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var areaModelDecimals = require( 'AREA_MODEL_DECIMALS/areaModelDecimals' );

  /**
   * @constructor
   */
  function AreaModelDecimalsModel() {
    //TODO
  }

  areaModelDecimals.register( 'AreaModelDecimalsModel', AreaModelDecimalsModel );

  return inherit( Object, AreaModelDecimalsModel, {

    // @public resets the model
    reset: function() {
      //TODO reset things here
    },

    //TODO Called by the animation loop. Optional, so if your model has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle model animation here.
    }
  } );
} );