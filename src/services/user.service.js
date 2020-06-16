import {getStorage} from "./storage.service";

export const isHasRole = (nameRole) => {
  const userInfo = getStorage("userInfo");

  return (
    userInfo.authorities &&
    userInfo.authorities.some(({authority}) => nameRole.includes(authority))
  );
};
