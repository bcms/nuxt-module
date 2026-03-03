import type { QuoteWidget } from './widget/quote';

import { EntryContentNodeTypeName, EntryContentNodeAttrs } from '@thebcms/types';

export interface BCMSEntryContentParsedItem {
    type: EntryContentNodeTypeName;
    widgetName?: string;
    attrs?: EntryContentNodeAttrs;
    value: string
    | QuoteWidget;
}

export interface BCMSEntryContentParsed {
    en?: BCMSEntryContentParsedItem[];
}
