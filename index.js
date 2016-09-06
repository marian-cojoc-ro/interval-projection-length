
var _each = function(arr, fn) {
  for (var i = 0, l=arr.length; i < l; i++) {
    if (fn(arr[i], i) === false) {
      break;
    }
  }
};

var _eachFrom = function(from, arr, fn) {
  _each(arr, function(el, idx) {
    if (idx >= from) {
      return fn(el, idx);
    }
  });
};

module.exports = function(intervals) {
  var result = 0;
  var processedIdx = 0;
  _each(intervals, function(log1, idx1) {
    if (idx1 <= processedIdx && idx1 !== 0) {
      return true; //skip this one
    }
    var r = {
      start: log1.start,
      end: log1.end
    };
    _eachFrom(idx1 + 1, intervals, function(log2) {
      if (log2.start > r.end) {
        return false;
      }
      processedIdx++;
      if (log2.end >= r.end) {
        r.end = log2.end;
      }
    });
    result += r.end - r.start;
  });
  return result;
};
