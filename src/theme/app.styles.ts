import {StyleSheet} from 'react-native';

export const ApplicationStyle = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  rootContainer: {
    flex: 1,
  },
  flex: {flex: 1},
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowCenterAlign: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexRowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexRowSpace: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexColumnSpace: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flexRowSpaceEvenly: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  flexRowSpaceAround: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceAroundItem: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  spaceEvenlyItem: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  spaceBetweenItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spaceRowBetweenItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtInputBorder: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    marginVertical: 10,
  },
  txtInputBorderSmall: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 10,
  },
});

export default ApplicationStyle;
