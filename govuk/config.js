exports.govukConfig = {
  'assetPath': '/public/',
  'headerClass': 'with-proposition',
  'propositionHeader': '<div class="header-proposition">' +
                    '<div class="content">' +
                      '<a href="#proposition-links" class="js-header-toggle menu">Menu</a>' +
                      '<nav id="proposition-menu">' +
                        '<a href="/" id="proposition-name">Digital Marketplace <span class="alpha-tag">Alpha</span></a>' +
                        '<ul id="proposition-links">' +
                          '<li><a href="/" class="active">Home</a></li>' +
                          '<li><a href="login.html">Login</a></li>' +
                          '<li><a href="/sign-up.html">Create Account</a></li>' +

                        '</ul>' +
                      '</nav>' +
                    '</div>' +
                  '</div>',
  'afterHeader': '<div id="phase-notice">' +
                    '<p><strong>Alpha:</strong> This is a new service. To help us improve it please send feedback to <a href="mailto:digitalmarketplace@digital.cabinet-office.gov.uk">digitalmarketplace@digital.cabinet-office.gov.uk</a></p>' +
                  '</div>',
  'bodyEnd': '<script src="/public/javascripts/application.js" type="text/javascript"></script><script src="/public/javascripts/searchBuilder.js" type="text/javascript"></script>'
};
