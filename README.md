# Fixture Helper

It should be easy to use fixtures for your tests.

[![Build Status](https://travis-ci.org/reergymerej/fixture-helper.svg?branch=master)](https://travis-ci.org/reergymerej/fixture-helper)

## API

### read(filePath)

`filePath` string

Returns contents of `filePath` as string.

**Example**

```
import { read } from 'fixture-helper'
read('foo/bar.txt')
```


## Dev

```
yarn test
yarn lint
yarn build
```
