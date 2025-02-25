export function formatPhoneNumber(phoneNumber: string) {
  const countryCode = phoneNumber.slice(0, 2);
  const areaCode = phoneNumber.slice(2, 4);
  const prefix = phoneNumber.slice(4, 9);
  const lineNumber = phoneNumber.slice(9);

  return `+${countryCode} (${areaCode}) ${prefix}-${lineNumber}`;
}
