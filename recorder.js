$(function() {
    $( "#track1-slider" ).slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,

        slide: function( event, ui ) {
            $( "#amount1" ).val( ui.value );
        }
    });
    $( "#amount1" ).val( $( "#track1-slider" ).slider( "value" ) );

    $( "#track2-slider" ).slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,

        slide: function( event, ui ) {
            $( "#amount2" ).val( ui.value );
        }
    });
    $( "#amount2" ).val( $( "#track2-slider" ).slider( "value" ) );

    $( "#track3-slider" ).slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,

        slide: function( event, ui ) {
            $( "#amount3" ).val( ui.value );
        }
    });
    $( "#amount3" ).val( $( "#track3-slider" ).slider( "value" ) );

    $( "#track4-slider" ).slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,

        slide: function( event, ui ) {
            $( "#amount4" ).val( ui.value );
        }
    });
    $( "#amount4" ).val( $( "#track4-slider" ).slider( "value" ) );

    $( "#master-slider" ).slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,

        slide: function( event, ui ) {
            $( "#amountM" ).val( ui.value );
        }
    });
    $( "#amountM" ).val( $( "#master-slider" ).slider( "value" ) );
});
