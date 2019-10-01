import User from "../../../entities/User";
import {
    SignInMutationArgs, SignInResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    SignIn: async (
      _,
      args: SignInMutationArgs
    ): Promise<SignInResponse> => {
      const { id, password } = args;
      try {
        const user = await User.findOne({ id, password });
        if (!user) {
          return {
            ok: false,
            error: "No user found with that id",
            token: null
          };
        } else {
            return {
                ok: true,
                error: null,
                token: "good"
            }
        }
        // const checkPassword = await user.comparePassword(password);
        // if (checkPassword) {
        //   return {
        //     ok: true,
        //     error: null,
        //     token: "Coming soon"
        //   };
        // } else {
        //   return {
        //     ok: false,
        //     error: "Wrong password",
        //     token: null
        //   };
        // }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};
export default resolvers;