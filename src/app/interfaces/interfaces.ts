export interface HttpCall {
  url: string;
  method: 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH';
  // headers?: HttpHeaders;
  body?: any;
  urlParams?: { name: string, value: any }[];
  urlAltPath?: boolean;
  loader?: boolean;
  cache?: boolean;
  addToCache?: boolean;
  fullApi?: boolean;
  // noErrorDisplay?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  noAuth?: boolean;
  fileRequest?: boolean;
  noErrorHandle?: boolean;
  observe?: 'body' | 'events' | 'response';
  fileUpload?: boolean;
}