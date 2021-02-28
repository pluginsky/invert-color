import type { Options } from './Options';

// TODO export?
// export type PluginMessage = {
//   readonly type: 'get-settings';
//   readonly data?: Options;
// };

// TODO move to shared
export type ExtendedMessageEvent = MessageEvent<{
  readonly pluginMessage: PluginMessage;
}>;

// TODO
// type Data = {
//   readonly selected: Options;
// };

// TODO
export type PluginMessage =
  | { readonly type: 'cancel' }
  | { readonly type: 'save'; data: { selected: Options } }
  | { readonly type: 'save-invert'; data: { selected: Options } }
  | { readonly type: 'invert'; data: { selected: Options } }; // TODO
