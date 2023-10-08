interface TabOneContainerState {
  clickCounter: number;
}
interface TabOneViewProps extends TabOneContainerState {
  handleRefresh: () => void;
  handleIncrement: () => void;
  handleDecrement: () => void;
}
interface CustomButtonProps {
  icon: string;
  onPress: () => void;
  disabled?: boolean;
}
