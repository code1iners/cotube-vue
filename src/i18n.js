import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  locale: "ko", // set locale
  fallbackLocale: "ko", // set fallback locale
  allowComposition: true,
  messages: {
    ko: {
      message: {
        hello: "헬로 월드",
      },
    },
    en: {
      message: {
        hello: "hello world",
      },
    },
  },
});
