import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  // {
  //   name: 'App1', // app name registered
  //   entry: '//localhost:3001',
  //   container: '#frame',
  //   activeRule: '/app1',
  // },
  {
    name: 'micro-child-two',
    entry: '//localhost:3001',
    container: '#frame-app',
    activeRule: '/portal/app2',
  },
], {
   beforeLoad: (app) => {
    console.log('before load', app.name);
    return Promise.resolve();
  },
  // qiankun 生命周期钩子 - 挂载后
  afterMount: (app) => {
    console.log('after mount', app.name);
    return Promise.resolve();
  }
});

export default start;