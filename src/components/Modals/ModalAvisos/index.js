import React from 'react';
import {
  Container,
  ModalBox,
  ModalButton,
  ModalButtonText,
  ModalCloseArea,
  ModalContent,
  ModalHeader,
  ModalIcon,
  ModalTitle,
  ContainerInfo,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '~/store/ducks/app';
import { colors } from '~/styles';

export default function Index() {
  const modalVisible = useSelector((state) => state.app.modalVisible);
  const modalTitle = useSelector((state) => state.app.modalTitle);
  const modalMessage = useSelector((state) => state.app.modalMessage);
  const modalType = useSelector((state) => state.app.modalType);
  const dispatch = useDispatch();

  if (!modalVisible) {
    return <></>;
  }

  function fecharModal() {
    dispatch(AppActions.closeModal());
  }

  function onClickContinuar() {
    fecharModal();
  }

  return (
    <Container>
      <ModalCloseArea onPress={fecharModal} />
      <ModalBox>
        <ModalHeader
          style={{
            backgroundColor:
              modalType === 'warning' ? colors.alertError : colors.alertSucess,
          }}>
          <ModalIcon
            name={modalType === 'warning' ? 'ios-alert' : 'md-checkmark'}
            color={colors.primary}
          />
        </ModalHeader>

        <ContainerInfo>
          <ModalTitle>{modalTitle}</ModalTitle>
          <ModalContent>{modalMessage}</ModalContent>
        </ContainerInfo>
        <ModalButton
          style={{
            backgroundColor:
              modalType === 'warning' ? colors.alertError : colors.alertSucess,
          }}
          onPress={onClickContinuar}>
          <ModalButtonText>Continuar</ModalButtonText>
        </ModalButton>
      </ModalBox>
    </Container>
  );
}
