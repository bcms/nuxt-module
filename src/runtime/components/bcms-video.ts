import { defineNuxtComponent } from '#app';
import type { ClientConfig, MediaExtended } from '@thebcms/client';
import type { Media, PropMediaDataParsed } from '@thebcms/types';
import { h, type PropType } from 'vue';
import { useBcmsPublic } from '../composables/useBcmsClient';

export interface BCMSVideoProps {
    id?: string;
    class?: string;
    style?: string;
    media: Media | MediaExtended | PropMediaDataParsed;
    client: Client | ClientConfig;
    altText?: string;
    useOriginal?: boolean;
    controls?: boolean;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsinline?: boolean;
}

export const BCMSVideo = defineNuxtComponent({
    name: 'BCMSVideo',
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
        useOriginal: Boolean,
        altText: String,
        controls: Boolean,
        autoplay: Boolean,
        loop: Boolean,
        muted: Boolean,
        playsinline: Boolean,
    },
    setup(props) {
        const client = useBcmsPublic();
        return () => {
            if (props.media.type !== 'VID') {
                return h('div', {
                    style: { display: 'none' },
                    'data-bcms-video-error': `Media of type ${props.media.type} cannot used as video`,
                });
            }
            const origin = client.cmsOrigin.includes('app.thebcms.com')
                ? 'https://cdn.thebcms.com'
                : client.cmsOrigin;
            return h(
                'video',
                {
                    id: props.id,
                    style: props.style,
                    class: `bcms-video ${props.class || ''}`,
                    controls: props.controls,
                    autoplay: props.autoplay,
                    loop: props.loop,
                    muted: props.muted,
                    playsinline: props.playsinline,
                },
                h('source', {
                    src:
                        origin +
                        client.media.toUri(props.media._id, props.media.name),
                    type: props.media.mimetype,
                }),
            );
        };
    },
});
export default BCMSVideo;
