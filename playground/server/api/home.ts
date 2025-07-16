import type {
    BCMSEntryContentParsedItem,
    HomeEntry,
    HomeEntryMetaItem,
} from '../../../bcms/type/ts';

export interface HomeRespones {
    meta: HomeEntryMetaItem;
    content: BCMSEntryContentParsedItem[];
}

export default defineEventHandler(async (_event) => {
    const client = useBcmsPrivate();
    const entries = (await client.entry.getAll('home')) as HomeEntry[];
    const result: HomeRespones = {
        meta: entries[0].meta.en as HomeEntryMetaItem,
        content: entries[0].content.en || [],
    };
    return result;
});
