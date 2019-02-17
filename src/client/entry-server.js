import { createApp } from './main.js';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();

    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) {
        const error = { code: 404 };
        return reject(error);
      }

      resolve(app);
    }, reject);
  });
};
