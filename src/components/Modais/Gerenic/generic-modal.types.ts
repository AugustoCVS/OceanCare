import {RefObject} from 'react';
import {Modalize} from 'react-native-modalize';

export interface GenericModalProps {
  modalizeRef: RefObject<Modalize>;
  title?: string;
  onClose?: () => void;
  children: React.ReactNode;
  handleClose?: () => void;
  HeaderComponent?: React.ReactNode;
}
