import type { PropType } from 'vue';
import type { QuoteWidget as QuoteWidgetType } from '../../../bcms/type/ts';
import { BCMSContentManager } from '../../../src/runtime/components/content';

export const QuoteWidget = defineNuxtComponent({
    props: {
        data: {
            type: Object as PropType<QuoteWidgetType>,
            required: true,
        },
    },
    setup(props) {
        return () => (
            <div>
                <quote
                    style={`display: flex; flex-direction: column; border-left: 3px solid #ccc; padding-left: 20px;`}
                >
                    <div style={`display: flex; align-items: center;`}>
                        <div>"</div>
                        <BCMSContentManager items={props.data.text.nodes} />
                        <div>"</div>
                    </div>
                    <author style={`font-style: italic;`}>
                        - {props.data.author}
                    </author>
                </quote>
            </div>
        );
    },
});
