"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResMessage = void 0;
class ResMessage {
    constructor() {
        this.Message = 'No se logró completar la petición';
        this.Value = null;
        this.Success = false;
        this.Error = '';
    }
    resultOK(msg) {
        this.Message = msg;
        this.Success = true;
    }
    resultFail(msg) {
        this.Message = msg;
        this.Success = false;
    }
}
exports.ResMessage = ResMessage;
//# sourceMappingURL=RespMessage.dto.js.map