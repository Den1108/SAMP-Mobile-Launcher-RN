import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { App } from './App';
import { name as appName } from './app.json';
import { store } from './src/store/store';
import { FileLogger } from 'react-native-file-logger';

FileLogger.configure({
  captureConsole: true,        // все console.log будут писаться в файл
  dailyRolling: true,          // новый файл каждый день
  maximumFileSize: 1024 * 1024, // 1 МБ на файл
  maximumNumberOfFiles: 5      // хранить до 5 файлов
}).then(() => {
  console.log('✅ File logger initialized');
}).catch(err => {
  console.log('❌ Failed to init logger:', err);
});

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
