export function accountInterpolation(account: string) {
  return `${account.slice(0, 5)}...${account.slice(-3)}`;
}
