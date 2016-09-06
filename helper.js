var ipl = require('./index.js');
var logs = [];

function clear() {
  logs = [];
}

/**
 * add an interval described by start and end
 *
 * @param start integer
 * @param end integer
 */
function add(start, end) {
  logs.push({
    start: start,
    end: end
  });
}

function time() {
  return ipl(logs);
}

module.exports = {
  add: add,
  clear: clear,
  time: time
};
