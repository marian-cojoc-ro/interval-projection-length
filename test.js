// npm run babel-node [path]/test-network-requests-logger.js
import now from 'performance-now';
import {add, time, clear} from './helper';
import assert from 'assert';
const startTime = now();

const tests = [
  {
    l: 'a',
    r: () => {
      add(1, 2);
      return time();
    },
    e: 1
  },
  {
    l: 'b',
    r: () => {
      add(1, 1);
      return time();
    },
    e: 0
  },
  {
    l: 'c',
    r: () => {
      add(1, 10);
      return time();
    },
    e: 9
  },
  {
    l: 'd',
    r: () => {
      add(1, 2);
      add(3, 4);
      return time();
    },
    e: 2
  },
  {
    l: 'e',
    r: () => {
      add(1, 2);
      add(2, 3);
      return time();
    },
    e: 2
  },
  {
    l: 'f',
    r: () => {
      add(1, 5);
      add(10, 15);
      add(20, 25);
      return time();
    },
    e: 14
  },
  {
    l: 'g',
    r: () => {
      add(1, 5);
      add(2, 3);
      return time();
    },
    e: 4
  },
  {
    l: 'h',
    r: () => {
      add(1, 5);
      add(2, 6);
      return time();
    },
    e: 5
  },
  {
    l: 'i',
    r: () => {
      add(1, 5);
      add(2, 6);
      add(10, 15);
      return time();
    },
    e: 10
  },
  {
    l: 'j',
    r: () => {
      add(1, 10);
      add(2, 6);
      add(3, 20);
      return time();
    },
    e: 19
  },
  {
    l: 'k',
    r: () => {
      add(1, 10);
      add(2, 6);
      add(3, 20);
      add(25, 30);
      return time();
    },
    e: 24
  },
];

tests.forEach((test) => {
  const {l, e} = test;
  const r = test.r();
  clear();
  assert(r === e, `Test ${l} failed because ${r} !== ${e}`);
});
console.log(`Tests took: ${(now() - startTime).toFixed(3)}ms`);
