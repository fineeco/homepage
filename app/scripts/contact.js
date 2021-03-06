/* global $, i18next */

var doTranslate = function() {
  'use strict';

  $('.address').localize();
  $('.btn').localize();
};

var changeStyleByLng = function() {
  'use strict';

  return false;
};

$(document).ready(function() {
  'use strict';

  i18next.loadNamespaces('contact', function() {
    i18next.setDefaultNamespace('contact');
    doTranslate();
    changeStyleByLng();
  });
});
