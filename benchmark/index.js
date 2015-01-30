var compEach = require('component-each'),
    ldshEach = require('lodash').each,
    yiwnEach = require('/home/antaranian/Projects/yiwn/each/index.js');

suite('Array', function(){
    var arr = [];

    setup(function(){
        var i;

        for (i = 0; i < 10000; i += 1) {
            var o = { payload: i };
            arr.push(o);
        }
    });

    teardown(function(){
        arr = [];
    });

    add('yiwn/each', function(){
        var sum = 0;

        yiwnEach(arr, function(value){
            sum += value.payload;
        });
    });

    add('component/each', function(){
        var sum = 0;

        compEach(arr, function(value){
            sum += value.payload;
        });
    });

    add('lodash.each', function(){
        var sum = 0;

        ldshEach(arr, function(value){
            sum += value.payload;
        });
    });

    add('Array#forEach', function(){
        var sum = 0;
        arr.forEach(function(value){
            sum += value.payload;
        });
    });

});


suite('Object', function(){
    var obj = {};

    setup(function(){
        var i;

        for (i = 0; i < 10000; i += 1) {
            var o = { payload: i };
            obj[i] = o;
        }
    });

    add('yiwn/each', function(){
        var sum = 0;

        yiwnEach(obj, function(value){
            sum += value.payload;
        });
    });

    add('component/each', function(){
        var sum = 0;

        compEach(obj, function(key, value){
            sum += value.payload;
        });
    });

    add('lodash.each', function(){
        var sum = 0;

        ldshEach(obj, function(value){
            sum += value.payload;
        });
    });

    add('Array#forEach', function(){
        var sum = 0;
        Object.keys(obj).forEach(function(value){
            sum += obj[value].payload;
        });
    });
});
