import React, { useCallback, useRef, useState } from 'react';

type MiscContextType = {
  misc: {
    overflow: boolean;
    setOverflow: React.Dispatch<boolean>;
    main: React.RefObject<HTMLElement>;
  }
}

type RemoteControlContextType = MiscContextType & {
  open: boolean;
  setOpen(bool: boolean): void;
  toggle(): void;
}

type RemoteControlProps = {
  children: JSX.Element | JSX.Element[];
}

const RemoteControlContext = React.createContext({} as RemoteControlContextType);

const RemoteControlProvider: React.FC<RemoteControlProps> = ({children}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [overflow, setOverflow] = useState<boolean>(true);
  const main = useRef<HTMLElement>(null)

  const toggle = useCallback(() => {
    setOpen(!open)
  }, [open])

  return <RemoteControlContext.Provider value={{
    open, setOpen, toggle,
    misc: {
      overflow,
      setOverflow,
      main
    }
  }}>
    {children}
  </RemoteControlContext.Provider>
}

export const useRemoteControl = () => React.useContext(RemoteControlContext);
export default RemoteControlProvider;