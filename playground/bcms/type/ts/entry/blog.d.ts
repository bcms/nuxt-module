import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';
import type { PropMediaDataParsed } from '@thebcms/types';

export interface BlogEntryMetaItem {
    title: string;
    slug: string;
    cover_image: PropMediaDataParsed;
}

export interface BlogEntryMeta {
    en?: BlogEntryMetaItem;
}

export interface BlogEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: BlogEntryMeta;
    content: BCMSEntryContentParsed;
}