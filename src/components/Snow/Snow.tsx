import classNames from 'classnames'
import React, { useMemo } from 'react'
import { SnowProps } from './Snow.types'

function Snow(props: SnowProps) {
  const snowflakes = useMemo(() => {
    const snowflakes: JSX.Element[] = []
    for (let i = 0; i < 50; i++) snowflakes.push(<div key={i} className="snowflake" />)
    return snowflakes
  }, [])

  return (
    <div className={classNames('snow', props.className)}>
      {snowflakes}
    </div>
  )
}

export default Snow
