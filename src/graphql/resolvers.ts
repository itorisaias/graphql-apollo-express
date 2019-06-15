import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
    Query: {
        me: (_: void, args: void): { username: string } => {
            console.log({ args });
            return {
                username: 'Robin Wieruch',
            };
        },
    },
}

export default resolverMap;
