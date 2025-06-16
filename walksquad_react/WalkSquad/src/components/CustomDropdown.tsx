import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { styles as CustomDropdownStyle } from '../styles/CustomDropdownStyle';

interface Option {
    label: string;
    value: string;
}

interface CustomDropdownProps {
    options: Option[];
    selectedValue: string;
    onValueChange: (value: string) => void;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
    options,
    selectedValue,
    onValueChange,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const selectedOption = options.find(opt => opt.value === selectedValue);

    return (
        <View style={CustomDropdownStyle.container}>
            <TouchableOpacity
                style={CustomDropdownStyle.button}
                onPress={() => setIsVisible(true)}
            >
                <Text style={CustomDropdownStyle.buttonText}>{selectedOption?.label}</Text>
            </TouchableOpacity>

            <Modal
                visible={isVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsVisible(false)}
            >
                <TouchableOpacity
                    style={CustomDropdownStyle.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setIsVisible(false)}
                >
                    <View style={CustomDropdownStyle.modalContent}>
                        {options.map((option) => (
                            <TouchableOpacity
                                key={option.value}
                                style={[
                                    CustomDropdownStyle.option,
                                    selectedValue === option.value && CustomDropdownStyle.selectedOption
                                ]}
                                onPress={() => {
                                    onValueChange(option.value);
                                    setIsVisible(false);
                                }}
                            >
                                <Text style={CustomDropdownStyle.optionText}>{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};