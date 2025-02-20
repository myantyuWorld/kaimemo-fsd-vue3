/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/kaimemo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * 買い物一覧取得
         * @description 全件取得する
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: components["responses"]["GetKaimemos"];
            };
        };
        put?: never;
        /**
         * 買い物追加
         * @description 買い物を追加する
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        name: string;
                        tag: string;
                    };
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                401: components["responses"]["UnauthorizedError"];
                404: components["responses"]["NotFoundError"];
                default: components["responses"]["GeneralError"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kaimemo/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * 買い物削除
         * @description 買い物を削除する
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                401: components["responses"]["UnauthorizedError"];
                404: components["responses"]["NotFoundError"];
                default: components["responses"]["GeneralError"];
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kaimemo/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * 買い物集計
         * @description 買い物を集計する
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: components["responses"]["GetKaimemoSummary"];
            };
        };
        put?: never;
        /**
         * 買い物集計
         * @description 買い物を集計する
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /** @example 食費 */
                        tag: string;
                        /** @example 2020-01-01 */
                        date: string;
                        /** @example 1000 */
                        amount: number;
                    };
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                401: components["responses"]["UnauthorizedError"];
                404: components["responses"]["NotFoundError"];
                default: components["responses"]["GeneralError"];
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/kaimemo/summary/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * 買い物削除
         * @description 買い物を削除する
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                401: components["responses"]["UnauthorizedError"];
                404: components["responses"]["NotFoundError"];
                default: components["responses"]["GeneralError"];
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        KaimemoSummary: {
            monthlySummaries: components["schemas"]["MonthlySummary"][];
            weeklySummaries: components["schemas"]["WeeklySummary"][];
        };
        TagSummary: {
            [key: string]: number;
        };
        MonthlySummary: {
            month: string;
            /** @example 10000 */
            totalAmount: number;
            tagSummary: components["schemas"]["TagSummary"];
        };
        WeeklySummary: {
            weekStart: string;
            weekEnd: string;
            totalAmount: number;
            items: components["schemas"]["KaimemoAmount"][];
        };
        KaimemoAmount: {
            id: string;
            /** @example 2020-01-01 */
            date: string;
            /** @example 食費 */
            tag: string;
            /** @example 1000 */
            amount: number;
        };
        Kaimemo: {
            id: string;
            name: string;
            tag: string;
            done: boolean;
        };
    };
    responses: {
        /** @description 週次集計 */
        GetKaimemoSummary: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["KaimemoSummary"];
            };
        };
        /** @description 買い物一覧取得 */
        GetKaimemos: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Kaimemo"][];
            };
        };
        /** @description Access token is missing or invalid */
        UnauthorizedError: {
            headers: {
                [name: string]: unknown;
            };
            content?: never;
        };
        /** @description The specified resource was not found */
        NotFoundError: {
            headers: {
                [name: string]: unknown;
            };
            content?: never;
        };
        /** @description Unexpected error */
        GeneralError: {
            headers: {
                [name: string]: unknown;
            };
            content?: never;
        };
    };
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
