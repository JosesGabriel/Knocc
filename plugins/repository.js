import createRepository from "~/api/repository";

export default (ctx, inject) => {
  const initApiRepository = createRepository(ctx.$axios);

  const api = {
    authentication: {
      register: initApiRepository("/register"),
      login: initApiRepository("/login")
    },
    publicRooms: initApiRepository("/publicRooms")
  };
  inject("api", api);
};
