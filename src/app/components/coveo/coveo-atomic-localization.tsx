import { i18n } from "@coveo/atomic-react";

const CoveoAtomicLocalization = (i18n: i18n) => {
  const lang = i18n.language;

  i18n.addResourceBundle(lang, "caption-rotary_showloginmessage", {
    true: "This may require you to login to My Rotary.",
  });

  i18n.addResourceBundle(lang, "caption-rotary_filetype", {
    Presentation: "PPT",
  });

  // i18n.addResourceBundle(lang, "caption-rotary_showloginmessage", {
  //   true: "Cela peut nécessiter que vous vous connectiez à Mon Rotary.",
  // });

  // i18n.addResourceBundle(lang, "caption-rotary_filetype", {
  //   Presentation: "Présentation",
  // });
};

export default CoveoAtomicLocalization;
