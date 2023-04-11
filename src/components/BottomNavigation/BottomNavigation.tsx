import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BottomNavigation() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 justify-between">
          <div className="lg:col-span-2">
            <div className="flex gap-4 items-center content-start justify-start">
              <div>
                <Image
                  alt="Matthew Downs"
                  className="inline-block rounded-full border border-slate-200"
                  src="/assets/img/md.png"
                  height={48}
                  width={48}
                />
              </div>
              <div>
                <h3 className="text-md text-slate-700 dark:text-slate-200">Matthew Downs</h3>
                <p className="text-sm text-slate-500 dark:text-slate-300">🄯 {new Date().getUTCFullYear()}</p>
              </div>
            </div>
            <p className="max-w-xs mt-4 text-gray-500 dark:text-gray-300">
              Portfolio website built using Next.js with TypeScript and React.
            </p>

            <ul className="flex items-center gap-4 mt-8">
              <li>
                <a
                  href="https://linkedin.com/in/matthew-downs/"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>

                  <svg
                    className="mr-1 dark:fill-slate-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <Link
                  href="https://github.com/matthewdowns/"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <svg
                    className="w-6 h-6 dark:fill-slate-100"
                    fill="currentColor"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="https://app.usebraintrust.com/talent/278586/"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Braintrust</span>

                  <svg
                    className="w-6 h-6 dark:fill-slate-100"
                    width="24"
                    height="24"
                    viewBox="0 0 16 17"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.46 9.996c.521-.306.9-.81 1.057-1.4a2.34 2.34 0 0 0-.226-1.748 2.276 2.276 0 0 0-1.378-1.073 2.262 2.262 0 0 0-2.388.822c-.181.24-.314.514-.39.807a2.325 2.325 0 0 0 .226 1.749c.302.528.798.914 1.379 1.072.58.158 1.2.076 1.72-.23ZM6.647 5.043c1.605-.941 3.665-.38 4.591 1.25.445.785.565 1.716.334 2.59a3.41 3.41 0 0 1-1.564 2.074 3.316 3.316 0 0 1-2.55.34 3.371 3.371 0 0 1-2.042-1.59 3.427 3.427 0 0 1-.335-2.59c.113-.434.31-.841.578-1.197.27-.356.605-.654.988-.877ZM4.43 10.285a3.459 3.459 0 0 1-.648 4.23 7.822 7.822 0 0 1-.86-.716c.428-.343.72-.83.823-1.373a2.338 2.338 0 0 0-.261-1.586 2.28 2.28 0 0 0-.583-.677 2.239 2.239 0 0 0-2.221-.31A8.063 8.063 0 0 1 .5 8.74a3.318 3.318 0 0 1 3.066.542c.35.273.644.614.864 1.004Zm7.457-7.161c.166-.631.507-1.2.984-1.64.302.218.59.457.859.716a2.324 2.324 0 0 0 .022 3.637 2.238 2.238 0 0 0 2.22.309c.087.368.147.738.18 1.11a3.276 3.276 0 0 1-1.013.167c-.295 0-.59-.04-.875-.118a3.318 3.318 0 0 1-1.177-.587 3.378 3.378 0 0 1-.864-1.003 3.425 3.425 0 0 1-.336-2.591Zm-3.56 9.446c1.606 0 2.95 1.152 3.281 2.684-.34.16-.688.292-1.04.398a2.318 2.318 0 0 0-.76-1.41 2.249 2.249 0 0 0-1.482-.562c-.544 0-1.07.2-1.48.562a2.317 2.317 0 0 0-.762 1.408 7.802 7.802 0 0 1-1.04-.396c.331-1.533 1.676-2.684 3.282-2.684Zm0-9.14C6.72 3.43 5.374 2.277 5.043.746c.34-.16.689-.292 1.04-.398.079.547.349 1.047.76 1.41.412.361.938.56 1.482.561 1.14 0 2.083-.857 2.242-1.97.356.107.703.24 1.04.397-.33 1.532-1.675 2.683-3.282 2.683Zm5.937 5.265a3.284 3.284 0 0 1 1.887.045 8.188 8.188 0 0 1-.18 1.113 2.239 2.239 0 0 0-2.218.31 2.315 2.315 0 0 0-.81 2.426c.125.48.401.904.786 1.21a7.8 7.8 0 0 1-.86.715 3.397 3.397 0 0 1-.982-1.638 3.44 3.44 0 0 1 .335-2.59 3.348 3.348 0 0 1 2.042-1.592ZM2.39 7.305c-.286.078-.58.118-.876.118a3.272 3.272 0 0 1-1.011-.167c.034-.374.095-.744.18-1.109a2.238 2.238 0 0 0 2.218-.31 2.313 2.313 0 0 0 .81-2.425A2.287 2.287 0 0 0 2.923 2.2c.27-.259.557-.498.86-.716.476.439.817 1.008.982 1.639a3.445 3.445 0 0 1-1.2 3.594c-.35.273-.75.473-1.176.587Z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:col-span-1 lg:grid-cols-1">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-300">Legal</p>
              <nav aria-label="Footer Navigation - Legal" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link href="/privacy" className="text-gray-700 transition hover:opacity-75 dark:text-gray-100">
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <Link href="/terms" className="text-gray-700 transition hover:opacity-75 dark:text-gray-100">
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <p className="text-xs pb-10 sm:pb-0">
          <span className="text-gray-500 dark:text-gray-400">Distribution allowed under the</span>
          <a className="mx-1 text-blue-500 hover:text-blue-400" href="https://github.com/matthewdowns/portfolio/tree/main/LICENSE" target="_blank">MIT</a>
          <span className="text-gray-500 dark:text-gray-400">license.</span>
        </p>
      </div>
    </div>
  )
}

export default BottomNavigation
