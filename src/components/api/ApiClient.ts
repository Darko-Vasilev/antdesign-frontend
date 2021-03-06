/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.2.5.0 (NJsonSchema v9.13.37.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import ApiClientBase from './ApiClientBase';

export class AccountClient extends ApiClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : this.getBaseUrl("https://localhost:44300");
    }

    registerIssuer(model: RegisterModel): Promise<SwaggerResponse<any | null>> {
        let url_ = this.baseUrl + "/api/account/registerissuer";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(model);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processRegisterIssuer(_response);
        });
    }

    protected processRegisterIssuer(response: Response): Promise<SwaggerResponse<any | null>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <any>JSON.parse(_responseText, this.jsonParseReviver);
            return new SwaggerResponse(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<SwaggerResponse<any | null>>(new SwaggerResponse(status, _headers, <any>null));
    }

    registerInvestor(model: RegisterModel): Promise<SwaggerResponse<any | null>> {
        let url_ = this.baseUrl + "/api/account/registerinvestor";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(model);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processRegisterInvestor(_response);
        });
    }

    protected processRegisterInvestor(response: Response): Promise<SwaggerResponse<any | null>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <any>JSON.parse(_responseText, this.jsonParseReviver);
            return new SwaggerResponse(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<SwaggerResponse<any | null>>(new SwaggerResponse(status, _headers, <any>null));
    }
}

export class SampleDataClient extends ApiClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super();
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : this.getBaseUrl("https://localhost:44300");
    }

    weatherForecasts(): Promise<SwaggerResponse<WeatherForecast[] | null>> {
        let url_ = this.baseUrl + "/api/sampledata/weatherforecasts";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };
        
        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processWeatherForecasts(_response);
        });
    }

    protected processWeatherForecasts(response: Response): Promise<SwaggerResponse<WeatherForecast[] | null>> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <WeatherForecast[]>JSON.parse(_responseText, this.jsonParseReviver);
            return new SwaggerResponse(status, _headers, result200);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<SwaggerResponse<WeatherForecast[] | null>>(new SwaggerResponse(status, _headers, <any>null));
    }
}

export interface RegisterModel {
    userName: string;
    password: string;
    returnUrl?: string | undefined;
}

export interface WeatherForecast {
    dateFormatted?: string | undefined;
    temperatureC: number;
    summary?: string | undefined;
    temperatureF: number;
}

export class SwaggerResponse<TResult> {
    status: number;
    headers: { [key: string]: any; };
    result: TResult;
        
    constructor(status: number, headers: { [key: string]: any; }, result: TResult) 
    {
        this.status = status;
        this.headers = headers;
        this.result = result;
    }
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    throw new SwaggerException(message, status, response, headers, result);
}