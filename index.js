import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { App } from './App';
import { name as appName } from './app.json';
import { store } from './src/store/store';
import { FileLogger } from 'react-native-file-logger';

// Настраиваем логгер
FileLogger.configure({
  captureConsole: true,
  dailyRolling: true,
  maximumFileSize: 1024 * 1024,
  maximumNumberOfFiles: 5
}).then(() => {
  // ⬇️ ЭТО БУДЕТ В ЛОГАХ (если captureConsole работает)
  console.log('✅ File logger initialized');
  
  // ⬇️ А ЭТО БУДЕТ В ЛОГАХ ТОЧНО (прямой вызов API)
  FileLogger.debug('🚀 Application starting...');
  FileLogger.info('App version: 0.0.16');
  FileLogger.warn('⚠️ This is a test warning');
}).catch(err => {
  console.log('❌ Failed to init logger:', err);
  FileLogger.error('❌ Logger init failed: ' + err);
});

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// Добавим ещё один тестовый лог перед регистрацией
FileLogger.debug('📱 Registering app component...');

AppRegistry.registerComponent(appName, () => RNRedux);
