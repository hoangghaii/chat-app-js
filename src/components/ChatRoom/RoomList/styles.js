import { Collapse, Typography } from 'antd';
import styled from 'styled-components';

const { Panel } = Collapse;
const { Link } = Typography;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

export { PanelStyled, LinkStyled };
