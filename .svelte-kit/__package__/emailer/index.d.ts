import type { Component, ComponentProps } from "svelte";
export type HTMLConfig = {
  props: {
    [key: string]: string[];
  };
  dir: string;
  lang: string;
  style: string;
};
export default class Emailer {
  props: {
    [key: string]: string[];
  };
  style: string;
  dir: string;
  lang: string;
  head: string;
  htmlBoilerplate: (
    children: string,
    head?: string,
    options?: HTMLConfig,
  ) => string;
  render: <T extends Component<any>>(
    component: T,
    props?: ComponentProps<T>,
    config?: HTMLConfig,
  ) => string;
}
