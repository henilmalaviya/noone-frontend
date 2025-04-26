export interface paths {
    "/v1/accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["postV1Accounts"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/accounts/{accountId}/sessions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["postV1AccountsByAccountIdSessions"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["postV1Channels"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/channels/{channelId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getV1ChannelsByChannelId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/channels/{channelId}/polls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getV1ChannelsByChannelIdPolls"];
        put?: never;
        post: operations["postV1ChannelsByChannelIdPolls"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/channels/{channelId}/polls/{pollId}/vote": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["postV1ChannelsByChannelIdPollsByPollIdVote"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/channels/{channelId}/polls/{pollId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getV1ChannelsByChannelIdPollsByPollId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    postV1Accounts: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                        };
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                        };
                    };
                    "text/plain": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                        };
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
        };
    };
    postV1AccountsByAccountIdSessions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                accountId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                        };
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                        };
                    };
                    "text/plain": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                        };
                    };
                };
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
        };
    };
    postV1Channels: {
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
                    description?: string;
                    expiresAt?: Record<string, never> | string | number;
                };
                "multipart/form-data": {
                    name: string;
                    description?: string;
                    expiresAt?: Record<string, never> | string | number;
                };
                "text/plain": {
                    name: string;
                    description?: string;
                    expiresAt?: Record<string, never> | string | number;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                            expiresAt?: Record<string, never> | string | number;
                        };
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                            expiresAt?: Record<string, never> | string | number;
                        };
                    };
                    "text/plain": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                            expiresAt?: Record<string, never> | string | number;
                        };
                    };
                };
            };
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
        };
    };
    getV1ChannelsByChannelId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                            name: string;
                            description: string | null;
                            createdAt: Record<string, never> | string | number;
                            expiresAt: (Record<string, never> | string | number) | null;
                        };
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                            name: string;
                            description: string | null;
                            createdAt: Record<string, never> | string | number;
                            expiresAt: (Record<string, never> | string | number) | null;
                        };
                    };
                    "text/plain": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                            name: string;
                            description: string | null;
                            createdAt: Record<string, never> | string | number;
                            expiresAt: (Record<string, never> | string | number) | null;
                        };
                    };
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
        };
    };
    getV1ChannelsByChannelIdPolls: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channelId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                            title: string;
                            options: {
                                id: string;
                                label: string;
                                voteCount: number;
                            }[];
                            createdAt: Record<string, never> | string | number;
                            expiresAt: (Record<string, never> | string | number) | null;
                        }[];
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                            title: string;
                            options: {
                                id: string;
                                label: string;
                                voteCount: number;
                            }[];
                            createdAt: Record<string, never> | string | number;
                            expiresAt: (Record<string, never> | string | number) | null;
                        }[];
                    };
                    "text/plain": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                            title: string;
                            options: {
                                id: string;
                                label: string;
                                voteCount: number;
                            }[];
                            createdAt: Record<string, never> | string | number;
                            expiresAt: (Record<string, never> | string | number) | null;
                        }[];
                    };
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
        };
    };
    postV1ChannelsByChannelIdPolls: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channelId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    title: string;
                    options: string[];
                    expiresAt?: Record<string, never> | string | number;
                };
                "multipart/form-data": {
                    title: string;
                    options: string[];
                    expiresAt?: Record<string, never> | string | number;
                };
                "text/plain": {
                    title: string;
                    options: string[];
                    expiresAt?: Record<string, never> | string | number;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                        };
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                        };
                    };
                    "text/plain": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                        };
                    };
                };
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
        };
    };
    postV1ChannelsByChannelIdPollsByPollIdVote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channelId: string;
                pollId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    optionId: string;
                };
                "multipart/form-data": {
                    optionId: string;
                };
                "text/plain": {
                    optionId: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            voteId: string;
                            optionLabel: string;
                        };
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            voteId: string;
                            optionLabel: string;
                        };
                    };
                    "text/plain": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            voteId: string;
                            optionLabel: string;
                        };
                    };
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
        };
    };
    getV1ChannelsByChannelIdPollsByPollId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channelId: string;
                pollId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                            title: string;
                            options: {
                                id: string;
                                label: string;
                                voteCount: string | number;
                            }[];
                            createdAt: Record<string, never> | string | number;
                            expiresAt: (Record<string, never> | string | number) | null;
                        };
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                            title: string;
                            options: {
                                id: string;
                                label: string;
                                voteCount: string | number;
                            }[];
                            createdAt: Record<string, never> | string | number;
                            expiresAt: (Record<string, never> | string | number) | null;
                        };
                    };
                    "text/plain": {
                        /** @constant */
                        error: false;
                        message: string;
                        data: {
                            id: string;
                            title: string;
                            options: {
                                id: string;
                                label: string;
                                voteCount: string | number;
                            }[];
                            createdAt: Record<string, never> | string | number;
                            expiresAt: (Record<string, never> | string | number) | null;
                        };
                    };
                };
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                    "text/plain": {
                        /** @constant */
                        error: true;
                        message: string;
                    };
                };
            };
        };
    };
}