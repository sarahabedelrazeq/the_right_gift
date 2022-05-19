import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_URL } from "constants";
import { useLanguage, useToggle } from "hooks";

export default function useFetch(endpoint, method = "GET") {
  const language = useLanguage();
  const { access_token } = useSelector((state) => state.auth);
  const [loading, toggleLoading] = useToggle(false);
  const [result, setResult] = React.useState([]);
  const [errors, setErrors] = React.useState([]);

  const request = React.useCallback(
    async (body, params, onSuccess, onError) => {
      toggleLoading();
      try {
        const response = await axios.request({
          method,
          baseURL: API_URL,
          url: `${endpoint}${params ? params : ""}`,
          headers: {
            "Content-Type": "application/json",
            Language: language.lang,
            ...(access_token &&
              access_token !== "" &&
              access_token.length > 15 && {
                Authorization: `Bearer ${access_token}`,
              }),
          },
          ...(method === "POST" &&
            body && {
              data: body,
            }),
        });
        setResult(response.data);
        if (response.data.data && onSuccess) {
          return onSuccess(response.data);
        }
        if (onError) {
          onError(response.data.error);
        }
      } catch (error) {
        setErrors(error.message);
        if (onError) {
          onError();
        }
      } finally {
        toggleLoading();
      }
    },
    [endpoint, method, toggleLoading, language, access_token]
  );

  return [{ loading, result, errors }, request];
}
