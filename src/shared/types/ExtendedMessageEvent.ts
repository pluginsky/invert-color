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

interface GetOptionsMessageData {
  readonly selected: Record<string, string[]>;
}

interface GetOptionsMessage {
  readonly type: 'get-options';
  readonly data?: GetOptionsMessageData;
}

interface InvertImageMessageData {
  readonly bytes: Uint8Array;
}

interface InvertImageMessage {
  readonly type: 'invert-image';
  readonly data: InvertImageMessageData;
}

export type PluginMessage =
  | CancelMessage
  | SaveMessage
  | SaveInvertMessage
  | InvertMessage
  | GetOptionsMessage
  | InvertImageMessage;
