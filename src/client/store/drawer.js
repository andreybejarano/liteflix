const drawerStore = {
  state: {
    open: false
  },
  mutations: {
    setShow(state) {
      state.open = !state.open;
      return state.open;
    }
  },
  actions: {
    showDrawer(context) {
      context.commit('setShow');
      return this.state.drawer.open;
    }
  }
};

export default drawerStore;
