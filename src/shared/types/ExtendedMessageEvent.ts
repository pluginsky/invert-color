import type { Options } from './Options';

type GetSettingsMessage = {
  readonly type: 'get-settings';
  readonly data?: Options;
};

type CancelMessage = { readonly type: 'cancel' };

type SaveData = {
  readonly selected: Options;
};

type SaveMessage = {
  readonly type: 'save';
  readonly data: SaveData;
};

type SaveInvertMessage = {
  readonly type: 'save-invert';
  readonly data: SaveData;
};

export type PluginMessage =
  | GetSettingsMessage
  | CancelMessage
  | SaveMessage
  | SaveInvertMessage;

export type ExtendedMessageEvent = MessageEvent<{
  readonly pluginMessage: PluginMessage;
}>;
