import type { BlogEntry, BlogEntryMetaItem } from '../../../bcms/type/ts';

export interface BlogsResponse {
    items: BlogEntryMetaItem[];
}

export default defineEventHandler(async (_event) => {
    const client = useBcmsPrivate();
    const entries = (await client.entry.getAll('blog')) as BlogEntry[];
    const result: BlogsResponse = {
        items: entries.map((entry) => {
            return entry.meta.en as BlogEntryMetaItem;
        }),
    };
    return result;
});
