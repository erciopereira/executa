/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction } from "react";

/* eslint-disable prettier/prettier */
export type FormData = {
  name: string;
  email: string;
  company: string;
  whatsapp: string;
  service: string;
};

export function sendMail(
  data: FormData,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setResponseError: Dispatch<SetStateAction<boolean>>,
  setResponseSuccess: Dispatch<SetStateAction<boolean>>,
  setCloseMessage: Dispatch<SetStateAction<string>>
) {
  const apiEndpoint = "/api/email";
  setLoading(true);
  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      setLoading(false);
      if (response.error) setResponseError(true);
      else setResponseSuccess(true);
      setTimeout(() => {
        setCloseMessage("duration-500 scale-0");
      }, 6000);
      setTimeout(() => {
        setResponseSuccess(false);
        setResponseError(false);
        setCloseMessage("");
      }, 6500);
    })
    .catch(() => {
      setLoading(false);
      setResponseError(true);
      setTimeout(() => {
        setCloseMessage("duration-500 scale-0");
      }, 6000);
      setTimeout(() => {
        setResponseSuccess(false);
        setResponseError(false);
        setCloseMessage("");
      }, 6500);
    });
}
