import defaultRenderEmpty from './renderEmpty';

export const ConfigConsumerProps = {
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return `tinet-${suffixCls}`;
  },
  renderEmpty: defaultRenderEmpty,
};
