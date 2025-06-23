export const getConditionalClassName = (check: unknown, className?: string) =>
  check ? className : '';
