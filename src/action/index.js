import jsonplaceholder from "../api/jsonPlaceholder"
import _ from "lodash";


export const fetchPostsAndUser = () => async (dispatch,getState) => {
    await dispatch(fetchPosts())
    
    const userIds = _.uniq(_.map(getState().posts,"userId"))
    
    userIds.forEach(id => dispatch(fetchUser(id)))


}

export const fetchPosts = () => {
    return async (dispatch) => {
        const responce = await jsonplaceholder.get("/posts")
        dispatch({ type: "FETCH_POSTS", payload: responce.data })
    }

}
export const fetchUser = (id) => {
  return async (dispatch) => {
    const responce = await jsonplaceholder.get(`/users/${id}`)
    dispatch({ type: "FETCH_USER", payload: responce.data })
  }   
} 


// // memoizeing function using lodash so that while fethcing user the network request is not made multiple time
// export const fetchUser = (id) => async dispatch => {
//     _fetchUser(id,dispatch)
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const responce = await jsonplaceholder.get(`/users/${id}`)
//     dispatch({ type: "FETCH_USER", payload: responce.data })
// }) 