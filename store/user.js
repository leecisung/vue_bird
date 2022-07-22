export const state = () => ({
  me: null, //회원정보 없으면 null
});

export const mutations ={ //비동기 작업 불가, 단순 동기적 작업만 가능
  setMe(state, payload) { //payload는 state를 어떻게 바꿀지가 들어가 있음
    state.me = payload;
  },
};

export const actions = { //복잡한 비동기 작업 가능
  signUp(context, payload) { 
    //context는 객체로 구조분해가 가능 
    // commit, dispatch, state...등등 console.log(context) 해봐라
    
    //서버에 회원가입 요청을 보내는 부분
    commit('setMe', payload);
  },
  logIn(context, payload) {
    commit('setMe', payload);
  },
  logOut(context, payload) {
    commit('setMe', null);
  },
}