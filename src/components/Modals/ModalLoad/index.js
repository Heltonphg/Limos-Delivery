import React from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import { colors } from '~/styles';
import { useSelector } from 'react-redux';
export default function ModalLoad() {
  const modalLoading = useSelector((state) => state.app.modalLoading);

  return (
    <Modal
      style={{ alignItems: 'center' }}
      isVisible={modalLoading}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 6,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.secondary,
        }}>
        <BallIndicator size={25} color={colors.whiter} />
      </View>
    </Modal>
  );
}
