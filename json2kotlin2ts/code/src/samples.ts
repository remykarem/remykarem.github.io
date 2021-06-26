import highlight from "./syntax-highlight";
import { translate } from "./translation";
import { Language } from "./types.d";

const SAMPLE_INPUT = {
  user_id: "cf9c9435-ba42-4bb5-b2e1-ea316e9adc25",
  name: "Raimi",
  age: 25,
  weight: 60.5,
  Height: 170,
  vaccinated: true,
  education: {
    tertiary: null,
    secondary: "One-North Sec"
  },
  friends: [
    {
      name: "se",
      age: 21
    },
    {
      name: "se",
      age: 23
    }
  ]
}

let json = JSON.stringify(SAMPLE_INPUT, null, 2);
export const SAMPLE_JSON = highlight(json, Language.JSON);

let kt = translate(Language.Kotlin, Language.JSON, json)!;
export const SAMPLE_KOTLIN = highlight(kt.text, Language.Kotlin);

let ts = translate(Language.TypeScript, Language.Kotlin, kt.text)!;
export const SAMPLE_TS = highlight(ts.text, Language.TypeScript);
