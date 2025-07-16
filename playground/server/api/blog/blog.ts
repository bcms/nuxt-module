import type {
    BCMSEntryContentParsedItem,
    BlogEntry,
    BlogEntryMetaItem,
} from '../../../../bcms/type/ts';
import { tryCatch } from '@thebcms/utils/try-catch';

export interface BlogResponse {
    meta: BlogEntryMetaItem;
    content: BCMSEntryContentParsedItem[];
}

export default defineEventHandler(async (event) => {
    const client = useBcmsPrivate();
    const params = getRouterParams(event);
    const [entry, err] = await tryCatch(
        async () =>
            (await client.entry.getBySlug(params.slug, 'blog')) as BlogEntry,
    );
    if (err) {
        console.warn(err);
        throw createError({
            status: 404,
            message: `Blog with slug ${params.slug} not found`,
        });
    }
    const result: BlogResponse = {
        meta: entry.meta.en as BlogEntryMetaItem,
        content: entry.content.en as BCMSEntryContentParsedItem[],
    };
    return result;
});
