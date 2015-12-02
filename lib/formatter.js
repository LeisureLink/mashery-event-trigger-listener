'use strict';

const Spacing = '  ';

module.exports = {

  format: (request) => {
    let payload = request.payload || {};
    let headers = request.headers || {};
    let url = request.url.href || '';
    let verb = request.method.toUpperCase();

    return { verb, url, headers, payload };
  },

  stringify: (value) => {
    return JSON.stringify(value, null, Spacing);
  }
};