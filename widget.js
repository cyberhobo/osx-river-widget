(function($) {
  $(function() {
    var $flow = $('.flow');

    if ( window.widget ) {
      widget.onshow = request_flow;
    }
    request_flow();

    function request_flow() {
      $.ajax({
        method: 'get',
        url: 'https://waterservices.usgs.gov/nwis/iv/',
        data: {
          sites: '10348000',
          format: 'json'
        },
        dataType: 'json',
        success: update_flow
      });
    }

    function update_flow(data) {
      if ( !data.value || !data.value.timeSeries || data.value.timeSeries.length === 0 ) {
        return;
      }

      var display_parts = [];

      $.each( data.value.timeSeries, function( i, item ) {
        display_parts.push( item.values[0].value[0].value );
        display_parts.push( item.variable.unit.unitCode );
      });

      $flow.text( display_parts.join(' ') );
    }
  });
})(jQuery);
