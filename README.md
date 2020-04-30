# @jhonnold/react-animated-number

> React Component to animate a number changing value

[![NPM](https://img.shields.io/npm/v/@jhonnold/react-animated-number.svg)](https://www.npmjs.com/package/@jhonnold/react-animated-number)
[![downloads](https://img.shields.io/npm/dm/@jhonnold/react-animated-number.svg)](https://npm-stat.com/charts.html?package=@jhonnold/react-animated-number&from=2020-01-01)
[![build status](https://img.shields.io/travis/jhonnold/react-animated-number.svg?branch=master)](https://travis-ci.org/jhonnold/react-animated-number)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](http://opensource.org/licenses/MIT)

## Install

```bash
npm install --save @jhonnold/react-animated-number
```

## Getting Started

```tsx
import AnimatedNumber from '@jhonnold/react-animated-number';

<AnimatedNumber number={...} />;
```

## General

See the [example](https://jhonnold.github.io/react-animated-number/) to get a full understanding of functionality.

## Configure

#### number

Type: `number`
**Required**

The value to be display

#### initial

Type: `number`
Default: `0`

The starting value that the intial animation will begin from

#### fps

Type: `number`
Default: `60`

The framerate of the animation. Note, this is a maximum, not a forced framerate.

#### duration

Type: `number`
Default: `250`

The duration of the animation in ms.

#### format

Type: `(value: number): string | number;`

A function to format the output of an animation. i.e. `Math.round`

#### component

Type: `string`
Default: `'p'`

The element to render the animated value with.

## License

MIT © [jhonnold](https://github.com/jhonnold)
