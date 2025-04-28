import { http, HttpResponse } from "msw";
import { ApiResponse, Result } from "../types";
import apiResponse from "./data";

export const handlers = [
  http.get("https://clap-server.company/api", ({ request }) => {
    const url = new URL(request.url);
    const resultsParam = url.searchParams.get("results");
    const genderParam = url.searchParams.get("gender");

    let filteredResults: Result[] = apiResponse.results;

    if (genderParam === "male" || genderParam === "female") {
      filteredResults = filteredResults.filter(
        (user) => user.gender === genderParam
      );
    }

    filteredResults = filteredResults.sort(() => Math.random() - 0.5);

    const resultsCount = resultsParam ? parseInt(resultsParam, 10) : 1;
    filteredResults = filteredResults.slice(0, resultsCount);

    const response: ApiResponse = {
      results: filteredResults,
      info: {
        seed: apiResponse.info.seed,
        results: filteredResults.length,
        page: 1,
        version: apiResponse.info.version,
      },
    };

    return HttpResponse.json(response);
  }),
];
