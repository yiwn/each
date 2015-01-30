var assert = require('assert');

var each = require('..');

describe('each(arr, fn)', function(){
    it('should iterate the values', function(){
        var vals = [];
        each([1,2,3], function(val){
            vals.push(val);
        });
        assert.deepEqual(vals, [1,2,3]);
    });

    it('should pass the index', function(){
        var vals = [];
        each([1,2,3], function(val, i){
            vals.push(i);
        });
        assert.deepEqual(vals, [0,1,2]);
    });

    it('should return back input array', function(){
        var vals = [1,2,3],
            back;
        back = each(vals, function(val){
            var x = val + 1;
        });
        assert.equal(vals, back);
    });

    describe('when passed a context', function(){
        it('should iterate in context', function(){
            var vals = [];
            each([1,2,3], function(val, i){
                this.push(val);
            }, vals);
            assert.deepEqual(vals, [1,2,3]);
        });
    });
});

describe('each(obj, fn)', function(){
    it('should iterate key / value pairs', function(){
        var user = { name: 'Tobi', age: 2 };
        var vals = [];
        each(user, function(val, key){
            vals.push([key, val]);
        });
        assert.deepEqual(vals, [['name', 'Tobi'], ['age', 2]]);
    });

    it('should return back input object', function(){
        var vals = { name: 'Tobi', age: 2 },
            back;
        back = each(vals, function(val){
            var x = val.age + 1;
        });
        assert.equal(vals, back);
    });

    describe('when .length is present', function(){
        it('should iterate as if it were an array', function(){
            var arr = { length: 2, 0: 'foo', 1: 'bar' };
            var vals = [];
            each(arr, function(val, i){
                vals.push(val, i);
            });
            assert.deepEqual(vals, ['foo', 0, 'bar', 1]);
        });
    });

    describe('when passed a context', function(){
        it('should iterate in context', function(){
            var user = { name: 'Tobi', age: 2 };
            var vals = [];
            each(user, function(val, key){
                this.push([key, val]);
            }, vals);
            assert.deepEqual(vals, [['name', 'Tobi'], ['age', 2]]);
        });
    });
});

describe('each(str, fn)', function(){
    it('should iterate characters', function(){
        var vals = [];
        each('hey', function(c, i){
            vals.push(c, i);
        });
        assert.deepEqual(vals, ['h', 0, 'e', 1, 'y', 2]);
    });

    describe('when passed a context', function(){
        it('should iterate in context', function(){
            var vals = [];
            each('hey', function(c, i){
                this.push(c, i);
            }, vals);
            assert.deepEqual(vals, ['h', 0, 'e', 1, 'y', 2]);
        });
    });
});
