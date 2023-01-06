import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-QVYwyAVjaUdO5Bllo2jzlWTg",
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const OpenAiService = {
  getEngines: () => {
    return openai.listEngines();
  },
  getSynonym: (search, searchType) => {
    return openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Give me several ${searchType}s for ${search} in a numbered list`
    });
  }
};

export default OpenAiService;