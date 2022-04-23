// import { useQuery } from "@apollo/client";
// import { GET_CATEGORIES, GET_CURRENCIES } from "../../Constants";









// export const CATEGORIES = "HEADER::CATEGORIES"
// export const CURRENCIES = "HEADER::CURRENCIES"

// export const Test = async () => {
//     const { data } = await useQuery(GET_CURRENCIES);
//     return data
// }

// export const categories = (data) => ({
//     type: CATEGORIES,
//     payload: Test()
// })



// import { onChildAdded, onChildRemoved } from "firebase/database";
// import { chatsRef } from "../../services/firebase";

// export const ADD_CHAT = "CHATS::ADD_CHAT";
// export const DELETE_CHAT = "CHATS::DELETE_CHAT";

// export const deleteChat = (id) => ({
//     type: DELETE_CHAT,
//     payload: id,
// })

// export const addChat = (id, name) => ({
//     type: ADD_CHAT,
//     payload: {
//         id,
//         name
//     }
// })

// export const initChatsTracking = () => (dispatch) => {
//     onChildAdded(chatsRef, (snapshot) => {
//         dispatch(addChat(snapshot.val().id, snapshot.val().name))
//     })
//     onChildRemoved(chatsRef, (snapshot) => {
//         dispatch(deleteChat(snapshot.val().id))
//     })
// }