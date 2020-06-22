import { XmlContent, XmlElement } from "xml-core";

import {dateFormat} from "../dateformat";

import { XmlXades } from "./xml";
import { XadesObject } from "./xml_base";

@XmlElement({
    localName: "XadesDateTime",
    namespaceURI: XmlXades.NamespaceURI,
    prefix: XmlXades.DefaultPrefix,
})
export class XadesDateTime extends XadesObject {

    @XmlContent({
        defaultValue: new Date(),
        required: true,
    })
    public Value: Date;

    /**
     * Format of the datetime value
     *
     * Check [dateformat]{@link https://www.npmjs.com/package/dateformat} for supported formatting options.
     * If not specified, [Date#toISOString()]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString} is used.
     */
    public Format?: string;

    protected OnLoadXml(e: Element) {
        if (e.textContent) {
            this.Value = new Date(e.textContent);
        }
    }

    protected OnGetXml(e: Element) {
        // TEST
        console.log('TEST Time 2020-06-19T04:04:26.129+07:00')
        e.textContent = '2020-06-19T04:04:26.129+07:00'
        // if (this.Format) {
        //     e.textContent = dateFormat(this.Value, this.Format);
        // } else {
        //     e.textContent = this.Value.toISOString();
        // }
    }

}
