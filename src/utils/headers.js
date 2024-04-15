import authToken from './authtoken';

export default {
  get: async () => {
    const token = await authToken.get();
    return {
      authorization: (token) || '',
    };
  },
};
