import React, { Fragment } from "react";
import {
  EBorderType,
  EHeightType,
  EInputType,
  EShadowType,
  ETextFieldType,
  EWithType,
} from "../../../core/domain/enums";
import { ItemSelect } from "../../../core/domain/interfaces";
import SelectField from "./components/SelectField";
import TextField from "./components/TextField";

export interface IInput {
  /**
   * Placeholder Input to show
   */
  placeholder?: string;
  /**
   * Background Color of Input
   */
  backgroundColor?: string;
  /**
   * Text Color of Input
   */
  textColor?: string;
  /**
   * Border Color of Input
   */
  borderColor?: string;
  /**
   * Shadow Type of Input with options
   */
  shadowType?: EShadowType;
  /**
   * Border Type of Input with options
   */
  borderType?: EBorderType;
  /**
   * Width Type of Input with options
   */
  widthType?: EWithType;
  /**
   * Height Type of Input with options
   */
  heigthType?: EHeightType;
  /**
   * Input Type of Input component
   */
  inputType?: EInputType;
  /**
   * Input Type of Input component
   */
  textFieldType?: ETextFieldType;
  /**
   * Icon element to show in Input
   */
  iconDiv?: React.ReactNode;
  /**
   * Indicate if has padding or not in Input
   */
  hasPadding?: boolean;
  /**
   * Items of Select Input
   */
  selectItems?: ItemSelect[];
}

const Input = ({
  inputType,
  placeholder,
  iconDiv,
  borderType,
  shadowType,
  widthType,
  heigthType,
  hasPadding,
  borderColor,
  textFieldType,
  selectItems,
}: IInput) => {
  return (
    <Fragment>
      {inputType == EInputType.TEXTFIELD && (
        <TextField
          textFieldType={textFieldType}
          borderColor={borderColor}
          hasPadding={hasPadding}
          placeholder={placeholder}
          shadowType={shadowType}
          borderType={borderType}
          widthType={widthType}
          heigthType={heigthType}
        >
          {iconDiv}
        </TextField>
      )}

      {inputType == EInputType.SELECT && (
        <SelectField
          borderColor={borderColor}
          hasPadding={hasPadding}
          placeholder={placeholder}
          items={selectItems}
          shadowType={shadowType}
          borderType={borderType}
          widthType={widthType}
          heigthType={heigthType}
        />
      )}
    </Fragment>
  );
};

Input.defaultProps = {
  placeholder: "",
  textFieldType: "text",
  selectItems: [],
};

export default Input;
