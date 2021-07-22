import { Uri } from "../type/uri";
import { } from "react";


function convertUri(uri: Uri): string {
    return "";
}


function callApi(uri: Uri, requestInit?: RequestInit): Promise<Response> {
    return fetch(convertUri(uri), requestInit);
}



export {
    callApi,
}