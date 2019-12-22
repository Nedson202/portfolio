export interface IThemeProps {
  [key: string]: string;
}

export interface IContactFormValues {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

export interface IEvent {
  target: {
    name: string;
    value: any;
  };
  preventDefault: () => void;
}
