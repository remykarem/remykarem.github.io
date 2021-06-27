const SAMPLE_INPUT = {
  user_id: "cf9c9435-ba42-4bb5-b2e1-ea316e9adc25",
  name: "ali",
  age: 25,
  weight: 60.5,
  Height: 170,
  education: {
    tertiary: "Singapore University",
    secondary: "Singapore Sec Sch"
  },
  friends: [
    {
      name: "mei ling",
      age: 21
    },
    {
      name: "raju",
      age: 23
    }
  ],
  vaccinated: true
}

export const SAMPLE_JSON = JSON.stringify(SAMPLE_INPUT, null, 2);
