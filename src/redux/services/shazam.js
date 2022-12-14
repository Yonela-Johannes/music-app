import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '34ae51b724mshdb30bf885ce3511p1e8f90jsn61649cfcf55f');
            return headers
        },
    }),
    endpoints: (builder) => ({
        getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}`}),
        getTopCharts: builder.query({ query: () => '/charts/world'}),
        getSongsByCountry: builder.query({ query: () => `/charts/country?country_code=ZA`}),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
        getSongsSearch: builder.query({ query: (text) => `/search/multi?search_type=SONGS_ARTISTS&query=${text}`}),
        getSongDetails: builder.query({ query: ({songid}) => `/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({ query: ({songid}) => `/tracks/related?track_id=${songid}`}),
    })
})

export const {
    useGetArtistDetailsQuery,
    useGetTopChartsQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsSearchQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;