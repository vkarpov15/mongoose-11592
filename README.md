# mongoose-11592
Attempt to repro replica set issues with Jest

## Running

1. Start MongoDB replica set on 127.0.0.1:27017, 127.0.0.1:27018, 127.0.0.1:27019 using [run-rs](https://npmjs.com/package/run-rs) or similar
2. Run `npm test`

Sample output:

```
$ npm test

> test
> jest ./test.js

 PASS  ./test.js
  mongoose
    ✓ create a doc (42 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.419 s, estimated 1 s
Ran all test suites matching /.\/test.js/i.
```
