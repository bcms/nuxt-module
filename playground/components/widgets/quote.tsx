import type { PropType } from 'vue';
import type { QuoteWidget as QuoteWidgetType } from '../../../bcms/type/ts';

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
                <div
                    style={`display: flex; flex-direction: column; border-left: 3px solid #ccc; padding-left: 20px;`}
                >
                    <div style={`display: flex; align-items: center;`}>
                        <div>"</div>
                        <BcmsContentManager items={props.data.text.nodes} />
                        <div>"</div>
                    </div>
                    <div style={`font-style: italic;`}>
                        - {props.data.author}
                    </div>
                </div>
            </div>
        );
    },
});
