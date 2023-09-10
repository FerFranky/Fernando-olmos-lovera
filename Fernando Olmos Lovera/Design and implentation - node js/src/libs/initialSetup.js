import { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_USERNAME } from "../config.js"
import Role from "../models/Role.js"
import User from "../models/User.js"

export const createRoles = async () => {
    const countRoles = await Role.estimatedDocumentCount()
    if (countRoles > 0) return

    try {
        const values = await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'moderator' }).save(),
            new Role({ name: 'admin' }).save()
        ])
    } catch (error) {
        console.log(error);
    }
}

export const createAdmin = async () => {
    // check for an existing admin user
    const userFound = await User.findOne({ email: ADMIN_EMAIL });
    if (userFound) return;
  
    // get roles _id
    const roles = await Role.find({ name: { $in: ["admin", "moderator"] } });
  
    // create a new admin user
    const newUser = await User.create({
      username: ADMIN_USERNAME,
      email: ADMIN_EMAIL,
      password: await User.encryptPassword(ADMIN_PASSWORD),
      roles: roles.map((role) => role._id),
    });
  };