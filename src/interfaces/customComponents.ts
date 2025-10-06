export interface INavBarProps {
  iconPath?: string
  iconWidth?: number,
  iconHeight?: number,
  navBarProps?: {
    height?: string,
    color?: string,
  }
}

export interface IButtonProps {
  width?: string,
  height?: string,
  color?: string,
  loading?: boolean,
  density?: "default" | "comfortable" | "compact"
  "append-icon"?: string
}

export interface ICardProps {
  width?: string,
  height?: string,
  color?: string,
  variant?: "outlined" | "flat" | "text" | "elevated" | "plain" | "tonal"; 
}

export interface ITabItem {
  title: string,
  value: number
}
export interface ITabsProps {
  'align-tabs'?: string,
  height?: string
}

export interface ITextFieldProps {
  label: string,
  density?: 'default' | 'comfortable' | 'compact',
  variant?: 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled',
  'append-inner-icon'?: string,
}

export interface ILoaderProps {
  indeterminate: boolean,
  size: string
}

export interface IDialog {
  // When need we can add props here
}