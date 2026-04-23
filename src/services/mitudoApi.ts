import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Article, NewsletterSubscriber, ContactMessage } from "@/types";

export const genesisApi = createApi({
	reducerPath: "genesisApi",
	baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
	tagTypes: ["Article", "Newsletter"],
	endpoints: (builder) => ({
		// Articles
		getArticlesPreview: builder.query<Article[], void>({
			query: () => "/articles?published=true&limit=3&sort=-created_date",
			providesTags: ["Article"],
		}),

		getAllArticles: builder.query<Article[], void>({
			query: () => "/articles?published=true&sort=-created_date",
			providesTags: ["Article"],
		}),

		getArticleById: builder.query<Article, string>({
			query: (id) => `/articles/${id}`,
			providesTags: (_result, _error, id) => [{ type: "Article", id }],
		}),

		// Newsletter
		subscribeNewsletter: builder.mutation<
			{ message: string },
			NewsletterSubscriber
		>({
			query: (body) => ({
				url: "/newsletter",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Newsletter"],
		}),

		// Contact
		submitContact: builder.mutation<{ message: string }, ContactMessage>({
			query: (body) => ({
				url: "/contact",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const {
	useGetArticlesPreviewQuery,
	useGetAllArticlesQuery,
	useGetArticleByIdQuery,
	useSubscribeNewsletterMutation,
	useSubmitContactMutation,
} = genesisApi;
