"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonDbQuery = void 0;
const commonQuery = function () { };
/**
 * It use to add new data with collection.
 */
commonQuery.prototype.add = (collectionName, fields) => __awaiter(void 0, void 0, void 0, function* () {
    return yield collectionName.create(fields);
});
/**
 * It use to get data based on whereClouse
 */
commonQuery.prototype.get = (collectionName, whereClaouse, selectField) => __awaiter(void 0, void 0, void 0, function* () {
    return yield collectionName.findOne(whereClaouse).select(selectField).lean();
});
exports.commonDbQuery = new commonQuery();
//# sourceMappingURL=db.query.js.map