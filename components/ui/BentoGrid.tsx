'use client'

import animationData from '@/data/confetti.json'
import { cn } from '@/lib/utils'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { IoCopyOutline } from 'react-icons/io5'
import { BackgroundGradientAnimation } from './BackgroundGradientAnimation'
import { GlobeDemo as GridGlobe } from './GridGlobe'
import MagicButton from './MagicButton'

const Lottie = dynamic(() => import('react-lottie'), { ssr: false })

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8',
        className
      )}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string
  id: number
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('biatotom@gmail.com')
    setCopied(true)
  }

  return (
    <div
      className={cn(
        'group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none',
        className
      )}
      style={{
        background: 'rgb(4, 7, 29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)',
      }}>
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="absolute h-full w-full">
          {img && (
            // <Image
            //   src={img}
            //   alt={img}
            //   className={(cn(imgClassName), 'object-cover', 'object-center')}
            // />
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover', 'object-center')}
            />
          )}
        </div>

        <div
          className={`absolute -bottom-5 right-0 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            'relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10'
          )}>
          <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">
            {description}
          </div>
          <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              <div className="flex flex-col gap-3 lg:gap-8">
                {['React.js', 'Next.js', 'Typescript'].map((item, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100">
                    {item}
                  </span>
                ))}
                <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center" />
                {['VueJS', 'AWS', 'Docker'].map((item, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="relative mt-5">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                />
              </div>

              <MagicButton
                title={copied ? 'Email copied' : ' Copy my Email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
