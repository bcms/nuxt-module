import { defineNuxtPlugin } from '#app';
import { Client } from '@thebcms/client';
import type { BcmsNuxtRuntimeConfig } from '~/src/module';

export default defineNuxtPlugin((nuxtApp) => {
    const clientConfig =
        (nuxtApp.$config.bcms as BcmsNuxtRuntimeConfig)?.clientConfig ||
        (nuxtApp.$config.public.bcms as BcmsNuxtRuntimeConfig).clientConfig;
    const isPrivateClient = !!nuxtApp.$config.bcms;
    const client = new Client({
        apiKey: `${clientConfig.apiKey.id}.${clientConfig.apiKey.secret}.${clientConfig.instanceId}`,
        useMemCache: clientConfig.useMemCache,
        debug: clientConfig.debug,
        enableSocket: clientConfig.enableSocket,
        injectSvg: clientConfig.injectSvg,
        cmsOrigin: clientConfig.cmsOrigin,
    });
    return {
        provide: {
            bcmsClient: client,
            isPrivateClient,
        },
    };
});
