/**
 * @format
 */

import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import {AppRegistry} from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
const Apps = () => (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <App />
    </ApplicationProvider>
  );

AppRegistry.registerComponent(appName, () => Apps);
