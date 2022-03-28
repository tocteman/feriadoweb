import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		adapter: adapter(), // currently the adapter does not take any options
    vite: {
      optimizeDeps: {
        include: ['@sanity/block-content-to-hyperscript/internals.js']
      }
    },
    prerender: { 
      onError: "continue",
      crawl: true,
      enabled: true,
      entries: ['*']
    }
	}
};
