import React, { Component } from 'react';

import { RootStack } from './src/config/rotas'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    );
  }
}

