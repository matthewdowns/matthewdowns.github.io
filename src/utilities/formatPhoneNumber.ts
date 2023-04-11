function formatPhoneNumber(input: string) {
  const cleaned = input.replace(/\D/g, '')
  const match = cleaned.match(/^(\d|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    const intlCode = (match[1] ? `${match[1]} ` : '')
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
  }

  return input
}

export default formatPhoneNumber
