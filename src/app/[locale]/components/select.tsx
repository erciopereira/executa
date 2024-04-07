/* eslint-disable prettier/prettier */
"use client";
import * as PrimitiveSelect from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export function Select() {
  const t = useTranslations("Index");
  const propsOptions = [
    {
      name: t("contact-area.form.options.exclusive"),
      value: "exclusive",
    },
    {
      name: t("contact-area.form.options.expertise"),
      value: "expertise",
    },
    {
      name: t("contact-area.form.options.executive"),
      value: "executive",
    },
    {
      name: t("contact-area.form.options.executiveco"),
      value: "executiveco",
    },
    {
      name: t("contact-area.form.options.extreme"),
      value: "extreme",
    },
    {
      name: t("contact-area.form.options.expert"),
      value: "expert",
    },
  ];
  return (
    <PrimitiveSelect.Root defaultValue="apple">
      <PrimitiveSelect.Trigger className="flex justify-between items-center h-12 text-black w-full text-3xl px-3 py-2 border">
        <PrimitiveSelect.Value />
        <PrimitiveSelect.Icon>
          <ChevronDown className="h-5 w-5 text-black" />
        </PrimitiveSelect.Icon>
      </PrimitiveSelect.Trigger>
      <PrimitiveSelect.Portal>
        <PrimitiveSelect.Content
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] border text-black text-3xl bg-gray-ligth font-bold cursor-pointer "
        >
          <PrimitiveSelect.Viewport>
            {propsOptions.map((item) => (
              <PrimitiveSelect.Item
                key={item.value}
                value={item.value}
                className="focus:outline-none hover:bg-gray-dark hover:text-button-text-color px-3 py-2"
              >
                <PrimitiveSelect.ItemText>{item.name}</PrimitiveSelect.ItemText>
              </PrimitiveSelect.Item>
            ))}
          </PrimitiveSelect.Viewport>
        </PrimitiveSelect.Content>
      </PrimitiveSelect.Portal>
    </PrimitiveSelect.Root>
  );
}
