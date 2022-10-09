import React, { useCallback, useRef, useState } from 'react';

type MainButton = {
  text: 'menu' | 'close',
  type: 'menu' | 'popup'
  onClick?(): void;
}

type MiscContextType = {
  misc: {
    overflow: boolean;
    setOverflow: React.Dispatch<boolean>;
    main: React.RefObject<HTMLElement>;
    btn: React.MutableRefObject<MainButton>;
  }
}

type RemoteControlContextType = MiscContextType & {
  open: boolean;
  setOpen(bool: boolean): void;
  toggle(fun?: () => void): void;
}

type RemoteControlProps = {
  children: JSX.Element | JSX.Element[];
}

const RemoteControlContext = React.createContext({} as RemoteControlContextType);

const RemoteControlProvider: React.FC<RemoteControlProps> = ({children}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [overflow, setOverflow] = useState<boolean>(true);
  const main = useRef<HTMLElement>(null)
  const btn = useRef<MainButton>({
    type: 'menu',
    text: 'menu',
    onClick: () => setOpen((value) => !value)
  });

  const toggle = useCallback((onClick?: MainButton['onClick']) => {
    if (onClick) {
      btn.current = {
        type: 'popup',
        text: 'close',
        onClick
      }
      return;
    }
    btn.current = {
      type: 'menu',
      text: 'menu',
      onClick: () => setOpen((v) => !v)
    }
  }, []);

  return <RemoteControlContext.Provider value={{
    open, setOpen, toggle,
    misc: {
      overflow,
      setOverflow,
      main,
      btn
    }
  }}>
    {children}
  </RemoteControlContext.Provider>
}

export const useRemoteControl = () => React.useContext(RemoteControlContext);
export default RemoteControlProvider;