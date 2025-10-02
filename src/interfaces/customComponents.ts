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
  buttonProps?: {
    width?: string,
    height?: string,
    color?: string,
    "append-icon"?: string
  }
}

export interface ICardProps {
  cardText?: string,
  iconPath?: string,
  iconSize?: string,
  cardProps?: {
    width?: string,
    height?: string,
  }
}