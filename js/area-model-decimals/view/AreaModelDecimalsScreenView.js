// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var areaModelDecimals = require( 'AREA_MODEL_DECIMALS/areaModelDecimals' );

  /**
   * @param {AreaModelDecimalsModel} areaModelDecimalsModel
   * @constructor
   */
  function AreaModelDecimalsScreenView( areaModelDecimalsModel ) {

    ScreenView.call( this );

    // Reset All button
    var resetAllButton = new ResetAllButton( {
      listener: function() {
        areaModelDecimalsModel.reset();
      },
      right:  this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10
    } );
    this.addChild( resetAllButton );
  }

  areaModelDecimals.register( 'AreaModelDecimalsScreenView', AreaModelDecimalsScreenView );

  return inherit( ScreenView, AreaModelDecimalsScreenView, {

    //TODO Called by the animation loop. Optional, so if your view has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle view animation here.
    }
  } );
} );