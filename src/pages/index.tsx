import { NextPage, GetServerSideProps } from 'next'
import React from 'react'
import { useQuery, QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import tw, { styled, theme } from 'twin.macro'
import { Navigation, PageWrapper, Typography } from 'components'
import parseCookies from 'utilities/parse-cookies.server'

type Joke = {
  categories: string[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

const getRandomJoke = (): Promise<Joke> =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/random`).then((response) => response.json())

const TestH1 = tw.h1`text-8xl tracking-tighter font-thin normal-case text-primary font-display`

const LandingPage: NextPage<{ data: any }> = ({ data }) => {
  const { data: joke } = useQuery('joke', getRandomJoke)

  return (
    <PageWrapper
      topComponent={<div tw="bg-secondary h-20">top bar</div>}
      bottomComponent={<div tw="bg-secondary h-20">bottom bar</div>}>
      <div tw="h-96 bg-primary">
        <TestH1 tw="h-20 bg-blue-500">test text</TestH1>
        <Typography variant="h4">Home</Typography>
        <Typography variant="body1">Random Chuck Norris joke</Typography>
        {joke?.value && <Typography variant="body1">{joke.value}</Typography>}
        <Navigation />
      </div>
      <div tw="h-96 bg-primary" />
    </PageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const queryClient = new QueryClient()
  const data = parseCookies(req)

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: '/login' })
      res.end()
    }
  }

  await queryClient.prefetchQuery('joke', getRandomJoke)

  return {
    props: {
      data: data && data,
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default LandingPage
