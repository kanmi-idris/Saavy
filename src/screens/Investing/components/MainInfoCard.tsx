/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '@/assets/Colors';
import typography from '@/assets/Typography';
import Icon from '@/assets/Icons';

interface Props {
  type: string;
  heading: string;
  subheading: string;
  value1: string;
  label1: string;
  value2: string;
  label2: string;
  value3?: string;
  label3?: string;
  value4?: string;
  label4?: string;
  status?: 'gain' | 'loss';
  marketStatus?: string;
  image: string;
}

const MainInfoCard = ({
  type,
  heading,
  subheading,
  value1,
  label1,
  value2,
  label2,
  value3,
  label3,
  value4,
  label4,
  status,
  image,
  marketStatus,
}: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'stretch',
          alignItems: 'center',
          gap: 12,
          width: '100%',
        }}>
        <View style={styles.img}>
          <Image
            source={{uri: image}}
            style={{width: 24, height: 24, borderRadius: 24}}
          />
        </View>
        <View style={{gap: 4, flex: 1}}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.subheading}>{subheading}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flex: 2}}>
          <Text style={styles.infoOneMain}>{value1}</Text>
          <Text style={styles.infoSub}>{label1}</Text>
        </View>
        <View style={{flex: 2}}>
          {type === 'savings-lock' ? null : type === 'real-estate' ? (
            <Text style={[styles.infoOneMain, {textAlign: 'right'}]}>
              {value2}
            </Text>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-end',
              }}>
              {/* <Icon
                name={status === 'gain' ? 'arrowUp' : 'arrowDown'}
                {...{
                  strokeWidth: 1.2,
                  stroke: status === 'gain' ? colors.green_1 : colors.red_1,
                  viewBox: '0 0 12 12',
                  width: 12,
                  height: 12,
                }}
              /> */}
              <Text
                style={[
                  styles.infoOneMain,
                  {
                    textAlign: 'right',
                    color: status === 'gain' ? colors.green_1 : colors.red_1,
                  },
                ]}>
                {value2}
              </Text>
            </View>
          )}
          <Text style={[styles.infoSub, {textAlign: 'right'}]}>{label2}</Text>
        </View>
      </View>
      {label3 && (
        <>
          <View style={styles.divider} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flex: 2}}>
              {value3 && <Text style={styles.infoOneMain}>{value3}</Text>}
              <Text style={styles.infoSub}>{label3}</Text>
            </View>
            <View style={{flex: 2}}>
              {type === 'savings-lock' ? null : type === 'real-estate' ? (
                <Text style={[styles.infoOneMain, {textAlign: 'right'}]}>
                  {value4}
                </Text>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'flex-end',
                    gap: 2,
                  }}>
                  <Icon
                    name={marketStatus === 'open' ? 'lock_open' : 'lock_closed'}
                    {...{
                      strokeWidth: 1.2,
                      stroke:
                        marketStatus === 'open' ? colors.green_1 : colors.red_1,
                      viewBox: '0 0 12 12',
                      width: 12,
                      height: 12,
                    }}
                  />
                  <Text
                    style={[
                      styles.infoOneMain,
                      {
                        textAlign: 'right',
                        color:
                          marketStatus === 'open'
                            ? colors.green_1
                            : colors.red_1,
                        textTransform: marketStatus ? 'capitalize' : undefined,
                      },
                    ]}>
                    {marketStatus ? marketStatus : value4}
                  </Text>
                </View>
              )}
              {label4 && (
                <Text style={[styles.infoSub, {textAlign: 'right'}]}>
                  {label4}
                </Text>
              )}
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default MainInfoCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: colors.white,
    padding: 16,
    alignItems: 'flex-start',
    gap: 12,
    width: '100%',
  },
  heading: {
    ...typography.medium.paragraphMid,
    color: colors.black_1,
  },
  subheading: {
    ...typography.regular.paragraphSmall,
    color: colors.black_6,
  },
  img: {
    width: 32,
    height: 32,
    backgroundColor: colors.green_9,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: colors.black_10,
  },
  infoOneMain: {
    color: colors.black_1,
    ...typography.medium.paragraphMid,
  },
  infoSub: {
    color: colors.black_6,
    ...typography.regular.paragraphSmall,
    textTransform: 'capitalize',
  },
});
