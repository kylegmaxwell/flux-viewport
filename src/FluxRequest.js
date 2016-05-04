'use strict';

/**
 * Sets the content type and the request token header on a XMLHttpRequest
 * object.
 *
 * @function setHeaders
 *
 * @param {XMLHttpRequest} request The request object
 * @param {String} contentType The content type that should be set
 */
export default function setHeaders(request, contentType) {
    request.setRequestHeader('Content-Type', contentType);
    request.setRequestHeader('Flux-Request-Marker', '1');
    var token = _parseCookies(document.cookie).flux_token;
    request.setRequestHeader('Flux-Request-Token', token);
}

/**
 * Parses the form of document.cookies into an object.
 *
 * For CSRF protection, client needs to set Flux-Request-Marker and
 * Flux-Request-Token headers on all authenticated requests.
 *
 * Flux-Request-Marker: 1
 * Flux-Request-Token: <token>
 *
 * where <token> echoes the value of the flux_token cookie
 * (set by the head proxy at auth).
 *
 * This pulls out that token value and stores it on Flux.fluxToken (for
 * use by other request senders) and sets headers on jquery ajax requests.
 *
 * Cookie parsing taken from https://github.com/jshttp/cookie

 *
 * @function _parseCookies
 * @private
 *
 * @return {Object} A set of key value pairs from the cookies
 *
 * @param {string} str A string having the form of document.cookies.
 * @param {Function} options Provider of a decode function that behaves
 *                           like decodeURIComponent. If options.decode is
 *                           not provided, decodeURIComponent is used.
 */
function _parseCookies(str, options) {
  var obj = {};
  var opt = options || {};
  var pairs = str.split(/; */);
  var dec = opt.decode || decodeURIComponent;
  var pair, eq_idx, key, val;

  for ( var i = 0, len = pairs.length ; i < len ; i++ ) {

    pair = pairs[i];

    eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      break;
    }

    key = pair.substr(0, eq_idx).trim();
    val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (obj[key] == null) {
      obj[key] = _tryDecode(val, dec);
    }

  }

  return obj;
}

/**
 * Attempts to decode a string with the provided function.
 * Catches errors and returns input string on failure.
 *
 * @function _tryDecode
 * @private
 *
 * @return {String} The decoded or undecoded string
 *
 * @param {String} str The string to try to decode
 * @param {Function} decode The function to decode with
 */
function _tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}