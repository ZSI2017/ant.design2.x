import dva from "dva";

export default {
    namespace:'products',
    state:[],
    reduces:{
       'delete'(state,{payload:id}) {
           return state.filter(item => item.id !== id);
       },
    },
}
