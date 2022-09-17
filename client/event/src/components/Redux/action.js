import axios from "axios";

export const isloaded = () => ({
  type: "load",
});
export const createEventFrom = (form, navigate) => async (dispatch) => {
  dispatch(isloaded());
  try {
    let res = await axios.post(`http://localhost:8080`, form);
    navigate("/view");
  } catch (e) {
    return e;
  }
};

export const getData = (payload) => {
  return { type: "getData", payload };
};
export const showAllData = () => async (dispatch) => {
  dispatch(isloaded());
  try {
    let { data } = await axios.get(`http://localhost:8080/data`);
    dispatch(getData(data));

    // return res;
  } catch (e) {
    return e;
  }
};

export const filterData = (params, setParam) => (dispatch) => {
  for (let k in params) {
    if (params[k] === "") {
      delete params[k];
    }
  }

  setParam(params);
  dispatch(isloaded());
  axios
    .get(`http://localhost:8080/data/filter`, {
      params: { ...params },
    })
    .then((response) => {
      dispatch(getData(response.data));
    });
};

export const assendingsort = (payload) => ({
  type: "assiending",
  payload,
});
export const deassendingsort = (payload) => ({
  type: "deassiending",
  payload,
});
export const handleSortDate = (res, state, setstate) => (dispatch) => {
  dispatch(isloaded());
  if (state) {
    dispatch(assendingsort(res));
  } else {
    dispatch(deassendingsort(res));
  }
  setstate(!state);
};
