export enum switchViewTypesEnum {
  list = 'list',
  grid = 'grid',
}

export type ComponentSwitchViewTypes =
  | switchViewTypesEnum.list
  | switchViewTypesEnum.grid

export enum cardOrientationsEnum {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export type ComponentCardOrientationsTypes =
  | cardOrientationsEnum.horizontal
  | cardOrientationsEnum.vertical
