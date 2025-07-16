import type { HomeRespones } from 'server/api/home';
import { BCMSContentManager } from '../../src/runtime/components/content';

export default defineNuxtComponent({
    async setup() {
        const { data, error } = useFetch<HomeRespones>('/api/home');
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
                    <h1>{data.value.meta.title}</h1>
                    <BCMSContentManager items={data.value.content} />
                    <NuxtLink to={'/blogs'}>Go to Blogs</NuxtLink>
                </div>
            );
        };
    },
});
