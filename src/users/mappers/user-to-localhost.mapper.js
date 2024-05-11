import { User } from "../models/users";

/**
 *
 * @param {User} user
 */
export const userModelToLocalhost = (user) => {
  const { id, isActive, balance, avatar, firstName, lastName, gender } = user;
  return {id, isActive, balance, avatar, first_Name: firstName, last_name: lastName, gender}
};
