import { defineNuxtComponent } from '#app';
import type { ClientConfig, MediaExtended } from '@thebcms/client';
import type { Media, PropMediaDataParsed } from '@thebcms/types';
import { h, type PropType } from 'vue';
import { useBcmsPublic } from '../composables/useBcmsClient';

export interface BCMSAudioProps {
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

export const BCMSAudio = defineNuxtComponent({
    name: 'BCMSAudio',
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
    },
    setup(props) {
        const client = useBcmsPublic();
        return () => {
            if (props.media.type !== 'AUDIO') {
                return h('div', {
                    style: { display: 'none' },
                    'data-bcms-video-error': `Media of type ${props.media.type} cannot used as audio`,
                });
            }
            const origin = client.cmsOrigin.includes('app.thebcms.com')
                ? 'https://cdn.thebcms.com'
                : client.cmsOrigin;
            return h(
                'audio',
                {
                    id: props.id,
                    style: props.style,
                    class: `bcms-audio ${props.class || ''}`,
                    controls: props.controls,
                    autoplay: props.autoplay,
                    loop: props.loop,
                    muted: props.muted,
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
export default BCMSAudio;
