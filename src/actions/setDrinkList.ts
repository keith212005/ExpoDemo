import { useFetch } from "hooks";
import { REDUCER_TYPE } from "@constants";

export const setDrinkList = (newList: any) => ({
  type: REDUCER_TYPE.SET_DRINK_LIST,
  data: newList,
});

// export const getBreedsList = (params: any) => {
//   const { limit, page } = params;
//   return (dispatch: any) => {
//     return new Promise((resolve) => {
//       const param = {
//         url: API.GET_BREEDS(limit, page),
//         method: 'GET',
//       };
//       callApi([param]).then((response: any) => {
//         addFavsToBreedList(response[0]).then((newBreedList) => {
//           resolve(true);
//           return dispatch({
//             type: REDUCER_TYPE.GET_BREEDS_LIST,
//             data: newBreedList,
//           });
//         });
//       });
//     });
//   };
// };

export const searchDrinks = (searchString: any) => {
  // const { data, loading, error } = useFetch(
  //   "www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
  // );
};
