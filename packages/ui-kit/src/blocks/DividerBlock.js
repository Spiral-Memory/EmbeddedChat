import React, { memo } from 'react';
import { Divider } from 'ec-test-ui-elements';

const DividerBlock = ({ className }) => <Divider className={className} />;

export default memo(DividerBlock);
