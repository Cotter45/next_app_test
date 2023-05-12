import Image from 'next/image'

import PageContainer from "@/components/containers/Page";
import GithubLink from "@/components/links/Github";
import LinkedInLink from "@/components/links/LinkedIn";

export default function Home() {
  return (
    <PageContainer classes="!justify-start md:!items-start md:!justify">
      <div className="relative w-[90%] flex flex-col justify-evenly items-center md:items-start md:pl-10 z-10 pt-[20vh]">
        <h1 className="text-4xl md:text-5xl font-bold">Sean Cotter</h1>
        <p className="font-medium md:text-2xl">Full Stack Developer</p>
        <div className="flex items-center justify-center space-x-4 mt-4 mx:text=xl">
          <GithubLink />
          <LinkedInLink />
        </div>
        <p className="mt-4 text-center text-sm md:w-[80%] lg:w-[50%] md:text-left md:text-base">
          I am a full stack software developer with a passion for building
          beautiful and functional web applications. I am currently working as a
          software engineer at Nestle Nespresso SA.
        </p>
      </div>

      <div className="w-full md:w-[750px] md overflow-hidden fixed bottom-0 right-0 flex items-end justify-end z-0">
        <Image
          className='w-full md:w-[750px]'
          src="/splash.png"
          alt="splash"
          width={500}
          height={500}
          priority={true}
        />
      </div>
    </PageContainer>
  );
}
