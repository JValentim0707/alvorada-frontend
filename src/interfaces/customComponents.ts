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
  buttonText?: string,
  buttonIcon?: string,
  buttonIconSize?: string,
  buttonProps?: {
    width?: string,
    height?: string,
    color?: string,
    density?: "default" | "comfortable" | "compact"
    "append-icon"?: string
  }
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

export interface IDialog {
  dialogText?: string
  dialogProps?: {
  }
}