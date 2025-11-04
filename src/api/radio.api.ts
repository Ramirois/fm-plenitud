import axios from "axios";

const STREAM_URL = "https://sc.sudacastream.com/fmplenitud/";

export const checkRadioStream = async () => {
  // Simple GET para comprobar que el servidor responde
  return axios.get(STREAM_URL, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
};

export { STREAM_URL };