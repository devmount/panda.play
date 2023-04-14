// init app
import { createApp } from 'vue';
import { createMetaManager } from 'vue-meta';
import App from '@/App.vue';
const app = createApp(App);

// init router
import router from '@/router.js';
app.use(router);

// init meta data
const metaManager = createMetaManager();
app.use(metaManager);

// set global properties
app.provide('version', APP_VERSION);

// extend Object for filtering
Object.filter = (obj, predicate) =>
	Object.keys(obj)
		.filter(key => predicate(obj[key]))
		.reduce((res, key) => (res[key] = obj[key], res), {});

// ready? let's go!
app.mount('#app');
