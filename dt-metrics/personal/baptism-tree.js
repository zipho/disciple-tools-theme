jQuery(document).ready(function() {
  if ( window.wpApiShare.url_path.startsWith( 'metrics/personal/baptism-tree' ) ) {
    baptism_tree()
  }

  function baptism_tree() {
    "use strict";
    let chart = jQuery('#chart')
    let spinner = ' <span class="loading-spinner active"></span> '

    chart.empty().html(spinner)
    jQuery('#metrics-sidemenu').foundation('down', jQuery('#personal-menu'));

    let translations = dtMetricsProject.data.translations

    chart.empty().html(`
        <span class="section-header">${ _.escape( translations.title_baptism_tree ) }</span><hr>
        <div class="grid-x grid-padding-x">
            <div class="cell">
                <div class="scrolling-wrapper" id="generation_map">${spinner}</div>
            </div>
        </div>
        <div id="modal" class="reveal" data-reveal></div>
        <br><br>
       `)

    makeRequest('POST', 'metrics/my/baptism_tree' )
      .then(response => {
        // console.log(response)
        jQuery('#generation_map').empty().html(response)
        jQuery('#generation_map li:last-child').addClass('last');
        new Foundation.Reveal(jQuery('#modal'))
      })
  }
})
