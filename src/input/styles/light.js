import create from '../../_styles/utils/create-component-base'
import commonVariables from './_common'
import { changeColor } from '../../_utils/color/index'
import suffixStyle from '../../_base/suffix/styles/light'

export default create({
  name: 'Input',
  theme: 'light',
  peer: [ suffixStyle ],
  getDerivedVariables ({ base, derived }) {
    const {
      textColorSecondary,
      textColorQuaternary,
      textColorQuinary,
      primaryColor,
      primaryColorHover,
      inputColor,
      inputColorDisabled,
      borderColor,
      warningColor,
      warningColorHover,
      errorColor,
      errorColorHover,
      opacityQuaternary,
      opacityQuinary,
      textColorBase
    } = derived
    const {
      borderRadius
    } = base
    return {
      ...commonVariables,
      borderRadius,
      iconSize: '16px',
      textColor: textColorSecondary,
      textColorDisabled: textColorQuaternary,
      caretColor: primaryColor,
      placeholderColor: textColorQuaternary,
      placeholderColorDisabled: textColorQuinary,
      backgroundColor: inputColor,
      colorDisabled: inputColorDisabled,
      colorFocus: inputColor,
      iconColor: textColorBase,
      iconOpacity: opacityQuaternary,
      iconColorDisabled: textColorBase,
      iconOpacityDisabled: opacityQuinary,
      borderMaskColor: 'transparent',
      borderMaskColorHover: primaryColorHover,
      borderMaskColorDisabled: 'transparent !important',
      borderMaskColorFocus: primaryColorHover,
      borderMaskBoxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, { alpha: 0.2 })}`,
      boxShadow: `inset 0 0 0 1px ${borderColor}`,
      boxShadowDisabled: `inset 0 0 0 1px ${borderColor}`,
      // warning
      borderMaskColorWarning: warningColor,
      borderMaskColorWarningHover: warningColorHover,
      colorWarningFocus: inputColor,
      borderMaskColorWarningFocus: warningColorHover,
      borderMaskBoxShadowWarningFocus: `0 0 0 2px ${changeColor(warningColor, { alpha: 0.2 })}`,
      caretColorWarning: warningColor,
      // error
      borderMaskColorError: errorColor,
      borderMaskColorErrorHover: errorColorHover,
      colorErrorFocus: inputColor,
      borderMaskColorErrorFocus: errorColorHover,
      borderMaskBoxShadowErrorFocus: `0 0 0 2px ${changeColor(errorColor, { alpha: 0.2 })}`,
      caretColorError: errorColor
    }
  }
})
