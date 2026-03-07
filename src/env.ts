const esaFaqNumber = +import.meta.env.ESA_FAQ_NUMBER;
const esaMock = !!import.meta.env.ESA_MOCK;
const esaPostCategory: string | undefined = import.meta.env.ESA_POST_CATEGORY;
const esaEndpoint: string | undefined = import.meta.env.ESA_ENDPOINT;
const esaToken: string | undefined = import.meta.env.ESA_TOKEN;

if (
  isNaN(esaFaqNumber) ||
  !Number.isInteger(esaFaqNumber) ||
  esaFaqNumber <= 0
) {
  throw new Error("ESA_FAQ_NUMBER must be an integer");
}

if (!esaMock) {
  if (!esaPostCategory) {
    throw new Error("ESA_POST_CATEGORY is not defined");
  }
  if (!esaEndpoint) {
    throw new Error("ESA_ENDPOINT is not defined");
  }
  if (!esaToken) {
    throw new Error("ESA_TOKEN is not defined");
  }
}

export const esa = {
  faqNumber: esaFaqNumber,
  mock: esaMock,
  endpoint: esaEndpoint ?? "",
  postCategory: esaPostCategory ?? "",
  token: esaToken ?? "",
};
