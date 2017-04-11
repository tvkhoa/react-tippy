## React Tippy

Tooltip for React, using tippy.js

![Example](https://raw.githubusercontent.com/tvkhoa/react-tippy/master/doc/doc.gif)

## Getting Started

```
yarn add react-tippy

```

## How to use

First, you need import css

```javascript
import 'react-tippy/dist/tippy.css'

```

There are 2 ways for you to use react Tippy

### Tooltip Component

```javascript
import {
  Tooltip,
} from 'react-tippy';


<Tooltip
  // options
  title="Welcome to React"
  position="bottom"
  trigger="click"
>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</Tooltip>

```

### High Order Component

`withTooltip(Component, options)`


```javascript
import {
  withTooltip,
} from 'react-tippy';


const Header = () => (
  <h2>Welcome to React with tooltip</h2>
);

const HeaderWithTootip = withTooltip(Header, {
  title: 'Welcome to React with tooltip',
});

```


## Options

[Same as options of tippyJS](https://atomiks.github.io/tippyjs/#all-settings)
