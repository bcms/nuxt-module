import { defineNuxtComponent } from '#app';
import type { MediaExtended } from '@thebcms/client';
import type { Media, PropMediaDataParsed } from '@thebcms/types';
import { h, type PropType } from 'vue';
import BCMSAudio from './bcms-audio';
import { BCMSImage, type BCMSImageProps } from './bcms-image';
import { BCMSVideo, type BCMSVideoProps } from './bcms-video';
import { useBcmsPublic } from '../composables/useBcmsClient';

export type BCMSMediaProps = BCMSVideoProps & BCMSImageProps;

export const BCMSMedia = defineNuxtComponent({
    name: 'BCMSMedia',
    props: {
        id: String,
        class: String,
        style: String,
        media: {
            type: Object as PropType<
                Media | MediaExtended | PropMediaDataParsed
            >,
            required: true,
        },
        sizeTransform: Array as PropType<string[]>,
        useOriginal: Boolean,
        altText: String,
    },
    setup(props) {
        const client = useBcmsPublic();
        return () => {
            if (
                props.media.type === 'IMG' ||
                props.media.type === 'SVG' ||
                props.media.type === 'GIF'
            ) {
                return h(BCMSImage, props);
            } else if (props.media.type === 'VID') {
                return h(BCMSVideo, {
                    ...props,
                    controls: true,
                    playsinline: true,
                });
            } else if (props.media.type === 'AUDIO') {
                return h(BCMSAudio, {
                    ...props,
                    controls: true,
                    playsinline: true,
                });
            } else {
                const origin = client.cmsOrigin.includes('app.thebcms.com')
                    ? 'https://cdn.thebcms.com'
                    : client.cmsOrigin;
                return h('iframe', {
                    style: props.style,
                    id: props.id,
                    class: `bcms-iframe ${props.class || ''}`,
                    src:
                        origin +
                        client.media.toUri(props.media._id, props.media.name),
                });
            }
        };
    },
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
