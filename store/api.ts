import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SurveyDTO } from "./api.types";

export const surveyApi = createApi({
  reducerPath: "surveyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getSurvey: builder.query<SurveyDTO, void>({
      query: () => "",
    }),
  }),
});

export const { useGetSurveyQuery } = surveyApi;
