import type { Options } from './Options';

type MessageData = {
  readonly selected?: Options;
};

export type PluginMessage =
  | { readonly type: 'cancel' }
  | { readonly type: 'save'; data: MessageData }
  | { readonly type: 'save-invert'; data: MessageData }
  | { readonly type: 'invert'; data: MessageData }
  | {
      readonly type: 'get-settings';
      data?: { readonly selected: Record<string, string[]> };
    }
  | { readonly type: 'invert-image'; data?: { readonly bytes: Uint8Array } }; // TODO
