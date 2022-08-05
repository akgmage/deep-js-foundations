/*
    Special values: -0    
*/
var trendRate = -0;
trendRate === -0;
// Output : true
trendRate.toString();
// Output : '0'
trendRate === 0;
// Output : true
trendRate < 0;
// Output : false
trendRate > 0;
// Output : false

Object.is(trendRate, -0);
// Output : true
Object.is(trendRate, 0);
// Output : false
