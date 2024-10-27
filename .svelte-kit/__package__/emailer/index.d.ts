import type { Component, ComponentProps } from "svelte";
export default class Emailer {
    props: {
        [key: string]: string[];
    };
    style: string;
    dir: string;
    lang: string;
    htmlBoilerplate: (children: string, props: {
        [key: string]: string[];
    }, dir?: string, lang?: string, style?: string) => string;
    render: <T extends Component<any>>(component: T, props: ComponentProps<T>) => string;
}
