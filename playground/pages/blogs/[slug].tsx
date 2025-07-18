import type { BlogResponse } from 'server/api/blog';
import { BCMSContentManager } from '../../../src/runtime/components/content';
import { BCMSImage } from '../../../src/runtime/components/image';
import { Widgets } from '../../components/widgets';

export default defineNuxtComponent({
    async setup() {
        const route = useRoute();
        const { data, error } = useFetch<BlogResponse>(
            `/api/blog/${route.params.slug}`,
        );
        if (error.value) {
            console.log('error', error.value);
            throw error.value;
        }

        return () => {
            if (!data.value) {
                return <div>Loading...</div>;
            }
            return (
                <div>
                    <div>
                        <h1>{data.value.meta.title}</h1>
                        <BCMSImage
                            style={`width: 100%; height: 800px; object-fit: cover;`}
                            media={data.value.meta.cover_image}
                        />
                    </div>
                    <div>
                        <BCMSContentManager
                            items={data.value.content}
                            widgetComponents={Widgets}
                        />
                    </div>
                </div>
            );
        };
    },
});
