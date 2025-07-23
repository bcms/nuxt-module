import type { BlogsResponse } from 'server/api/blogs';

export default defineNuxtComponent({
    async setup() {
        const { data, error } = useFetch<BlogsResponse>('/api/blogs');
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
                    <h1>Blogs</h1>
                    {data.value.items.map((item) => {
                        return (
                            <NuxtLink
                                to={`/blogs/${item.slug}`}
                                style={`width: 320px`}
                            >
                                <BcmsImage
                                    style={`width: 300px; height: 220px; object-fit: cover;`}
                                    media={item.cover_image}
                                />
                                <h2>{item.title}</h2>
                            </NuxtLink>
                        );
                    })}
                </div>
            );
        };
    },
});
