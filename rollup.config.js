import merge from 'deepmerge';
import copy from 'rollup-plugin-copy';

import { createSpaConfig } from '@open-wc/building-rollup';

const baseConfig = createSpaConfig({
    outputDir: 'target',
    developmentMode: process.env.ROLLUP_WATCH === 'true',
    injectServiceWorker: false,
});

export default merge(baseConfig, {
    input: './index.html',
    plugins: [
        copy({
            targets: [{ src: ['images', 'styles'], dest: 'target' }],
            flatten: false,
        }),
    ],
});
