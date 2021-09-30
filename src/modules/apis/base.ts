import { Uri } from "../../types";

function convertUri(uri: Uri): string {
  /***
   * convert type uri to RequestInfor
   */
  var _scheme: string = uri.scheme === undefined ? "http" : uri.scheme;
  var _host: string = uri.host === undefined ? "localhost" : uri.host;
  var _port: string = uri.port === undefined ? "" : `:${uri.port}`;
  var _path: string = "";
  var _queryParameter: string = "";
  if (uri.path !== undefined && uri.path.length !== 0)
    uri.path.forEach((element) => {
      _path += `/${element}`;
    });
  if (uri.queryParameter !== undefined && uri.queryParameter.length !== 0) {
    uri.queryParameter.forEach((element) => {
      _queryParameter += `&${element.key}=${element.value}`;
    });
    _queryParameter = `?${_queryParameter.substring(1)}`;
  }
  return `${_scheme}://${_host}${_port}${_path}${_queryParameter}`;
}

function callAPI(uri: Uri, requestInit?: RequestInit): Promise<Response> {
  return fetch(convertUri(uri), requestInit);
}

export { callAPI };
