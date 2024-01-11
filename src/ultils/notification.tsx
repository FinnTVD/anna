import { toast } from 'sonner';

interface IProps {
  message: string;
}
const onSuccess = (props: IProps) => {
  toast('Thành công !', {
    duration: 1500,
    // descriptionClassName: ,
    description: props.message,
    position: 'top-right',
    style: {
      color: '#55D5D2',
      fontWeight: '800',
      fontSize: '1.1rem',
    },
    action: {
      label: 'Undo',
      onClick: () => console.log('Undo'),
    },
  });
};

const onError = () => {
  toast('Thất bại!', {
    duration: 1500,
    description: 'Thao tác thất bại, xin vui lòng thử lại',
    position: 'top-right',
    style: {
      color: 'red',
      fontWeight: '800',
      fontSize: '1.1rem',
    },
    action: {
      label: 'Undo',
      onClick: () => console.log('Undo'),
    },
  });
};

const onErrorContact = (props: IProps) => {
  toast('Thất bại!', {
    duration: 1500,
    description: props.message,
    position: 'top-right',
    style: {
      color: 'red',
      fontWeight: '800',
      fontSize: '1.1rem',
    },
    action: {
      label: 'Undo',
      onClick: () => console.log('Undo'),
    },
  });
};

export { onSuccess, onError, onErrorContact };
