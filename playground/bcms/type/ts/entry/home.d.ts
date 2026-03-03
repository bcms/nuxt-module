import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';

export interface HomeEntryMetaItem {
    title: string;
    slug: string;
}

export interface HomeEntryMeta {
    en?: HomeEntryMetaItem;
}

export interface HomeEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: HomeEntryMeta;
    content: BCMSEntryContentParsed;
}