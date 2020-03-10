// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here

export default $axios => resource => ({
  index(params) {
    return $axios.$get(`${resource}`, { params });
  },
  show(id, params) {
    return $axios.$get(`${resource}/${id}`, { params });
  },

  create(payload) {
    return $axios.$post(`${resource}`, payload);
  },

  update(id, payload) {
    return $axios.$post(`${resource}/${id}`, payload);
  },

  put(id, payload) {
    return $axios.$put(`${resource}/${id}`, payload);
  },
  // lmao dili ko kabalo unsay iname ani. PUT request ra ni withou ID na identifier since bearer token lang need
  putnoid(payload) {
    return $axios.$put(`${resource}`, payload);
  },

  delete(id) {
    return $axios.$delete(`${resource}/${id}`);
  },

  deletenoid() {
    return $axios.$delete(`${resource}`);
  }
});
