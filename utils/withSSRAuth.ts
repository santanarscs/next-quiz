 
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { getProviders, getSession } from "next-auth/client"

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const { req } = ctx
    const session = await getSession({ req })
    console.log(session)
    if(!session?.user)  {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }
    return await fn(ctx)
  }
}