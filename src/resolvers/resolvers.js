import User from '../models/User';

export const resolvers = {
    Query: {
        getUsers: async () => await User.find(),
        getUser: async (_, { id }) => await User.findById(id)
    },

    Mutation: {
        createUser: async (_, { nickname, fullname, phone, city }) => {
            const newUser = new User({
                nickname, fullname, phone, city
            })
            return await newUser.save()
        }, 
        deleteUser: async (_, { id }) => await User.findByIdAndDelete(id)
    }
}