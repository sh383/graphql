// query 를 해결하는 방법을 프로그래밍
import { getById, people } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
  },
};

export default resolvers;
