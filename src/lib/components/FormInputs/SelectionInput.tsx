import colors from '@/assets/Colors';
import Icon from '@/assets/Icons';
import typography from '@/assets/Typography';
import React, {useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
// Checkboxes, radio inputs and dropdowns

interface ChoiceProps {
  options: Array<string>;
  type: 'radio' | 'check-box';
  label: string;
}

export const CheckboxAndRadioInput = ({
  options,
  type,
  ...props
}: ChoiceProps) => {
  const [values, setValues] = useState([] as string[]);

  const handleCheck = (selectedOption: any) => {
    if (type === 'check-box') {
      if (values.includes(selectedOption)) {
        setValues(values.filter(value => value !== selectedOption));
      } else {
        setValues([...values, selectedOption]);
      }
    } else if (type === 'radio') {
      setValues([selectedOption]);
    }
  };

  const iconProps = {
    width: 12,
    height: 12,
    viewBox: '0 0 12 12',
    stroke: colors.green_1,
  };
  return (
    <>
      {options.map((option, index) => (
        <Pressable
          key={index}
          style={styles.option}
          {...props}
          onPress={() => handleCheck(option)}>
          {type === 'check-box' ? (
            <Pressable
              style={styles.checkBox}
              onPress={() => handleCheck(option)}>
              {values.includes(option) && <Icon name="check" {...iconProps} />}
            </Pressable>
          ) : type === 'radio' ? (
            <Pressable style={styles.radio} onPress={() => handleCheck(option)}>
              {values.includes(option) && <View style={styles.inner} />}
            </Pressable>
          ) : null}
          <Text style={styles.optionText}>{option}</Text>
        </Pressable>
      ))}
    </>
  );
};

interface DropdownProps {
  label?: string;
  data: Array<string>;
  onSelect: (item: string) => void;
  placeholder?: string;
  flex?: number;
}

export const Dropdown = ({
  label,
  data,
  onSelect,
  placeholder,
  flex,
}: DropdownProps) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const onItemPress = (item: any): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
    console.log(selected);
  };

  const renderItem = ({item}: any) => (
    <Pressable onPress={() => onItemPress(item)}>
      <Text style={styles.dropdownBtnText}>{item}</Text>
    </Pressable>
  );

  const divider = () => <View style={styles.divider} />;

  const renderDropdown = () => {
    const dropdownHeight = () => {
      if (data.length < 3) {
        return 'auto';
      } else {
        return 200;
      }
    };

    if (visible) {
      return (
        <View
          style={[styles.dropdownOptionsContainer, {height: dropdownHeight()}]}
          // onPress={() => setVisible(false)}
        >
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={divider}
          />
        </View>
      );
    }
  };

  const iconProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 20 20',
    stroke: colors.black_1,
    strokeWidth: 1,
  };
  return (
    <View style={[styles.container, {flex: flex}]}>
      <Text style={styles.label}>{label}</Text>
      <Pressable style={styles.inputField} onPress={toggleDropdown}>
        <Text style={styles.dropdownBtnText}>{selected || placeholder}</Text>
        <Icon name="chevronDown" {...iconProps} />
      </Pressable>
      {renderDropdown()}
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkBox: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.green_1,
    width: 16,
    height: 16,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    ...typography.regular.paragraphMid,
    color: colors.black_6,
  },
  radio: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.green_1,
    width: 16,
    height: 16,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: 12,
    height: 12,
    backgroundColor: colors.green_1,
    borderRadius: 50,
  },
  dropdownBtnText: {
    ...typography.regular.paragraphMid,
    flex: 1,
    color: colors.black_6,
  },
  inputField: {
    borderRadius: 8,
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    zIndex: 1,
    // shadowColor: colors.black_1,
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowRadius: 8,
    // elevation: 8,
    // shadowOpacity: 1,
  },
  dropdownOptionsContainer: {
    position: 'absolute',
    top: 75,
    backgroundColor: colors.white,
    // height: 'auto',
    width: '100%',
    padding: 16,
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: colors.black_1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    zIndex: 1000,
  },
  label: {
    ...typography.regular.paragraphMid,
    color: colors.black_6,
  },
  container: {
    gap: 4,
  },
  divider: {
    backgroundColor: colors.black_10,
    marginVertical: 16,
    height: 1,
  },
});
