var Handlebars = require('handlebars');

module.exports = function(url, options) {
  url = Handlebars.escapeExpression(url);

  var attrs = Object.keys(options.hash).map(function(key) {
    return key + '="' + options.hash[key] + '"';
  }).join(" ");

  return new Handlebars.SafeString(
    "<a href=" + url + " target='_blank'" + attrs + ">" + options.fn(this) + "</a>"
  );
};