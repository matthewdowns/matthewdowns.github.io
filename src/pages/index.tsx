import {
  animated,
  useSpring
} from '@react-spring/web'
import BusinessCard from '@/components/BusinessCard'
import Snow from '@/components/Snow'
import useWindowSize from '@/hooks/useWindowSize'

function Home() {
  const windowSize = useWindowSize()

  const fadeIn = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
    config: {
      duration: 400
    }
  }))[0]

  let scale = 1
  if (windowSize.width !== undefined) {
    if (windowSize.width < 256) scale = 0.675
    else if (windowSize.width < 320) scale = 0.75
    else if (windowSize.width < 384) scale = 0.875
    else if (windowSize.width < 768) scale = 1
    else if (windowSize.width < 1024) scale = 1.125
    else if (windowSize.width < 1280) scale = 1.25
    else if (windowSize.width < 1536) scale = 1.375
    else scale = 1.5
  }

  return (
    <div className="home-background flex flex-col items-center justify-center">
      <Snow className="opacity-20" />
      <animated.div style={fadeIn}>
        <BusinessCard
          className="flex flex-col flex-grow mx-auto bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white border border-white dark:border-slate-600 rounded-2xl shadow-xl hover:shadow-2xl p-5"
          minHeight={200}
          minWidth={360}
          maxHeight={200}
          maxWidth={360}
          scale={scale}
          logo={{
            alt: 'Matthew Downs Logo',
            className: 'rounded-lg',
            src: '/assets/img/md.png',
            height: 48,
            width: 48
          }}
          picture={{
            alt: 'Matthew Downs',
            className: 'rounded-full',
            src: '/assets/img/headshot.png',
            height: 80,
            width: 80
          }}
          name="Matthew Downs"
          title="Software Engineer"
          email="contact@matthewdowns.com"
          defaultShowEmail={true}
        />
      </animated.div>
    </div>
  )
}

export default Home
