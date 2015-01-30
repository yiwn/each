build: node_modules
	@./node_modules/.bin/duo index.js

test: node_modules
	@./node_modules/.bin/mocha \
		--reporter spec 

node_modules:
	@npm install

benchmark:
	@./node_modules/.bin/faiton-benchmark ./benchmark/index.js

clean:
	rm -fr build components template.js

.PHONY: build test benchmark clean
