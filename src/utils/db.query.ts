
const commonQuery = function(){};
/**
 * It use to add new data with collection.
 */
commonQuery.prototype.add = async (collectionName:any, fields)=>{
    return await collectionName.create(fields);
}

/**
 * It use to get data based on whereClouse
 */
commonQuery.prototype.get = async (collectionName:any, whereClaouse, selectField)=>{
    return await collectionName.findOne(whereClaouse).select(selectField).lean();
}

/**
 * It use to delete data based on whereClouse
 */
 commonQuery.prototype.get = async (collectionName:any, whereClaouse, selectField)=>{
    return await collectionName.findOneAndRemove(whereClaouse).select(selectField).lean();
}


 export const commonDbQuery = new commonQuery();

