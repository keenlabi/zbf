export interface DropDownProps {
  label?: string;
  options: DropDownOption[];
  value?: {
    id: string;
    label: string;
    value?: string;
  };
  placeholder?:string;
  error: string;
  selected: boolean;
  selectedOptionIndex: number;
  onSelect?: (selectedIndex: number) => void;
  relative?: boolean;
  extraStyle?: string;
  deactivated?: boolean;
}

export interface DropDownOption {
  id:string;
  label:string;
  value:string;
  options?:DropDownOption[]
}

export interface DropDownFormData extends DropDownProps {
  name: string;
}

export interface setDropDownFormData
  extends React.Dispatch<React.SetStateAction<DropDownFormData>> {}
