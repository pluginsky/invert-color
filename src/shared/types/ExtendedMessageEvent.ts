import type { Options } from './Options';

interface MessageData {
  readonly selected?: Options;
}

interface CancelMessage {
  readonly type: 'cancel';
}

interface SaveMessage {
  readonly type: 'save';
  readonly data: MessageData;
}

interface SaveInvertMessage {
  readonly type: 'save-invert';
  readonly data: MessageData;
}

interface InvertMessage {
  readonly type: 'invert';
  readonly data: MessageData;
}

interface GetSettingMessage {
  readonly type: 'get-settings';
  // TODO extracto object
  readonly data?: {
    readonly selected: Record<string, string[]>;
  };
}

interface InvertImageMessage {
  readonly type: 'invert-image';
  // TODO extracto object
  readonly data: {
    readonly bytes: Uint8Array;
  };
}

export type PluginMessage =
  | CancelMessage
  | SaveMessage
  | SaveInvertMessage
  | InvertMessage
  | GetSettingMessage
  | InvertImageMessage;
