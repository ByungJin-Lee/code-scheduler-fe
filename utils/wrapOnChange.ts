export default function wrapOnChange(hlr: (value: any) => void) {
  return (e: any) => {
    hlr(e.target.value);
  };
}
