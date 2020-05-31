import React from 'react';
import Modal from 'react-native-modal';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import Material_Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { colors, fonts } from '~/styles';
import { AppActions } from '~/store/ducks/app';

export default function ModalInfos() {
  const dispatch = useDispatch();
  const modalInfosVisible = useSelector((state) => state.app.modalInfosVisible);
  const modalInfoTitle = useSelector((state) => state.app.modalInfoTitle);
  const form_payment = useSelector((state) => state.app.form_payment);
  const horarios = useSelector((state) => state.app.horarios);
  const fretes = useSelector((state) => state.app.fretes);

  return (
    <Modal backdropColor="#222" isVisible={modalInfosVisible}>
      <View style={styles.conainerModal}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{modalInfoTitle}</Text>
        </View>
        <View style={styles.body}>
          {form_payment && (
            <FlatList
              data={form_payment}
              keyExtractor={(form) => String(form)}
              renderItem={({ item: payment }) => (
                <View style={styles.formpayment}>
                  <Icon
                    name={payment === 'Dinheiro' ? 'ios-cash' : 'ios-card'}
                    size={26}
                    color={colors.secondary}
                  />
                  <Text style={styles.textformpayment}>{payment}</Text>
                </View>
              )}
            />
          )}
        </View>
        <TouchableOpacity
          style={styles.close}
          onPress={() => dispatch(AppActions.closeModalInfo())}>
          <Material_Icon name="close" size={34} color="#202646" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  conainerModal: {
    width: '100%',
    height: '40%',
    borderRadius: 6,
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  body: {
    width: '100%',
    height: '80%',
  },
  close: {
    position: 'absolute',
    right: 15,
    top: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSelect: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.white,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary,
    color: colors.secondary,
  },
  titleContainer: {
    width: '80%',
    justifyContent: 'center',

    height: 40,
  },
  formpayment: {
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textformpayment: {
    fontSize: 16,
    fontFamily: fonts.secondary,
    marginLeft: 5,
  },
});
