import { PropsWithChildren } from 'react';

export default function Emoji(props: PropsWithChildren<{}>) {
  const { ...rest } = props;
  return <span role="img" {...rest} />;
}
