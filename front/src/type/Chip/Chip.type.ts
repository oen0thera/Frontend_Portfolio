export type ChipProps = {
  name: string;
  color: string;
  isDark?: boolean;
  variant?: ChipVariantEnum;
};

export enum ChipVariantEnum {
  LARGE = "lg",
  SMALL = "sm",
}
