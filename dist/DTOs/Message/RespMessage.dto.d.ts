export declare class ResMessage {
    Message: string;
    Value: object;
    Success: boolean;
    Error?: string;
    resultOK(msg: string): void;
    resultFail(msg: string): void;
}
