import {
  EnvelopeIcon,
  GlobeAltIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import React, { useState } from 'react'
import formatPhoneNumber from '@/utilities/formatPhoneNumber'
import { BusinessCardProps } from './BusinessCard.types'
import Link from 'next/link'

function BusinessCard(props: BusinessCardProps) {
  const {
    className,
    minHeight,
    minWidth,
    maxHeight,
    maxWidth,
    scale,
    logo,
    picture,
    name,
    title,
    email,
    phone,
    defaultShowEmail,
    defaultShowPhone
  } = props

  const [flipped, setFlipped] = useState<boolean>(false)
  const [showEmail, setShowEmail] = useState<boolean>(defaultShowEmail || false)
  const [showPhone, setShowPhone] = useState<boolean>(defaultShowPhone || false)

  const style = {
    minHeight,
    minWidth,
    maxHeight,
    maxWidth
  }

  return (
    <div
      className="business-card"
      style={style}
      data-flipped={flipped ? 'true' : 'false'}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="business-card-front">
        <div className={className} style={{ height: '100%', transform: scale != null ? `scale(${scale})` : undefined }}>
          <div className="flex flex-col flex-grow flex-wrap items-center justify-center gap-4">
            {picture != null && (
              <div>
                <Image
                  {...picture}
                  alt={picture.alt || 'Business card picture'}
                />
              </div>
            )}
            <div className="text-center">
              <h1 className="text-2xl">{name}</h1>
              <h3 className="text-lg">{title}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="business-card-back">
        <div className={className} style={{ height: '100%', transform: scale != null ? `scale(${scale})` : undefined }}>
          <div className="flex flex-grow flex-wrap items-start gap-4">
            {logo != null && (
              <div>
                <Image
                  {...logo}
                  alt={logo.alt || 'Business card logo'}
                />
              </div>
            )}
            <div className="flex-grow">
              <h3 className="text-lg">{name}</h3>
              <h5 className="text-sm">{title}</h5>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            {email != null && (
              <div className="flex items-center gap-2">
                <EnvelopeIcon width="0.875rem" height="0.875rem" />
                <a
                  className={`text-xs${showEmail === false ? ' opacity-50' : ' text-blue-500 hover:text-blue-400'}`}
                  href={showEmail ? `mailto:${email}` : undefined}
                  rel="noopener"
                  target="_blank"
                  onClick={e => {
                    e.stopPropagation()
                    if (showEmail === false) {
                      e.preventDefault()
                      setShowEmail(true)
                    }
                  }}
                >
                  {showEmail ? email : 'Click to show'}
                </a>
              </div>
            )}
            {phone != null && (
              <div className="flex items-center gap-2">
                <PhoneIcon width="0.875rem" height="0.875rem" />
                <a
                  className={`text-xs${showPhone === false ? ' opacity-50' : ' text-blue-500 hover:text-blue-400'}`}
                  href={showPhone ? `tel:${phone}` : undefined}
                  onClick={e => {
                    e.stopPropagation()
                    if (showPhone === false) {
                      e.preventDefault()
                      setShowPhone(true)
                    }
                  }}
                >
                  {showPhone ? formatPhoneNumber(phone) : 'Click to show'}
                </a>
              </div>
            )}
            <div className="flex items-center gap-2">
              <GlobeAltIcon width="0.875rem" height="0.875rem" />
              <Link
                className="text-xs text-blue-500 hover:text-blue-400"
                href="https://matthewdowns.com"
                target="_blank"
                onClick={e => {
                  e.stopPropagation()
                }}
              >
                www.matthewdowns.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessCard
