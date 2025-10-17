import type {
    BCMSEntryContentParsedItem,
    TestEntry,
    TestEntryMetaItem,
} from '../../../bcms/type/ts';

export interface HomeRespones {
    meta: TestEntryMetaItem;
    content: BCMSEntryContentParsedItem[];
}

export default defineEventHandler(async (_event) => {
    const client = useBcmsPrivate();
    const entries = (await client.entry.getAll('test')) as TestEntry[];
    const result: HomeRespones = {
        meta: entries[0].meta.en as TestEntryMetaItem,
        content: entries[0].content.en || [],
    };
    return result;
});
