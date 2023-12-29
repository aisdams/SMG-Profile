import { useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function TawkTo() {
  const tawkMessengerRef = useRef<any>();

  return (
    <TawkMessengerReact
      ref={tawkMessengerRef}
      propertyId=""
      widgetId="1he28dja8"
    />
  );
}
