export const userQuery = (userId) =>{
  const query =`*[_TYPE == "user" && _id == '${userId}']`
  return query
}
