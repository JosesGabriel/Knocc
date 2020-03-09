import createRepository from "~/api/repository";
import roomRepository from "~/api/room/roomRepository";

export default (ctx, inject) => {
  const initApiRepository = createRepository(ctx.$axios);

  const api = {
    authentication: {
      register: initApiRepository("/register"),
      login: initApiRepository("/login")
    },
    rooms: roomRepository(ctx.$axios)
  };
  inject("api", api);
};
