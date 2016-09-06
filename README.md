# interval-projection-length
Given any number of intervals this library returns the total length taking into consideration overlaps

Useful when trying to measure the time a node server request took but you want to exclude the time spent waiting
for async resources. This is not a very accurate/reliable way but it's a metric that I would like to know

# usage

```
var ipl = require('interval-projection-length');
var result = ipl([{start: 1, end: 5}, {start: 4, end: 7}]);
console.log(result); //6

var result = ipl([{start: 1, end: 5}, {start: 4, end: 7}, {start: 9, end:10}]);
console.log(result); //7
```

## use the helper
```
var iplHelper = require('interval-projection-length/helper');
iplHelper.add(1, 5);
iplHelper.add(4, 7);
var result = iplHelper.time();
iplHelper.clear()
console.log(result)
```