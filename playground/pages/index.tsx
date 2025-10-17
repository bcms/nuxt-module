import type { HomeRespones } from 'server/api/home';

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
                <div
                    style={{
                        maxWidth: '800px',
                    }}
                >
                    <h1>{data.value.meta.title}</h1>
                    <BcmsContentManager
                        style={`max-width: 400px; display: flex; flex-direction: column; gap: 20px;`}
                        items={data.value.content}
                    />
                    <NuxtLink to={'/blogs'}>Go to Blogs</NuxtLink>
                </div>
            );
        };
    },
});
