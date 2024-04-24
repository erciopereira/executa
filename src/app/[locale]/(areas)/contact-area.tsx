/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
"use client";
import { sendMail } from "@/utils/send-email";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../(components)/button";
import { Select } from "../../(components)/select";

export type FormData = {
  name: string;
  email: string;
  company: string;
  whatsapp: string;
  service: string;
  country: string;
};

export function ContactArea() {
  const t = useTranslations("Index");
  const [loading, setLoading] = useState<boolean>(false);
  const [responseError, setResponseError] = useState<boolean>(false);
  const [responseSuccess, setResponseSuccess] = useState<boolean>(false);
  const [closeMessage, setCloseMessage] = useState<string>("");
  const [valueSelected, setValueSelected] = useState<string>("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<FormData>();

  const submit: SubmitHandler<FormData> = (data: FormData) => {
    sendMail(
      data,
      setLoading,
      setResponseError,
      setResponseSuccess,
      setCloseMessage
    );
  };

  function handleSelect(val: string) {
    setValue("service", val);
    setValueSelected(val);
    clearErrors("service");
  }

  useEffect(() => {
    if (responseSuccess) {
      setValueSelected("");
      reset();
    }
  }, [responseSuccess]);

  return (
    <div className="mt-top-30 flex flex-col items-center">
      <div className="text-5xl font-bold leading-snug text-center max-570:text-[8vw]">
        {t("contact-area.title")}
      </div>
      <div className="text-4xl italic mt-10 text-center max-570:text-[6vw]">
        {t("contact-area.subtitle")}
      </div>
      <form
        className="mt-10 w-full flex flex-col items-center gap-10"
        onSubmit={handleSubmit(submit)}
      >
        <input
          hidden
          {...register("service", {
            required: t("contact-area.form.errors.service"),
          })}
        />
        <div className="w-9/12 flex flex-col items-center max-790:w-full">
          <input
            {...register("name", {
              required: t("contact-area.form.errors.name"),
            })}
            type="text"
            placeholder={t("contact-area.form.name")}
            className="w-full block font-bold text-3xl px-3 py-2 bg-transparent placeholder:text-black h-full text-black focus:outline-none border focus:ring-black focus:ring-2"
          />
          {errors?.name && (
            <div className="text-red-700 mt-2 w-full">
              {errors?.name.message}
            </div>
          )}
        </div>
        <div className="w-9/12 flex flex-col items-center max-790:w-full">
          <input
            {...register("whatsapp", {
              required: t("contact-area.form.errors.whatsapp"),
            })}
            type="text"
            placeholder={t("contact-area.form.whatsapp")}
            className="w-full block font-bold text-3xl px-3 py-2 bg-transparent placeholder:text-black h-full text-black focus:outline-none border focus:ring-black focus:ring-2"
          />
          {errors?.whatsapp && (
            <div className="text-red-700 mt-2 w-full">
              {errors?.whatsapp.message}
            </div>
          )}
        </div>
        <div className="w-9/12 flex flex-col items-center max-790:w-full">
          <input
            {...register("country", {
              required: t("contact-area.form.errors.country"),
            })}
            type="text"
            placeholder={t("contact-area.form.country")}
            className="w-full block font-bold text-3xl px-3 py-2 bg-transparent placeholder:text-black h-full text-black focus:outline-none border focus:ring-black focus:ring-2"
          />
          {errors?.country && (
            <div className="text-red-700 mt-2 w-full">
              {errors?.country.message}
            </div>
          )}
        </div>
        <div className="w-9/12 flex flex-col items-center max-790:w-full">
          <input
            {...register("email", {
              required: t("contact-area.form.errors.email"),
            })}
            type="email"
            placeholder={t("contact-area.form.email")}
            className="w-full block font-bold text-3xl px-3 py-2 bg-transparent placeholder:text-black h-full text-black focus:outline-none border focus:ring-black focus:ring-2"
          />
          {errors?.email && (
            <div className="text-red-700 mt-2 w-full">
              {errors?.email.message}
            </div>
          )}
        </div>
        <div className="w-9/12 flex flex-col items-center max-790:w-full">
          <input
            {...register("company", {
              required: t("contact-area.form.errors.company"),
            })}
            type="text"
            placeholder={t("contact-area.form.company")}
            className="w-full block font-bold text-3xl px-3 py-2 bg-transparent placeholder:text-black h-full text-black focus:outline-none border focus:ring-black focus:ring-2"
          />
          {errors?.company && (
            <div className="text-red-700 mt-2 w-full">
              {errors?.company.message}
            </div>
          )}
        </div>
        <div className="w-9/12 flex flex-col items-center max-790:w-full">
          <div className="w-full font-bold text-3xl flex flex-col gap-5">
            <label>{t("contact-area.form.servise")}</label>
            <Select handleSelect={handleSelect} valueSelected={valueSelected} />
          </div>
          {errors?.service && (
            <div className="text-red-700 mt-2 w-full">
              {errors?.service.message}
            </div>
          )}
        </div>
        <Button
          disabled={loading}
          name={t("contact-area.form.send")}
          type="submit"
          width="w-9/12 max-790:w-full"
          showLoader={loading}
        />
      </form>
      {responseError && (
        <div
          className={`${closeMessage} bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded w-9/12 mt-10`}
        >
          <strong className="font-bold">
            {t("contact-area.form.messages_send.message_error_1")}
          </strong>
          <span className="block sm:inline">
            {t("contact-area.form.messages_send.message_error_2")}
          </span>
        </div>
      )}
      {responseSuccess && (
        <div
          className={`${closeMessage} bg-red-100 border border-green-400 text-green-700 px-4 py-3 rounded w-9/12 mt-10`}
        >
          <strong className="font-bold">
            {t("contact-area.form.messages_send.message_success_1")}
          </strong>
          <span className="block sm:inline">
            {t("contact-area.form.messages_send.message_success_2")}
          </span>
        </div>
      )}
    </div>
  );
}
