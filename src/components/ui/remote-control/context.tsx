import React, {useCallback, useState} from 'react';

type RemoteControlContextType = {
  open: boolean;
  setOpen(bool: boolean): void;
  toggle(): void;
}

const RemoteControlContext = React.createContext({} as RemoteControlContextType);

const RemoteControlProvider: React.FC = ({children}) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setOpen(!open)
  }, [open])

  return <RemoteControlContext.Provider value={{open, setOpen, toggle}}>
    {children}
  </RemoteControlContext.Provider>
}

export const useRemoteControl = () => React.useContext(RemoteControlContext);
export default RemoteControlProvider;