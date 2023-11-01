import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function TawkTo() {
  const tawkMessengerRef = useRef<any>();

  return (
    <TawkMessengerReact
      ref={tawkMessengerRef}
      propertyId="6540a594a84dd54dc48701c9"
      widgetId="1he28dja8"
    />
  );
}
